import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBRipple, MDBTypography, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import background from "../components/images/bg.jpg";
import educationimg from '../components/images/education_bg.jpg';
export default function Home() {
  const [showBasic, setShowBasic] = useState(false);

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
              <h4 className='mb-3'>Book appointments and customize your learning experience</h4>
                <MDBBtn
                className="m-2 btn-outline-white"
                tag="a"
                outline
                size="md"
                rel="nofollow"
                href='/login'
              >
                Login
              </MDBBtn>
              <MDBBtn
                className="m-2 btn-white text-dark"
                tag="a"
                size="md"
                href='/signup'
                color='white'
              >
                Signup
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
      <main>
        <MDBContainer fluid>
          <MDBRow className='mb-3 my-5'>
            <MDBCol md='5'>
            <MDBRipple rippleTag='div'>
              <img
                alt='example'
                className='img-fluid rounded'
                src={educationimg}
              />
            </MDBRipple>
            </MDBCol>
            <MDBCol md='7'>
              <MDBTypography tag="h1" color='dark' className='fw-bold'>
                WELCOME TO TUTORING APP
              </MDBTypography>
              <MDBTypography tag="h5" color='primary'>
                Enter now to get the best tutoring experience
              </MDBTypography>
              <hr></hr>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sunt. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sunt.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sunt 
              </p>
              <p>Enim eu ea aliquip culpa laboris in laboris. Do proident ipsum reprehenderit laboris. Aliqua aliquip laboris velit aliqua irure. Commodo in non exercitation cillum aliquip anim quis reprehenderit. Occaecat tempor in mollit pariatur esse fugiat fugiat ad ea esse non ex amet dolore. Id cillum ex amet veniam deserunt incididunt non. Mollit aliquip labore duis excepteur reprehenderit ea nulla nostrud. Ad adipisicing ut nostrud dolor laborum Lorem sint.</p>
              <MDBRipple rippleColor='primary'>
                <MDBBtn className="mx-2 btn-outline-primary" tag="a" outline size="md" rel="nofollow" href='/signup'>
                  Sign up now
                </MDBBtn>
              </MDBRipple>
            </MDBCol>
          </MDBRow>
          <hr></hr>
          <h1 className='text-center fw-bold my-5'>Available Courses</h1><hr></hr>
          <MDBRow className='mb-3 my-5'>
          <MDBCol md='4'>
          <MDBCard>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>React JS</MDBCardTitle>
              <MDBCardText>
                Labore cillum enim tempor magna voluptate laboris incididunt. Non aliquip laborum et ut Lorem ut sint elit minim ad exercitation. Ex incididunt eu culpa nostrud consequat eu et.
              </MDBCardText>
              <MDBBtn href='#'>Checkout</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          </MDBCol>
          <MDBCol md='4'>
          <MDBCard>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>HTML & CSS</MDBCardTitle>
              <MDBCardText>
                Duis dolor esse eu incididunt proident qui. Et ea occaecat. Culpa ea laborum et eu. Nisi officia labore cupidatat sunt qui. Laboris voluptate ex velit minim tempor incididunt adipisicing in consectetur cillum.
              </MDBCardText>
              <MDBBtn href='#'>Checkout</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          </MDBCol>
          <MDBCol md='4'>
          <MDBCard>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
              <a>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </a>
            </MDBRipple>
            <MDBCardBody>
              <MDBCardTitle>PHP Programming</MDBCardTitle>
              <MDBCardText>
                Laboris pariatur enim occaecat dolore voluptate elit. Culpa non nulla nisi duis ex. In ad elit duis ipsum non eiusmod pariatur sit. Id proident ad dolor aliqua dolore ut non laborum anim anim sunt.
              </MDBCardText>
              <MDBBtn href='#'>Checkout</MDBBtn>
            </MDBCardBody>
          </MDBCard>
          </MDBCol>
          </MDBRow>
        </MDBContainer>
        </main>
    </React.Fragment>
  );
}