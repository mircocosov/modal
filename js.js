const modalEl = document.querySelector(".modal__container");

const openModal = () => {
  modalEl.classList.add("active");
};

const closeModal = () => {
  modalEl.classList.remove("active");
};
