// Массив данных городов
const cities = [
    {
        name: "Краснодар",
        date: "28 февраля"
    },
    {
        name: "Ростов-на-дону",
        date: "1 марта"
    },
    {
        name: "Воронеж",
        date: "2 марта"
    },
    {
        name: "Омск",
        date: "5 марта"
    },
    {
        name: "Новосибирск",
        date: "6 марта"
    },
    {
        name: "Калининград",
        date: "22 марта"
    },
    {
        name: "Казань",
        date: "5 апреля"
    },
    {
        name: "Екатеринбург",
        date: "12 апреля"
    },
    {
        name: "Челябинск",
        date: "13 апреля"
    },
    {
        name: "Уфа",
        date: "26 апреля"
    },
    {
        name: "Самара",
        date: "27 апреля"
    },
    {
        name: "Нижний Новгород",
        date: "1 мая"
    },
];

window.addEventListener("load", () => {
    setTimeout(() => {
        const preloader = document.querySelector(".preloader");
        const site = document.querySelector(".wrapper");

        site.style.display = "block";

        preloader.style.transition = "opacity 0.5s ease";
        preloader.style.opacity = 0;

        setTimeout(() => {
            if(preloader.parentNode) {
                preloader.parentNode.removeChild(preloader);
            }
        }, 500);

    }, 3000);
});



// Создание карточки города
function createCityCard(city) {
    const cityEl = document.createElement("div");
    cityEl.classList.add("city");
    cityEl.innerHTML = `
    <div class="city__content">
      <div class="city__text">
        <h3>${city.name}</h3>
        <h4>${city.date}</h4>
      </div>
      <div class="city__btns">
        <button class="city__btn city__btn--vk" title="Сообщество концерта">
          <svg width="37" height="23" viewBox="0 0 37 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.1524 23C7.51093 23 0.300449 14.3664 0 0H6.33229C6.54029 10.5445 11.2085 15.011 14.9062 15.9319V0H20.869V9.09398C24.5204 8.70259 28.3563 4.55856 29.6505 0H35.6131C34.6194 5.61762 30.4595 9.76176 27.5013 11.4653C30.4595 12.8467 35.1974 16.4615 37 23H30.4365C29.0266 18.6256 25.5142 15.2412 20.869 14.7807V23H20.1524Z" fill="white"/>
          </svg>
        </button>
        <button class="city__btn">билеты</button>
      </div>
    </div>
    <hr>
  `;

    // Открытие попапа по кнопкам
    const buttons = cityEl.querySelectorAll(".city__btn");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => openPopup());
    });

    return cityEl;
}

// Функция отрисовки всех карточек
function renderCities(containerId, data) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    data.forEach(city => container.appendChild(createCityCard(city)));
}

// Попап
const popup = document.getElementById("popup");
const popupClose = document.getElementById("popupClose");

function openPopup() {
    popup.classList.add("popup--active");
}

function closePopup() {
    popup.classList.remove("popup--active");
}

popupClose.addEventListener("click", closePopup);
popup.addEventListener("click", (e) => {
    if (e.target === popup) closePopup();
});

// Рендеринг карточек
renderCities("citiesContainer", cities);
// Открытие попапа
openPopup();