import { Button } from "./Button";
import React from 'react';
import "./HeroSection.css"
import "../App.css";

export default function HeroSection() {
    return (
      <div className=" hero-container">
        <video src="/video-2.mp4" autoPlay loop muted />
        <h2>ADVENTURE BEGINS</h2>
        <p>Everything you need to know.. </p>
        <div className="hero-btns">
          <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
          BEGIN TOUR
          </Button>
          <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
          LEARN MORE
          </Button>
        </div>
        
      </div>
    )
}
