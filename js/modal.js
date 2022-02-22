const modalWindow = document.querySelector('.modal');
const btnPlay = document.querySelector('.main__button-play');

btnPlay.addEventListener('click', () => {
  modalWindow.classList.add('active');
   document.body.style.overflow = 'hidden';
})

modalWindow.addEventListener('click', (e) => {
  const isModal = e.target.classList.contains('.modal__inner');

  if (!isModal) {
    modalWindow.classList.remove('active');
    document.body.style.overflow = '';
  }
})