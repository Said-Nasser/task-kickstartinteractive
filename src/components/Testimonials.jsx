import React, { useEffect } from 'react';
import { FaFacebookSquare } from "react-icons/fa"
import "swiper/css/swiper.min.css";
import Swiper from "swiper";
import './testimonials.scss';

const Testimonials = () => {
    useEffect(() => {
        let swiper = new Swiper('#testimonials main.swiper-container', {
            breakpoints: {
                1200: {
                    slidesPerView: 3
                },
                991: {
                    slidesPerView: 3
                },
                768: {
                    slidesPerView: 2
                },
                578: {
                    slidesPerView: 2
                },
                0: {
                    slidesPerView: 1
                }
            },
            cssMode: true,
            mousewheel: true,
            pagination: {
                el: '.swiper-pagination.testimonials',
                clickable: true
            },
        })

        // clean up 
        return () => {
            swiper.destroy(true, true)
        }
    });
    return (
        <section id="testimonials">
            <header>
                <h2>ماذا يقول عنا العملاء</h2>
            </header>
            <main className="swiper-container">
                <div className="swiper-wrapper">
                    <article className="swiper-slide">
                        <i className="icon"><FaFacebookSquare /></i>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sapiente repellendus consequuntur magnam molestias ea repellat.
                        </p>
                        <div className="user-profile">
                            <img src="./images/user.jpg" alt="user" width="50px" />
                            <h4>Ahmad Kareem</h4>
                        </div>
                    </article>
                    <article className="swiper-slide">
                        <i className="icon"><FaFacebookSquare /></i>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sapiente repellendus consequuntur magnam molestias ea repellat.
                        </p>
                        <div className="user-profile">
                            <img src="./images/user.jpg" alt="user" width="50px" />
                            <h4>Ahmad Kareem</h4>
                        </div>
                    </article>
                    <article className="swiper-slide">
                        <i className="icon"><FaFacebookSquare /></i>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sapiente repellendus consequuntur magnam molestias ea repellat.
                        </p>
                        <div className="user-profile">
                            <img src="./images/user.jpg" alt="user" width="50px" />
                            <h4>Ahmad Kareem</h4>
                        </div>
                    </article>
                    <article className="swiper-slide">
                        <i className="icon"><FaFacebookSquare /></i>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sapiente repellendus consequuntur magnam molestias ea repellat.
                        </p>
                        <div className="user-profile">
                            <img src="./images/user.jpg" alt="user" width="50px" />
                            <h4>Ahmad Kareem</h4>
                        </div>
                    </article>
                    <article className="swiper-slide">
                        <i className="icon"><FaFacebookSquare /></i>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sapiente repellendus consequuntur magnam molestias ea repellat.
                        </p>
                        <div className="user-profile">
                            <img src="./images/user.jpg" alt="user" width="50px" />
                            <h4>Ahmad Kareem</h4>
                        </div>
                    </article>
                    <article className="swiper-slide">
                        <i className="icon"><FaFacebookSquare /></i>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Sapiente repellendus consequuntur magnam molestias ea repellat.
                        </p>
                        <div className="user-profile">
                            <img src="./images/user.jpg" alt="user" width="50px" />
                            <h4>Ahmad Kareem</h4>
                        </div>
                    </article>
                </div>
                {/* Add Arrows */}
                {/* <span className="swiper-button-next"></span> */}
                {/* <span className="swiper-button-prev"></span> */}
                {/* Add Pagination */}
                <span className="swiper-pagination testimonials"></span>
            </main>
        </section>
    );
}

export default Testimonials;
