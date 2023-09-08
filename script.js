window.addEventListener('scroll', function () {
    var title = document.getElementById('fixed-title');
    var scrollY = window.scrollY;

    // Aici puteți defini condițiile pentru schimbarea culorii
    if (scrollY > 1) {
        title.style.fontSize = "20px"
        title.style.backgroundColor="#15141a"
    } else {
        title.style.fontSize = "2em"
        title.style.backgroundColor = 'transparent'; // Culoarea de fundal inițială
        title.style.color = '#fff'; // Culoarea textului inițială
    }
});