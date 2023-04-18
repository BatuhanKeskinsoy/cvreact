import { React } from 'react';
import { NavLink } from 'react-router-dom';


function MenuItem(props) {


    const Icon = props.icon;
    if (props.isFooterMobile) {
        return (
            <>
                {props.showMobile && (
                    <NavLink to={props.link} className={({ isActive }) => isActive ?
                    `dark:text-black text-white dark:bg-yellow-400 bg-violet-700 flex flex-col justify-center items-center 
                    text-center w-1/5 py-3 transition-all shadow-customMd dark:shadow-yellow-400 shadow-violet-700 order-${props.order}` :
                    `dark:text-white text-black flex flex-col justify-center items-center text-center w-1/5 py-3 transition-all order-${props.order}`}>
                        <Icon className='text-3xl' />
                    </NavLink>
                )}
            </>
        )
    }
    else if (props.isFooter) {
        return (
            <li>
                <NavLink
                    to={props.link}
                    className='py-2 flex justify-between items-center active:pl-4 md:active:pl-2 transition-all group'
                    onClick={props.mobileNavClose}>
                    <span className='uppercase font-gemunu tracking-widest dark:text-gray-400 text-gray-600'>{props.name}</span>
                    <Icon className='md:mr-2 md:p-1 p-2 md:text-2xl text-4xl shadow-customMd shadow-gray-500 rounded-full transition-all dark:text-white text-customSecondary-900
                            group-active:shadowXl dark:group-active:text-black group-active:text-white dark:group-active:bg-yellow-400 group-active:bg-violet-700
                            group-hover:shadowXl dark:group-hover:text-black group-hover:text-white dark:group-hover:bg-yellow-400 group-hover:bg-violet-700' />
                </NavLink>
            </li>
        )
    }
    else {
        return (
            <li>
                <NavLink
                    to={props.link}
                    className='py-2 md:py-5 px-2 flex  justify-between items-center active:pl-4 md:active:pl-2 transition-all group'
                    onClick={props.mobileNavClose}>
                    <span className='order-1 md:order-2 uppercase font-gemunu tracking-widest'>{props.name}</span>
                    <Icon className='order-2 md:order-1 md:mr-2 p-2 shadow-customMd shadow-gray-500 rounded-full text-4xl transition-all dark:text-white text-customSecondary-900
                            group-active:shadowXl dark:group-active:text-black group-active:text-white dark:group-active:bg-yellow-400 group-active:bg-violet-700
                            group-hover:shadowXl dark:group-hover:text-black group-hover:text-white dark:group-hover:bg-yellow-400 group-hover:bg-violet-700' />
                </NavLink>
            </li>
        )
    }
}

export default MenuItem

