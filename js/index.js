var link = document.querySelector(".write-us-link");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector(".write-us-form");
var nameWriteUs = popup.querySelector(".name-icon-write-us");
var emailWriteUs = popup.querySelector(".email-icon-write-us");
var letterWriteUs = popup.querySelector(".letter-icon-write-us");
var isStorageSupport = true;
var storage;
var linkCart = document.querySelectorAll(".buy");
var popupCart = document.querySelector(".modal-cart");
var closeCart = popupCart.querySelector(".modal-close");
var buyButton = popupCart.querySelector(".red-button");
var popupMap = document.querySelector(".modal-map");
var linkMap = document.querySelector(".delivery-map");
var closeMap = popupMap.querySelector(".modal-close");

try {
    storage = localStorage.getItem("nameWriteUs");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
        nameWriteUs.value = storage;
        emailWriteUs.value = localStorage.getItem("emailWriteUs");
        letterWriteUs.focus();
    } else {
        nameWriteUs.focus();
    }
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
    if (!emailWriteUs.value || !nameWriteUs.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error")
    } else {
        if (isStorageSupport) {
            localStorage.setItem(
                "nameWriteUs",
                nameWriteUs.value);
            localStorage.setItem("emailWriteUs",
                emailWriteUs.value
            );
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});


linkCart.forEach(function(item, index) {
    item.addEventListener("click", function(evt) {
        evt.preventDefault();
        popupCart.classList.add("modal-show");
        buyButton.focus();
    });
});
closeCart.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupCart.classList.remove("modal-show")
    window.addEventListener("keydown", function(evt) {
        if (evt.keyCode === 27) {
            evt.preventDefault();
            if (popupCart.classList.contains("modal-show")) {
                popupCart.classList.remove("modal-show");
            }
        }
    });
});

linkMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-show");
});
closeMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-show");
});
window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupMap.classList.contains("modal-show")) {
            popupMap.classList.remove("modal-show");
        }
    }
});
