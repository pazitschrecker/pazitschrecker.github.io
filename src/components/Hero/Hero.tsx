import React from "react";

import cryBabyHorizontal from '../../images/cryBabyHorizontal.jpg';

import "./Hero.css";

export const Hero = () => {
    return <section>
        <div>
            <img src={cryBabyHorizontal} alt="Pazit in motion" className="heroImage" />
        </div>
    </section>
};