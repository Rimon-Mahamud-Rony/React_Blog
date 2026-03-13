import './App.css';
import Header from './header';
import AddItem from './AddItem';
import SearchItem from './searchItem';
import Content from './content';
import Footer from './footer';
import { useEffect, useState } from 'react';
import apiRequest from './apiRequest';

function App() {
  const API_URL = "http://localhost:3500/items";

  const [Items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const fetchMyItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not recieved expected data');
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        //console.log(err.stack);
        console.log(err.message);
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => {
      // (async ()=> await fethMyItems()) ();
      fetchMyItems();
    }, 500)

  }, [])

  // const setAndSaveItems = (newItems) => {
  //   setItems(newItems);
  //   localStorage.setItem('shoppinglist', JSON.stringify(newItems));
  // }

  const addItem = async (item) => {
    const id = Items.length ? parseInt(Items[Items.length - 1].id) + 1 : 1;
    const itemName = item;
    const myNewItem = { id, checked: false, itemName };
    const listItems = [...Items, myNewItem]; 
    setItems(listItems);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    }

    const result = await apiRequest(API_URL, postOptions);

    if (result) setFetchError(result);
  }

  
  
  const handleDelete = async (id) => {

    //for react ui update instantly...
    const listItems = Items.filter((single_item) => single_item.id !== id);
    setItems(listItems);

   //for backend server  

    const delete_item_response = await apiRequest(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    if (delete_item_response) setFetchError(delete_item_response);

  };

  const handleCheck = async (id) => {
    //console.log(`key: ${id}`)

    //for react ui update instantly...

    const listItems = Items.map((single_item) => single_item.id === id ? { ...single_item, checked: !single_item.checked } : single_item);
    setItems(listItems);

    //for backend server

    const item_check = listItems.filter((single_item) => single_item.id === id);

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ checked: item_check[0].checked }),
      });

      if (!response.ok) throw Error('Update failed')  

    } catch (any_error) {
      setFetchError(any_error.message); 
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);
    addItem(newItem);
    setNewItem('');
  }


  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Header />

        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          handleSubmit={handleSubmit}
        />

        <SearchItem search={search} setSearch={setSearch} />
        <div>
          {fetchError && (
            <p className="p-3 border rounded-lg bg-red-100 text-center text-red-500 mb-4">{`Error: ${fetchError}`}</p>
          )}

          <Content
            Items={Items.filter((item) =>
              item.itemName.toLowerCase().includes(search.toLowerCase()),
            )}
            setItems={setItems}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            fetchError={fetchError}
            isLoading ={isLoading}
          />
        </div>
      </main>
      <Footer length={Items.length} />
    </div>
  );
}

export default App;
