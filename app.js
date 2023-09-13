const rightButton = document.querySelector(".button_right");
const leftButton = document.querySelector(".button_left");
let activeIndex = 0;
const groups = document.querySelectorAll(".group");
console.log(groups);
const onRightClick = () => {
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  console.log(nextIndex);
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  // Active group becomes after
  currentGroup.dataset.status = "after";
  // next group becomes active

  nextGroup.dataset.status = "becoming-active-from-before";

  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
  console.log(activeIndex);
};
const onLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  // Active group becomes after
  currentGroup.dataset.status = "before";
  // next group becomes active

  nextGroup.dataset.status = "becoming-active-from-after";

  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
  console.log(activeIndex);
};

rightButton.addEventListener("click", onRightClick);
leftButton.addEventListener("click", onLeftClick);
