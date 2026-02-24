import React from 'react'
import { AiFillDelete } from "react-icons/ai";

const Content = ({Items, setItems}) => {
    return (
      <div className="w-full flex justify-center p-2 mt-8">
        <div className="w-1/2 py-1 px-4">
          <ul className="list-none flex flex-col gap-2 text-sm">
            {Items.map((single_item) => (
              <li
                key={single_item.id}
                className="border-1 borderborder border-indigo-600 p-4 rounded-sm"
              >
                <div className="flex flex-row w-full justify-between">
                  <div>
                    <input type="checkbox" checked={single_item.checked} />
                  </div>
                  <div>{single_item.itemName}</div>
                  <div>
                    <AiFillDelete className='text-xl hover:text-red-500 cursor-pointer'/>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
}

export default Content
