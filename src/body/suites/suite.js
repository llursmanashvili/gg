import "./suites.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import standart from "./standartroom6.jpg";
import standart1 from "./luxs7.jpg";
import family from "./familylux3.jpg";
import presidental from "./presidentallux1.jpg";

function Suite() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {" "}
      <h2 className="hh2">შეარჩიეთ სასურველი ლუქსი</h2>
      <div className="cardo">
        <div class="card">
          <img
            class="card__background"
            src={standart}
            alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            width="1920"
            height="2193"
          />
          <div class="card__content | flow">
            <div class="card__content--container | flow">
              <h2 class="card__title">სტანდარტული</h2>
              <p class="card__description">
                ნომერი გათვლილია 2 ადამიანზე,ასევე შესაძლებელია საწოლების
                დაცალკევება.
              </p>
            </div>
            <Link to="/standarttwin">
              <button class="card__button">იხილეთ მეტი</button>
            </Link>
          </div>
        </div>

        <div class="card">
          <img
            class="card__background"
            src={standart1}
            alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            width="1920"
            height="2193"
          />
          <div class="card__content | flow">
            <div class="card__content--container | flow">
              <h2 class="card__title">სტანდარტული</h2>
              <p class="card__description">
                ნომერი გათვლილია 2 ადამიანზე, ასევე შესაძლებელია მე-3 საწოლის
                დამატებაც.
              </p>
            </div>
            <Link to="/standartdouble">
              <button class="card__button">იხილეთ მეტი</button>
            </Link>
          </div>
        </div>
        <div class="card">
          <img
            class="card__background"
            src={family}
            alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            width="1920"
            height="2193"
          />
          <div class="card__content | flow">
            <div class="card__content--container | flow">
              <h2 className="card__title">საოჯახო</h2>
              <p class="card__description">
                საოჯახო ლუქსი გათვლილია 4 ადამიანზე,შესაძლებელია მეხუთე საწოლის
                დამატებაც.
              </p>
            </div>
            <Link to="/familylux">
              <button class="card__button">იხილეთ მეტი</button>
            </Link>
          </div>
        </div>
        <div class="card">
          <img
            class="card__background"
            src={presidental}
            alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
            width="1920"
            height="2193"
          />
          <div class="card__content | flow">
            <div class="card__content--container | flow">
              <h2 class="card__title">საპრეზიდენტო</h2>
              <p class="card__description">
                საპრეზიდენტო ლუქსი გათვლილია 2 ადამიანზე, მე-3 საწოლის დამატების
                შემთხვევაში იზრდება ღირებულება.
              </p>
            </div>
            <Link to="/presidentallux">
              <button class="card__button">იხილეთ მეტი</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Suite;
