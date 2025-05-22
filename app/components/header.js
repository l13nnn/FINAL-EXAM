"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import "../styles/header.css";
import LOGO from '../image/WhatsApp_Image_2025-05-22_at_10.18.33_bca96683-removebg-preview.png';
import SEARCH from '../image/WhatsApp_Image_2025-05-22_at_10.56.12_76b11c03-removebg-preview.png';
import SHOP from '../image/WhatsApp_Image_2025-05-22_at_10.57.54_9b4d0917-removebg-preview.png';
import PHOTO from '../image/FOTO__6_-removebg-preview.png';
import { EB_Garamond } from "next/font/google";
import Link from "next/link";
import gsap from "gsap"; 
import Typed from "typed.js"; 

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["800"],
});

function Header() {
    const headerRef = useRef(null);
    const buttonRef = useRef(null);
    const photoRef = useRef(null);
    const typedRef = useRef(null); 

    useEffect(() => {
        gsap.from(headerRef.current, { opacity: 0, y: -50, duration: 1, ease: "power2.out" });
        gsap.from(buttonRef.current, { opacity: 0, scale: 0.8, duration: 1, delay: 0.5, ease: "bounce" });
        gsap.to(photoRef.current, { y: 10, repeat: -1, duration: 2, ease: "power2.inOut", yoyo: true });

        const typed = new Typed(typedRef.current, {
            strings: ["Discover, Collect, Sell.", "Explore Fantastic NFTs.", "The NFT World at Your Fingertips."], // Hanya teks ini yang dianimasikan
            typeSpeed: 50, 
            backSpeed: 25,
            loop: true,
            showCursor: false,
        });

        return () => {
            typed.destroy(); 
        };
    }, []);

    return (
        <div className="header-section" ref={headerRef}>
            <div className="header-container">
                <div className="logo-container">
                    <Image src={LOGO} alt="logo" />
                    <h1 style={{ fontFamily: ebGaramond.style.fontFamily }}>AETHERIA</h1>
                </div>
                <div className="nav-container">
                    <nav className="nav-menu" style={{ fontFamily: ebGaramond.style.fontFamily }}>
                        <Link href="/marketplace">Marketplace</Link>
                        <Link href="/explore">Explore</Link>
                        <Link href="/community">Community</Link>
                    </nav>
                </div>
                <div className="search-shop-container">
                    <Image src={SEARCH} alt="search" />
                    <Image src={SHOP} alt="shop" />
                </div>
            </div>
            <hr className="header-line" />
            <div className="header-content-section">
                <div className="header-content-container">
                    <div className="header-content">
                        <h1 style={{ fontFamily: ebGaramond.style.fontFamily }}>
                            Discover and <br /> Sell Fantastic <br /> NFTs
                        </h1>
                        <p style={{ fontFamily: ebGaramond.style.fontFamily }}>
                            <span ref={typedRef}></span> 
                        </p>
                    </div>
                    <div>
                        <button className="started-button" ref={buttonRef} style={{ fontFamily: ebGaramond.style.fontFamily }}>Get Started →</button>
                    </div>                    
                </div>
                <div className="photo-container">
                    <Image src={PHOTO} alt="photo" ref={photoRef} />
                </div>            
            </div>    
        </div>
    );
}

export default Header;