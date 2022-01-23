import React from 'react';

import { Link } from 'react-router-dom';

import './header.scss';

const Header = () => {

    return (
        <div className="logo">
            <img src="https://en.memesrandom.com/wp-content/uploads/2021/01/quiz-gaara-naruto-shippuden.jpg" alt="" />
            <Link to="/">theV1rTual</Link>
        </div>
    );
}

export default Header;
