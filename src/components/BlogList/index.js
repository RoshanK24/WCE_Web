import React from 'react';
import { Link } from 'react-router-dom'
import BlogSidebar from '../BlogSidebar'
import blogs from '../../api/blogs'



const BlogList = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog py-[3rem]">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="blog-post-wrapper">

                            {blogs.slice(0, 4).map((blog, bitem) => (
                                <article className="single-post-item" key={bitem}>
                                    <div className="post-thumbnail-wrapper">
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}><img src={blog.bSingle} alt="" /></Link>
                                    </div>
                                    <div className="post-content-wrapper">
                                        <ul className="post-meta ul_li">
                                            <li><span><i className="far fa-user"></i><span className="author vcard">{blog.author}</span></span></li>
                                            <li><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}><i className="far fa-comments"></i> Comments ({blog.comment})</Link></li>
                                            <li><span className="posted-on"><i className="far fa-calendar-check"></i> <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.create_at}</Link></span></li>
                                        </ul>
                                        <h3 className="post-title border_effect"><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h3>
                                        <div className="post-excerpt">
                                            <p>Navigating Complexity with Confidence" is a concise and impactful title that captures the essence of how visa consultants can assist in making the intricate visa process more manageable ...</p>
                                        </div>
                                        <div className="post-read-more">
                                            <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="thm-btn">Read More</Link>
                                        </div>
                                    </div>
                                </article>
                            ))}

                            <div className="pagination_wrap pt-20">
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/blog"><i className="far fa-long-arrow-left"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog" className="current_page">01</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog">02</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog"><i className="fal fa-ellipsis-h"></i></Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog">08</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog"><i className="far fa-long-arrow-right"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <BlogSidebar />

                </div>
            </div>
        </section>

    )

}

export default BlogList;
