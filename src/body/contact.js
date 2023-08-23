import React, { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import "./contact.css";
import "react-native";
import call from "react-native-phone-call/index";
import { MDBIcon } from "mdb-react-ui-kit";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n1w9ggl",
        "template_mhos0b6",
        form.current,
        "orN1q6mtqVo2S8P6L"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="email">
        <div className="contact1">
          <div className="call">
            <p className="p">დაგვიკავშირდით მარტივად</p>
            <button className="box text-warning mb-3" onClick={triggercall}>
              <MDBIcon className="icon" fas icon="phone-alt" />
              სასტუმრო
              <MDBIcon fas icon="hotel" className="me-1 ml-2" />
            </button>
            <button className="box text-warning mb-3" onClick={triggercall1}>
              <MDBIcon className="icon" fas icon="phone-alt" />
              კაფე-ბარი
              <MDBIcon fas icon="glass-martini" className="me-1 ml-2" />
            </button>
          </div>
          <div className="direction">
            <p className="p">მოგვძებნეთ მარტივად</p>
            <button className="box">
              <a
                className="text-warning"
                href="https://www.google.com/maps/dir//Hotel+Georgia+Gold,+26%E1%83%90+%E1%83%A1%E1%83%A2%E1%83%90%E1%83%9A%E1%83%98%E1%83%9C%E1%83%98%E1%83%A1+%E1%83%92%E1%83%90%E1%83%9B%E1%83%96%E1%83%98%E1%83%A0%E1%83%98,+%E1%83%92%E1%83%9D%E1%83%A0%E1%83%98/@41.9857997,44.1112172,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40449ea6ff9e476b:0xf00d9b53f61f459f!2m2!1d44.1137635!2d41.9858078!3e0?entry=ttu"
              >
                <MDBIcon className="icon" fas icon="map-marked-alt" />
                გვეწვიეთ
              </a>
            </button>
          </div>
        </div>

        <div className="emaili">
          <StyledContactForm>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="to_name" />
              <label>Email</label>
              <input type="email" name="from_name" />
              <label>Message</label>
              <textarea name="message" />
              <input
                type="submit"
                value="Send"
                onClick={() => {
                  window.location.reload(false);
                }}
              />
            </form>
          </StyledContactForm>
        </div>
      </div>
    </>
  );
};
const Contact1 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n1w9ggl",
        "template_mhos0b6",
        form.current,
        "orN1q6mtqVo2S8P6L"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="email">
        <div className="contact1">
          <div className="call">
            <p className="p">Contact us easily</p>
            <button className="box text-warning mb-3" onClick={triggercall}>
              <MDBIcon className="icon" fas icon="phone-alt" />
              Hotel
              <MDBIcon fas icon="hotel" className="me-1 ml-2" />
            </button>
            <button className="box text-warning mb-3" onClick={triggercall1}>
              <MDBIcon className="icon" fas icon="phone-alt" />
              Cafe-Bar
              <MDBIcon fas icon="glass-martini" className="me-1 ml-2" />
            </button>
          </div>
          <div className="direction">
            <p className="p">Find us easily</p>
            <button className="box">
              <a
                className="text-warning"
                href="https://www.google.com/maps/dir//Hotel+Georgia+Gold,+26%E1%83%90+%E1%83%A1%E1%83%A2%E1%83%90%E1%83%9A%E1%83%98%E1%83%9C%E1%83%98%E1%83%A1+%E1%83%92%E1%83%90%E1%83%9B%E1%83%96%E1%83%98%E1%83%A0%E1%83%98,+%E1%83%92%E1%83%9D%E1%83%A0%E1%83%98/@41.9857997,44.1112172,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x40449ea6ff9e476b:0xf00d9b53f61f459f!2m2!1d44.1137635!2d41.9858078!3e0?entry=ttu"
              >
                <MDBIcon className="icon" fas icon="map-marked-alt" />
                Visit us
              </a>
            </button>
          </div>
        </div>

        <div className="emaili">
          <StyledContactForm>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="to_name" />
              <label>Email</label>
              <input type="email" name="from_name" />
              <label>Message</label>
              <textarea name="message" />
              <input
                type="submit"
                value="Send"
                onClick={() => {
                  window.location.reload(false);
                }}
              />
            </form>
          </StyledContactForm>
        </div>
      </div>
    </>
  );
};

export { Contact, Contact1 };

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  margin-top: 100px;
  form {
    margin: 10px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      text-align: center;
      margin-top: 1rem;
      font-family: "Times New Roman", serif;
      letter-spacing: 3px;
      font-size: 40px;
      font-weight: bold;
      background-image: linear-gradient(
        to right,
        #a17e50 0,
        #cb9b51 22%,
        #f6e27a 45%,
        #aca871 50%,
        #f6e27a 55%,
        #cb9b51 78%,
        #a17e50 100%
      );
      color: transparent;
      -webkit-background-clip: text;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      color: white;
      outline: none;
      background-size: 150% 150%;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23),
        inset 0 -2px 5px 1px #b17d10,
        inset 0 -1px 1px 3px rgba(250, 227, 133, 1);
      border: 1px solid rgba(165, 93, 7, 0.6);
      color: rgba(120, 50, 5, 0.8);

      display: inline-block;
      outline: none;
      font-family: inherit;
      font-size: 1em;
      box-sizing: border-box;
      border: none;
      border-radius: 0.8em;
      height: 2.75em;
      line-height: 2.5em;
      text-transform: uppercase;
      padding: 0 2em;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
        0 3px 6px rgba(110, 80, 20, 0.4),
        inset 0 -2px 5px 1px rgba(139, 66, 8, 1),
        inset 0 -1px 1px 3px rgba(250, 227, 133, 1);
      background-image: linear-gradient(
        160deg,
        #a54e07,
        #b47e11,
        #fef1a2,
        #bc881b,
        #a54e07
      );
      border: 1px solid #a55d07;
      color: rgb(120, 50, 5);
      text-shadow: 0 2px 2px rgba(250, 227, 133, 1);
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      background-size: 100% 100%;
      background-position: center;
      transition: 0.6s;
      border: none;
    }
  }
`;
