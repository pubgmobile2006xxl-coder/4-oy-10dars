import React from 'react';
import './Footer.css';
import grop from '../../assets/Group 1.png'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t, i18n } = useTranslation();

    const handleChangLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <footer>
            <div className="container">
                <div className="footer_nav">
                    <img src={grop} alt="rasm" />

                    <ul>
                        <li><a href="#">{t("header.Home")}</a></li>
                        <li><a href="#">{t("header.About")}</a></li>
                        <li><a href="#">{t("header.Services")}</a></li>
                        <li><a href="#">{t("header.Work")}</a></li>
                        <li><a href="#">{t("header.Blog")}</a></li>
                        
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;