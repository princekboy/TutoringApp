import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBContainer,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { useEffect } from 'react';
import axios from 'axios';
import background from "../components/images/bg.jpg";
export default function Login() {
  const [showBasic, setShowBasic] = useState(false);
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById("message").style.display = "none";
  }, []);

  function validateForm() {
    return username.length > 0 && password.length > 3;
  }
  

  function handleSubmit(event) {
    event.preventDefault();
    var user = username;
    var pass = password;

    var datam =new FormData();
    
    datam.append("username", user);
    datam.append("password", pass);

     axios({
      method: "post",
      url: 'http://localhost/reactjs/login.php',
      data: datam,
      headers: { "Content-Type" : "multipart/form-data"}
     }).then(function(res){
        if(res.data.message == "success"){
          document.getElementById("message").style.display = "block";
          document.getElementById("message").innerHTML = "Login successful. Redirecting to dashboard";
          setTimeout(function(){
            document.getElementById("message").style.display = "none";
          }, 4000);
          navigate('/user/' + res.data.user_id,{
            state: {
              user_id: res.data.user_id
            }
          });
        }else{
          document.getElementById("message").style.display = "block";
          document.getElementById("message").innerHTML = res.data.message;
          setTimeout(function(){
            document.getElementById("message").style.display = "none";
          }, 4000);
        }
      }).catch(error => {
        document.getElementById("message").style.display = "block";
          document.getElementById("message").innerHTML = error.response;
          setTimeout(function(){
            document.getElementById("message").style.display = "none";
          }, 4000);
    });
  }

  return (
    <React.Fragment>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${background})`, height: 600 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Welcome to Tutoring App</h1>
              <h4 className='mb-3'>Login to Dashboard</h4>
            </div>
          </div>
        </div>
      </div>
      <main>
        <MDBContainer fluid>
          <MDBRow className='mb-3 my-5'>
            <MDBCol md='7' className='me-auto ms-auto'>
            <form onSubmit={handleSubmit} method="POST">
                <h2 className='text-center'>Login</h2><br></br>
                <MDBInput className='mb-4' name='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)} id='username' label='Username' />
                <MDBInput className='mb-4' name='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} id='password' label='Password' />
                <MDBRow className='mb-4'>
                    <MDBCol className='d-flex justify-content-center'>
                    <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
                    </MDBCol>
                    <MDBCol>
                    <a href='#!'>Forgot password?</a>
                    </MDBCol>
                </MDBRow>
                <p className='alert alert-primary' id='message'></p>
                <MDBBtn type='submit' disabled={!validateForm()} className='mb-4' block>
                    Sign in
                </MDBBtn>

                <div className='text-center'>
                    <p>
                    Not a member? <a href='/signup'>Signup</a>
                    </p>
                </div>
            </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </main>
    </React.Fragment>
  );
}