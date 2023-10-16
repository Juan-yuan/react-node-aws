import React from "react"
import { Heading } from "../../common/Heading"
import { about } from "../../data/data"
import { Price } from "./Price"
import { Services } from "./Services"
import { Slider } from "./Slider"
import { Recommendation } from "./Recommendation"

export const About = ({userId}) => {
  return (
    <section className='about'>
      <div className='container'>
        {about.map((items) => {
          return (
            <div key={`${items}-about`}>
              <Services items={items} Heading={Heading} />
              <Slider items={items} Heading={Heading} />
              <div className='about_details'>
                <Recommendation items={items} Heading={Heading} userId={userId} />
              </div>
              <Price items={items} Heading={Heading} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
