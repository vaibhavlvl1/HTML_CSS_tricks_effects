document.querySelector('.menu-list').addEventListener('click', function (event) {
    let move = event.target.getAttribute('data-movement');
    let width = event.target.offsetWidth;
    console.log(width);
    document.querySelector('.selector').style.cssText = "bottom:" + move;




})