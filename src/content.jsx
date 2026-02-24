import React from 'react'
import { AiFillDelete } from "react-icons/ai";

const Content = ({ Items, setItems, handleCheck, handleDelete }) => {
  return (
    <div className="w-full flex justify-center p-2 mt-8">
      <div className="w-3/4 sm:w-1/2 py-1 px-4">
        {Items.length ? (
          <ul className="list-none flex flex-col gap-2 text-sm">
            {Items.map((single_item) => (
              <li
                key={single_item.id}
                className="border-1 borderborder border-indigo-600 p-4 rounded-sm"
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
                      style={(single_item.checked ? { textDecoration: 'line-through' } : null)}
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
            ))}
          </ul>
        ) : (
          <div className="w-full felx flex-col justify-center items-center">
            <p className="border border-red-200 rounded-sm text-center p-5 text-red-600 bg-red-100 font-medium shadow-xl">
              No items are available
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content
