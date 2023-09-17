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
console.log(document.querySelector(".main_content").parentElement);

// Dropdown
const dropdownButton = document.querySelector(".dropdown_wrapper");
const dropdownContent = document.querySelector(".dropdown_content");
const arrowFa = document.querySelector(".btn_wrapper i");
dropdownContent.style.display = "none";

// dropdownContent.style.display = "none";
dropdownButton.addEventListener("click", () => {
  // console.log(1);
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
});
console.log(document.querySelector(".dropdown_adress p:first-child"));
