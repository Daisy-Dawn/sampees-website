import { useNavigate, Link } from 'react-router-dom'
import { noPage } from '../assets'

const NoPage = () => {
  const navigate = useNavigate()

  return (
    <div className='h-[80vh] bg-white font-nunito flex flex-col justify-center items-center'>
      <div className='w-full h-[250px] lg:h-[300px]  '>
        <img className='w-full h-full object-contain' src={noPage} alt="" />
      </div>
      <h1 className='text-blossom  font-black my-[1rem] text-[20px] lg:text-[30px] uppercase'> Page Not found </h1>
      <p className='text-bark px-[1.5rem] font-bold lg:text-[20px] text-[15px] capitalize mb-[0.75rem] lg:mb-[2rem] text-center'> Sorry, The Link you entered happens to have been broken or non-existent.  <br />
         </p>
      <button className='lg:py-[12px] py-[8px] lg:px-[20px] px-[10px]  rounded-[10px] font-nunito nopage hover:bg-blossom text-black text-[15px] lg:text-[18px] font-bold text-center flex items-center justify-center'>
        <Link to='#' onClick={() => navigate('/')}> Go back to Home ? </Link>
      </button>
    </div>
  )
}

export default NoPage
