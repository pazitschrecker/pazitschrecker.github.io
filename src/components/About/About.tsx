import React from "react";

import "./About.css";
import cryBabyBW from '../../images/cryBabyBW.jpg';

export const About = () => {
    return (
        <section className="container" id="about">

            <div className="content">
                <div className="aboutItem">
                    <div className="aboutText">
                        <h2 className="title">About</h2>
                        <p>
                            Pazit Schrecker (Pazi) is a New York based aerialist with a background in gymnastics, modern dance, and ballet. Growing up in New York City, she received dance training from Erin Gottwald and later attended Aika Ballet School and the French Academie of Ballet.
                            She continued her dance education at Barnard College and performed with multiple student groups while working towards a degree in Computer Science. Pazit began aerial silks classes several months after graduating college and has been in the air ever since.
                        </p>
                        <br />
                        <p>
                            Pazit now primarily focuses on aerial rope and enjoys the dynamic nature and story-telling possibilities it offers.
                            She loves experimenting with choreography and ideas to create new act and is often draws inspiration from music. She has performed at Aerial Arts NYC, Streb, and Cirque Haus.
                            When she is on the ground, she enjoys sewing and designing costumes.
                        </p>
                    </div>
                </div>
                <div className="aboutItem">
                    <div className="aboutImage">
                        <img src={cryBabyBW} alt="Pazit on a rope - Black and White" className="aboutImage" />

                    </div>
                </div>
            </div>
        </section >
    );
};