import React from 'react';
import aboutPhoto from '../../images/photos/about-me2.png';
import SocialItem from '../../components/items/SocialItem';
import SocialsData from '../../data/SocialsData';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import Tilt from 'react-parallax-tilt';


function Banner() {
  return (
    <div className='container mx-auto flex md:flex-row flex-col w-100 px-4 md:px-0 md:pt-20 pt-8'>
      <div className='md:w-1/3 relative z-10'>
        <Tilt perspective={1000} className='parallax-effect-custom'>
          <div className="xl:h-96 xl:w-96 lg:h-80 lg:w-80 h-60 w-60 absolute top-0 left-0 dark:opacity-10 dark:bg-yellow-400 bg-gray-100 rounded-full -z-10 flex items-center justify-center"></div>
          <img src={aboutPhoto} alt="" className='w-full h-fit block rounded-full inner-element drop-shadow-2xl' />
        </Tilt>
      </div>

      <div className="w-full md:w-2/3 mt-8 md:mt-0 md:px-5 flex flex-col justify-between z-10">
        <div>
          <h1 className='font-semibold md:text-5xl text-3xl mb-8 flex flex-col justify-center md:justify-start items-center md:items-start w-full'>
            <span className='dark:text-yellow-400 text-violet-700'>BATUHAN KESKİNSOY</span>
            <span className='text-2xl dark:text-gray-300 text-customSecondary-300 mt-4 md:mt-2'>FRONTEND DEVELOPER</span>
          </h1>
          <div className="dark:text-gray-400 text-gray-500 text-xl">
            <p className='mb-4'>Merhaba, ben Batuhan Keskinsoy. Şu an için HTML5, CSS3, TailwindCSS, JavaScript ile proje geliştirebilen bir web önyüz geliştiricisiyim.</p>
            <p className='mb-4'>Aktif olarak Javascript'in Framework'ü olan React'ı öğrenme aşamasındayım devamında ise Redux, Next.js, Vue.js üzerine eğitimime devam etmeyi planlıyorum.</p>
            <hr className='dark:border-customSecondary-900 border-gray-200 md:my-10 my-6' />
            <p className='mb-4'>Eğitimime lisede Web Tasarım bölümü ile başlayıp, OMÜ M.Y.O'da Bilgisayar Programcılığı bölümünü bitirerek tamamladım. Şu anda açık öğretim ile Yönetim Bilişim Sistemleri bölümü lisansını tamamlıyorum.</p>
            <p className='mb-4'>Şu anda Samsun'da Freelance olarak çalışıyorum. Tam zamanlı, yarı zamanlı, remote ve hibrit çalışma modellerine uygunum. Çalışma şartları uygun ise şehir dışına çıkabilirim.</p>
            {/* <p className='mb-4'>Son çalıştığım şirket Hane Yazılım Ltd. Şti.'idi, burada 2 Yıl Ön yüz geliştirici olarak görev aldım bunun dışında SEO, grafik tasarım, mysql, dijital pazarlama ve geliştirmiş olduğumuz sağlık platformunu İstanbul'da uzun bir süre fiziksel pazarlama aşamasını görme imkanı buldum.</p> */}
          </div>
        </div>
        <div className="flex items-center md:flex-row flex-col">
          <ul className='flex justify-between md:justify-start w-full overflow-auto max-w-full py-6 md:mr-6 md:pl-3'>
            {
              SocialsData.map((Social, key) => {
                return <SocialItem link={Social.link} icon={Social.icon} key={key} />
              })
            }
          </ul>
          <Link to='/hakkimda' className='flex items-center ml-auto dark:bg-yellow-400 bg-violet-700 dark:hover:bg-yellow-300 hover:bg-violet-600 md:rounded-3xl rounded-md px-6 py-3
          md:w-fit w-full dark:text-black text-white justify-center transition-all my-4 min-w-fit font-semibold shadow-customMd dark:shadow-yellow-400 shadow-violet-700'>Daha Fazla Bilgi <AiOutlineRight className='ml-4' /></Link>
        </div>
      </div>
    </div>
  )
}

export default Banner