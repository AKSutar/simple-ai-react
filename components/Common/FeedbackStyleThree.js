import React, { useState, useEffect } from 'react';
import * as Icon from 'react-feather';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

function FeedbackStyleThree () {
    const [data, setPostId] = useState([]);
    const [image, setImage] = useState([]);


    useEffect(() => {
        const asyncRequestOptions = async()=>{

            // POST request using fetch inside useEffect React hook
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token_id: 'S5eJvEMXt5' })
            };
            
            const response = await fetch('http://gambit.inventics.tech/api/get_testimonials_Api', requestOptions)
            const data1 = await response.json();
            setPostId(data1.data);
            setImage('http://gambit.inventics.tech/');
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
        <div className="ml-feedback-area ptb-80">
            <div className="container">
                <div className="section-title st-fs-28">
                    <span className="sub-title">Testimonials</span>
                    <h2>Our Clients Feedback</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <Swiper
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        pauseOnMouseEnter: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="ml-feedback-slides"
                >
                    { data.map(s =>
                        <SwiperSlide>
                            <div className="single-testimonials-item">
                                <p>{s.description}</p>

                                <div className="client-info">
                                    <img src={image+s.image} alt="image" />

                                    <div className="rating">
                                        <Icon.Star />
                                        <Icon.Star />
                                        <Icon.Star />
                                        <Icon.Star />
                                        <Icon.Star />
                                    </div>

                                    <h3>{s.name}</h3>
                                    <span>{s.designation}</span>
                                </div> 
                            </div>
                        </SwiperSlide>
                    )}

                    {/* <SwiperSlide>
                        <div className="single-testimonials-item">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>

                            <div className="client-info">
                                <img src="/images/client-image/client2.jpg" alt="image" />

                                <div className="rating">
                                    <Icon.Star />
                                    <Icon.Star />
                                    <Icon.Star />
                                    <Icon.Star />
                                    <Icon.Star />
                                </div>

                                <h3>Steven Smith</h3>
                                <span>CEO at Envato</span>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="single-testimonials-item">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid ullam harum sit. Accusantium veritatis dolore ducimus illum, cumque excepturi, autem rerum illo amet placeat odit corporis!</p>

                            <div className="client-info">
                                <img src="/images/client-image/client3.jpg" alt="image" />

                                <div className="rating">
                                    <Icon.Star />
                                    <Icon.Star />
                                    <Icon.Star />
                                    <Icon.Star />
                                    <Icon.Star />
                                </div>

                                <h3>James Eva</h3>
                                <span>CEO at Envato</span>
                            </div>
                        </div>
                    </SwiperSlide> */}
                </Swiper>

            </div>

            {/* Shape Images */}
            <div className="user-shape1">
                <img src="/images/agency-image/agency-user1.png" alt="shape" />
            </div>
            <div className="user-shape2">
                <img src="/images/agency-image/agency-user2.png" alt="shape" />
            </div>
            <div className="user-shape3">
                <img src="/images/agency-image/agency-user3.png" alt="shape" />
            </div>
            <div className="user-shape4">
                <img src="/images/agency-image/agency-user4.png" alt="shape" />
            </div>
            <div className="user-shape5">
                <img src="/images/agency-image/agency-user5.png" alt="shape" />
            </div>
            <div className="user-shape6">
                <img src="/images/agency-image/agency-user6.png" alt="shape" />
            </div>
        </div>
    );
}

export default FeedbackStyleThree;