const spinnerWrapperEl = document.querySelector(".spinner-wrapper1");
window.addEventListener ('load', () => {
    spinnerWrapperEl.style.opacity = '0';

    setTimeout(() => {
spinnerWrapperEl.style.display = 'none';
}, 600);
});