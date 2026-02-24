import React from 'react'

const Footer = ({ length }) => {
  return (
    <div className="h-10">
      <p className='border border-green-500 mb-2 p-2 rounded-sm  text-center text-green-900 bg-green-100 shadow-md font-medium'>{length} List { length === 1 ? 'item is' : 'items are'} availabe</p>
      <div id="desktop_footer " className="sm:block hidden bg-green-200">
        <p className="text-center text-sm font-medium text-black">
          desktop footer
        </p>
      </div>
      <div id="mobile_footer" className="block sm:hidden bg-red-200">
        <p className="text-center text-sm font-medium text-black">
          mobile footer
        </p>
      </div>
    </div>
  );
};

export default Footer
    