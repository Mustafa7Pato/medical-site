let navItems = document.querySelector("#nav__items");
let openBtn = document.querySelector("#open__nav-btn");
let closeBtn = document.querySelector("#close__nav-btn");

openBtn.addEventListener("click", () => {
  navItems.style.display = "flex";
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});
closeBtn.addEventListener("click", () => {
  navItems.style.display = "none";
  openBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
});

const closeNav = () => {
  navItems.style.display = "none";
  openBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
};
if (window.innerWidth < 1024) {
  document.querySelectorAll("#nav__items li a").forEach((navItem) => {
    navItem.addEventListener("click", () => {
      closeNav();
    });
  });
}

//nav change color
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Responsive Breakpoints
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//validition form
const form = document.getElementById("myForm");

const validateName = (name) => {
  return name.trim().length >= 6;
};

const validatePhone = (phone) => {
  const expPhone =
    /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g;
  return expPhone.test(phone.trim());
};

const validateDate = (date) => {
  return !isNaN(Date.parse(date.trim()));
};

const validateSelect = (select) => {
  return select.selectedIndex !== 0;
};

const validateMessage = (message) => {
  return message.trim() !== "";
};

const resetLabel = (label, text) => {
  label.innerHTML = text;
  label.classList.remove("red");
};

const validateForm = (event) => {
  event.preventDefault();
  const name = document.getElementById("name");
  const phone = document.getElementById("phone");
  const date = document.getElementById("date");
  const department = document.getElementById("department");
  const doctor = document.getElementById("doctor");
  const message = document.getElementById("message");
  const labelName = document.querySelector('label[for="name"]');
  const labelPhone = document.querySelector('label[for="phone"]');
  const labelDate = document.querySelector('label[for="date"]');
  const labelDepartment = document.querySelector('label[for="department"]');
  const labelDoctor = document.querySelector('label[for="doctor"]');
  const labelMessage = document.querySelector('label[for="message"]');

  if (!validateName(name.value)) {
    resetLabel(labelName, "Invalid Name");
    labelName.classList.add("red");
    name.focus();
    return;
  }

  if (!validatePhone(phone.value)) {
    resetLabel(labelPhone, "Invalid Phone Number");
    labelPhone.classList.add("red");
    phone.focus();
    return;
  }

  if (!validateDate(date.value)) {
    resetLabel(labelDate, "Invalid Date");
    labelDate.classList.add("red");
    date.focus();
    return;
  }

  if (!validateSelect(department)) {
    resetLabel(labelDepartment, "Please choose a department");
    labelDepartment.classList.add("red");
    department.focus();
    return;
  }

  if (!validateSelect(doctor)) {
    resetLabel(labelDoctor, "Please choose a doctor");
    labelDoctor.classList.add("red");
    doctor.focus();
    return;
  }

  if (!validateMessage(message.value)) {
    resetLabel(labelMessage, "Please enter a message");
    labelMessage.classList.add("red");
    message.focus();
    return;
  }

  form.submit();
};

form.addEventListener("submit", validateForm);
