import { MDBBtn, MDBInput } from "mdb-react-ui-kit";

import Router, { useRouter } from "next/router";
import { useState } from "react";

const axios = require("axios").default;

const AddNewHero = () => {
  // const Router = useRouter();

  const [form, setForm] = useState({
    superHero: "",
    realName: "",
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
        "https://superhero-identity.netlify.app/api/hero",
        {
          method: "POST",
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
    <div className="container">
      <h1>Add New Hero</h1>
      <div className="row">
        <div className="col-6">
          <form onSubmit={handleForm}>
            <MDBInput
              id="form4Example1"
              wrapperClass="mb-4"
              label="Enter Super Hero"
              onChange={handleChange}
              name="superHero"
            />
            <MDBInput
              type="text"
              id="form4Example2"
              wrapperClass="mb-4"
              label="Enter Real Name"
              onChange={handleChange}
              name="realName"
            />
            <MDBInput
              wrapperClass="mb-4"
              textarea
              id="form4Example3"
              rows={4}
              label="Description"
            />

            <MDBBtn type="submit" className="mb-4" block>
              Add Hero
            </MDBBtn>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewHero;
