import React from 'react';
import './Header.css';
import grop from '../../assets/Group 1.png'
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t, i18n } = useTranslation();

    const handleChangLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <img src={grop} alt="rasm" />

                    <ul>
                        <li><a href="#">{t("header.Home")}</a></li>
                        <li><a href="#">{t("header.About")}</a></li>
                        <li><a href="#">{t("header.Services")}</a></li>
                        <li><a href="#">{t("header.Work")}</a></li>
                        <li><a href="#">{t("header.Blog")}</a></li>
                        
                        <select onChange={handleChangLanguage}>
                            <option value="uz">Uz</option>
                            <option value="ru">Rus</option>
                            <option value="en">Eng</option>
                        </select>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;