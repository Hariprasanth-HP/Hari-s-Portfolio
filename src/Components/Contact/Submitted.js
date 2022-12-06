import React from "react";

const Submitted = ({ data }) => {
  if (data) {
    var contactName = data.name;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var contactEmail = data.email;
    var contactMessage = data.contactmessage;
  }
  return (
    <section id="contact">
      <div
        className="row section-head"
        style={{ display: "flex", padding: "50px", color: "white" }}
      >
        <div style={{ width: "577px", heigt: "500px" }}>
          <h1 style={{ color: "white" }}>
            Your form is submitted successfully
          </h1>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4 style={{ color: "white" }}>Address and Phone</h4>
            <p className="address">
              {contactName}
              <br />
              {contactEmail}
              <br />
              <br />
              {street} <br />
              {city}, {state} {zip}
              <br />
              <span>{phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Submitted;
