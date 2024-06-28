import React from 'react'
import Navbar from './Navbar'

const HomePage = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 cpl-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div id="carouselExampleDark" class="carousel carousel-dark slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <img src="https://akm-img-a-in.tosshub.com/sites/dailyo//resources/202308/blob110823105252.png" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5> <p class="fs-1">WELCOME TO AIR INDIA AIRWAYS</p></h5>
                                     <p class="fs-2">.Air India is the flag carrier airline of India. It is owned by Air India Limited, a Tata Group enterprise and operates a fleet of Airbus and Boeing aircraft serving 102 domestic and international destinations. It is headquartered in Gurgaon text</p>
                                    </div>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <img src="https://www.travelzoo.com/images/tzoo.22878.0.340449.getty_airplane.jpg" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5><p class="fs-1">INTRODUCTION</p></h5>
                                        <p>Experience the elegance of TUMI amenities exclusively in our Premium Economy class. TUMI is synonymous with quality and sophistication, and we’re delighted to offer you these premium amenities that add a touch of luxury to your journey.</p>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.upp-prod-eu.s3.amazonaws.com%2F78e636b0-0f7b-11e7-b030-768954394623?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1" class="d-block w-100" alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5><p class="fs-1">KNOW MORE</p></h5>
                                        <p>Variety is the spice of life, and our Premium Economy menu embraces this philosophy. Enjoy an expanded selection of dishes, catering to different tastes and dietary preferences. With more choices than ever before, your culinary journey will be a delightful exploration of flavors.</p>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
