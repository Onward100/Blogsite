/* ============= Hamburger menu  ================= */
const navLink = document.querySelector(".navs");
const openMenu = document.querySelector(".openMenu");
// const closeMenu = document.querySelector(".closeMenu");

function showNavLinks() {
  navLink.style.marginTop = "0px";
}
function closeNavLinks() {

}
/* ================ Email =================== */
function sendMessage() {
  var params = {
    from_name: document.getElementById('fullName').value,
    email_id: document.getElementById('email_id').value,
    message: document.getElementById('message').value,
  }
  if (fullName.value === '' || email_id.value === '' || message.value === '') {
    alert("Fields can't be empty");
  }
  else {
    emailjs.send('service_02yqzad', 'template_sxhhwp8', params).then(function (res) {
      alert('Email sent successfully:', res);
    }, function (error) {
      alert("Email sending failed:", error);
    });
  }
}

/* ================ POPUP =================== */
const popUp = document.querySelector(".book-session-overlay");
const bookBtn = document.querySelector(".book-session");
const cancelBookingBtn = document.querySelector(".close");
const header = document.querySelector("#home");
const overlayBlack = document.querySelector(".overlay-black");

function popOut(e) {
  popUp.style.marginTop = "0px";
  document.body.style.overflow = "hidden";
  overlayBlack.style.display = "block";
  popUp.style.zIndex = "1";

  e.preventDefault();
}
function removePopOut(e) {
  popUp.style.marginTop = "-650px";
  document.body.style.overflow = "scroll";
  overlayBlack.style.display = "none";

  e.preventDefault();
}