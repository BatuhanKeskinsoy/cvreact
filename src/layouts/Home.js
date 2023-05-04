import Banner from '../pages/home/Banner';
import Jobs from '../pages/home/Jobs';
import Experiences from '../pages/home/Experiences';
import HomeContact from '../pages/home/HomeContact';

function Home() {
  return (
    <>
      <Banner />
      <hr className='dark:border-customSecondary-900 border-gray-200 border-1 md:my-10 my-6' />
      <Experiences />
      <hr className='dark:border-customSecondary-900 border-gray-200 border-1 md:my-10 my-6' />
      <Jobs />
      <hr className='dark:border-customSecondary-900 border-gray-200 border-1 md:my-10 my-6' />
      <HomeContact />
    </>
  )
}

export default Home