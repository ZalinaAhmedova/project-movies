import React, {useState, useEffect} from 'react'
import './blog.css'
import BlogCard from '../components/BlogCard';

function Blog() {
    const [blogs, setBlogs] = useState([]);

    const fetchData = () => {
        fetch("http://localhost:3000/data/blogData.json")
          .then((res) => res.json())
          .then((data) => setBlogs(data))
          .catch((error) => console.log(error.message));
      };
    
      useEffect(() => {
        fetchData();
      }, []);
    
  return (
    <section id="blog">
        <div className="container-fluid">
            <div className="row">
                <h4 className="section-title">Our blog</h4>
            </div>
            <dir className="row mt-5">
                {
                    blogs &&
                    blogs.length>0 &&
                    blogs.map(blog => (
                        <BlogCard key={blog._id} blog={blog}/>
                    ))
                }
            </dir>
        </div>
    </section>
  )
}

export default Blog