import React from 'react';
import Navbar from "@/components/_App/Navbar";
import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner';
import FeedbackStyleThree from '@/components/Common/FeedbackStyleThree';
import Partner from '@/components/MachineLearning/Partner';

const About3 = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="About Us" />

            <div className="agency-about-area ptb-80">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="agency-about-img">
                                <img src="/images/agency-image/agency-about-img.jpg" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="agency-about-content">
                                <span className="sub-title">About Us</span>
                                <h2>company overview</h2>
                                <div className="bar"></div>

                                <p>Simpel is the leading online B2B trade marketplace. We began our operations  and have grown due to excellent relationships with our clients. We started out small, with just a few people and a small office, but today we have hundreds of people working inside them.</p>

                                <p>We achieved our success because of how successfully we integrate with our clients. One complaint many people have about online business is that they can be disruptive. Our clients face no such issues.</p>

                                <blockquote>    
                                    <p>Simpel continues to grow ever day thanks to the confidence our clients have in us. We cover many industries such as financial, energy, business services, consumer products and also many small business.</p>      
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="about-inner-area">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Our Vision</h3>
                                    <p>Simplify & Empower Every MSME across the Value chain.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Our Mission</h3>
                                    <p>Enable MsmE's, Farmers, Small Retailers to maximize their potential and transcend beyond their present horizons.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="about-text">
                                    <h3>Who We Are</h3>
                                    <p>We are one of the fastest-growing IT firms in India, providing cutting-edge technology solutions & Web services to all leading Business organizations in the region and abroad.</p>
                                </div>
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

            <Team />

            <FeedbackStyleThree />
           
            <FunFactsArea />

            <div className="pb-80">
                <Partner />
            </div>
            
            <Footer />
        </>
    )
}

export default About3;