const btnNo = document.querySelector('.button_no');

btnNo.addEventListener('mouseover', () => {
    const noBtnRect = btnNo.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
});
