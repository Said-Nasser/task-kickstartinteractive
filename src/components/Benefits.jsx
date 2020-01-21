import React from 'react';
import { FaUserMd, FaHistory, FaWallet } from "react-icons/fa";
import './benefits.scss';
const Benefits = () => {
    return (
        <section id="benefits">
            <header>
                <h2>لماذا تختار أطلب طبيب؟</h2>
            </header>
            <main className="benefits-cards">
                <article>
                    <div className="icon"><FaHistory /></div>
                    <p>خدمة ٢٤ ساعة طوال الاسبوع مع فريق محترف لمتابعة الحالة</p>
                </article>
                <article>
                    <div className="icon"><FaUserMd /></div>
                    <p>فريق كامل من الأطباء والممرضين المتخصصين في مجالاتهم</p>
                </article>
                <article>
                    <div className="icon"><FaWallet /></div>
                    <p>أفضل الأسعار علي مستوي الخدمات الطبية المنزلية في مصر</p>
                </article>
            </main>
        </section>
    );
}

export default Benefits;
