import React from 'react'

function Header() {
    return (
        <>
            <header id="header">
                <nav className="navbar navbar-expand top">
                    <div className="container header">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#" className="nav-link pl-0"><i className="fas fa-clock mr-2"></i>Open Hours: Mon - Sat - 9:00 - 18:00</a>
                            </li>
                        </ul>


                        <div className="ml-auto"></div>


                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#" className="nav-link"><i className="fas fa-phone-alt mr-2"></i>+1 (305) 1234-5678</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link"><i className="fas fa-envelope mr-2"></i>hello@example.com</a>
                            </li>
                        </ul>


                        <ul className="navbar-nav icons">
                            <li className="nav-item social">
                                <a href="#" className="nav-link"><i className="fab fa-facebook-f"></i></a>
                            </li>
                            <li className="nav-item social">
                                <a href="#" className="nav-link"><i className="fab fa-twitter"></i></a>
                            </li>
                            <li className="nav-item social">
                                <a href="#" className="nav-link pr-0"><i className="fab fa-linkedin-in"></i></a>
                            </li>
                        </ul>

                    </div>
                </nav>


                <nav className="navbar navbar-expand navbar-fixed sub">
                    <div className="container header">


                        <a className="navbar-brand" href="/">
                            <span className="brand">
                                <span className="featured">
                                    <span className="first">NEX</span>
                                </span>
                                <span className="last">GEN</span>
                            </span>




                        </a>


                        <div className="ml-auto"></div>


                        <ul className="navbar-nav items">
                            <li className="nav-item">
                                <a href="#header" className="smooth-anchor nav-link">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="smooth-anchor nav-link">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a href="#testimonials" className="smooth-anchor nav-link">TESTIMONIALS</a>
                            </li>
                            <li className="nav-item">
                                <a href="#video" className="smooth-anchor nav-link">VIDEO</a>
                            </li>
                            <li className="nav-item">
                                <a href="#skills" className="smooth-anchor nav-link">SKILLS</a>
                            </li>
                        </ul>


                        <ul className="navbar-nav toggle">
                            <li className="nav-item">
                                <a href="#" className="nav-link" data-toggle="modal" data-target="#menu">
                                    <i className="icon-menu m-0"></i>
                                </a>
                            </li>
                        </ul>


                        <ul className="navbar-nav action">
                            <li className="nav-item ml-3">
                                <a href="#contact" className="smooth-anchor btn ml-lg-auto primary-button">GET IN TOUCH</a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </header>
        </>
    )
}

export default Header