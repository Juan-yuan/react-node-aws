import React from "react"
import { about } from "../../data/data"
import { Heading } from "../../common/Heading"

export const BoughtBefore = () => {
  return (
    <section className='about'>
      <div className='container'>
        {about.map((items) => {
          return (
            <div key={`${items}-about`}>
              <div className='about_services'>
                <Heading title='Purchase History' />
                <div className='about_services_boxs'>
                  {items.history.map((item) => (
                      <div className='card' key={`icons-${item.title}`}>
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
            </div>
          )
        })}
      </div>
    </section>
  )
}
