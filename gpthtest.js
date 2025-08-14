document.addEventListener('DOMContentLoaded', () => {

  /* ==== Preloader ==== */
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  preloader.style.transition = 'opacity 0.4s ease';
  setTimeout(() => { preloader.style.display = 'none'; }, 400);

  /* ==== Parallax Effect for Hero ==== */
  $(document).on('mousemove', function (e) {
    let moveX = (e.pageX / $(window).width() - 0.5) * 20;
    let moveY = (e.pageY / $(window).height() - 0.5) * 20;
    $('.hero').css('background-position', `${50 + moveX}% ${50 + moveY}%`);
  });

  /* ==== Menu Toggle ==== */
  let isMenuVisible = false;
  $("main, footer").on("click", () => {
    if (isMenuVisible) {
      $("nav").slideUp(500);
      $(".menu-btn").trigger("click");
      isMenuVisible = false;
    }
  });

  $(".menu-btn").on("click", () => {
    if (isMenuVisible) {
      $("nav").slideUp(500);
      $("article, footer").css({ "opacity": "1", "transition": ".5s" });
      isMenuVisible = false;
    } else {
      $("nav").slideDown(500);
      $("article, footer").css({ "opacity": "0.3", "transition": ".5s" });
      isMenuVisible = true;
    }
  });

  document.getElementById('menu-btn').addEventListener('click', (e) => {
    e.target.classList.toggle('clicked');
  });

  /* ==== Section 2: Lookbook Animation ==== */
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".lookbook-grid", {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "#lookbook",
      start: "top bottom"
    }
  });

  let animationPlayed = false;
  ScrollTrigger.create({
    trigger: ".last-image",
    start: "top bottom",
    once: true,
    onEnter: () => {
      if (animationPlayed) return;
      animationPlayed = true;

      gsap.to(".lookbook-grid img", {
        scale: 0.8,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        onComplete: () => {
          document.querySelector(".lookbook-grid").style.display = "none";
          document.querySelector(".swiper").style.display = "block";

          gsap.from(".swiper-slide", {
            opacity: 0,
            y: 50,
            stagger: 0.15,
            duration: 0.6
          });

          new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 4 }
            },
            loop: true,
            autoplay: { delay: 2000 },
            pagination: { el: ".swiper-pagination", clickable: true },
            navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
          });
        }
      });
    }
  });

  /* ==== Section 3: About & Contact ==== */
  emailjs.init("rqySEZhRgtZkk_uVp");

  const form = document.getElementById("contact-form");
  const btn = document.getElementById("contactBtn");
  const spinner = document.getElementById("spinner");
  const ctxt = document.getElementById("ctxt");
  const messageSpan = document.getElementById("form-message");
  const mail = document.getElementById("email");
  const msg = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!validator.isEmail(mail.value)) {
      showMessage("Please enter a valid email address.", false);
      return;
    }

    btn.disabled = true;
    spinner.style.display = "inline-block";
    ctxt.style.display = "none";

    const templateParams = { myname: "Clinton", name: mail.value, message: msg.value };

    emailjs.send("service_alk8kvm", "template_ql3bx4s", templateParams)
      .then(() => {
        showMessage("Message sent successfully!", true);
        form.reset();
      })
      .catch(() => {
        showMessage("Failed to send message. Please try again.", false);
      })
      .finally(() => {
        btn.disabled = false;
        spinner.style.display = "none";
        ctxt.style.display = "inline-block";
      });
  });

  function showMessage(text, success = true) {
    messageSpan.textContent = text;
    messageSpan.style.color = success ? "#030" : "red";
    messageSpan.style.fontWeight = "bold";
    messageSpan.style.display = "block";
    setTimeout(() => { messageSpan.style.display = "none"; }, 5000);
  }

  /* ==== Section 4: Performance Metrics ==== */
  function animateCountUp(el) {
    let target = +el.getAttribute('data-target');
    let count = { val: 0 };
    gsap.to(count, {
      val: target,
      duration: 2,
      ease: "power1.out",
      onUpdate: () => { el.textContent = Math.floor(count.val).toLocaleString(); }
    });
  }

  ScrollTrigger.batch(".stat-card", {
    start: "top bottom",
    once: true,
    onEnter: (batch) => {
      batch.forEach(card => {
        animateCountUp(card.querySelector('.count'));
        gsap.from(card, { opacity: 0, y: 40, duration: 0.5, delay: 0.1 });
      });
    }
  });

  gsap.from(".stats-right", {
    scrollTrigger: {
      trigger: ".stats-right",
      start: "top bottom",
      once: true
    },
    opacity: 0,
    x: 80,
    duration: 1
  });

});

/* ==== Ensure ScrollTrigger recalculates after images/fonts load ==== */
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});