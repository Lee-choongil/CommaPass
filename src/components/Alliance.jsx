import React from 'react';
import Header from './Header';

const Alliance = () => {
  return (
      <div className="w-4/5 py-8 mx-auto">
        <br />
        <h1 className="text-2xl font-bold mb-8 flex justify-center items-center">제휴 매장</h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-[450px] mb-8 md:mb-0">
            <img
            src="https://via.placeholder.com/450x250"
            alt="Store 1"
            className="w-full h-full object-cover rounded-md shadow-xl"
            />
            <div className="bg-white p-4 rounded-md shadow-md mt-4">
              <h2 className="text-lg font-bold mb-2">매장 이름</h2>
              <p className="text-gray-500 mb-2">매장 소개</p>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-700">매장 위치</p>
                <a href="/" className="text-[#e32970] text-sm underline">
                  매장 상세보기
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-[450px] mb-8 md:mb-0">
            <img
              src="https://via.placeholder.com/450x250"
              alt="Store 2"
              className="w-full h-full object-cover rounded-md shadow-xl"
            />
            <div className="bg-white p-4 rounded-md shadow-md mt-4">
              <h2 className="text-lg font-bold mb-2">매장 이름</h2>
              <p className="text-gray-500 mb-2">매장 소개</p>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-700">매장 위치</p>
                <a href="/" className="text-[#e32970] text-sm underline">
                  매장 상세보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Alliance;
