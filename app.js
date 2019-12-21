//NavBar Controll

let mobile_nav_item = document.querySelectorAll('.mobile_nav_item')
let navBar = document.getElementById('navbar')
let mobile_nav = document.getElementById('mobile_nav_container')
let mobile_nav_closeBtn = document.getElementById('mobile_nav_container_close');


navbar.addEventListener('click', function () {
    let mobile_nav = document.getElementById('mobile_nav_container')
    mobile_nav.classList.add('active')
    //remove navbar
    this.style.opacity = '0';
})

//Remove mbile nav after navItem is clicked s
mobile_nav_item.forEach(item => {
    item.addEventListener('click', (e) => {
        if (e.target.parentElement.classList.contains('mobile_nav_item')) {
            let parentEle = e.target.parentElement.parentElement.parentElement
            parentEle.classList.remove('active')
            //display navbar
            navbar.style.opacity = '1'
        };

    })
})

mobile_nav.addEventListener('blur', () => {
    mobile_nav.classList.remove('active')
})
console.log(mobile_nav_item);
mobile_nav_closeBtn.addEventListener('click', () => {
    mobile_nav.classList.remove('active')
    //display navbar
    navbar.style.opacity = '1'
    console.log('thus')
})