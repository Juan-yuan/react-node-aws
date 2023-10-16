import React from "react"

export const Recommendation = ({ items, Heading, userId }) => {
  const hasRecommendations = items.recommendation[userId]
  if (!items.recommendation[userId]) return

  return (
    <>
      <Heading title='Top Recommendations' />
      <div className='recommendation_details_content'>
        {hasRecommendations?.map((val, index) => (
          <div className='recommendation_details_content_box' key={`${val.text}-recommendation`}>
            <div className='recommendation_details_content_box_icon'>
              <span >{index+1}</span>
            </div>
            <div className='recommendation_details_content_box_text'>
              <h4>{val.text}</h4>
              <span>{val.value}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
