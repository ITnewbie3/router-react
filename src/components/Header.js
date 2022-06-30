import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <div>
            <h1>GreenMall</h1>
            <ul>
                <li><NavLink to="/Main" className={({isActive})=> isActive ? "okay" : ""}>메인페이지</NavLink></li>
                <li><NavLink to="/product/*/*" className={({isActive})=>"green " + (isActive ? "okay" : "")}>상품페이지</NavLink></li>
                <li><NavLink to="/detail">자세히보기</NavLink></li>
                <li><NavLink to="/detail/detail1" className={({isActive})=>"green " + (isActive ? "okay" : "")}>1번상품보기</NavLink></li>
                <li><NavLink to="/detail/detail2" className={({isActive})=>"green " + (isActive ? "okay" : "")}>2번상품보기</NavLink></li>
                <li><NavLink to="/info" className={({isActive})=>"green " + (isActive ? "okay" : "")}>info 정보보기</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;