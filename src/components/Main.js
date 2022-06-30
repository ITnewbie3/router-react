import React from 'react';
import { Link } from 'react-router-dom'
const Main = () => {
    return (
        <div>
            메인페이지
            <ul>
                <li><Link to="/product/1/신발?search=procuctname&q=dome#test">1번상품</Link></li>
                <li><Link to="/product/2/노트북?search=green&q=abc#test2">2번상품</Link></li>
            </ul>
        </div>
    );
};

export default Main;