import React, { useState, useEffect } from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import * as Icon from 'react-feather';
import Link from 'next/link';
 
function Projects1() {

    const [data, setPostId] = useState([]);
    const [image, setImageId] = useState([]);


    useEffect(() => {
        const asyncRequestOptions = async()=>{
            // POST request using fetch inside useEffect React hook
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token_id: 'S5eJvEMXt5' })
            };
            
            const response = await fetch('http://gambit.inventics.tech/api/get_products_Api', requestOptions)
            const data1 = await response.json();
            setPostId(data1.data);
            setImageId('http://gambit.inventics.tech/');
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

            <PageBanner pageTitle="Products" />

            <div className="works-area pt-80 pb-50">
                <div className="container">
                    <div className="row justify-content-center">

                        { data.map(s =>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-works">
                                    <img src={image+s.image} alt="image" />

                                    <Link href="/project-details">
                                        <a className="icon">
                                            <Icon.Settings />
                                        </a>
                                    </Link>

                                    <div className="works-content">
                                        <h3>
                                            <Link href="/project-details">
                                                <a>{s.category}</a>
                                            </Link>
                                        </h3>
                                        <p>{s.short_description}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* <div className="col-lg-4 col-md-6">
                            <div className="single-works">
                                <img src="/images/works-image/works-image2.jpg" alt="image" />

                                <Link href="/project-details">
                                    <a className="icon">
                                        <Icon.Settings />
                                    </a>
                                </Link>

                                <div className="works-content">
                                    <h3>
                                        <Link href="/project-details">
                                            <a>UI/UX Design</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-works">
                                <img src="/images/works-image/works-image3.jpg" alt="image" />

                                <Link href="/project-details">
                                    <a className="icon">
                                        <Icon.Settings />
                                    </a>
                                </Link>

                                <div className="works-content">
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Apps Development</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-works">
                                <img src="/images/works-image/works-image4.jpg" alt="image" />

                                <Link href="/project-details">
                                    <a className="icon">
                                        <Icon.Settings />
                                    </a>
                                </Link>

                                <div className="works-content">
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Mock-up Design</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-works">
                                <img src="/images/works-image/works-image5.jpg" alt="image" />

                                <Link href="/project-details">
                                    <a className="icon">
                                        <Icon.Settings />
                                    </a>
                                </Link>

                                <div className="works-content">
                                    <h3>
                                        <Link href="/project-details">
                                            <a>E-commerce</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-works">
                                <img src="/images/works-image/works-image6.jpg" alt="image" />

                                <Link href="/project-details">
                                    <a className="icon">
                                        <Icon.Settings />
                                    </a>
                                </Link>

                                <div className="works-content">
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Web Design</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-works">
                                <img src="/images/works-image/works-image7.jpg" alt="image" />

                                <Link href="/project-details">
                                    <a className="icon">
                                        <Icon.Settings />
                                    </a>
                                </Link>

                                <div className="works-content">
                                    <h3>
                                        <Link href="/project-details">
                                            <a>React App Development</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-works">
                                <img src="/images/works-image/works-image8.jpg" alt="image" />

                                <Link href="/project-details">
                                    <a className="icon">
                                        <Icon.Settings />
                                    </a>
                                </Link>

                                <div className="works-content">
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Digital Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-works">
                                <img src="/images/works-image/works-image9.jpg" alt="image" />

                                <Link href="/project-details">
                                    <a className="icon">
                                        <Icon.Settings />
                                    </a>
                                </Link>

                                <div className="works-content">
                                    <h3>
                                        <Link href="/project-details">
                                            <a>Email Marketing</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape8 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape2 rotateme">
                    <img src="/images/shape2.svg" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shape4.svg" alt="shape" />
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default Projects1;