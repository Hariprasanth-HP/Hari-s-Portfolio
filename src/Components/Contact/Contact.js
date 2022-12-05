import React, { useState } from "react";
import ContactForm from "./ContactForm";
import Submitted from "./Submitted";
import { CircularProgress } from "@mui/material";

const Contact = ({ data }) => {
  const [formstate, setFormstate] = useState({
    isLoading: false,
    formSubmitted: false,
  });
  const handleSubmit = (req) => {
    alert("submit");
    console.log("handleSubmit form_name", req.form_name);

    const params = req;
    window.emailjs
      .send("service_0i7hhic", "template_v9ai9ec", params)
      .then((res) => {
        setFormstate({ ...formstate, isLoading: false, formSubmitted: true });
        console.log("res", res);
      })
      .catch((e) => {
        setFormstate({ ...formstate, isLoading: false });
        console.log("e", e);
      });
  };
  const handleCraftreq = (req) => {
    alert("handlecraft");
    console.log("handleCraftreq req form_name", req.form_name);
    setFormstate({ ...formstate, isLoading: true, formSubmitted: true });
    handleSubmit(req);
  };

  console.log("formstate contact", formstate);

  return (
    <div>
      {formstate.isLoading ? (
        <CircularProgress />
      ) : formstate.formSubmitted ? (
        <Submitted data={data} />
      ) : (
        <ContactForm handleCraftreq={handleCraftreq} data={data} />
      )}
    </div>
  );
};

export default Contact;
