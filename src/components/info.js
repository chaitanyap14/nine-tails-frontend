import React from "react";
import { Link } from "react-router-dom";

const Info = () => {
    return (
        <div className="instr">
            <div className="instrone">
                <div className="overlay">
                    <div class="searchinstr">
                        <ul>
                            <li>
                                On clicking the 'Get Started' button, the user
                                will be redirected to the search page shown in
                                the adjacent image.
                            </li>
                            <li>
                                Here, the user can search their desired
                                universities using keywords form the university
                                name or the country name.
                            </li>
                            <li>
                                Clicking the 'Go' button will be redirect the
                                user to the University Page.
                            </li>
                        </ul>
                    </div>
                    <img
                        src="/images/ninetails_search.png"
                        alt=""
                        className="searchinstrimg"
                    />
                </div>
            </div>
            <div className="instrtwo">
                <div className="overlay">
                    <div class="uniinstr">
                        <ul>
                            <li>
                                The University Page contains information on the
                                university that was searched.
                            </li>
                            <li>
                                At the bottom of the page, 2 buttons can be
                                seen.
                            </li>
                            <li>
                                The button with the Home icon opens the
                                university website.
                            </li>
                            <li>
                                The button with the map icon opens a map showing
                                the location of the university.
                            </li>
                        </ul>
                    </div>
                    <img
                        src="/images/ninetails unipage.png"
                        alt=""
                        className="uniinstrimg"
                    />
                </div>
            </div>
            <div className="instrthree">
                <div className="overlay">
                    <h4 className="notice">
                        Note: Since this application is a personal project built
                        by college students, only globally well known
                        universities have been included. <br /> If a university
                        is searched that hasn't been included, information will
                        not be visible, but university name, country name and
                        location will be visible.
                    </h4>
                    <div class="availableunis">
                        <h2 className="avlunilisttitle">
                            These are some of the available universities.
                        </h2>
                        <ul className="avlunilist">
                            <li>University of Oxford</li>
                            <li>University of Southhampton</li>
                            <li>Harvard University</li>
                            <li>Stanford University</li>
                            <li>University of California, Berkeley</li>
                            <li>University of Warwick</li>
                            <li>Arizona State University</li>
                            <li>Boston University</li>
                            <li>Brown University</li>
                            <li>California Institute of Technology</li>
                            <li>California State University, Long Beach</li>
                            <li>California State University, Fullerton</li>
                            <li>Columbia University</li>
                            <li>George Washington University</li>
                            <li>University of Florida</li>
                        </ul>
                    </div>
                    <Link className="button-class" to="/form">
                        <button className="continuebtn btn btn-lg btn-info">
                            Continue
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Info;
