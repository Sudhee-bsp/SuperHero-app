import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBBadge,
} from "mdb-react-ui-kit";

import Link from "next/link";

const axios = require("axios").default;

const index = ({ heroes }) => {
  return (
    <div className="container">
      <h1 className="display-6 m-2">Superhero Identity Manager:</h1>
      <div className="row mb-8">
        <MDBBtn className="m-4" color="info">
          Total Heroes Available:
          <MDBBadge className="ms-2" color="success">
            {heroes.length}
          </MDBBadge>
        </MDBBtn>

        {heroes
          .slice(0)
          .reverse()
          .map((hero) => {
            return (
              <MDBCard
                className="border border-2 m-4"
                style={{ maxWidth: "18rem" }}
                key={hero._id}
              >
                <MDBCardImage
                  src={`https://avatars.dicebear.com/api/avataaars/"${hero.superHero}.svg`}
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>{hero.superHero}</MDBCardTitle>
                  <MDBCardText>Reveal Identity</MDBCardText>
                  <div className="row">
                    <div className="col-6">
                      <Link href={`/${hero._id}`}>
                        <MDBBtn>View Hero</MDBBtn>
                      </Link>
                    </div>
                    <div className="col-6">
                      <Link href={`/${hero._id}/edit`}>
                        <MDBBtn>
                          <i className="fas fa-pencil-alt"></i> Edit Hero
                        </MDBBtn>
                      </Link>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            );
          })}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const response = await axios(
    "https://superhero-identity.netlify.app/api/hero"
  );
  // console.log(response.data);

  const hero = response.data.data;
  // console.log(hero);

  return {
    props: { heroes: hero },
  };
}

export default index;
