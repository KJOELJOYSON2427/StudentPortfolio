"use client"
import { Facebook, Github, Home, Info, Instagram, Linkedin, Mail, Youtube } from "lucide-react";


import "./contact.css";


const ContactForm = () =>{


    return (
        <>
            <div className="contact-wrapper">
                <div className="contact-container">
                    <div className="sidebar">
                        <div className="nav-icon">
                             <Home size={22}/>
                        </div>
                        <div className="nav-icon active">
              <Mail size={22} />
            </div>
            <div className="nav-icon">
              <Info size={22} />
            </div>

                    </div>

                     <div className="form-section">
            <div className="social-links">
 <div className="social-icon">
                <Facebook size={18} />
              </div>
              <div className="social-icon">
                <Instagram size={18} />
              </div>
              <div className="social-icon">
                <Linkedin size={18} />
              </div>
              <div className="social-icon">
                <Github size={18} />
              </div>
              <div className="social-icon">
                <Youtube size={18} />
              </div>
            </div>
            <div className="form-header">
              <h1 className="form-title">
                Let's <span className="highlight">talk</span>
              </h1>
              <p className="form-description">
                To request a quote or want to meet up for coffee, contact me directly or fill out the form and I will get back to you soon.
              </p>
            </div>
            </div>
                </div>
            </div>
        </>
    )
}

export { ContactForm };