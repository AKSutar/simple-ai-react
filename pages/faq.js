import React, { useState, useEffect } from 'react';
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from '@/components/Common/PageBanner'; 
import ContactForm from './../components/FAQ/ContactForm';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
 
function FAQ() {

    const [data, setPostId] = useState([]);

    useEffect(() => {
        const asyncRequestOptions = async()=>{

        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token_id: 'S5eJvEMXt5' })
        };
        
        const response = await fetch('http://gambit.inventics.tech/api/get_faqs_Api', requestOptions)
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

            <PageBanner pageTitle="FAQ" />

            <div className="faq-area ptb-80">
                <div className="container">
                    <div className="faq-accordion">
                        { data.map(s =>
                            <Accordion preExpanded={['a']} className="pb-3">
                                <AccordionItem uuid="">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                {s.title}?
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            {s.description}
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            

                                {/* <AccordionItem uuid="b">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                Is Smart Lock required for instant apps?
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="c">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                Can I have multiple activities in a single feature?
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            
                                <AccordionItem uuid="d">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                Can I share resources between features?
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="e">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                Is multidex supported for instant apps?
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="f">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            <span>
                                                Can I share resources between features?
                                            </span>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem> */}
                            </Accordion>
                        )}
                    </div>

                    {/* ContactForm */}
                    <ContactForm />
                </div>
            </div>
 
            <Footer />
        </>
    )
}

export default FAQ;