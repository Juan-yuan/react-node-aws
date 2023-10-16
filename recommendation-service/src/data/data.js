import { AiOutlineHome, AiOutlineCalculator } from "react-icons/ai"
import { RiUserLine } from "react-icons/ri"
import { FaRegLightbulb, FaFacebookF, FaTwitter, FaInstagram, FaDribbble, FaShippingFast } from "react-icons/fa"
import { CgCardClubs } from "react-icons/cg"
import { TbMailOpened } from "react-icons/tb"
import { GoMail } from "react-icons/go"
import { BsPhoneVibrate } from "react-icons/bs"
import { MdShareLocation, MdLocalShipping, MdOutlineLocalShipping } from "react-icons/md"
import mango from "../../src/images/mango.png"
import strawberry from "../../src/images/strawberry.png"
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
    recommendation: {
      123456: [
        {text: "Strawberries"},
        {text: "Chocolate Chip Cookies"},
        {text: "Organic Tortilla Chips"},
        {text: "Tall Kitchen Bag With Febreze Odor Shield"},
        {text: "Baby Cucumbers"},
      ],
      21314151: [
        {text: "Chocolate"},
        {text: "Chocolate"},
        {text: "Chocolate"},
        {text: "Chocolate"},
        {text: "Chocolate"},
      ]
    },
    shoppings: [
      {
        id: 1,
        icon: strawberry,
        title: "Strawberry Dairy Milk Freddo Chocolate",
        text: "$5.00",
        decs: "857,570 Strawberry Stock Photos - Free & Royalty-Free Stock Photos from Dreamstime",
      },
      {
        id: 2,
        icon: mango,
        title: "Mango",
        text: "$3.80",
        decs: "Mangoes are deliciously sweet and slightly tangy taste. ",
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
        desc: "Strawberries are known for their sweet and slightly tart flavor that pleases the taste buds. Whether eaten fresh or used in a variety of dishes, they add a burst of flavor.",
        name: "Strawberries",
        link: "gorkcoder.com",
        cover: "./images/aut1.png",
      },
      {
        id: 2,
        desc: "This Chocolate is a universal favorite, bringing people from different cultures and backgrounds together in their appreciation for this delectable treat.",
        name: "Chocolate",
        link: "Chocolate.com",
        cover: "./images/aut2.png",
      },
      {
        id: 3,
        desc: "Chips come in an incredible variety of flavors. Whether you're a fan of classic salted chips or enjoy bold, unique flavors, there's something for everyone.",
        name: "Chips",
        link: "Chips.com",
        cover: "./images/aut3.png",
      },
    ],

    price: [
      {
        id: 1,
        icon: <MdOutlineLocalShipping />,
        title: "STARTER PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "10.00",
      },
      {
        id: 2,
        icon: <MdLocalShipping />,
        title: "BUSINESS PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "15.00",
      },
      {
        id: 3,
        icon: <FaShippingFast />,
        title: "PRO PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "20.00s",
      },
    ],
  },
]
