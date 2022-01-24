import Link from 'next/link';
import {MDBBtn} from 'mdb-react-ui-kit';

function Navbar() {
    return (
        <nav className="navbar container-fluid">
            <Link href="/">
                <a className="navbar-brand"><i className="fas fa-mask"></i>&nbsp;SuperHero Identity</a>
            </Link>

            <Link href="/add">
               <MDBBtn color="primary"><i className="fas fa-plus"></i> New Identity</MDBBtn>
            </Link>
        </nav>
    )
}

export default Navbar;
