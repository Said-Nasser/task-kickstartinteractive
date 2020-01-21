import React, { useEffect } from 'react';
import "swiper/css/swiper.min.css";
import Swiper from "swiper";
import './doctors.scss';
const Doctors = () => {

    useEffect(() => {
        let swiper = new Swiper('#doctors main.swiper-container', {
            breakpoints: {
                1200: {
                    slidesPerView: 3
                },
                991: {
                    slidesPerView: 3
                },
                768: {
                    slidesPerView: 3
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
            navigation: {
                nextEl: '.swiper-button-next.doctors',
                prevEl: '.swiper-button-prev.doctors',
            },
            pagination: {
                el: '.swiper-pagination.doctors',
                clickable: true
            },
        })
        // clean up 
        return () => {
            swiper.destroy(true, true)
        }
    });
    return (
        <section id="doctors">
            <header>
                <h2>نخبة من أطبائنا</h2>
            </header>
            <main className="swiper-container">
                <div className="swiper-wrapper">
                    <article className="swiper-slide">
                        <img src="./images/doctor.png" alt="doctor" width="100px" />
                        <div className="media-body">
                            <h3>د/ ثروت عبدالمعطي</h3>
                            <p>استشاري الباطنة والغدد الصماء</p>
                        </div>
                    </article>
                    <article className="swiper-slide">
                        <img src="./images/doctor.png" alt="doctor" width="100px" />
                        <div className="media-body">
                            <h3>د/ ثروت عبدالمعطي</h3>
                            <p>استشاري الباطنة والغدد الصماء</p>
                        </div>
                    </article>
                    <article className="swiper-slide">
                        <img src="./images/doctor.png" alt="doctor" width="100px" />
                        <div className="media-body">
                            <h3>د/ ثروت عبدالمعطي</h3>
                            <p>استشاري الباطنة والغدد الصماء</p>
                        </div>
                    </article>
                    <article className="swiper-slide">
                        <img src="./images/doctor.png" alt="doctor" width="100px" />
                        <div className="media-body">
                            <h3>د/ ثروت عبدالمعطي</h3>
                            <p>استشاري الباطنة والغدد الصماء</p>
                        </div>
                    </article>
                </div>
                {/* Add Arrows */}
                <span className="swiper-button-next doctors"></span>
                <span className="swiper-button-prev doctors"></span>
                {/* Add Pagination */}
                <span className="swiper-pagination doctors"></span>
            </main>
        </section>
    );
}

export default Doctors;
