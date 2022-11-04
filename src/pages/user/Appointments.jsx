import React, { useState } from 'react';
import { useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
    MDBContainer,
    MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody,
    MDBTabs,
    MDBTabsItem,
    MDBRow,
    MDBCol,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
  } from 'mdb-react-ui-kit';
export default function Appointments() {

    const [getuser, getUser] = useState('');

    const params = useParams();
    useEffect(() => {
        if(params.user_id == null){
            navigate("/login");
        }else if(params.user_id != null){
            axios.post('http://localhost/reactjs/sessions.php', {user_id:params.user_id, credentials: "same-origin"})
            .then(function(res){
            const userdata = res.data;
            getUser(userdata);
            })
            .catch(err => console.log(err))
        }
    }, []);
  const [fillActive, setFillActive] = useState('tab1');

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };

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
                <MDBBtn block tag="a" href={'/user/' + getuser.user_id} className='btn-md text-start mb-2'><i className='fas fa-tachometer-alt me-2'></i> Dashboard</MDBBtn>
                <MDBBtn block tag="a" href={'/appointment/' + getuser.user_id} className='btn-md text-start mb-2'><i className='fas fa-edit me-2'></i> Book Appointment</MDBBtn>
                <MDBBtn block tag="a" href={'/viewappnt/' + getuser.user_id} className='btn-md text-start mb-2'><i className='fas fa-list me-2'></i> View Appointments</MDBBtn>
                <MDBBtn block tag="a" href={'/tutors/' + getuser.user_id} className='btn-md text-start mb-2'><i className='fas fa-users me-2'></i> View Tutors</MDBBtn>
                <MDBBtn block tag="a" href={'/profile/' + getuser.user_id} className='btn-md text-start mb-2'><i className='fas fa-user me-2'></i> View Profile</MDBBtn>
                <MDBBtn block tag="a" href={'/settings/' + getuser.user_id} className='btn-md text-start mb-2'><i className='fas fa-cog me-2'></i> Settings</MDBBtn>
            </div>
            </div>
         </MDBCol>
         <MDBCol md='9'>
         <main>
           <MDBRow>
          <MDBCol md="12" className='text-center my-3'>
          <h2>Appointment History</h2><hr />
          <MDBTabs fill className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
            Pending Appointments
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
            Completed Appointments
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={fillActive === 'tab1'}>
            <div className='table-wrapper table-responsive'>
            <MDBTable align='middle'>
            <MDBTableHead>
                <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Course</th>
                <th scope='col'>Faculty</th>
                <th scope='col'>Tutor</th>
                <th scope='col'>Date/Time</th>
                <th scope='col'>Status</th>
                <th scope='col'>Action</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                <tr>
                    <td>
                    <div className='ms-3'>
                        <p className='fw-bold mb-1'>#1234</p>
                    </div>
                </td>
                <td>
                    <div className='ms-3'>
                        <p className='fw-normal mb-1'>Data Processing</p>
                    </div>
                </td>
                <td>
                    <p className='fw-normal mb-1'>Engineering</p>
                </td>
                <td>
                    <p className='fw-normal mb-1'>Samuel Jackson</p>
                </td>
                <td>
                    <p className='fw-normal mb-1'>Sep 6, 2022 10:00am</p>
                </td>
                <td>
                    <MDBBadge color='warning' pill>
                    Pending
                    </MDBBadge>
                </td>
                <td>
                    <MDBBtn color='primary' rounded size='sm'>
                    View
                    </MDBBtn>
                </td>
                </tr>
            </MDBTableBody>
            </MDBTable>
            </div>
        </MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab2'}>
        <div className='table-wrapper table-responsive'>
        <MDBTable align='middle'>
        <MDBTableHead>
            <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Course</th>
            <th scope='col'>Faculty</th>
            <th scope='col'>Tutor</th>
            <th scope='col'>Date/Time</th>
            <th scope='col'>Status</th>
            <th scope='col'>Action</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
            <tr>
                <td>
                <div className='ms-3'>
                    <p className='fw-bold mb-1'>#5678</p>
                </div>
            </td>
            <td>
                <div className='ms-3'>
                    <p className='fw-normal mb-1'>Database Management</p>
                </div>
            </td>
            <td>
                <p className='fw-normal mb-1'>Science</p>
            </td>
            <td>
                <p className='fw-normal mb-1'>Jerry Avery</p>
            </td>
            <td>
                <p className='fw-normal mb-1'>Sep 3, 2022 09:00am</p>
            </td>
            <td>
                <MDBBadge color='success' pill>
                Completed
                </MDBBadge>
            </td>
            <td>
                <MDBBtn color='primary' rounded size='sm'>
                View
                </MDBBtn>
            </td>
            </tr>
        </MDBTableBody>
        </MDBTable>
        </div>
        </MDBTabsPane>
      </MDBTabsContent>
          </MDBCol>
        </MDBRow>
         </main>
         </MDBCol>
        </MDBRow>
        </MDBContainer>
      </React.Fragment>
  );
}