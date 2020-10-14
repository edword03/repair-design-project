/*document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

});
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function() {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function(){
    modal.toggleClass('modal--visible');
  });


  $(window).scroll(function () {
    // Если отступ сверху больше 50px то показываем кнопку "Наверх"
    if ($(this).scrollTop() > 450) {
        $('.button-up').fadeIn();
    } else {
        $('.button-up').fadeOut();
    }
  });

  /** При нажатии на кнопку мы перемещаемся к началу страницы */
  $('.button-up').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
  });

  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })


  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 20 + bullets.width() +20 )
  bullets.css('left', prev.width() + 15)


  new WOW().init();

//валидация формы

//валидация всплывающего окна формы
$('.modal__form').validate({
  errorClass: "invalid",
  rules: {
    // simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: {
      required: true,
      minlength: 17
    },
    // compound rule
    userEmail: {
      required: true,
      email: true
    },
    policyСheckbox: {
      required: true
    }
  }, // сообщение 
  messages: {
    userName: {
      required: "Имя обязательно к заполнению",
      minlength: "Имя должно быть не короче двух букв",
      maxlength: "Максимальное количевство символов 15"
    },
    userPhone: "Телефон обязателен",
    userEmail: {
      required: "Обязательно укажите email",
      email: "Введите в формате name@domain.com",
    },
    policyСheckbox: "Подтвердите свое согласие!"
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function (response) {
        $('.overlay').fadeIn();
        $(form)[0].reset();
        modal.removeClass('modal--visible');
      }
    });
    $('.overlay__close').click(function() {
      $('.overlay').fadeOut();
    });
  }
});

//Валидация формы подвала
$('.footer__form').validate({
  errorElement: "em",
  errorClass: "error-form",
  rules: {
    // simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: {
      required: true,
      minlength: 17
    },
    userQuestion: "required",
    policyСheckbox: {
      required: true
    },
    policyСheckbox: {
      required: true
    }
  }, // сообщение 
  messages: {
    userName: {
      required: "Имя обязательно к заполнению",
      minlength: "Имя должно быть не короче двух букв",
      maxlength: "Максимальное количевство символов 15"
    },
    userPhone: "Телефон обязателен",
    userQuestion: "Заполните пожалуйста поле",
    policyСheckbox: "Подтвердите свое согласие!"
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function (response) {
        $('.overlay').fadeIn();
        $(form)[0].reset();
        modal.removeClass('modal--visible');
      }
    });
    $('.overlay__close').click(function() {
      $('.overlay').fadeOut();
    });
  }
});

//Валидация формы в control__form
$('.control__form').validate({
  errorElement: "em",
  errorClass: "error-form",
  rules: {
    // simple rule, converted to {required:true}
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15
    },
    userPhone: {
      required: true,
      minlength: 17
    },
    policyСheckbox: {
      required: true
    }
  }, // сообщение 
  messages: {
    userName: {
      required: "Имя обязательно к заполнению",
      minlength: "Имя должно быть не короче двух букв",
      maxlength: "Максимальное количевство символов 15"
    },
    policyСheckbox: {
      required: true
    },
    userPhone: "Телефон обязателен",
    policyСheckbox: "Подтвердите свое согласие!"
  },
  submitHandler: function(form) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(form).serialize(),
      success: function (response) {
        $('.overlay').fadeIn();
        $(form)[0].reset();
        modal.removeClass('modal--visible');
      }
    });
    $('.overlay__close').click(function() {
      $('.overlay').fadeOut();
    });
  }

});

  //маска для телефона
  $('[type=tel]').mask('+7(000) 000-00-00');

  var player;

  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '460',
        width: '100%',
        videoId: 'GBBltSRTFFg',
        events: {
          'onReady': videoPlay,
        }
      });
    })
  
    function videoPlay(event) {
      event.target.playVideo();
    }

});