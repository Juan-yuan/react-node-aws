import React from "react"
import { Heading } from "../../common/Heading"
import { about } from "../../data/data"
import { Info } from "../about/Info"

export const Contact = () => {
  return (
    <section className='about'>
        <div className='container'>
          {about.map((items) => {
            return (
              <div className='about_details'>
                <Info items={items} Heading={Heading} />
              </div>
            )
          })}
        </div>
      </section>
  )
}
