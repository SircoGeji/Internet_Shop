//<BURGER_HEADER>=======================================================================================================
$('.icon-menu').click(function(event) {
    $(this).toggleClass('_active');
    $('.menu__body').toggleClass('_active');
    $('body').toggleClass('lock');
});
//</BURGER_HEADER>=========================================================================================================
//<BURGER_MENU>
// $('.menu-page__burger').click(function(event) {
//     $(this).toggleClass('_active');
//     $('.menu-page__body').toggleClass('_active');
//     $('body').toggleClass('lock');
// });

const menuPageBurger = document.querySelector('.menu-page__burger');
const menuPageBody = document.querySelector('.menu-page__body')
const bodyLock = document.querySelector('.body');
menuPageBurger.addEventListener('click', function(event){
    menuPageBurger.classList.toggle('_active');
    _slideToggle(menuPageBody);
    // menuPageBody.classList.toggle('_active');
    // bodyLock.classList.toggle('lock');
})
//</BURGER_MENU>
//<SUBMENU>
const menuParents = document.querySelectorAll('.menu-page__parent');
for(let i = 0; i < menuParents.length; i++){
    const menuParent = menuParents[i];
    menuParent.addEventListener("mouseenter", function(event){
        menuParent.classList.add('_active');
    });
    menuParent.addEventListener("mouseleave", function(event){
        menuParent.classList.remove('_active');
    });
}

//</SUBMENU>


