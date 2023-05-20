import { AiOutlineHome, AiOutlineStar, AiOutlineBulb, AiOutlinePhone, AiOutlineInbox } from 'react-icons/ai';

const LinksData = [
    
    {
        name: "ANASAYFA",
        link: "/",
        icon: AiOutlineHome,
        orderMobile: 3,
        showMobile: true
    },
    {
        name: "DENEYİMLERİM",
        link: "/deneyimlerim",
        icon: AiOutlineStar,
        orderMobile: 2,
        showMobile: true
    },
    {
        name: "ÇALIŞMALARIM",
        link: "/calismalarim/doktoruzman",
        icon: AiOutlineInbox,
        orderMobile: 1,
        showMobile: true
    },
    {
        name: "HAKKIMDA",
        link: "/hakkimda",
        icon: AiOutlineBulb,
        orderMobile: 4,
        showMobile: true
    },
    {
        name: "İLETİŞİM",
        link: "/iletisim",
        icon: AiOutlinePhone,
        orderMobile: 5,
        showMobile: true
    }
]

export default LinksData