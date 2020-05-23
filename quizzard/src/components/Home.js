import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <Fragment>
        <title>Home - Quiz App</title>
        <div id="home">
            <section>
                <h1>Computer Quizzard!</h1>
                <div className="play-button-container">
                    <ul>
                        <li><Link className="play-button" to="/play/quiz">Play</Link></li>
                    </ul>
                </div>
                <div className="auth-container">
                    <Link to="/login" className="auth-buttons" id="login-button">Login</Link>
                    <Link to="/register" className="auth-buttons" id="signup-button">Register</Link>
                </div>
            </section>
        </div>
    </Fragment>
);

export default Home;