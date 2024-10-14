import React, { useCallback, useState } from "react";
import ReactModal from 'react-modal';
import { useIsMobile, useIsTablet } from "../../utils";

import { MdClose } from "react-icons/md";

import "./Performance.css";
import cryBabyBW from '../../images/cryBabyBW.jpg';
import heroCirqueHaus from '../../images/heroCirqueHaus.jpg';
import cryBabySplit from '../../images/cryBabySplit.jpg';
import heroSplitAANYC from '../../images/heroSplitAANYC.jpg';
import toePoseHeroCH from '../../images/toePoseHeroCH.jpg';
import heroAANYCMarch from '../../images/heroAANYCMarch.jpg';

const imageDescriptionMap = {
    [heroSplitAANYC]: { "description": "Holding Out For a Hero", "subtitle": "Aerial Arts NYC - March 2024", "credit": "Laurie Bloom" },
    [heroCirqueHaus]: { "description": "Holding Out For a Hero", "subtitle": "Cirque Haus - June 2024", "credit": "Mikail" },
    [cryBabySplit]: { "description": "Cry Baby", "subtitle": "STREB - September 2024", "credit": "Wendy" },
    [toePoseHeroCH]: { "description": "Holding Out For a Hero", "subtitle": "Cirque Haus - June 2024", "credit": "Mikail" },
    [cryBabyBW]: { "description": "Cry Baby", "subtitle": "STREB - September 2024", "credit": "Wendy" },
    [heroAANYCMarch]: { "description": "Holding Out For a Hero", "subtitle": "Aerial Arts NYC - March 2024", "credit": "Amy" }
}

const customStyles = {
    content: {
        width: "600px",
        height: "700px",
        margin: "auto",

    },
};

export const Performance = () => {
    const [photo, setPhoto] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();

    const openPhotoModal = useCallback((photoString: string) => {
        const cannotOpenModal = isMobile || isTablet;
        if (cannotOpenModal) { return; }
        setPhoto(photoString);
        setIsModalOpen(true)
    }, [isMobile, isTablet]);

    const closeModal = useCallback(() => setIsModalOpen(false), []);

    const photoItem = (photoKey: string) => {
        const { description = "", subtitle = "" } = imageDescriptionMap[photoKey];
        const altText = `${description} - ${subtitle}`;
        return <div onClick={() => openPhotoModal(photoKey)}><img src={photoKey} alt={altText} className="performancePhoto" /></div>
    };

    return (
        <section className="performanceContainer" id="performance">
            <h2 className="title flex-justify-center">Media</h2>
            <p className="flex-justify-center subtitle">Please <a href="#contact" className="spaceLeft spaceRight">contact me</a> for videos for full acts</p>
            <div className="performancePhotos">
                {photoItem(heroSplitAANYC)}
                {photoItem(heroCirqueHaus)}
                {photoItem(cryBabySplit)}
                {photoItem(toePoseHeroCH)}
                {photoItem(cryBabyBW)}
                {photoItem(heroAANYCMarch)}
            </div>


            <ReactModal isOpen={isModalOpen} style={customStyles} shouldCloseOnEsc>
                <div>
                    <div className="closeModalButton"><MdClose onClick={closeModal} className="clickable" /></div>
                    <div className="photoModalContent">
                        <h1>{imageDescriptionMap[photo]?.description}</h1>
                        <p>{imageDescriptionMap[photo]?.subtitle}</p>
                        <img src={photo} alt={imageDescriptionMap[photo]?.description} className="performancePhoto" />
                        <p>Photo by {imageDescriptionMap[photo]?.credit}</p>
                    </div>
                </div>
            </ReactModal>
        </section>

    );
};
