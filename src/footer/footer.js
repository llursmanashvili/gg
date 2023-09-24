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
import call from "react-native-phone-call/index";

function Footer() {
  const triggercall = () => {
    const args = {
      number: " +995 596 22 22 16 ", // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };
  const triggercall1 = () => {
    const args = {
      number: " +995 511 22 22 16 ", // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };
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
              <Link to="/">
                <h6 className="text-uppercase fw-bold mb-4">მთავარი</h6>
              </Link>

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
              <Link to="/fitness">
                <p>
                  <a className="text-reset">ფიტნესი</a>
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
              <Link to="/suites">
                <h6 className="text-uppercase fw-bold mb-4">ნომრები</h6>
              </Link>
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
                  <a className="text-reset">ლუქსი </a>
                </p>
              </Link>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <Link to="/contact">
                <h6 className="text-uppercase fw-bold mb-4">კონტაქტი</h6>
              </Link>

              <Link to="https://www.google.com/maps/dir//Hotel+Georgia+Gold,+26%E1%83%90+%E1%83%A1%E1%83%A2%E1%83%90%E1%83%9A%E1%83%98%E1%83%9C%E1%83%98%E1%83%A1+%E1%83%92%E1%83%90%E1%83%9B%E1%83%96%E1%83%98%E1%83%A0%E1%83%98,+%E1%83%92%E1%83%9D%E1%83%A0%E1%83%98/@41.9857997,44.1112172,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40449ea6ff9e476b:0xf00d9b53f61f459f!2m2!1d44.1137635!2d41.9858078!3e0?entry=ttu">
                <p>
                  <MDBIcon fas icon="map-marker-alt" className="me-3" />
                  გორი,სტალინის გამზირი 26ა
                </p>
              </Link>

              <Link to="mailto:hotel.georgia.gold@gmail.com">
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  hotel.georgia.gold@gmail.com
                </p>
              </Link>
              <Link onClick={triggercall}>
                <p>
                  <MDBIcon icon="phone-alt" className="me-3" />{" "}
                  <MDBIcon fas icon="hotel" className="me-3" />
                  +995 596 22 22 16
                </p>
              </Link>
              <Link onClick={triggercall1}>
                <p>
                  <MDBIcon icon="phone-alt" className="me-3" />
                  <MDBIcon fas icon="glass-martini" className="me-3" />
                  +995 511 22 22 16
                </p>
              </Link>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}

function Footer1() {
  const triggercall = () => {
    const args = {
      number: " +995 596 22 22 16 ", // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };
  const triggercall1 = () => {
    const args = {
      number: " +995 511 22 22 16 ", // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };
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
              <Link to="/english">
                <h6 className="text-uppercase fw-bold mb-4">Main</h6>
              </Link>
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
              <Link to="/fitnessen">
                <p>
                  <a className="text-reset">Fitness</a>
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
              <Link to="/suitesen">
                <h6 className="text-uppercase fw-bold mb-4">Suites</h6>
              </Link>
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
              <Link to="/contacten">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              </Link>
              <Link to="https://www.google.com/maps/dir//Hotel+Georgia+Gold,+26%E1%83%90+%E1%83%A1%E1%83%A2%E1%83%90%E1%83%9A%E1%83%98%E1%83%9C%E1%83%98%E1%83%A1+%E1%83%92%E1%83%90%E1%83%9B%E1%83%96%E1%83%98%E1%83%A0%E1%83%98,+%E1%83%92%E1%83%9D%E1%83%A0%E1%83%98/@41.9857997,44.1112172,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40449ea6ff9e476b:0xf00d9b53f61f459f!2m2!1d44.1137635!2d41.9858078!3e0?entry=ttu">
                <p>
                  <MDBIcon fas icon="map-marker-alt" className="me-3" />
                  Gori, Stalin Avenue 26a
                </p>
              </Link>

              <Link to="mailto:hotel.georgia.gold@gmail.com">
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  hotel.georgia.gold@gmail.com
                </p>
              </Link>
              <Link onClick={triggercall}>
                <p>
                  <MDBIcon icon="phone-alt" className="me-3" />{" "}
                  <MDBIcon fas icon="hotel" className="me-3" />
                  +995 596 22 22 16
                </p>
              </Link>
              <Link onClick={triggercall1}>
                <p>
                  <MDBIcon icon="phone-alt" className="me-3" />
                  <MDBIcon fas icon="glass-martini" className="me-3" />
                  +995 511 22 22 16
                </p>
              </Link>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
function Footer2() {
  const triggercall = () => {
    const args = {
      number: " +995 596 22 22 16 ", // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };
  const triggercall1 = () => {
    const args = {
      number: " +995 511 22 22 16 ", // String value with the number to call
      prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call
      skipCanOpen: true, // Skip the canOpenURL check
    };

    call(args).catch(console.error);
  };
  return (
    <MDBFooter className="footer">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Свяжитесь с нами в социальных сетях:</span>
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
                Элегантный дизайн, красивые виды, отменный вкус и гостеприимный
                коллектив. <b>Отель Джорджия Голд - для особых случаев.</b>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <Link to="/russian">
                <h6 className="text-uppercase fw-bold mb-4">Главная</h6>
              </Link>
              <Link to="/caferu">
                <p>
                  <a className="text-reset">Кафе-Бар</a>
                </p>
              </Link>
              <Link to="/fitnessru">
                <p>
                  <a className="text-reset">Фитнес</a>
                </p>
              </Link>

              <Link to="/suitesru">
                <p>
                  <a className="text-reset">апартаменты</a>
                </p>
              </Link>

              <Link to="/aboutru">
                <p>
                  <a className="text-reset">о нас</a>
                </p>
              </Link>

              <Link to="/contactru">
                <p>
                  <a className="text-reset">Контакт</a>
                </p>
              </Link>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <Link to="/suitesru">
                <h6 className="text-uppercase fw-bold mb-4">апартаменты</h6>
              </Link>
              <Link to="/presidentalluxru">
                <p>
                  <a className="text-reset">Президентский Люкс</a>
                </p>
              </Link>

              <Link to="/familyluxru">
                <p>
                  <a className="text-reset">Семейный люкс</a>
                </p>
              </Link>
              <Link to="/standarttwinru">
                <p>
                  <a className="text-reset">Стандартный двойник</a>
                </p>
              </Link>
              <Link to="/standartdoubleru">
                <p>
                  <a className="text-reset">Стандарт двойной</a>
                </p>
              </Link>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <Link to="/contactru">
                <h6 className="text-uppercase fw-bold mb-4">Контакты</h6>
              </Link>
              <Link to="https://www.google.com/maps/dir//Hotel+Georgia+Gold,+26%E1%83%90+%E1%83%A1%E1%83%A2%E1%83%90%E1%83%9A%E1%83%98%E1%83%9C%E1%83%98%E1%83%A1+%E1%83%92%E1%83%90%E1%83%9B%E1%83%96%E1%83%98%E1%83%A0%E1%83%98,+%E1%83%92%E1%83%9D%E1%83%A0%E1%83%98/@41.9857997,44.1112172,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40449ea6ff9e476b:0xf00d9b53f61f459f!2m2!1d44.1137635!2d41.9858078!3e0?entry=ttu">
                <p>
                  <MDBIcon fas icon="map-marker-alt" className="me-3" />
                  Гори, проспект Сталина 26а
                </p>
              </Link>

              <Link to="mailto:hotel.georgia.gold@gmail.com">
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  hotel.georgia.gold@gmail.com
                </p>
              </Link>
              <Link onClick={triggercall}>
                <p>
                  <MDBIcon icon="phone-alt" className="me-3" />{" "}
                  <MDBIcon fas icon="hotel" className="me-3" />
                  +995 596 22 22 16
                </p>
              </Link>
              <Link onClick={triggercall1}>
                <p>
                  <MDBIcon icon="phone-alt" className="me-3" />
                  <MDBIcon fas icon="glass-martini" className="me-3" />
                  +995 511 22 22 16
                </p>
              </Link>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
  );
}
export { Footer, Footer1, Footer2 };
