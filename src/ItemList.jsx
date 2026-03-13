import React from 'react'
import LineItem from './LineItem';


const ItemList = ({ Items, setItems, handleCheck, handleDelete }) => {
    return (
      <div>
        <ul className="list-none flex flex-col gap-2 text-sm">

          {Items.map((single_item) => (
              <LineItem
                  key={single_item.id}
                  single_item={single_item}
                  Items={Items}
                  setItems={setItems}
                  handleCheck={handleCheck}
                  handleDelete={handleDelete}
              />
          ))}
        </ul>
      </div>
    );
};

export default ItemList
