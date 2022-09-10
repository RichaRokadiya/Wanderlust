import React from "react";
import styled from "styled-components";
import hero from "../assets/hero.mp4"

export default function Hero() {
  return (
    <Section id="hero">
      <div className="background">
      <video autoPlay loop muted>
      <source src={hero} type="video/mp4"/>
      </video>
      </div>
      <div className="content">
        <div className="title">
          <h1>It's Time To Travel</h1>
          <p>
            Journeys are meant to make memories that you can cherish. So, come join us in this journey of ours.
          </p>
        </div>
        <div className="search">
          <div className="container">
          <div>
            <button><a href = './login'>Login</a></button>
            &nbsp;
            <button>Sign Up</button><br/>
          </div>
          {/* Already have an account? */}
        </div>
      </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

  .background {
    height: 85%;
    video {
      width: 100%;
      filter: brightness(70%);
      padding: 0rem 2rem 0rem 2rem;
    }
  }
  .content {
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
    .title {
      color: white;
      h1 {
        color: #000000;
        font-size: 70px;
        // letter-spacing: 0.2rem;
        font-family: 'Calligraffitti', cursive;
        font-weight: bold;
      }
      p {
        text-align: center;
        padding: 0 30vw;
        margin-top: 0.5rem;
        font-size: 1.2rem;
        color: #000000;
        font-weight: bold;
      }
    }
    .search {
      // display: flex;
      // background-color: #ffffff;
      // padding: 0.5rem;
      // border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #ffffff;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }

          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem 5rem 1rem 5rem;
        margin: 0rem 1rem 0rem 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #000000;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        a:link {
          text-decoration: none;
        }
        a:visited {
          color: white;
        }
        &:hover {
          background-color: #F57C00;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 25rem;
    .background {
      background-color: white;
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
          padding: 1vw;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        /* padding: 0; */
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 1rem;
          font-size: 1rem;
        }
        /* display: none; */
      }
    }
  }
`;