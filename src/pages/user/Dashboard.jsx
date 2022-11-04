import React, { useState } from 'react';
import Chart from '../../components/Charts';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText, MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import { useEffect } from 'react';

export default function Dashboard() {
  const userdata = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const [getuser, getUser] = useState('');
   
  useEffect(() => {
    if(params.user_id == null){
      navigate("/login");
    }else if(params.user_id != null){
        axios.post('http://localhost/reactjs/sessions.php', {user_id:params.user_id, credentials: "same-origin"})
          .then(function(res){
            const user = res.data;
            getUser(user);
         })
        .catch(err => console.log(err))
    }
    else{
      window.user_id = userdata.state.user_id;
      console.log(window.user_id);
      axios.post('http://localhost/reactjs/sessions.php', {user_id:userdata.state.user_id, credentials: "same-origin"})
      .then(function(res){
        const user = res.data;
        getUser(user);
     })
      .catch(err => console.log(err))
    }
  }, []);
  return (
      <React.Fragment>
        <MDBContainer fluid className=''>
        <MDBRow>
         <MDBCol md='3' className='primary py-5' style={{backgroundColor: 'lightgrey'}}>
            <div className=''>
            <center><img src={`/images/users/${getuser.photo}`} className='rounded-circle img-fluid w-50 img-responsive'></img>
            <h4 className='text-black'>{getuser.fname + " " + getuser.lname}</h4>
            <h6>{getuser.faculty}</h6>
            </center>
            <div className='mt-5'>
                <MDBBtn block tag="a" href={'/user/' + params.user_id} className='btn-md text-start mb-2'><i className='fas fa-tachometer-alt me-2'></i> Dashboard</MDBBtn>
                <MDBBtn block tag="a" href={'/appointment/' + params.user_id} className='btn-md text-start mb-2'><i className='fas fa-edit me-2'></i> Book Appointment</MDBBtn>
                <MDBBtn block tag="a" href={'/viewappnt/' + params.user_id} className='btn-md text-start mb-2'><i className='fas fa-list me-2'></i> View Appointments</MDBBtn>
                <MDBBtn block tag="a" href={'/tutors/' + params.user_id} className='btn-md text-start mb-2'><i className='fas fa-users me-2'></i> View Tutors</MDBBtn>
                <MDBBtn block tag="a" href={'/profile/' + params.user_id} className='btn-md text-start mb-2'><i className='fas fa-user me-2'></i> View Profile</MDBBtn>
                <MDBBtn block tag="a" href={'/settings/' + params.user_id} className='btn-md text-start mb-2'><i className='fas fa-cog me-2'></i> Settings</MDBBtn>
            </div>
            </div>
         </MDBCol>
         <MDBCol md='9'>
         <main>
           <MDBContainer className='mt-5'>
           <h2><i className='fas fa-tachometer-alt'/> Dashboard</h2><hr /><br></br>
             <MDBRow>
               <MDBCol md="6">
                <MDBCard>
                  <MDBCardBody className='text-center'>
                    <MDBCardTitle><h3>All Appointments</h3></MDBCardTitle>
                    <MDBCardText>
                      <h1>8</h1>
                    </MDBCardText>
                    <MDBBtn  tag="a" href="/viewappnt">View</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
               </MDBCol>
               <MDBCol md="6">
                <MDBCard>
                  <MDBCardBody className='text-center'>
                    <MDBCardTitle><h3>Pending Appointments</h3></MDBCardTitle>
                    <MDBCardText>
                      <h1>5</h1>
                    </MDBCardText>
                    <MDBBtn tag="a" href="/viewappnt">View</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
               </MDBCol>
             </MDBRow>
           </MDBContainer>
           <MDBRow>
          <MDBCol md="12" className='text-center my-3'>
          <h3>Chart</h3>
          <Chart />
          </MDBCol>
        </MDBRow>
         </main>
         </MDBCol>
        </MDBRow>
        </MDBContainer>
      </React.Fragment>
  );
}
