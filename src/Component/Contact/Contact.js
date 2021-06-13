import React from "react";

import "./Contact.css";

function Contact() {
  return (
    <section className="contact py-5">
      <div className="container">
        <h2 className="mb-5 text-center">Contact Me</h2>
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <div>
              <div className="d-flex">
                <i className="fas fa-map-marked-alt icon-contact"></i>
                <p className="text-contact">Distric 7, HCMC.</p>
              </div>
              <div className="d-flex">
              <i class="fas fa-phone icon-contact"></i>
                <p className="text-contact">0889 310 211</p>
              </div>
              <div className="d-flex">
                <i class="far fa-envelope icon-contact"></i>
                <p className="text-contact">hohuynhdung@gmail.com</p>
              </div>
              <div className="d-flex">
              <i class="fab fa-github icon-contact"></i>
                <p className="text-contact">github.com/Huynhdung295</p>
              </div>
              <div className="d-flex">
              <i class="fab fa-facebook icon-contact"></i>
                <p className="text-contact">facebook.com/hhdungfed295</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <form name="contact" method="POST" data-netlify="true">
              <label htmlFor="input-contacts-01" className="sr-only">
                Email
              </label>
              <input
                id="input-contacts-01"
                type="email"
                placeholder="Email"
                className="form-control mb-3"
              />
              <label htmlFor="textarea-contacts-01" className="sr-only">
                Write something...
              </label>
              <textarea
                id="textarea-contacts-01"
                rows={5}
                placeholder="Write something..."
                className="form-control mb-3"
                defaultValue={""}
              />
              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
