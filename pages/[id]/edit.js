import { MDBBtn, MDBInput } from "mdb-react-ui-kit";

import Router, { useRouter } from "next/router";
import { useState } from "react";

const axios = require("axios").default;

const EditHero = ({ heroes }) => {
  const router = useRouter();
  const heroId = router.query.id;

  const [form, setForm] = useState({
    superHero: heroes.superHero,
    realName: heroes.realName,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios(
        `https://superhero-identity.netlify.app/api/hero/${heroId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify(form),
        }
      );
      console.log("Data Added", res.data);
      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <h1>Edit this Hero:</h1>
      <div className="row align-items-center justify-content-center mt-4">
        <div className="col-6">
          <form onSubmit={handleForm}>
            <MDBInput
              id="form4Example1"
              wrapperClass="mb-4"
              label="Enter Super Hero"
              onChange={handleChange}
              name="superHero"
              value={form.superHero}
            />
            <MDBInput
              type="text"
              id="form4Example2"
              wrapperClass="mb-4"
              label="Enter Real Name"
              onChange={handleChange}
              name="realName"
              value={form.realName}
            />
            <MDBInput
              wrapperClass="mb-4"
              textarea
              id="form4Example3"
              rows={4}
              label="Description"
            />

            <MDBBtn type="submit" className="mb-4" color="info" block>
              <i className="fas fa-edit"></i> Edit Hero
            </MDBBtn>
          </form>
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

export default EditHero;
