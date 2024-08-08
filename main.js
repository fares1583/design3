// our link change span width

let prog = document.querySelector(".our-skills");
let spans = document.querySelectorAll(
  ".our-skills .container .skills .progress span"
);

// window.onscroll = function () {};

// to up
let up = document.querySelector(".up");

up.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

//LATEST EVENTS
let countDownDate = new Date("Dec 30,2024 23:59:59");

let counter = setInterval(() => {
  let dateNow = new Date();
  let dateDiff = countDownDate - dateNow;
  let days = dateDiff / (1000 * 60 * 60 * 24);
  let hours = (dateDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60;
  let minute = (dateDiff % (1000 * 60 * 60)) / 1000 / 60;
  let sec = (dateDiff % (1000 * 60)) / 1000;

  document.querySelector(".day").innerHTML = Math.floor(days);
  document.querySelector(".hour").innerHTML = Math.floor(hours);
  document.querySelector(".minute").innerHTML = Math.floor(minute);
  document.querySelector(".second").innerHTML = Math.floor(sec);
}, 1000);

// Our Awesome Stats counter
let section = document.querySelector(".stats");
let numbers = document.querySelectorAll(".stats .container .box span");
let started = false;

function startCounting(num) {
  let goal = num.dataset.goal;
  let count = setInterval(() => {
    num.textContent++;
    if (num.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

window.onscroll = function () {
  //   console.log(this.scroll);
  if (this.scrollY >= 1000) {
    up.style.right = "10px";
  } else {
    up.style.right = "-50px";
  }
  if (window.scrollY >= prog.offsetTop - 100) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  // counter Our Awesome Stats
  if (window.scrollY >= section.offsetTop - 100) {
    if (!started) {
      numbers.forEach((num) => startCounting(num));
    }
    started = true;
  }
};
