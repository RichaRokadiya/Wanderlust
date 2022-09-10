import React from "react";
import styled from "styled-components";
import rimage from "../assets/rimage.jpg";
import simage from "../assets/simage.jpg";
import jimage from "../assets/jimage.jpg";

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>About Us!</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Student of DJSCE - SY BTech, IT Branch.
          </p>
          <div className="info">
            <img src={rimage} alt="" />
            <div className="details">
              <h4>Richa Rokadiya</h4>
              <span>Co-founder and CEO of Wanderlust</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          Student of DJSCE - SY BTech, IT Branch.
          </p>
          <div className="info">
            <img src={simage} alt="" />
            <div className="details">
              <h4>Saloni Shah</h4>
              <span>Co-founder and COO of Wanderlust</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          Student of DJSCE - SY BTech, IT Branch.
          </p>
          <div className="info">
            <img src={jimage} alt="" />
            <div className="details">
              <h4>Janvi Mehta</h4>
              <span>Co-founder and CFO of Wanderlust</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: #FFFFFF;
      border: 10px solid #F57C00;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;