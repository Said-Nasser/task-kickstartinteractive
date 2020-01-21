import React, { useEffect } from 'react';
import 'intl-tel-input/build/css/intlTelInput.min.css';
import intlTelInput from 'intl-tel-input';
import './landing.scss';
const Landing = () => {
    useEffect(() => {
        intlTelInput(document.querySelector("#phone"))
    });
    return (
        <section id="landing">
            <div className="form-container">
                <h3>احجز زيارة منزلية الآن</h3>
                <form action="">
                    <input type="text" placeholder="الاسم بالكامل" />
                    <input type="tel" name="phone" id="phone" placeholder="رقم العاتف" />
                    <input type="email" name="email" id="email" placeholder="البريد الإلكتروني" />
                    <textarea name="address" id="address" cols="30" rows="5" placeholder="العنوان"></textarea>
                    <button>احجز الآن</button>
                </form>
            </div>
            <header>
                <h1> 
                    <span className="small">نحن نخبة متميزة من</span> 
                    <br/>
                    <span className="large">أطباء الأمراض الباطنة</span></h1>
                <p>
                    أطباء الأمراض الباطنة هي الخطوة الأولي التي تسبق تشخيص أي طبيب آخر متخصص.
                    في أطلب طبيب نوفر لك أفضك متخصصين أمراض الباطنة بكفاءات عالية ودقة في الأداء
                     لتطمئن علي صحتك و صحة أسرتك وأنت في المنزل
                </p>
            </header>
        </section>
    );
}

export default Landing;
