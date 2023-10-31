import React from "react"
import { BiLockOpen } from "react-icons/bi"

export const Price = ({ items, Heading }) => {
  return (
    <div className='about_price'>
      <Heading title='Delivery to your home' />
      <div className='about_price_content'>
        {items.price.map((val) => (
          <div className='cards' key={`${val.pri}-price`}>
            <i>{val.icon}</i>
            <h5>{val.title}</h5>

            <button className='button'>
              <BiLockOpen className='icons' />
              <span>LET'START</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
