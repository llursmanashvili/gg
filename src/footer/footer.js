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

function Footer() {
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
                Hotel Georgia Gold
              </h6>
              <p>
                ელეგანტური დიზაინი , ულამაზესი ხედები, გამორჩეული გემოები და
                სტუმართმოყვარე გუნდი. სასტუმრო ჯორჯია გოლდი-განსაკუთრებული
                შემთხვევებისთვის.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">გვერდები</h6>
              <Link to="/cafe">
                <p>
                  <a className="text-reset">კაფე-ბარი</a>
                </p>
              </Link>

              <Link to="/suites">
                <p>
                  <a className="text-reset">ნომრები</a>
                </p>
              </Link>

              <Link to="/about">
                <p>
                  <a className="text-reset">ჩვენ შესახებ</a>
                </p>
              </Link>

              <Link to="/contact">
                <p>
                  <a className="text-reset">კონტაქტი</a>
                </p>
              </Link>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">ლუქსები</h6>
              <Link to="/presidentallux">
                <p>
                  <a className="text-reset">საპრეზიდენტო </a>
                </p>
              </Link>

              <Link to="/familylux">
                <p>
                  <a className="text-reset">საოჯახო </a>
                </p>
              </Link>
              <Link to="/standarttwin">
                <p>
                  <a className="text-reset">სტანდარტული </a>
                </p>
              </Link>
              <Link to="/standartdouble">
                <p>
                  <a className="text-reset">სტანდარტული </a>
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

function Footer1() {
  return (
    <MDBFooter className="footer">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
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
                Hotel Georgia Gold
              </h6>
              <p>
                Elegant design, beautiful views, outstanding tastes and
                hospitable team.{" "}
                <b>Hotel Georgia Gold - for special occasions.</b>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Pages</h6>
              <Link to="/cafeen">
                <p>
                  <a className="text-reset">Cafe-Bar</a>
                </p>
              </Link>

              <Link to="/suitesen">
                <p>
                  <a className="text-reset">Suites</a>
                </p>
              </Link>

              <Link to="/abouten">
                <p>
                  <a className="text-reset">About Us</a>
                </p>
              </Link>

              <Link to="/contacten">
                <p>
                  <a className="text-reset">Contact</a>
                </p>
              </Link>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Suites</h6>
              <Link to="/presidentalluxen">
                <p>
                  <a className="text-reset">Presidental Lux</a>
                </p>
              </Link>

              <Link to="/familyluxen">
                <p>
                  <a className="text-reset">Family lux </a>
                </p>
              </Link>
              <Link to="/standarttwinen">
                <p>
                  <a className="text-reset">Standart Twin </a>
                </p>
              </Link>
              <Link to="/standartdoubleen">
                <p>
                  <a className="text-reset">Standart Double</a>
                </p>
              </Link>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon fas icon="map-marker-alt" className="me-3" />
                Gori, Stalin Avenue 26a
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
export { Footer, Footer1 };
