import React from 'react'
import { AiFillDelete } from "react-icons/ai";

const LineItem = ({
  Items,
  setItems,
  handleCheck,
  handleDelete,
  single_item,
}) => {
  return (
    <div className="bg-slate-700 rounded text-white p-4">
      <li
        // key={single_item.id}
        className=""
      >
        <div className="flex flex-row w-full justify-between">

          <div>
            <input
              type="checkbox"
              onChange={() => handleCheck(single_item.id)}
              checked={single_item.checked}
            />
          </div>
          
          <div>
            <p
              style={
                single_item.checked ? { textDecoration: "line-through" } : null
              }
            >
              {single_item.itemName}
            </p>
          </div>

          <div>
            <AiFillDelete
              className="text-xl hover:text-red-500 cursor-pointer"
              onClick={() => handleDelete(single_item.id)}
            />
          </div>

        </div>
      </li>
    </div>
  );
};

export default LineItem
