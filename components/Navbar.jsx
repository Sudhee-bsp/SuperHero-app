import Link from 'next/link';
import {MDBBtn} from 'mdb-react-ui-kit';

function Navbar() {
    return (
        <nav className="navbar container-fluid">
            <Link href="/">
                <a className="navbar-brand">SuperHero Identity</a>
            </Link>

            <Link href="/add">
               <MDBBtn color="primary"><i class="fas fa-plus"></i> New Identity</MDBBtn>
            </Link>
        </nav>
    )
}

export default Navbar;
