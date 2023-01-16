let visible = false;
$(document).ready(function () {
  $("#menu-title").click(() => {
    visible = !visible;
    visible
      ? $("li>p:last-child").fadeIn("slow")
      : $("li>p:last-child").css("display", "none");
    if (visible) {
      $("#navWrap").animate(
        {
          width: "10vw",
        },
        {
          duration: 500,
        }
      );
    } else {
      $("#navWrap").animate(
        {
          width: "5vw",
        },
        {
          duration: 500,
        }
      );
    }
  });
  $("li").each(function (index) {
    $(this).click(() => {
      activate(index);
    });
  });

  $(".slider").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

const activate = (ind) => {
  $("li").each(function (index) {
    if (ind === index) {
      $(this).prop("class", "red");
      $(this).animate({
        fontSize: "1.5rem",
      });
    } else {
      $(this).prop("class", "black");
      $(this).animate({
        style: "none",
      });
    }
  });
};
