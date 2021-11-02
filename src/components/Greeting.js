import React from 'react';
import emoji from 'react-easy-emoji';
import { greeting } from '../portofolio';

const Greeting = () => {
    return (
        <div className="container d-flex greeting-container my-3" id="greeting">
            <div className="p-5">
                <img src={ process.env.PUBLIC_URL + "img/undraw_laravel_and_vue.svg"} class="img-fluid profile" alt="profile"></img>
            </div>
            <div className="main p-3 my-auto">
                <h1 className="greeting-text">
                    {" "}
                    {greeting.title}{" "}
                    <span className="wave-emoji">{emoji("👋")}</span>
                </h1>
                <p className = "greeting-text-p subTitle">
                    {greeting.subTitle}
                </p>
                {/* <SocialMedia /> */}
                <div className="button-greeting-div">
                </div>
            </div>
        </div>
    )
}

export default Greeting
