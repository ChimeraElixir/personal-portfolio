import React from 'react'

const Title_Wrapper = (props) => {
  return (
    <div className="title-wrapper">
      <div class="icon-box">
              <ion-icon name="book-outline"></ion-icon>
            </div>
        <h3 className="h3">{props.h}</h3>
    </div>
  )
}

export default Title_Wrapper
