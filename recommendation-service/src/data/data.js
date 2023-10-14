import { AiOutlineHome, AiOutlineCalculator } from "react-icons/ai"
import { RiUserLine } from "react-icons/ri"
import { FaRegLightbulb, FaFacebookF, FaTwitter, FaInstagram, FaDribbble, FaShippingFast } from "react-icons/fa"
import { CgCardClubs } from "react-icons/cg"
import { TbMailOpened } from "react-icons/tb"
import { GoMail } from "react-icons/go"
import { BsPhoneVibrate } from "react-icons/bs"
import { MdShareLocation, MdLocalShipping, MdOutlineLocalShipping } from "react-icons/md"
import coffee from "../../src/images/coffee.png"
import cadbury from "../../src/images/cadbury.png"
import crispbread from "../../src/images/crispbread.png"
import crackers from "../../src/images/crackers.png"
import sunbites from "../../src/images/sunbites.png"
import puffs from "../../src/images/puffs.png"

export const menu = [
  {
    id: 1,
    text: "home",
    url: "/",
    icon: <AiOutlineHome />,
  },
  {
    id: 2,
    text: "BoughtBefore",
    url: "/boughtBefore",
    icon: <RiUserLine />,
  },
  {
    id: 3,
    text: "Specials",
    url: "/specials",
    icon: <FaRegLightbulb />,
  },
  {
    id: 4,
    text: "blog",
    url: "/blog",
    icon: <CgCardClubs />,
  },
  {
    id: 5,
    text: "contact",
    url: "/contact",
    icon: <TbMailOpened />,
  },
]

export const socialIcon = [
  {
    id: 1,
    icon: <FaFacebookF />,
    class: "facebook",
  },
  {
    id: 2,
    icon: <FaTwitter />,
    class: "twitter",
  },
  {
    id: 3,
    icon: <FaDribbble />,
    class: "dribbble",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    class: "instagram",
  },
]

export const side = [
  {
    id: 1,
    num: 85,
    text: "Strawberries",
    class: "side1",
  },
  {
    id: 2,
    num: 92,
    text: "Chocolate Chips",
    class: "side2",
  },
  {
    id: 3,
    num: 71,
    text: "Chips",
    class: "side3",
  },
]

export const about = [
  {
    deatils: [
      {
        text: "My Name",
        value: "K. Melissa Caroll",
        icon: <RiUserLine />,
      },
      { text: "My Age", value: "32 Years 241 Days", icon: <AiOutlineCalculator /> },
      { text: "Email Address", value: "k.melissa@caroll.me", icon: <GoMail /> },
      { text: "Phone Number", value: "1.800.987.6987", icon: <BsPhoneVibrate /> },
      { text: "Address", value: "Click Here to View Map.", icon: <MdShareLocation /> },
    ],
    recommendations: [
      {
        id: 1,
        icon: cadbury,
        title: "Cadbury Dairy Milk Freddo Chocolate",
        text: "$5.00",
        decs: "Cadbury Dairy Milk Freddo Chocolate Sharepack 12.",
      },
      {
        id: 2,
        icon: coffee,
        title: "Coffee",
        text: "$3.80",
        decs: "Nescafe Cappuccino Coffee Sachets | 10 pack",
      },
      {
        id: 3,
        icon: crispbread,
        title: "Crispbread",
        text: "$5.70",
        decs: "Arnott's Salada Original Crispbread | 250g",
      },
      {
        id: 4,
        icon: crackers,
        title: "Crackers",
        text: "$3.30",
        decs: "Sunbites Cheddar & Chives Snack Crackers | 110g",
      },
      {
        id: 5,
        icon: sunbites,
        title: "Social Media",
        text: "$3.30",
        decs: "Sunbites Sea Salt Snack Crackers | 105g",
      },
      {
        id: 6,
        icon: puffs,
        title: "Puffs",
        text: "$2.00",
        decs: "Cheetos Puffs Flaming Hot | 80g",
      },
    ],

    review: [
      {
        id: 1,
        desc: "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
        name: "Edward Johnson",
        link: "gorkcoder.com",
        cover: "./images/aut1.jpg",
      },
      {
        id: 2,
        desc: "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
        name: "Gork Coder",
        link: "gorkcoder.com",
        cover: "./images/aut2.jpg",
      },
      {
        id: 3,
        desc: "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
        name: "Edward Johnson",
        link: "gorkcoder.com",
        cover: "./images/aut3.jpg",
      },
    ],

    price: [
      {
        id: 1,
        icon: <MdOutlineLocalShipping />,
        title: "STARTER PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "27.00",
      },
      {
        id: 2,
        icon: <MdLocalShipping />,
        title: "BUSINESS PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "47.00",
      },
      {
        id: 3,
        icon: <FaShippingFast />,
        title: "PRO PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "97.00s",
      },
    ],
  },
]
