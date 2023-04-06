import React from "react";
import home from '../../images/home.png';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Landings.css';
export default function LandingPage() {
    return (
<Card className="home-content" >
      <Card.Img className="landing-img" variant="top"  src={home} alt="Landing-image"/>
      <Card.Body className="landing-content">
        <Card.Title>10X Team 04</Card.Title>
        <Link to= {"post/all"}><Button variant="primary">Enter</Button></Link>
      </Card.Body>
    </Card>
    )
}