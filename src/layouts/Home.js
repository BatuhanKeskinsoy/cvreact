import Banner from '../pages/home/Banner';
import Jobs from '../pages/home/Jobs';
import Experiences from '../pages/home/Experiences';

function Home() {
  return (
    <>
        <Banner/>
        <hr className='dark:border-customSecondary-900 border-gray-200 border-1 md:my-10 my-6' />
        <Experiences/>
        <hr className='dark:border-customSecondary-900 border-gray-200 border-1 md:my-10 my-6' />
        <Jobs/>
    </>
  )
}

export default Home