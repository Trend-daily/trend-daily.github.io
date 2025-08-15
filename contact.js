document.addEventListener("DOMContentLoaded",()=>{
    emailjs.init("rqySEZhRgtZkk_uVp"); // Replace with your actual EmailJS Public Key

  const form = document.getElementById("contact-form");
  const btn = document.getElementById("contactBtn");
  const spinner = document.getElementById("spinner");
  const ctxt = document.getElementById("ctxt");
  const messageSpan = document.getElementById("form-message");
  const mail = document.getElementById("email");
  const msg = document.getElementById("message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // ✅ Validate email
    if (!validator.isEmail(mail.value)) {
      showMessage("Please enter a valid email address.", false);
      return;
    }

    // ✅ Show loading spinner
    btn.disabled = true;
    spinner.style.display = "inline-block";
    ctxt.style.display = "none";

    // ✅ Your custom template parameters
    const templateParams = {
      myname: "Clinton",              // Optional extra field
      name: mail.value,
      message: msg.value
    };

    // ✅ Send using send()
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
})