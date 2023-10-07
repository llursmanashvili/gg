import "./card.css";
import { Link } from "react-router-dom";
import cafe from "./photos/cafe/cafe18.JPG";
import hotel from "./photos/presidentallux/presidentallux3.jpg";
import fitness from "./Polish.jpg";
function Card() {
  return (
    <>
      {" "}
      <div class="box-container">
        <div class="box-item">
          <div class="flip-box">
            <div
              class="flip-box-front text-center"
              style={{
                backgroundImage: `url('${hotel}')`,
              }}
            >
              <div class="inner color-white">
                <h3 class="flip-box-header">სასტუმროს ნომრები</h3>
                <img
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt="hotel georgia gold"
                  class="flip-box-img"
                />
              </div>
            </div>
            <div
              class="flip-box-back text-center"
              style={{
                backgroundImage: `url('${hotel}')`,
              }}
            >
              <div class="inner color-white">
                <h3 class="flip-box-header">სასტუმროს ნომრები</h3>
                <p>შეარჩიეთ თქვენზე მორგებული ლუქსი</p>
                <Link to="/suites">
                  <button class="flip-box-button">იხილეთ მეტი</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="box-item">
          <div class="flip-box">
            <div
              class="flip-box-front text-center"
              style={{
                backgroundImage: `url('${cafe}')`,
              }}
            >
              <div class="inner color-white">
                <h3 class="flip-box-header">კაფე-ბარი</h3>
                <img
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt="hotel georgia gold"
                  class="flip-box-img"
                />
              </div>
            </div>
            <div
              class="flip-box-back text-center"
              style={{
                backgroundImage: `url('${cafe}')`,
              }}
            >
              <div class="inner color-white">
                <h3 class="flip-box-header">კაფე-ბარი</h3>
                <p>იხილეთ ჩვენი მენიუ და დაათვალიერეთ გალერეა</p>
                <Link to="/cafe">
                  <button class="flip-box-button">იხილეთ მეტი</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="box-item">
          <div class="flip-box">
            <div
              class="flip-box-front text-center"
              style={{
                backgroundImage: `url('${fitness}')`,
              }}
            >
              <div class="inner color-white">
                <h3 class="flip-box-header">ფიტნესი</h3>
                <img
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt="hotel georgia gold"
                  class="flip-box-img"
                />
              </div>
            </div>
            <div
              class="flip-box-back text-center"
              style={{
                backgroundImage: `url('${fitness}')`,
              }}
            >
              <div class="inner color-white">
                <h3 class="flip-box-header">ფიტნესი</h3>
                <p>გაეცანით იოგის,ფიტნესისა და აქვა აერობიკის განრიგებს</p>
                <Link to="/fitness">
                  <button class="flip-box-button">იხილეთ მეტი</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Card1() {
  return (
    <>
      {" "}
      <div class="box-container">
        <div class="box-item">
          <div class="flip-box">
            <div
              class="flip-box-front text-center"
              style={{
                backgroundImage: `url('${hotel}')`,
              }}
            >
              <div class="inner color-white">
                <h3 class="flip-box-header">Hotel Rooms</h3>
                <img
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt="hotel georgia gold"
                  class="flip-box-img"
                />
              </div>
            </div>
            <div
              class="flip-box-back text-center"
              style={{
                backgroundImage: `url('${hotel}')`,
              }}
            >
              <div class="inner color-white">
                <h3 class="flip-box-header">Hotel Rooms</h3>
                <p>Choose the suit that suits you</p>
                <Link to="/suitesen">
                  <button class="flip-box-button">See More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="box-item">
          <div class="flip-box">
            <div
              class="flip-box-front text-center"
              style={{
                backgroundImage: `url('${cafe}')`,
              }}
            >
              <div class="inner color-white">
                <h3 class="flip-box-header">Cafe-Bar</h3>
                <img
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt="hotel georgia gold"
                  class="flip-box-img"
                />
              </div>
            </div>
            <div
              class="flip-box-back text-center"
              style={{
                backgroundImage: `url('${cafe}')`,
              }}
            >
              <div class="inner color-white">
                <h3 class="flip-box-header">Cafe-Bar</h3>
                <p>See our menu and browse the gallery</p>
                <Link to="/cafeen">
                  <button class="flip-box-button">See More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="box-item">
          <div class="flip-box">
            <div
              class="flip-box-front text-center"
              style={{
                backgroundImage: `url('${fitness}')`,
              }}
            >
              <div class="inner color-white">
                <h3 class="flip-box-header">Fitness</h3>
                <img
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt="hotel georgia gold"
                  class="flip-box-img"
                />
              </div>
            </div>
            <div
              class="flip-box-back text-center"
              style={{
                backgroundImage: `url('${fitness}')`,
              }}
            >
              <div class="inner color-white">
                <h3 class="flip-box-header">Fitness</h3>
                <p>
                  Get to know the schedules of yoga, fitness and aqua aerobics
                </p>
                <Link to="/fitnessen">
                  <button class="flip-box-button">See more</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Card2() {
  return (
    <>
      {" "}
      <div class="box-container">
        <div class="box-item">
          <div class="flip-box">
            <div
              class="flip-box-front text-center"
              style={{
                backgroundImage: `url('${hotel}')`,
              }}
            >
              <div class="inner color-white">
                <h3 class="flip-box-header">Гостиничные номера</h3>
                <img
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt="hotel georgia gold"
                  class="flip-box-img"
                />
              </div>
            </div>
            <div
              class="flip-box-back text-center"
              style={{
                backgroundImage: `url('${hotel}')`,
              }}
            >
              <div class="inner color-white">
                <h3 class="flip-box-header">Гостиничные номера</h3>
                <p>Выберите комнату, который вам подходит</p>
                <Link to="/suitesru">
                  <button class="flip-box-button">Посмотреть подробнее</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="box-item">
          <div class="flip-box">
            <div
              class="flip-box-front text-center"
              style={{
                backgroundImage: `url('${cafe}')`,
              }}
            >
              <div class="inner color-white">
                <h3 class="flip-box-header">кафе-бар</h3>
                <img
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt="hotel georgia gold"
                  class="flip-box-img"
                />
              </div>
            </div>
            <div
              class="flip-box-back text-center"
              style={{
                backgroundImage: `url('${cafe}')`,
              }}
            >
              <div class="inner color-white">
                <h3 class="flip-box-header">кафе-бар</h3>
                <p>Смотрите наше меню и просмотрите галерею</p>
                <Link to="/caferu">
                  <button class="flip-box-button">Посмотреть подробнее</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="box-item">
          <div class="flip-box">
            <div
              class="flip-box-front text-center"
              style={{
                backgroundImage: `url('${fitness}')`,
              }}
            >
              <div class="inner color-white">
                <h3 class="flip-box-header">Фитнес</h3>
                <img
                  src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png"
                  alt="hotel georgia gold"
                  class="flip-box-img"
                />
              </div>
            </div>
            <div
              class="flip-box-back text-center"
              style={{
                backgroundImage: `url('${fitness}')`,
              }}
            >
              <div class="inner color-white">
                <h3 class="flip-box-header">Фитнес</h3>
                <p>Ознакомьтесь с программами йоги, фитнеса и акваэробики</p>
                <Link to="/fitnessru">
                  <button class="flip-box-button">Посмотреть подробнее</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export { Card, Card1, Card2 };
