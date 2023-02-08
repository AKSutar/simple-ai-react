import React from 'react';
import * as Icon from 'react-feather';

const ContactInfo = () => {
    return (
        <div className="contact-info-area ptb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.Mail />
                            </div>
                            <h3>Mail Here</h3>
                            <p><a href="mailto:contact@simpel.ai">contact@simpel.ai</a></p>
                            {/* <p><a href="mailto:info@startp.com">info@startp.com</a></p> */}
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.MapPin />
                            </div>
                            <h3>Visit Here</h3>
                            <p>01 & 02, K NO 189/1, ROOPENA AGRAHARA BOMMANAHALLI Bangalore, 560068, India</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="contact-info-box">
                            <div className="icon">
                                <Icon.Phone />
                            </div>
                            <h3>Call Here</h3>
                            <p><a href="tel:+91-9900510100">+91-9900510100</a></p>
                            {/* <p><a href="tel:+2414524526">+241 452 4526</a></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo;  