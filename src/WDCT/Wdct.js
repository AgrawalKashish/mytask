import React from 'react'

export default function Wdct() {
    return (
        <>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="">WDCT</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">ABOUT US</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="app">
                    <h2> WEATHER</h2>
                    <input type="text" id="currentDate" class="date" />
                    <div class="msg">Enter City Name</div>

                    <div class="searchinputbox">
                        <input type="text" id="input" class="input" placeholder="Type Here" />
                    </div>
                    <div class="weather-body">
                        <div class="location">
                            <div class="city" id="city">
                            </div>
                            <div class="weatherstatus">
                                <div class="temp" id="temp"> 34&deg;C</div>
                                <div class="min-max" id="min-max">Min-32&deg;C /Max-34&deg;C</div>
                                <div class="wtype" id="wtype">haze</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer" id="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm" style="text-align: center;font-size: 30px;">
                            <input type="text" id="currentTime" class="time" />
                        </div>
                    </div>
                </div>
                <footer class="page-footer font-small special-color-dark pt-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <form class="form-inline">
                                    <input class="form-control form-control-sm mr-3 w-75" type="text" placeholder="Search"
                                        aria-label="Search" />
                                    <i class="fas fa-search" aria-hidden="true"></i>
                                </form>

                            </div>
                            <div class="col-md-6 mb-4">

                                <form class="input-group">
                                    <input type="email" class="form-control form-control-sm" placeholder="Your email"
                                        aria-label="Your email" aria-describedby="basic-addon2" />
                                    <div class="input-group-append">
                                        <button class="btn btn-sm btn-outline-white my-0" style="color: aliceblue;" type="button">Sign up</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="footer-container"
                        style=" margin-bottom: 2em;">
                        <div class="footer">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm">
                                        <div class="footer-heading footer-1">
                                            <h2 style="color: white;">About Us</h2>
                                            <a href="#" style={{textDecoration: "none"}}>Blog</a><br />
                                            <a href="#" style={{textDecoration: "none"}}>Demo</a><br />
                                            <a href="#" style={{textDecoration: "none"}}>Investors</a><br />
                                            <a href="#" style={{textDecoration: "none"}}>Customers</a>
                                        </div>
                                    </div>
                                    <div class="col-sm">
                                        <div class="footer-heading footer-3">
                                            <h2 style="color: white;">Social Media</h2>
                                            <a href="#" style={{textDecoration: "none"}}>Instagram</a><br />
                                            <a href="#" style={{textDecoration: "none"}}>Facebook</a><br />
                                            <a href="#" style={{textDecoration: "none"}}>Linkedin</a><br />
                                            <a href="#" style={{textDecoration: "none"}}>E-mail</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
    </>
  )
}