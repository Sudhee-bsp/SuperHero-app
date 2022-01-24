import Link from 'next/link';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon
  } from 'mdb-react-ui-kit';

function Footer() {
    return (
        <MDBFooter className='bg-light text-center text-white fixed-bottom'>
          <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2022 Developed by Sudhi <br/> using NextJs &nbsp;
            <a className='text-white' href='https://github.com/Sudhee-bsp/SuperHero-app'>
              <i className="fab fa-github"></i>
            </a>
          </div>
        </MDBFooter>
      );
}

export default Footer;
