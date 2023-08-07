import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <MDBFooter className="footer">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>მოგვძებნეთ სოციალურ ქსელებში:</span>
        </div>

        <div>
          <a
            href="https://www.facebook.com/hotelgeorgiagold/"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="facebook-f" />
          </a>

          <a
            href="https://www.instagram.com/hotel_georgia_gold/"
            className="me-4 text-reset"
          >
            <MDBIcon fab icon="instagram" />
          </a>
          <a
            href="https://goo.gl/maps/yA8iWrQ42eb88Ba6A"
            className="me-4 text-reset"
          >
            <MDBIcon fas icon="map-marked-alt" />
          </a>
          <a
            href="https://www.booking.com/searchresults.en-gb.html?aid=311984&label=georgia-gold-t0gXwN65gk%2Aj7wRB3w71mgS589009011118%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1707827740752%3Alp1007469%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcGt_tphEo8pAE6BwGOTZ3E&gclid=CjwKCAjww7KmBhAyEiwA5-PUSuvNLHMtv9QHBDo90je3uHVYvxgDMuNZJGqhuPat63dFkwzfj-2LJxoCvfMQAvD_BwE&highlighted_hotels=6305883&redirected=1&city=-2327318&hlrd=no_dates&source=hotel&expand_sb=1&keep_landing=1&sid=51680a194d492e8df448b80f909b96c9"
            className="me-4 text-reset"
          >
            <MDBIcon fas icon="bold" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <Link to="">
                <p>
                  <a className="text-reset">Angular</a>
                </p>
              </Link>

              <Link to="">
                <p>
                  <a className="text-reset">React</a>
                </p>
              </Link>

              <Link to="">
                <p>
                  <a className="text-reset">Vue</a>
                </p>
              </Link>

              <Link to="">
                <p>
                  <a className="text-reset">Laravel</a>
                </p>
              </Link>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <Link to="">
                <p>
                  <a className="text-reset">Pricing</a>
                </p>
              </Link>

              <Link to="">
                <p>
                  <a className="text-reset">Settings</a>
                </p>
              </Link>
              <Link to="">
                <p>
                  <a className="text-reset">Orders</a>
                </p>
              </Link>
              <Link to="">
                <p>
                  <a className="text-reset">Help</a>
                </p>
              </Link>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon fas icon="map-marker-alt" className="me-3" />
                გორი,სტალინის გამზირი 26ა
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                hotel.georgia.gold@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone-alt" className="me-3" />{" "}
                <MDBIcon fas icon="hotel" className="me-3" />
                +995 596 22 22 16
              </p>
              <p>
                <MDBIcon icon="phone-alt" className="me-3" />
                <MDBIcon fas icon="glass-martini" className="me-3" />
                +995 511 22 22 16
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
