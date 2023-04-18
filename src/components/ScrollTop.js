import { useState, useEffect } from 'react';
import { HiArrowUp } from 'react-icons/hi';

function ScrollTop() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > 50) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        });
      }, []);

      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

    return (
        <>
            {showButton && (
                <button
                    className="animate-bounce fixed rounded-full md:bottom-2 bottom-16 right-4 p-2 flex justify-center items-center z-30 
                    dark:bg-yellow-400 bg-violet-600 shadow-customLg dark:shadow-yellow-400 shadow-violet-700"
                    onClick={scrollToTop}
                >
                    <HiArrowUp className='dark:text-black text-white md:text-4xl text-3xl ' />
                </button>
            )}

        </>
    )
}

export default ScrollTop