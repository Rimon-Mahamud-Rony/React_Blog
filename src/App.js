import './App.css';
import Header from './header';
import Content from './content';
import Footer from './footer';
import { useState } from 'react';

function App() {
  const [Items, setItems] = useState([
    {
      id: 1,
      checked: true,
      itemName: "item one",
    },
    {
      id: 2,
      checked: false,
      itemName: "item two",
    },
    {
      id: 3,
      checked: false,
      itemName: "item three",
    },
    {
      id: 4,
      checked: true,
      itemName: "item four",
    },
    {
      id: 5,
      checked: true,
      itemName: "item five",
    },
    {
      id: 6,
      checked: false,
      itemName: "item six",
    },
    {
      id: 7,
      checked: true,
      itemName: "item seven",
    },
    {
      id: 8,
      checked: true,
      itemName: "item eight",
    },
    {
      id: 9,
      checked: false,
      itemName: "item nine",
    },
    {
      id: 10,
      checked: true,
      itemName: "item ten",
    },
  ]);



  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Header />
        <Content
          Items={Items}
          setItems = {setItems}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
