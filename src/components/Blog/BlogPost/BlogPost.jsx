import React from 'react'
import "./BlogPost.css"

const BlogPost = (props) => {
  return (
    <div className='blog-post'>
      <div className='left-blog-section'>
        <img src={props.img} />
        <div className='overlay'>
          <p className='overlay-text'>Read More</p>
        </div>
      </div>
      <div className='blog-icon'>
        <img src='./blog-icon.png' />
        <h1 className='display-text'>{props.day}</h1>
        <p className='blog-date'>{props.month}</p>
      </div>
      <div className='right-blog-section'>
        <h3 className='blog-title'>{props.heading}</h3>
        <p>{props.content}</p>
        <ul className='blog-list'>
          <li>{props.list1}</li>
          <li>{props.list2}</li>
          <li>{props.list3}</li>
          <li>{props.list4}</li>
        </ul>
      </div>

    </div>
  )
}

export default BlogPost