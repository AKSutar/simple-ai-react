import React from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area bg-f7fafd">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <Link href="/it-startup">
                                    <a>
                                        <img src="/images/header-simpel-logo_02.png" alt="logo" />
                                    </a>
                                </Link>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Company</h3>
                            <ul className="list">
                                <li>
                                    <Link href="/about-3">
                                        <a>About Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services-3">
                                        <a>Services</a>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/features">
                                        <a>Features</a>
                                    </Link>
                                </li> */}
                                {/* <li>
                                    <Link href="/pricing">
                                        <a>Our Pricing</a>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link href="/blog-1">
                                        <a>Latest News</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Support</h3>
                            <ul className="list">
                                <li>
                                    <Link href="/faq">
                                        <a>FAQ's</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/term-condition">
                                        <a>Terms & Condition</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/team">
                                        <a>Team</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>
                            
                            <ul className="footer-contact-info">
                                <li> 
                                    <Icon.MapPin />
                                    01 & 02, K NO 189/1, ROOPENA<br />AGRAHARA BOMMANAHALLI<br />Bangalore, 560068, India
                                </li>
                                <li>
                                    <Icon.Mail />
                                    Email: <a href="mailto:contact@simpel.ai">contact@simpel.ai</a>
                                </li>
                                <li> 
                                    <Icon.PhoneCall />
                                    Phone: <a href="tel:321984754">+91-9900510100</a>
                                </li>
                            </ul>
                            <ul className="social-links">
                                <li> 
                                    <a href="https://www.facebook.com/" className="facebook" target="_blank">
                                        <Icon.Facebook />
                                    </a> 
                                </li>
                                <li>
                                    <a href="https://www.twitter.com/" className="twitter" target="_blank">
                                        <Icon.Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagramcom/" className="instagram" target="_blank">
                                        <Icon.Instagram />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/simpeltechlabspvtltd/" className="linkedin" target="_blank">
                                        <Icon.Linkedin />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="copyright-area">
                            <p>Copyright &copy; {currentYear} SIMPEL TECHLABS PRIVATE LIMITED | All rights reserved 
                                {/* <a href="https://www.inventics.tech/" target="_blank">Inventics</a> */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <img src="/images/map.png" className="map" alt="map" />

            {/* Shape Images */}
            <div className="shape1">
                <img src="/images/shape1.png" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
        </footer>
    )
     
}

export default Footer; 