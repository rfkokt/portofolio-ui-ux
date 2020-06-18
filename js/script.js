const sidedrawer = document.querySelector(".sidedrawer");
const backdrop = document.querySelector(".backdrop");
const bars = document.getElementById("bars");

bars.addEventListener("click", () => {
  sidedrawer.classList.add("active");
  backdrop.classList.add("show");
});

backdrop.addEventListener("click", () => {
  sidedrawer.classList.remove("active");
  backdrop.classList.remove("show");
});

// Showcase part
const showcaseImageContainer = document.getElementById("showcase-image");
const indicators = document.querySelectorAll(".indicator");
console.log(indicators);

/* <img src="./assets//portfolio1.png" alt="" /> */

// let image = [1, 2, 3, 4];

window.onload = () => {
  let i = 1;
  renderImage(1);
  renderProfile(1);
  // setInterval(() => {
  //   if (i > 4) {
  //     i = 1;
  //   }
  //   renderImage(i);
  //   i++;
  // }, 2000);
};

for (const indocator of indicators) {
  indocator.addEventListener("click", (e) => {
    renderImage(e.target.id);
  });
}

function renderImage(i) {
  console.log(i)
  let imageHTML = ``;

  for (const indicator of indicators) {
    console.log(indicator)
    if (i === indicator.id) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  }

  showcaseImageContainer.innerHTML = `<img src="./assets//portfolio${i}.png" alt="" />`;
}

// Showcase part

// Testimonial Part
const persons = document.querySelectorAll(".profile_picture");
const profiles = document.querySelectorAll(".profile_picture");

const personName = document.querySelector(".testimonial_bio_name");
const personRole = document.querySelector(".testimonial_bio_role");
const personContent = document.querySelector(".testimonial_content_text");
const personStars = document.querySelector(".testimonial_content_stars");

let testimonials = [{
    id: "1",
    name: "Calvin Henry",
    role: "Restaurant Owner",
    content: "Finally, I can grow my business through digital products. All thanks to Steward",
    stars: 4,
  },
  {
    id: "2",
    name: "Arlene Cooper",
    role: "Photographer",
    content: "I would love to work with this guy. His work is perfect",
    stars: 4,
  },
  {
    id: "3",
    name: "Julie Bell",
    role: "Copywriter",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus sed vitae enim dui elementum, amet.",
    stars: 5,
  },
];

console.log(persons);

for (profile of profiles) {
  profile.addEventListener("click", (e) => {
    let index = e.target.id.split("-")[1];
    renderContent(index);
  });
}

for (const person of persons) {
  person.addEventListener("click", (e) => {
    renderProfile(e.target.id.split("-")[1])
  });
}

renderContent(2);

function renderContent(index) {
  personName.innerText = `${testimonials[index].name}`;
  personRole.innerHTML = `${testimonials[index].role}`;
  personContent.innerText = `${testimonials[index].content}`;

  let starHTML = ``;
  for (let i = 0; i < testimonials[index].stars; i++) {
    starHTML += `<span
    class="iconify star active"
    data-icon="entypo:star"
    data-inline="false"
  ></span>`;

    personStars.innerHTML = starHTML;
  }
}

function renderProfile(profileNum) {
  console.log(profileNum)
  let imageHTML = ``;
  for (const person of persons) {
    console.log(person)
    if (profileNum === person.id) {
      person.classList.add("active");
    } else {
      person.classList.remove("active");
    }
  }
}

// Testimonial Part

// handle navbar bg

const navbar = document.getElementById("navbar");

document.addEventListener("scroll", () => {
  if (window.top.scrollY > 199) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});