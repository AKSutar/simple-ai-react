import React, { useState, useEffect } from 'react';
import * as Icon from 'react-feather';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

function Team () {

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
            
            const response = await fetch('http://gambit.inventics.tech/api/get_team_Api', requestOptions)
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
        <div className="team-area ptb-80 bg-f9f6f6">
            <div className="container">
                <div className="section-title">
                    <h2>Our Awesome Team</h2>
                    <div className="bar"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>

            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 6000,
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                    1500: {
                        slidesPerView: 5,
                    },
                }}
                modules={[Pagination, Autoplay]}
                className="team-slider"
            >

                { data.map(s =>
                    <SwiperSlide>
                        <div className="single-team">
                            <div className="team-image">
                                <img src={image+s.image} alt="image"  style={{ maxHeight: '187px',maxWidth: '100%' }}/>
                            </div>

                            <div className="team-content">
                                <div className="team-info">
                                    <h3>{s.name}</h3>
                                    <span>{s.designation}</span>
                                </div>

                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <Icon.Facebook />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com/" target="_blank">
                                            <Icon.Twitter />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank">
                                            <Icon.Linkedin />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <Icon.Instagram />
                                        </a>
                                    </li>
                                </ul>

                                <p>{stripHTML(s.description).substring(0,17)}....</p>
                            </div>
                        </div>
                    </SwiperSlide>
                )}

                {/* <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/team2.jpg" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Alex Maxwel</h3>
                                <span>Marketing Manager</span>
                            </div>

                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.gitlab.com/" target="_blank">
                                        <Icon.Gitlab />
                                    </a>
                                </li>
                            </ul>

                            <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/team3.jpg" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Janny Cotller</h3>
                                <span>Web Developer</span>
                            </div>

                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.gitlab.com/" target="_blank">
                                        <Icon.Gitlab />
                                    </a>
                                </li>
                            </ul>

                            <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/team4.jpg" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Jason Statham</h3>
                                <span>UX/UI Designer</span>
                            </div>

                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.gitlab.com/" target="_blank">
                                        <Icon.Gitlab />
                                    </a>
                                </li>
                            </ul>

                            <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/team5.jpg" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Corey Anderson</h3>
                                <span>Project Manager</span>
                            </div>

                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.gitlab.com/" target="_blank">
                                        <Icon.Gitlab />
                                    </a>
                                </li>
                            </ul>

                            <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/team1.jpg" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Josh Buttler</h3>
                                <span>CEO & Founder</span>
                            </div>

                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.gitlab.com/" target="_blank">
                                        <Icon.Gitlab />
                                    </a>
                                </li>
                            </ul>

                            <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/team2.jpg" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Alex Maxwel</h3>
                                <span>Marketing Manager</span>
                            </div>

                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.gitlab.com/" target="_blank">
                                        <Icon.Gitlab />
                                    </a>
                                </li>
                            </ul>

                            <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/team3.jpg" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Janny Cotller</h3>
                                <span>Web Developer</span>
                            </div>

                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.gitlab.com/" target="_blank">
                                        <Icon.Gitlab />
                                    </a>
                                </li>
                            </ul>

                            <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/team4.jpg" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Jason Statham</h3>
                                <span>UX/UI Designer</span>
                            </div>

                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.gitlab.com/" target="_blank">
                                        <Icon.Gitlab />
                                    </a>
                                </li>
                            </ul>

                            <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className="single-team">
                        <div className="team-image">
                            <img src="/images/team-image/team5.jpg" alt="image" />
                        </div>

                        <div className="team-content">
                            <div className="team-info">
                                <h3>Corey Anderson</h3>
                                <span>Project Manager</span>
                            </div>

                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank">
                                        <Icon.Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.gitlab.com/" target="_blank">
                                        <Icon.Gitlab />
                                    </a>
                                </li>
                            </ul>

                            <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum. </p>
                        </div>
                    </div>
                </SwiperSlide> */}
            </Swiper>
        </div>
    )
}

export default Team;