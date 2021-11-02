import React from 'react'
import SocialMedia from './SocialMedia'
import { contactInfo } from '../portofolio'

export default function Contact() {
    return (
        <div className="container d-flex my-5">
            <div className="main contact-margin-top flex-fill" id="contact">
                <div className="contact-div-main">
                    <div className="contact-header">
                        <h1 className="contact-heading contact-title">{contactInfo.title}</h1>
                        <p className= "subTitle contact-subtitle bold">
                            {contactInfo.subtitle}
                        </p>
                        <div className= "contact-text-div">
                            <a
                                className="contact-detail-email"
                                href={"mailto:" + contactInfo.email_address}
                            >
                                {contactInfo.email_address}
                            </a>=
                            <SocialMedia />
                            <h6 className="dark py-3">
                                Made by Winston Wijaya<br/>
                                Theme by <a href="https://github.com/saadpasta/developerFolio">developerFolio</a>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}