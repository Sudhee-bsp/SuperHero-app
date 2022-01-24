import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBBadge,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import Link from "next/link";

const axios = require("axios").default;

const EachHero = ({ heroes }) => {
  return (
    <div>
      <div className="container">
        <h1 className="display-4">Identity of Hero</h1>
        <div className="row justify-content-center">
          <MDBCard
            className="border border-4 m-4"
            style={{ maxWidth: "40rem", minHeight: "20rem" }}
          >
            <MDBRow className="g-0">
              <MDBCol md="4">
                <MDBCardImage
                  src={`https://avatars.dicebear.com/api/avataaars/"${heroes.realName}.svg`}
                  alt="..."
                  fluid
                />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle className="display-6">
                    {heroes.superHero}
                  </MDBCardTitle>
                  <MDBCardText>
                    <p>Real Name: {heroes.realName}</p>
                  </MDBCardText>
                  <MDBCardText>
                    Description: This Superhero named "{heroes.superHero}" lives
                    under identity of "{heroes.realName}"
                  </MDBCardText>
                  <MDBCardText>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </MDBCardText>
                  <MDBBtn className="mx-2" color="danger">
                    Delete
                  </MDBBtn>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const id = params.id;
  const response = await axios(`http://localhost:3000/api/hero/${id}`);
  // console.log(response.data);

  const hero = response.data.data;
  console.log(hero);

  return {
    props: { heroes: hero },
  };
}

export default EachHero;
