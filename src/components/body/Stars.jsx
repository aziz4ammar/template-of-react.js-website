import React from 'react'

const Stars = ({rating}) => {
    const starRating = (x) => {
        let stars = [];
        for (let i = 0; i < 5; i++) {
          if (i < x) {
            stars.push(
              <span
                key={i}
                style={{ color: "red", cursor: "pointer", fontSize: "35px" }}
              >
                ♥
              </span>
            );
          } else {
            stars.push(
              <span
                key={i}
                style={{ color: "lavender", cursor: "pointer", fontSize: "35px" }}
              >
                ♥
              </span>
            );
          }
        }
        return stars;
      };
    
      return <div>{starRating(rating)}</div>;
    };
export default Stars