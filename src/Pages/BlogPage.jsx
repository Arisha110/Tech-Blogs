import React, { useContext } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import { baseUrl } from '../baseUrl';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const[relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log("URL is: ");
        console.log(url);
        try {
            const res = await fetch(url);
            const data = await res.json();
            
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error) {
            console.log("Error aagya in blog id wali call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        if(blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname] )

  return (
    <div className='w-full flex flex-col gap-y-1 my-9 mb-[90px] mt-20 items-center justify-center '>
      <Header/>
      <div className='flex flex-col w-[90%] items-start justify-center xl:w-[50%]'>
        <div className=''>
        <button className="border-2 border-gray-300 py-1 px-4 rounded-md w-30 xl:w-45 text-purple-900"
        onClick={() => navigation(-1)}
        >
            Back
        </button>
      </div>
      {
        loading ?
        (<div>
            <p> Loading</p>
        </div>) :
        blog ?
        (<div>
            <BlogDetails post={blog} />
            <h2 className='text-lg font-bold mt-6'> Related Blogs </h2>
            {
                relatedblogs.map( (post) => (
                    <div key = {post.id}>
                        <BlogDetails post={post} />
                    </div>
                ) )
            }

        </div>) :
        (<div>
            <p>No Blog Found</p>
        </div>)
       
      }
      </div>
      


    </div>
  )
}

export default BlogPage
