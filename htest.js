document.addEventListener('DOMContentLoaded', () => {
  /* Header Effect on Scroll*/

window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
 })
 
  /* ==== preloader start. ===== */
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  preloader.style.transition = 'opacity 0.4s ease';

  setTimeout(() => {
    preloader.style.display = 'none';
  }, 400);
  /* ===== preloader ends ====== */

  // Parallax effect for hero
  $(document).on('mousemove', function (e) {
    let moveX = (e.pageX / $(window).width() - 0.5) * 20;
    let moveY = (e.pageY / $(window).height() - 0.5) * 20;
    $('.hero').css('background-position', `${50 + moveX}% ${50 + moveY}%`);
  });

  /* Menu button styling*/
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
      $("article, footer").css({ opacity: "1", transition: ".5s" });
      isMenuVisible = false;
    } else {
      $("nav").slideDown(500);
      $("article, footer").css({ opacity: "0.3", transition: ".5s" });
      isMenuVisible = true;
    }
  });

  const menuBtn = document.getElementById('menu-btn');
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('clicked');
  });
  /* Menu button styling end..*/

  /* ======= Section 2 (Lookbook Script) Start =======*/
  gsap.registerPlugin(ScrollTrigger);

  // Fade in carousel when lookbook enters
  document.querySelector(".swiper").style.display = "block";
  gsap.from(".swiper-slide", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: "#lookbook",
      start: "top 80%",
      once: true
    }
  });

  // Initialize Swiper immediately
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1440: { slidesPerView: 4 },
    },
    loop: true,
    autoplay: { delay: 2000 },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  /* ===== Section 2 Ends =====*/

  /* ====== Section 3 about-contact section ====== */
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

    const templateParams = {
      myname: "Clinton",
      name: mail.value,
      message: msg.value
    };

    emailjs.send("service_alk8kvm", "template_ql3bx4s", templateParams)
      .then(() => {
        showMessage("Message sent successfully!", true);
        form.reset();
      })
      .catch((error) => {
        showMessage("Failed to send message. Please try again.", false);
        console.error("EmailJS error:", error);
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

    setTimeout(() => {
      messageSpan.style.display = "none";
    }, 5000);
  }
  /* ====== Section 3 about-contact ends ====== */

  /*==== Section 4 Performance Metrics Start ====*/
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
    start: "top 80%",
    once: true,
    onEnter: (batch) => {
      batch.forEach(card => {
        animateCountUp(card.querySelector('.count'));
        gsap.from(card, { opacity: 0, y: 40, duration: 0.5, delay: 0.1 });
      });
    }
  });

  // Fade-in for right side (no slide)
  gsap.from(".stats-right", {
    scrollTrigger: {
      trigger: ".stats-right",
      start: "top 85%",
      once: true
    },
    opacity: 0,
    duration: 1
  });
  /*==== Section 4 Performance Metrics end ====*/
});