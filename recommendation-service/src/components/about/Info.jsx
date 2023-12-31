import React from "react"

export const Info = ({ items, Heading }) => {
  return (
    <>
      <Heading title='Contact info' />
      <div className='about_details_content'>
        {items.deatils.map((val) => (
          <div className='about_details_content_box' key={`${val}-deatils`}>
            <div className='icon'>
              <span >{val.icon}</span>
            </div>
            <div className='about_details_content_box_text'>
              <h4>{val.text}</h4>
              <span>{val.value}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
