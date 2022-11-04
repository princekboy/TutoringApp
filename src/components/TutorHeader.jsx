import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function Tutorheader() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <React.Fragment>
    <header>
    <MDBNavbar expand='lg' light bgColor='light' sticky>
      <MDBContainer fluid>
      <MDBNavbarBrand href='/user'>Tutor Dashboard</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mb-2 mb-lg-0'>
            <ul className="navbar-nav ms-auto">
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle style={{cursor: 'pointer'}} tag='a' link className='nav-link'>
                  <i className='fas fa-user-circle' style={{fontSize: '19px'}}></i>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href='/myprofile'>Profile</MDBDropdownItem>
                  <MDBDropdownItem link href='/mysettings'>Settings</MDBDropdownItem>
                  <MDBDropdownItem link href='/logout'>Logout</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            </ul>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </header>
    </React.Fragment>
  );
}