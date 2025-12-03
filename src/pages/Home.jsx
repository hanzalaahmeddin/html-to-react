import React from 'react'
import bg5 from "../assets/images/bg-5.jpg";

function Home() {
    return (
        <>
            <section id="slider" className="hero p-0 odd">
                <div className="swiper-container no-slider animation slider-h-100 slider-h-auto">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide slide-center">


                            <img src={bg5} alt="Full Image" className="full-image" data-mask="0" />

                            <div className="slide-content row">
                                <div className="col-12 d-flex justify-content-start inner">
                                    <div className="left text-left">


                                        <h1 className="title effect-static-text">
                                            <span className="pre-title m-0">Jacob Hill Jr.</span>
                                            LIFE <span className="featured"><span>COACH</span></span>
                                        </h1>
                                        <p className="description bigger">Train your mind to see the bright side in any situation. Opportunities do not arise you create them.</p>


                                        <div className="buttons">
                                            <div className="d-sm-inline-flex">
                                                <a href="#contact" className="smooth-anchor mt-4 btn primary-button">GET IN TOUCH</a>
                                                <a href="#about" className="smooth-anchor ml-sm-4 mt-4 btn outline-button">READ MORE</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section id="about" className="section-1 highlights team image-right">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8 align-self-top text">
                            <div className="row intro m-0">
                                <div className="col-12 p-0">
                                    <span className="pre-title m-0">You more prepared</span>
                                    <h2><span className="featured"><span>Boost </span></span> Your Creativity</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 p-0 pr-md-5">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis diam varius diam ultricies lacinia. <b>Mauris lacus tellus, ultrices eu volutpat sit amet, finibus a ipsum.</b> Nullam sit amet pretium felis.</p>
                                    <p>Curabitur convallis, diam a egestas iaculis, neque lorem interdum felis, in viverra lacus tortor in leo.</p>
                                    <p>Donec tristique diam id mi venenatis facilisis eget sed mi. Phasellus malesuada nulla diam, a dignissim quam congue et.</p>
                                    <p><b>Cras sem ante, accumsan quis sem sed, rutrum varius nunc.</b></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 align-self-end">
                            <div className="quote mt-5 mt-lg-0">
                                <div className="quote-content">
                                    <h4>Consultant Speech</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut lacinia diam.</p>
                                    <p>Vivamus efficitur et est quis posuere. Nulla sollicitudin vulputate dui, id pretium tortor congue eu. Integer aliquet justo eu quam volutpat ullamcorper.</p>
                                    <h5>Jacob Hill Jr.</h5>
                                </div>
                                <i className="quote-right fas fa-quote-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home