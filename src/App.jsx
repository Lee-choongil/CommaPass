import { useEffect } from 'react'
import { getAllNFTs, isWallectConnected } from './Blockchain.Services'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Alert from './components/Alert'
import Artworks from './components/Artworks'
import CreateNFT from './components/CreateNFT'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Loading from './components/Loading'
import ShowNFT from './components/ShowNFT'
import Transactions from './components/Transactions'
import UpdateNFT from './components/UpdateNFT'
import Alliance from './components/Alliance'
import MyPass from './components/MyPass'
import Market from './components/Market'
import Drops from './components/Drops'
import BottomNaigationBar from './components/BottomNavigationBar'

const App = () => {
  useEffect(async () => {
    await isWallectConnected()
    await getAllNFTs()
  }, [])

  return (
    <div className="min-h-screen">
       
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/drops" element={<Drops />} />
        <Route path="/store" element={<Alliance />} />
        <Route path="/market" element={<Market />} />
        <Route path="/mypage" element={<MyPass />} />
      </Routes>

      
      <ShowNFT />
      <UpdateNFT /> 
      <Alert />
      <Loading />
      <BottomNaigationBar />
    </div>
  )
}


export default App
