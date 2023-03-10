import React, { useState, useEffect } from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import * as Icon from 'react-feather';
import Link from 'next/link';
 
function Blog5() {
    const [data, setPostId] = useState([]);

    useEffect( () => {
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
        var textdata=el.textContent;
        var textdata2=el.innerText;
        // console.log(textdata.substring(0,3));
        return textdata || textdata2 || "";
     }

    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Blog Grid" /> 

            <div className="blog-area ptb-80">
                <div className="container">
                    <div className="row">

                    { data.map(s => 
                        
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-post-item">
                                    <div className="post-image">
                                        <Link href="/blog-details">
                                            <a>
                                                <img src={s.image} alt="image" />
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="post-content">
                                        <ul className="post-meta">
                                            <li><a href="#">{s.author}</a></li>
                                            <li>{s.publish_at}</li>
                                        </ul>
                                        <h3>
                                            <Link href="/blog-details">
                                                <a>{stripHTML(s.content).substring(0,17) }...</a>
                                                
                                            </Link>
                                        </h3>

                                        <Link href="/blog-details">
                                            <a className="read-more-btn">
                                                Read More <Icon.PlusCircle />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        
                    )}

                        {/* <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-item">
                                <div className="post-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog-image/blog2.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li><a href="#">Admin</a></li>
                                        <li>August 15, 2021</li>
                                    </ul> 
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Tips to Protecting Your Business and Family</a>
                                        </Link>
                                    </h3>

                                    <Link href="/blog-details">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-item">
                                <div className="post-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog-image/blog3.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li><a href="#">Admin</a></li>
                                        <li>August 15, 2021</li>
                                    </ul> 
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Protect Your Workplace from Cyber Attacks</a>
                                        </Link>
                                    </h3>

                                    <Link href="/blog-details">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-item">
                                <div className="post-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog-image/blog4.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li><a href="#">Admin</a></li>
                                        <li>August 15, 2021</li>
                                    </ul> 
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>The security risks of changing package owners</a>
                                        </Link>
                                    </h3>

                                    <Link href="/blog-details">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-item">
                                <div className="post-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog-image/blog5.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li><a href="#">Admin</a></li>
                                        <li>August 15, 2021</li>
                                    </ul> 
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Tips to Protecting Your Business and Family</a>
                                        </Link>
                                    </h3>

                                    <Link href="/blog-details">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post-item">
                                <div className="post-image">
                                    <Link href="/blog-details">
                                        <a>
                                            <img src="/images/blog-image/blog6.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="post-content">
                                    <ul className="post-meta">
                                        <li><a href="#">Admin</a></li>
                                        <li>August 15, 2021</li>
                                    </ul> 
                                    <h3>
                                        <Link href="/blog-details">
                                            <a>Protect Your Workplace from Cyber Attacks</a>
                                        </Link>
                                    </h3>

                                    <Link href="/blog-details">
                                        <a className="read-more-btn">
                                            Read More <Icon.PlusCircle />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                        
                        {/* Pagination */}
                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center">
                                    
                                        <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                                        
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        
                                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shape3.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape6 rotateme">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default Blog5;