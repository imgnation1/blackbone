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
  // currentGroup.dataset.status = "before";
  // next group becomes active
  nextGroup.forEach((item) => {
    item.dataset.status = "becoming-active-from-after";
  });
  // nextGroup.dataset.status = "becoming-active-from-after";

  setTimeout(() => {
    nextGroup.forEach((item) => {
      item.dataset.status = "active";
    });
    // nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
  // console.log(activeIndex);
};

rightButton.addEventListener("click", onRightClick);
leftButton.addEventListener("click", onLeftClick);
console.log(document.querySelector(".main_content").parentElement);
