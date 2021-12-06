import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="home">
                <div className="info">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                    </p>
                    <Link className="button-class" to="/info">
                        <button type="button" className="btn btn-info">
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
