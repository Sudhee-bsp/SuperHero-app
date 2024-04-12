import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

import { useRouter } from "next/router";
import { useState } from "react";
import moment from "moment";

const axios = require("axios").default;

const EachHero = ({ heroes }) => {
  const router = useRouter();
  const heroId = router.query.id;
  console.log("HeroId:", heroId);

  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  // To delete a hero, api call method.
  const deleteHero = async () => {
    try {
      const deleteHero = await axios(
        `https://superhero-identity.netlify.app/api/hero/${heroId}`,
        {
          method: "DELETE",
        }
      );
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container mt-3">
        <h1 className="display-5">Identity of Hero:</h1>
        <div className="row justify-content-center">
          <MDBCard
            className="border border-4 m-4"
            style={{ maxWidth: "40rem", minHeight: "20rem" }}
          >
            <MDBRow className="g-0">
              <MDBCol md="4">
                <MDBCardImage
                  src={`https://api.dicebear.com/8.x/avataaars/svg?seed=${heroes.superHero}`}
                  alt="hero"
                  fluid
                />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle className="display-6">
                    {heroes.superHero}
                  </MDBCardTitle>
                  <MDBCardText>
                    Real Name: <strong>{heroes.realName}</strong>
                  </MDBCardText>
                  <MDBCardText>
                    Description: This Superhero named &quot;{heroes.superHero}
                    &quot; lives under identity of &quot;{heroes.realName}&quot;
                    <br />
                    {heroes.description}
                  </MDBCardText>
                  <MDBCardText>
                    <small className="text-muted">
                      Last updated{" "}
                      {moment
                        .utc(heroes.updatedAt, "YYYY-MM-DD HH:mm Z")
                        // .add(16, "hours")
                        .fromNow()}
                    </small>
                  </MDBCardText>
                  <MDBBtn onClick={toggleShow} className="mx-2" color="danger">
                    Delete
                  </MDBBtn>
                  <MDBModal
                    show={basicModal}
                    setShow={setBasicModal}
                    tabIndex="-1"
                  >
                    <MDBModalDialog>
                      <MDBModalContent>
                        <MDBModalHeader>
                          <MDBModalTitle>Delete HERO?</MDBModalTitle>
                          <MDBBtn
                            className="btn-close"
                            color="none"
                            onClick={toggleShow}
                          ></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                          Are you sure to send this Hero out of world?
                        </MDBModalBody>

                        <MDBModalFooter>
                          <MDBBtn color="secondary" onClick={toggleShow}>
                            Close
                          </MDBBtn>
                          <MDBBtn color="danger" onClick={deleteHero}>
                            Delete
                          </MDBBtn>
                        </MDBModalFooter>
                      </MDBModalContent>
                    </MDBModalDialog>
                  </MDBModal>
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
  const response = await axios(
    `https://superhero-identity.netlify.app/api/hero/${id}`
  );
  // console.log(response.data);

  const hero = response.data.data;
  console.log(hero);

  return {
    props: { heroes: hero },
  };
}

export default EachHero;
