
const btnModal = document.querySelector(".btn-modal");
const closeBtn = document.querySelector(".close-btn");
const modalParent = document.querySelector(".modal-parent");

showModal = () => {
  modalParent.style.display = "block";
  modalParent.style.transition = "all 0.5s cubic-bezier(0.7,-0.5,0.3,1.5)";
};
hideModal = () => {
  modalParent.style.display = "none";
};
hideModalWithEsc = (e) => {
  if (e.keyCode === 27) {
    modalParent.style.display = "none";
  }
};
btnModal.addEventListener("click", showModal);
closeBtn.addEventListener("click", hideModal);
document.body.addEventListener("keyup", hideModalWithEsc);