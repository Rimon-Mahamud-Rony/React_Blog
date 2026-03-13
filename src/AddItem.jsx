import { IoIosAddCircle } from "react-icons/io";

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <div className="w-full p-5 flex justify-center">
      <div className="w-9/12 sm:w-1/2">
        <label htmlFor="addItem" className="text-green-700 text-xl font-bold">
          Add Item
        </label>

        <form onSubmit={(e)=>handleSubmit(e)} className="w-full flex flex-row gap-x-2 mt-2">
          <input
            className="border border-slate-500 p-2 rounded w-full"
            autoFocus
            type="text"
            id="addItem"
            placeholder="add item"
            required
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />

          <button
            type="submit"
            aria-label="Add Item"
            className="px-3 border border-white rounded bg-green-500 hover:bg-green-700 hover:text-white cursor-pointer shadow-md"
          >
            <IoIosAddCircle className="text-3xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
