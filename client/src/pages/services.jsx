import React from 'react';
import styled from 'styled-components';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';
import service4 from '../assets/service4.png';

export default function Services() {
    const data = [
        {
            icon: service1,
            title: 'Get Best Prices',
            subTitle: 'Pay through our application and save thousands and get amazing rewards.',
        },
        {
            icon: service2,
            title: 'Covid Safe',
            subTitle: 'We have all the curated hotels that have all the precaution for a covid safe environment.',
        },
        {
            icon: service3,
            title: 'Flexible Payment',
            subTitle: 'Enjoy the flexible payment through our app.',
        },
        {
            icon: service4,
            title: 'Find The Best Near You',
            subTitle: 'Find the best hotels and places to visit near you in a single click.',
        },
    ];

    return (
        <Section id="services">
            {data.map(({ icon, title, subTitle }, index) => (
                <ServiceItem key={index}>
                    <Icon>
                        <img src={icon} alt="" />
                    </Icon>
                    <h3>{title}</h3>
                    <p>{subTitle}</p>
                </ServiceItem>
            ))}
        </Section>
    );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-color: aliceblue;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: translateX(0.4rem) translateY(-1rem);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const Icon = styled.div`
  img {
    height: 2.4rem;
  }
`;
