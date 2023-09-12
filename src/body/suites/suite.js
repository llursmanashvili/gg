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
      <h2 className="hh2">შეარჩიეთ სასურველი ნომერი</h2>
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
              <h2 class="card__title">ლუქსი</h2>
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
function Suite1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {" "}
      <h2 className="hh2">Choose desired suite</h2>
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
              <h2 class="card__title">standart twin</h2>
              <p class="card__description">
                The room is designed for 2 people, it is also possible to
                separate the beds.
              </p>
            </div>
            <Link to="/standarttwinen">
              <button class="card__button">See More</button>
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
              <h2 class="card__title">standart double</h2>
              <p class="card__description">
                The room is designed for two people, it is also possible to add
                a third bed.
              </p>
            </div>
            <Link to="/standartdoubleen">
              <button class="card__button">See More</button>
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
              <h2 className="card__title">family lux</h2>
              <p class="card__description">
                The family suite is designed for 4 people, it is possible to add
                a fifth bed.
              </p>
            </div>
            <Link to="/familyluxen">
              <button class="card__button">See More</button>
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
              <h2 class="card__title">presidental lux</h2>
              <p class="card__description">
                The Presidential Suite is designed for 2 people, the cost
                increases if a 3rd bed is added.
              </p>
            </div>
            <Link to="/presidentalluxen">
              <button class="card__button">See More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
function Suite2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {" "}
      <h2 className="hh2">Выберите нужный номер</h2>
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
              <h2 class="card__title">стандарт двойник</h2>
              <p class="card__description">
                Номер рассчитан на 2-х человек, также есть возможность
                раздвинуть кровати.
              </p>
            </div>
            <Link to="/standarttwinru">
              <button class="card__button">Посмотреть подробнее</button>
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
              <h2 class="card__title">стандарт двойной</h2>
              <p class="card__description">
                Номер рассчитан на двух человек, также есть возможность добавить
                третью кровать.
              </p>
            </div>
            <Link to="/standartdoubleru">
              <button class="card__button">Посмотреть подробнее</button>
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
              <h2 className="card__title">семейный</h2>
              <p class="card__description">
                Семейный люкс рассчитан на 4 человек, есть возможность
                добавления пятой кровати.
              </p>
            </div>
            <Link to="/familyluxru">
              <button class="card__button">Посмотреть подробнее</button>
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
              <h2 class="card__title">президентский</h2>
              <p class="card__description">
                Президентский люкс рассчитан на 2-х человек, при добавлении 3-го
                места стоимость увеличивается.
              </p>
            </div>
            <Link to="/presidentalluxru">
              <button class="card__button">Посмотреть подробнее</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export { Suite, Suite1, Suite2 };
