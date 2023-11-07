import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[15px]'>
      <NavLink to={`/blog/${post.id}`} >
        <span className='text-purple-900 font-bold text-lg'>{post.title}</span>
      </NavLink>
      <p>
        By
        <span> {post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className="underline text-yellow-600">{post.category}</span>
        </NavLink>
      </p>
      <p> Posted on {post.date} </p>
      <p> {post.content}</p>
      <div>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className="underline text-yellow-600">{`#${tag}`}</span>{"  "}
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
