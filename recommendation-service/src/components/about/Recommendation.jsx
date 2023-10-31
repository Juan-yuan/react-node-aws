import React, { useState, useEffect } from "react"
import axios from "axios"

export const Recommendation = ({ items, Heading, userId }) => {
  const [recommendations, setRecommendations] = useState([])
  //const API_URL = `https://gyoxambmvd.execute-api.ap-southeast-2.amazonaws.com/test?userId=${userId}`

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await axios.post(API_URL)
  
  //       if (response.data && response.data.recommendations) {
  //         const userRecommendations = response.data.recommendations?.filter(item => item[userId])
  //         if (userRecommendations.length > 0) {
  //           setRecommendations(userRecommendations[0][userId])
  //         } else { 
  //           return
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   getData();
  // }, []);
  
  // console.log({
  //   "User ID:": userId,
  //   "Recommendations:": recommendations
  // })

  return (
    <>
      {/* { !!(recommendations.length) > 0 && <Heading title='Top Recommendations' /> }
      <div className='recommendation_details_content'>
        {recommendations?.map((val, index) => (
          <div className='recommendation_details_content_box' key={`${val}-${index}-recommendation`}>
            <div className='recommendation_details_content_box_icon'>
              <span >{index+1}</span>
            </div>
            <div className='recommendation_details_content_box_text'>
              <span>{val}</span>
            </div>
          </div>
        ))}
      </div> */}
      <div></div>
    </>
  )
}
