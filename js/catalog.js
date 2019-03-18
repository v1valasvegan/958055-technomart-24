var linkCart = document.querySelectorAll(".buy");
var popupCart = document.querySelector(".modal-cart");
var close = popupCart.querySelector(".modal-close");

linkCart.forEach(function(item) {
    item.addEventListener("click", function(evt) {
        evt.preventDefault();
        popupCart.classList.add("modal-show");
    });
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupCart.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupCart.classList.contains("modal-show")) {
            popupCart.classList.remove("modal-show");
        }
    }
})
