import { AiOutlineHome, AiOutlineStar, AiOutlineBulb, AiOutlineBold, AiOutlineInbox } from 'react-icons/ai';


const LinksData = [
    
    {
        id: 1,
        name: "ANASAYFA",
        link: "/",
        icon: AiOutlineHome,
        orderMobile: 3,
        showMobile: true
    },
    {
        id: 2,
        name: "DENEYİMLERİM",
        link: "/deneyimlerim",
        icon: AiOutlineStar,
        orderMobile: 2,
        showMobile: true
    },
    {
        id: 3,
        name: "ÇALIŞMALARIM",
        link: "/calismalarim/doktoruzman",
        icon: AiOutlineInbox,
        orderMobile: 1,
        showMobile: true
    },
    {
        id: 4,
        name: "BLOG",
        link: "/blog",
        icon: AiOutlineBold,
        orderMobile: 5,
        showMobile: true
    },
    {
        id: 5,
        name: "HAKKIMDA",
        link: "/hakkimda",
        icon: AiOutlineBulb,
        orderMobile: 4,
        showMobile: true
    }
]

export default LinksData