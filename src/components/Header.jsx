import Logo from '../assets/comma.png';
import { connectWallet } from '../Blockchain.Services';
import { useGlobalState, truncate } from '../store';
import { Link } from 'react-router-dom';

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  return (
    <nav className="w-full flex items-center fixed top-0 bg-white py-0.5 mx-auto">
  <div className="flex-initial justify-center items-center">
    <Link to="/">
      <img className="w-12 cursor-pointer" src={Logo} alt="Logo" />
    </Link>
  </div>

  <div className="flex-1"></div>

  {connectedAccount ? (
    <button className="text-white bg-[#ff961e] hover:bg-[#ff961e] md:text-xs p-2 rounded-full cursor-pointer mr-5">
      {truncate(connectedAccount, 4, 4, 11)}
    </button>
  ) : (
    <button className="text-white bg-[#ff961e] hover:bg-[#ff961e] md:text-xs p-1 rounded-full cursor-pointer mr-5" onClick={connectWallet}>
      지갑 연결
    </button>
  )}
</nav>

  )
}

export default Header
