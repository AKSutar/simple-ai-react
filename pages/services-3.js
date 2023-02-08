import React, { useState, useEffect } from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';
import * as Icon from 'react-feather';
 
function Services3() {

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
            
            const response = await fetch('http://gambit.inventics.tech/api/get_service_Api', requestOptions)
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

            <PageBanner pageTitle="Services" />

            <div className="solutions-area ptb-80">
                <div className="container">
                    <div className="row justify-content-center">

                        { data.map(s =>

                            <div className="col-lg-3 col-sm-6 col-md-6">
                                <div className="single-solutions-box">
                                    <div className="icon">
                                        <img src={image+s.image} alt="image" />
                                    </div>
                                    <h3>
                                        <Link href="/service-details">
                                            <a>{s.category}</a>
                                        </Link>
                                    </h3>
                                    <p>{s.excerpt}</p>
                                    
                                    <Link href="/service-details">
                                        <a className="learn-more-btn">
                                            <Icon.PlusCircle /> Learn More
                                        </a>
                                    </Link>
                                </div>
                            </div>

                        )}
                        {/* <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box">
                                <div className="icon">
                                    <img src="/images/icon5.png" alt="image" />
                                </div>
                                <h3>
                                    <Link href="/service-details">
                                        <a>Cognitive Automation</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="/service-details">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box">
                                <div className="icon">
                                    <img src="/images/icon6.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>Cognitive Engagement</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="/service-details">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box">
                                <div className="icon">
                                    <img src="/images/icon7.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>Security & Surveillance</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="/service-details">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box">
                                <div className="icon">
                                    <img src="/images/icon6.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>Automatic Optimization</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="/service-details">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box">
                                <div className="icon">
                                    <img src="/images/icon7.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>Data Analysts</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="/service-details">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box">
                                <div className="icon">
                                    <img src="/images/icon5.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>Health & Manufacturing</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="/service-details">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-solutions-box">
                                <div className="icon">
                                    <img src="/images/icon4.png" alt="image" />
                                </div> 
                                <h3>
                                    <Link href="/service-details">
                                        <a>Software Engineers</a>
                                    </Link>
                                </h3>
                                <p>Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                
                                <Link href="/service-details">
                                    <a className="learn-more-btn">
                                        <Icon.PlusCircle /> Learn More
                                    </a>
                                </Link>
                            </div>
                        </div> */}
                    </div>
                </div>

                {/* Shape Images */}
                <div className="shape1">
                    <img src="/images/shape1.png" alt="shape" />
                </div>
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

export default Services3;