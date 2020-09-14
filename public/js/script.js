var arrow = document.querySelector('#arrow');

arrow.addEventListener('click', () => {
    document.getElementById('second').scrollIntoView({behavior: "smooth", block: "start"})
    
})
