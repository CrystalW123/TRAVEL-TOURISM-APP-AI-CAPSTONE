// src/pages/home.js
import React from "react";
import styled from "styled-components";
import homeImage from "../assets/hero.png";
import Navbar from "../components/Navbar"; 

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection id="hero">
        <Background>
          <img src={homeImage} alt="Background" />
        </Background>
        <Content>
          <Title>
            <h1>Welcome To Tours & Travel</h1>
            <p>
              We are dedicated to providing every customer with the safest and most reliable mode of transport to the most desired destination of your choice.
            </p>
          </Title>
        </Content>
      </HeroSection>
    </>
  );
}

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${homeImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Background = styled.div`
  height: 100%;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    filter: brightness(60%);
  }
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 3;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.div`
  color: white;
  h1 {
    font-size: 3rem;
    letter-spacing: 0.2rem;
  }
  p {
    text-align: center;
    padding: 0 30vw;
    margin-top: 0.5rem;
    font-size: 1.2rem;
  }
`;
