import React from 'react'
import IonIcon from "@reacticons/ionicons"

const TitleWrapper = (props) => {
  return (
    <div className="title-wrapper">
      <div class="icon-box">
              <IonIcon name="book-outline"></IonIcon>
            </div>
        <h3 className="h3">{props.h}</h3>
    </div>
  )
}

export default TitleWrapper
