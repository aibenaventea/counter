let submit = document.querySelector('.submit')
let reset = document.querySelector('.reset')
let form = document.querySelector('.counterForm')


submit.addEventListener('click', () => {
    form.action = '/incrementar';
})

reset.addEventListener('click', () => {
    form.action = '/resetear';
})