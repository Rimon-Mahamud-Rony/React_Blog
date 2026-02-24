import React from 'react'

const Footer = () => {
  return (
    <div>
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
}

export default Footer
    