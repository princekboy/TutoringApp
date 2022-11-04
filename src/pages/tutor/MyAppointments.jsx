import React, { useState } from 'react';
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

  import TutorSidebar from '../../components/TutorSidebar';

export default function MyAppointments() {

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
          <TutorSidebar />
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
            Active Appointments
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
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
                <th scope='col'>Tutee</th>
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
                    <p className='fw-normal mb-1'>John</p>
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
                    Accept
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
            <th scope='col'>Tutee</th>
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
                <p className='fw-normal mb-1'>Jeremiah Jude</p>
            </td>
            <td>
                <p className='fw-normal mb-1'>Sep 3, 2022 09:00am</p>
            </td>
            <td>
                <MDBBadge color='primary' pill>
                Active
                </MDBBadge>
            </td>
            <td>
                <MDBBtn color='primary' rounded size='sm'>
                Mark Completed
                </MDBBtn>
            </td>
            </tr>
        </MDBTableBody>
        </MDBTable>
        </div>
        </MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab3'}>
        <div className='table-wrapper table-responsive'>
        <MDBTable align='middle'>
        <MDBTableHead>
            <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Course</th>
            <th scope='col'>Faculty</th>
            <th scope='col'>Tutee</th>
            <th scope='col'>Date/Time</th>
            <th scope='col'>Status</th>
            <th scope='col'>Action</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
            <tr>
                <td>
                <div className='ms-3'>
                    <p className='fw-bold mb-1'>#3784</p>
                </div>
            </td>
            <td>
                <div className='ms-3'>
                    <p className='fw-normal mb-1'>Database Development</p>
                </div>
            </td>
            <td>
                <p className='fw-normal mb-1'>Computer Science</p>
            </td>
            <td>
                <p className='fw-normal mb-1'>Jerry Avery</p>
            </td>
            <td>
                <p className='fw-normal mb-1'>Sep 1, 2022 10:00am</p>
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