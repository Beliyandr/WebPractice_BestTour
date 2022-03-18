$(document).ready(function () {
  const hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    //   direction: "horizontal",
    loop: true,

    // If we need pagination
    //   pagination: {
    //     el: ".swiper-pagination",
    //   },

    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },

    // And if we need scrollbar
    //   scrollbar: {
    //     el: ".swiper-scrollbar",
    //   },
  });

  const reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    //   direction: "horizontal",
    loop: true,

    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

  let menuButton = document.querySelector(".mobile-menu ");

  menuButton.addEventListener("click", () => {
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });

  //Моадльные окна

  let modalButton = $("[data-toggle=modal]");
  let closeModalButton = $(".modal__close");

  let modalOverlay = $(".modal__overlay");
  let modalDialog = $(".modal__dialog");

  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  modalOverlay.on("click", closeModal);

  function openModal(event) {
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();

    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  // Обработка ФОРМ

  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Укажите имя",
          minlength: "Имя должно быть не короче двух букв",
        },
        email: {
          required: "Укажите email",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Телефон обязателен",
        },
      },
    });
  });

  //Маска для формы

  $(".phone_us").mask("(000) 000-0000");
  // $(".alpha-no-spaces").mask("A", {
  //   translation: {
  //     A: { pattern: /[\w@\-.+]/, recursive: true },
  //   },
  // });

  //Анимация библиоте АОS
  AOS.init();
});
