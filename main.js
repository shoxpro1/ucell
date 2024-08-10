const glass = document.querySelector('.glass');
const form = document.querySelector('.form');
const hill = document.querySelector('.hill');

glass.addEventListener('click', () => {
    if(form.classList.contains('formnew'))
        form.classList.remove('formnew')
    else
        form.classList.add('formnew')
})

hill.addEventListener('click', () => {
    if(form.classList.contains('formnew'))
        form.classList.remove('formnew')
    else
        form.classList.add('formnew')
})
