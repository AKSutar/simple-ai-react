import React, { useState, useEffect } from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import * as Icon from 'react-feather';
// import Link from 'next/link';
 
function Team() {

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
        <>
            <Navbar />

            <PageBanner pageTitle="Our Awesome Team" />

            <div className="team-area pt-80 pb-50 bg-f9f6f6">
                <div className="container">
                    <div className="row justify-content-center">

                    { data.map(s =>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-team">
                                <div className="team-image">
                                    <img src={image+s.image} alt="image" /> {/*s.images*/}
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
                        </div>

                    )}
                        {/* <div className="col-lg-4 col-md-6">
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
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
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
                        </div>

                        <div className="col-lg-4 col-md-6">
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
                        </div>

                        <div className="col-lg-4 col-md-6">
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
                        </div>

                        <div className="col-lg-4 col-md-6">
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
                        </div>

                        <div className="col-lg-4 col-md-6">
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
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
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
                        </div>

                        <div className="col-lg-4 col-md-6">
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
                        </div> */}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Team;