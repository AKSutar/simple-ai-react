import React, { useState, useEffect } from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import * as Icon from 'react-feather';
import BlogSidebar from '@/components/Blog/BlogSidebar';
 
function BlogDetails() {

    const [data, setPostId] = useState([]);

    useEffect(() => {
        const asyncRequestOptions = async()=>{
            // POST request using fetch inside useEffect React hook
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token_id: 'S5eJvEMXt5' })
            };
            
            const response = await fetch('http://centralblog.ekaltech.com/api/blog', requestOptions)
            const data1 = await response.json();
            setPostId(data1.data);
            console.log(data1.data);
        }
        asyncRequestOptions();
        // console.log(data.id);
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


    function stripHTML(myString) {
        let el = document.createElement("div");
        el.innerHTML = myString;
        var textarea=el.textContent;
        var textarea2=el.innerText;
        // console.log(textarea.substring(0,3));
        return textarea || textarea2 || "";
    }

    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Blog Details" /> 

            <div className="blog-details-area ptb-80">
                <div className="container">
                    <div className="row">

                    { data.map(s =>
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src={s.image} alt="image" />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <Icon.Clock />{/*  September 31, 2021*/}{s.publish_at}
                                            </li>
                                            <li>
                                                <Icon.User /> <a href="#">{s.author}</a>
                                            </li>
                                        </ul>
                                    </div>
 
                                    <h2>{s.title}</h2> 

                                    <p>{s.excerpt}</p>
          
                                </div>

                                

                                

                                <div className="comments-area">
                                    
                                    <div className="comment-respond">
                                        <h3 className="comment-reply-title">Leave a Reply</h3>

                                        <form className="comment-form">
                                            <p className="comment-notes">
                                                <span id="email-notes">Your email address will not be published.</span>
                                                Required fields are marked 
                                                <span className="required">*</span>
                                            </p>
                                            <p className="comment-form-comment">
                                                <label>Comment</label>
                                                <textarea name="comment" id="comment" cols="45" rows="5" maxLength="65525" required="required"></textarea>
                                            </p>
                                            <p className="comment-form-author">
                                                <label>Name <span className="required">*</span></label>
                                                <input type="text" id="author" name="author" required="required" />
                                            </p>
                                            <p className="comment-form-email">
                                                <label>Email <span className="required">*</span></label>
                                                <input type="email" id="email" name="email" required="required" />
                                            </p>
                                            <p className="comment-form-url">
                                                <label>Website</label>
                                                <input type="url" id="url" name="url" />
                                            </p>
                                            <p className="comment-form-cookies-consent">
                                                <input type="checkbox" value="yes" name="comment-cookies-consent" id="comment-cookies-consent" />
                                                <label htmlFor="comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                                            </p>
                                            <p className="form-submit">
                                                <input type="submit" name="submit" id="submit" className="submit" value="Post Comment" />
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                        <div className="col-lg-4 col-md-12">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default BlogDetails;