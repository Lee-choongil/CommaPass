import React from 'react';
import Logo from '../assets/comma.png';

const Drops = () => {
  return (
    <div className="w-4/5 py-8 mx-auto flex-auto">
      <br />
      <h1 className="text-2xl font-bold mb-8 flex justify-center items-center">NFT Drop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-300 rounded-lg shadow-md w-full h-3/5">
          <img
            src={Logo}
            alt="logo"
            className="w-full h-full object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">Comma Pass Jeju</h2>
            <p className="text-gray-500 mb-4">1889/9999</p>
            <div className="flex justify-between items-center">
              <p className="text-gray-700 font-bold text-lg">900 klay</p>
              <button className="bg-[#e32970] text-white px-4 py-2 rounded-md hover:bg-[#bd255f]">
                구매하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drops;
