import React from 'react'

const Content = () => {
    return (
      <div className="w-full flex justify-center p-2 mt-8">
        <div className="w-3/4  bg-gray-100 py-1 px-4 border ">
          <ul className="list-none">
            <li>
              <div className="flex flex-row w-full justify-between">
                <div>checklist</div>
                <div>items name</div>
                <div>delete icon</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Content
