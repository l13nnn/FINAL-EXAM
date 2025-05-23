import React from "react";
import "../styles/explore.css";
import { EB_Garamond } from "next/font/google";
import Image from "next/image";
import PHOTO1 from '../image/WhatsApp Image 2025-05-23 at 16.49.57_265f8b56.jpg';
import PHOTO2 from '../image/WhatsApp Image 2025-05-23 at 16.50.19_5677d388.jpg';
import PHOTO3 from '../image/WhatsApp Image 2025-05-23 at 16.50.43_00195cd4.jpg';
import PHOTO4 from '../image/WhatsApp Image 2025-05-23 at 16.50.54_a10d3641.jpg';
import PHOTO5 from '../image/WhatsApp Image 2025-05-23 at 16.51.11_116980bf.jpg';
import PHOTO6 from '../image/WhatsApp Image 2025-05-23 at 16.51.26_32f5d182.jpg';

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["800"],
});

function Explore() {
    return (
        <div className="explore-section">
            <div className="explore-header">
                <h1 style={{ fontFamily: ebGaramond.style.fontFamily }}>Explore NFT Digital Art</h1>
            </div>
            <hr className="explore-line" />
            <div className="explore-photo-container">
                <Image src={PHOTO1} alt="photo" />
                <Image src={PHOTO2} alt="photo" />
                <Image src={PHOTO3} alt="photo" />
                <Image src={PHOTO4} alt="photo" />
                <Image src={PHOTO5} alt="photo" />
                <Image src={PHOTO6} alt="photo" />
            </div>
        </div>
    );
}

export default Explore;