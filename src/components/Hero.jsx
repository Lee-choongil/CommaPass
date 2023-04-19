import Identicon from 'react-identicons'
import { setGlobalState, useGlobalState, truncate } from '../store'

const Hero = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <div
      className="flex flex-col md:flex-row w-5/5 justify-between 
      items-center mx-auto py-5"
      style={{ justifyContent: 'center', textAlign: 'center' }} // 가운데 정렬을 위해 추가
    >
      <div className="gradient-bg-hero md:w-full w-full">
        <div>
          <h1 className="text-black text-5xl font-bold">
            <br />
            with Local
          </h1>
          <p className="text-[#3b3b3b] font-thin text-sm mt-3">
            콤마패스를 구매하고 지역에서 다양한 혜택을 누리세요.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
