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
//<SEARCH_SELECT>
const searchTitle = document.querySelector('.search-page__title');
const searchCategories = document.querySelector('.search-page__categories');
searchTitle.addEventListener('click', function(event){
    searchTitle.classList.toggle('_active');
    _slideToggle(searchCategories);
})
//</SEARCH_SELECT>
//<CHECKBOX_SEARCH>
const checkboxCategories = document.querySelectorAll('.categories-search__checkbox');
for (let i = 0; i < checkboxCategories.length; i++) {
    const checkboxCategory = checkboxCategories[i];
    checkboxCategory.addEventListener('change', function(event){
        checkboxCategory.classList.toggle('_active');
        const checkboxActiveCategories = document.querySelectorAll('.categories-search__checkbox._active');
        if (checkboxActiveCategories.length > 0){
            searchTitle.classList.add('_categories');
            const searchQuantity = document.querySelector('.search-page__quantity');
            searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + " " + checkboxActiveCategories.length;
        } else {
            searchTitle.classList.remove('_categories');
        }
    })
}
//</CHECKBOX_SEARCH>


