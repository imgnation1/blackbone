const rightButton = document.querySelector(".button_right");
const leftButton = document.querySelector(".button_left");
let activeIndex = 0;
const groups = document.querySelectorAll(".group");

const onRightClick = () => {
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

  const currentGroup = document.querySelectorAll(
    `[data-index="${activeIndex}"]`
  );
  nextGroup = document.querySelectorAll(`[data-index="${nextIndex}"]`);

  // Active group becomes after
  currentGroup.forEach((item) => {
    item.dataset.status = "after";
  });
  // currentGroup.dataset.status = "after";
  // next group becomes active
  nextGroup.forEach((item) => {
    item.dataset.status = "becoming-active-from-before";
  });
  // nextGroup.dataset.status = "becoming-active-from-before";

  setTimeout(() => {
    nextGroup.forEach((item) => {
      item.dataset.status = "active";
    });
    // nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
};
const onLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

  const currentGroup = document.querySelectorAll(
      `[data-index="${activeIndex}"]`
    ),
    nextGroup = document.querySelectorAll(`[data-index="${nextIndex}"]`);
  // Active group becomes after
  currentGroup.forEach((item) => {
    item.dataset.status = "before";
  });
  nextGroup.forEach((item) => {
    item.dataset.status = "becoming-active-from-after";
  });

  setTimeout(() => {
    nextGroup.forEach((item) => {
      item.dataset.status = "active";
    });
    activeIndex = nextIndex;
  });
};

rightButton.addEventListener("click", onRightClick);
leftButton.addEventListener("click", onLeftClick);
// кнопки

function setActivePoint(index) {
  points.forEach((point, i) => {
    if (i === index) {
      point.dataset.status = "active";
    } else {
      point.dataset.status = "before";
    }
  });
}
function setActiveGroup(index) {
  groups.forEach((group, i) => {
    if (i === index) {
      group.dataset.status = "becoming-active-from-before";
      setTimeout(() => {
        group.dataset.status = "active";
      });
    } else {
      group.dataset.status = "becoming-active-from-after";
      setTimeout(() => {
        group.dataset.status = "before";
      });
    }
  });
}
function onPointClick() {}

const points = document.querySelectorAll(".point");
points.forEach((item, index) => {
  item.addEventListener("click", () => {
    activeIndex = index;
    setActivePoint(activeIndex);
    setActiveGroup(activeIndex);
  });
});
console.log(points);

// LightBox
const wrapper = document.querySelectorAll(".img_wrapper");
const cards = document.querySelectorAll(".card");
// console.log(card);
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox_image");
const lightboxCard = document.createElement("div");
const nextButton = document.querySelector(".lightbox_right");
const previousButton = document.querySelector(".lightbox_left");
console.log(previousButton);
let currentIndex = 0;
wrapper.forEach((card, index) => {
  card.addEventListener("click", () => {
    currentIndex = index;
    updateImage();
    lightbox.classList.remove("hidden");
  });
});

function updateImage() {
  lightboxCard.classList = cards[currentIndex].classList;
  // console.log(currentIndex);
  lightboxCard.classList.remove("card");
  lightboxCard.classList.add("lightbox_image");
  lightboxImage.appendChild(lightboxCard);
}
lightboxCard.addEventListener("click", () => {
  lightbox.classList.add("hidden");
  lightboxImage.removeChild(lightboxCard);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    lightbox.classList.add("hidden");
    lightboxImage.removeChild(lightboxCard);
  }
});
previousButton.addEventListener("click", () => {
  console.log("her");
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateImage();
});
nextButton.addEventListener("click", () => {
  console.log("her");
  currentIndex = (currentIndex + 1) % cards.length;
  updateImage();
});
// LightBox button
// Обнвление изображения

// Dropdown
const dropdownButton = document.querySelectorAll(".dropdown_wrapper");

const onClick = () => {
  if (dropdownContent.style.display === "none") {
    dropdownContent.style.display = "block";
  } else {
    dropdownContent.style.display = "none";
  }
  if (dropdownContent.style.display === "block") {
    arrowFa.classList.replace("fa-angle-down", "fa-angle-up");
  } else {
    arrowFa.classList.replace("fa-angle-up", "fa-angle-down");
  }
};

dropdownButton.forEach((item) => {
  item.addEventListener("click", () => {
    parent = item.parentElement;
    const dropdownContent = parent.querySelector(".dropdown_content");
    const arrowFa = parent.querySelector(".btn_wrapper i");

    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
    if (dropdownContent.style.display === "block") {
      arrowFa.classList.replace("fa-angle-down", "fa-angle-up");
    } else {
      arrowFa.classList.replace("fa-angle-up", "fa-angle-down");
    }
  });
});
