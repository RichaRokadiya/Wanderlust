import React, { useState } from 'react'
import styled from 'styled-components';
import './Login.css'
import {useAuth} from "../contexts/AuthContext";
import { useNavigate } from 'react-router-dom';


export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {login} = useAuth();
  const navigate = useNavigate();

  function handleEmail (e){
    setEmail(e.target.value)
  }
  function handlePassword (e){
    setPassword(e.target.value)
  }
  function log (){
    login(email, password)
    navigate("/")
  }

  return (
    <Section id = "Login" className='Login'>
      <form>
       <div className='container1'>
        <div>
          Email Address:<br/>
          <input type = "text" name = "email" placeholder='Email Address' id='email' value={email} onChange={handleEmail}></input>
          </div>
          <div>
          Password:<br/>
          <input type = "password" name = "password" placeholder='Password' id='password' value={password} onChange={handlePassword}></input>
          </div><br/>
          <div>
          <input type="checkbox" id="remember" name="remember" value="Remember me"></input>
            <label for="remember">Remember me</label><br/>
          </div><br/>
          {/* <div>
            <a href="#!">Forgot Password?</a><br/><br/>
          </div> */}
          <div className="search">
            <div>
              <div>
                <button onClick={log}>Log in</button><br/>
              </div>
            </div>
          </div>
        </div>
        
      </form>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  height: 100%;

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
    gap: 1rem
    .search {
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
      }
      button {
        padding: 1rem 5rem 1rem 5rem;
        margin: 0rem 1rem 0rem 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
      }
    }
  }
`;

