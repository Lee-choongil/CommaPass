import React from 'react';

const nftData = [
  {
    id: 1,
    name: 'CP HyeHwa#1545',
    image: 'https://gateway.pinata.cloud/ipfs/QmS1A3Mb9B5dveSLbY3yXnnEKufYKMeiAuawHJPSKreKTV?_gl=1*1g8e20p*rs_ga*ZTQxZWFhYjYtNjdhYy00MDc3LWFjMzEtYTNlOWI1ZTY0OGJk*rs_ga_5RMPXG14TE*MTY4MTQ1NjI4OS4xLjEuMTY4MTQ1NjUyNS41Ny4wLjA.',
    description: '서울특별시 종로구',
    date: '2023-03-15',
  },
  {
    id: 2,
    name: 'CP HyeHwa#9987',
    image: 'https://gateway.pinata.cloud/ipfs/QmPXF1w95SVhdp5ALbJnLLsSjzCN3K45PY1hnmMhFG5gpx?_gl=1*h22b2e*rs_ga*ZTQxZWFhYjYtNjdhYy00MDc3LWFjMzEtYTNlOWI1ZTY0OGJk*rs_ga_5RMPXG14TE*MTY4MTQ1NjI4OS4xLjEuMTY4MTQ1NjUyNS41Ny4wLjA.',
    description: '서울특별시 종로구',
    date: '2023-03-16',
  },
  {
    id: 3,
    name: 'CP HyeHwa#651',
    image: 'https://gateway.pinata.cloud/ipfs/QmRxUQnxGHB4Ujp7GaJ49Dcgnng5Zmw2BfKnQLahudEGxh?_gl=1*1jir6l5*rs_ga*ZTQxZWFhYjYtNjdhYy00MDc3LWFjMzEtYTNlOWI1ZTY0OGJk*rs_ga_5RMPXG14TE*MTY4MTQ1NjI4OS4xLjEuMTY4MTQ1Njg3Ni41OC4wLjA.',
    description: '서울특별시 종로구',
    date: '2023-03-17',
  },
];

const sample = () => {
  return (
    <div className="w-4/5 py-8 mx-auto ">
      <br />
      <h1 className="text-2xl font-bold mb-8 flex justify-center items-center">My Pass</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {nftData.map((nft) => (
          <div key={nft.id} className="bg-gray-300 rounded-lg shadow-md p-2 flex flex-col justify-center items-center">
            <img src={nft.image} alt={nft.name} className="mb-2" style={{ width: "200px", height: "200px" }}/>
            <h2 className="text-lg font-bold mb-1">{nft.name}</h2>
            <p className="text-xs text-black mb-1">{nft.description}</p>
            <p className="text-xs text-black">{nft.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default sample;