import React from 'react'

export  function TimeLineContent(props) {
  return (
    <div className='timeLineContent'>
        <p>{props.time}</p>
        <div className='timeLineContent-text'>
            <p className='timeLineContent-text_header'>{props.header}</p>
            <p className='timeLineContent-text_subject'>{props.children}</p>
        </div>
    </div>
  )
}
