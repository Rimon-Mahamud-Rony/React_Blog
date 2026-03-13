import React from 'react'

import ItemList from './ItemList';

const Content = ({
  Items,
  setItems,
  handleCheck,
  handleDelete,
  isLoading,
  fetchError,
}) => {
  if (isLoading) {
    return (
      <div className="w-full flex justify-center p-2 mt-8">
        <p>Data is loading...</p>
      </div>
    );
  }

  if (!Items.length && !fetchError) {
    return (
      <div className="w-full flex justify-center p-2 mt-8">
        <div className="w-3/4 sm:w-1/2 py-1 px-4">
          <div className="w-full flex flex-col justify-center items-center">
            <p className="w-full border border-red-200 rounded-sm text-center p-5 text-red-600 bg-red-100 font-medium shadow-xl">
              No items are available
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center p-2 mt-8">
      <div className="w-3/4 sm:w-1/2 py-1 px-4">
        <ItemList
          Items={Items}
          setItems={setItems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Content
