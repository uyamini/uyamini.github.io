import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from '@formspree/react';
import "./ContactPage.css"

export default function ContactPage() {
    return (
        <>
            <div id="contact" className="contact">
                <h1>Contact</h1>
                <div className="portfolio-container"></div>

                        <div class="email">
                            <i class="bi bi-envelope" style={{ textAlign: 'center' }}></i>
                            <h4 style={{ textAlign: 'center' }} >Email:</h4>
                            <p style={{ textAlign: 'center' }}>uyamini1996@gmail.com</p>
                        </div>

                        <div class="phone">
                            <i class="bi bi-phone" style={{ textAlign: 'center' }}></i>
                            <h4 style={{ textAlign: 'center' }}>Phone:</h4>
                            <p style={{ textAlign: 'center' }}>+1 872 985 4516</p>
                        </div>

                        <div class="address">
                            <i class="bi bi-geo-alt" style={{ textAlign: 'center' }}></i>
                            <h4 style={{ textAlign: 'center' }} >Address:</h4>
                            <p style={{ textAlign: 'center' }}>728 Clark St, Evanston, IL 60201</p>
                        </div>

                        <div class="address">
                            <i class="bi bi-geo-alt" style={{ textAlign: 'center' }}></i>
                            <h4 style={{ textAlign: 'center' }} >Social:</h4>
                            <p style={{ textAlign: 'center' }}><a href="https://www.linkedin.com/in/uyamini/">https://www.linkedin.com/in/uyamini/</a></p>
                        </div>
            </div>

        </>
    );
}
