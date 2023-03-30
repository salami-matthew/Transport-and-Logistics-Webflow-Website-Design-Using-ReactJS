import React from 'react'
import Highlight from '../Highlight/Highlight'
import MoreButton from '../MoreButton/MoreButton'
import "./Blog.css"
import BlogPost from './BlogPost/BlogPost'

const Blog = () => {
  return (
    <div className='white-blog-container'>
      <div className='blog-section'>
        <Highlight info="Our Blog" />
        <h1 className='display-text'>Our Latest News</h1>
        <hr className='blog-ruler' />
        <BlogPost
          img='./blog-img1.png'
          day="08"
          month="September"
          heading="Inland freight a worthy solution for your business"
          content="We are dedicated in creating added value for our customers by implementing modern technology in our work."
          list1="Urgent transport solutions"
          list2="Reliable & experienced staffs"
          list3="Urgent transport solutions"
          list4="Reliable & experienced staffs"
        />
        <hr className='blog-ruler' />
        <BlogPost
          img='./blog-img2.png'
          day="12"
          month="September"
          heading="How technology can help redraw the supply chain map"
          content="We are dedicated in creating added value for our customers by implementing modern technology in our work."
          list1="Urgent transport solutions"
          list2="Reliable & experienced staffs"
          list3="Urgent transport solutions"
          list4="Reliable & experienced staffs"
        />
        <hr className='blog-ruler' />
        <BlogPost
          img='./blog-img3.png'
          day="25"
          month="September"
          heading="Five things you should have ready for your broker"
          content="We are dedicated in creating added value for our customers by implementing modern technology in our work."
          list1="Urgent transport solutions"
          list2="Reliable & experienced staffs"
          list3="Urgent transport solutions"
          list4="Reliable & experienced staffs"
        />
        <hr className='blog-ruler' />
        <div className='button-container'>
          <MoreButton text="More Blog" type="dark" />
        </div>
      </div>
    </div>
  )
}

export default Blog