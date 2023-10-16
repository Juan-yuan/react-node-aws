import React from "react"

export const Services = ({ items, Heading }) => {
  return (
    <div className='about_services'>
      <Heading title='Shopping made easy' />
      <div className='about_services_boxs'>
        {items.shoppings.map((item) => (

            <div className='card' key={`${item}-icons`}>
              <div className='icon'>
                <span 
                  style={{ 
                    width: "100%",
                    height: "100%",
                    display: "block", 
                    backgroundImage: `url(${item.icon})`,
                    backgroundSize: "contain"
                  }}
                ></span>
              </div>
              <div className='text'>
                <h3>{item.title}</h3>
                <label>{item.text}</label>
                <p>{item.decs}</p>
              </div>
            </div>
    
        ))}
      </div>
    </div>
  )
}
