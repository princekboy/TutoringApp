import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBContainer
  } from 'mdb-react-ui-kit';
import { useEffect } from 'react';
import axios from 'axios';
import background from "../components/images/bg.jpg";
import Usermale from "../components/images/user-male.png";
export default function Signup() {
  const [showBasic, setShowBasic] = useState(false);

  const navigate = useNavigate();
  
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [faculty, setFaculty] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
 
  useEffect(() => {
    document.getElementById("message").style.display = "none";
  }, []);

function validateForm() {
  return username.length > 0 && password.length > 3 && fname.length > 0 && lname.length > 0 && email.length > 0 && phone.length > 7 && faculty.length > 0;
}



function handleSubmit(event) {
  event.preventDefault();
  var mydata = new FormData();
  mydata.append("fname",fname);
  mydata.append("lname",lname);
  mydata.append("email",email);
  mydata.append("phone",phone);
  mydata.append("faculty",faculty);
  mydata.append("username",username);
  mydata.append("password",password);
  const imagefile = document.querySelector('#image');
  mydata.append("image", imagefile.files[0]);

   axios({
    method: "post",
    url: 'http://localhost/reactjs/register.php',
    data: mydata,
    headers: { "Content-Type" : "multipart/form-data"}
   })
   .then(function (response){
    if(response.data == "success"){
      document.getElementById("message").style.display = "block";
      document.getElementById("message").innerHTML = "Registration was successful. Redirecting to login page.";
      setTimeout(function(){
        document.getElementById("message").style.display = "none";
        navigate('/login');
      }, 4000);
    }else{
      document.getElementById("message").style.display = "block";
      document.getElementById("message").innerHTML = response.data;
      setTimeout(function(){
        document.getElementById("message").style.display = "none";
      }, 4000);
    }
   })
   .catch(function(response){
    document.getElementById("message").style.display = "block";
    document.getElementById("message").innerHTML = response.data;
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
              <h4 className='mb-3'>Signup/Create Account</h4>
            </div>
          </div>
        </div>
      </div>
      <main>
        <MDBContainer fluid>
          <MDBRow className='mb-3 my-5'>
            <MDBCol md='7' className='me-auto ms-auto'>
            <form onSubmit={handleSubmit} method="POST">
             <center className="mb-3"><img src={Usermale} className='rounded-circle img-fluid w-25 img-responsive'/></center>
              <MDBInput className='mb-4' type='file' id='image' name='image' value={image} onChange={e => setImage(e.target.value)} />
                <MDBRow className='mb-4'>
                    <MDBCol>
                    <MDBInput id='fname' name='fname' value={fname} onChange={(e) => setFname(e.target.value)} label='First name' />
                    </MDBCol>
                    <MDBCol>
                    <MDBInput id='lname' name='lname' value={lname} onChange={(e) => setLname(e.target.value)} label='Last name' />
                    </MDBCol>
                </MDBRow>
                <MDBInput className='mb-4' name='username' value={username} onChange={(e) => setUsername(e.target.value)} type='text' id='username' label='Username' />
                <MDBInput className='mb-4' name='email' value={email} onChange={(e) => setEmail(e.target.value)} type='email' id='email' label='Email address' />
                <MDBInput className='mb-3' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} type='tel' id='phone' label='Mobile number' />
                <label className='text-start mt-0'>Faculty</label>
                <select className='form-control mb-4' name='faculty' id='faculty'  value={faculty} onChange={(e) => setFaculty(e.target.value)}>
                    <option defaultValue disabled={true}>--Select Faculty</option>
                    <option>Engineering</option>
                    <option>Medicine</option>
                    <option>Science</option>
                </select>
                <MDBInput className='mb-4' name='password' value={password} onChange={(e) => setPassword(e.target.value)} type='password' id='form3Example4' label='Password' />
                <p className='alert alert-primary' id='message'></p>
                <MDBBtn type='submit' className='mb-4' block>
                    Sign up
                </MDBBtn>

                <div className='text-center'>
                    <p>
                    Already Registered? <a href='/login'>Login</a>
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