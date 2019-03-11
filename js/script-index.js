var link = document.querySelector(".write-us-link");
      var popup = document.querySelector(".modal-wrapper");
      var close = popup.querySelector(".modal-close");
      var form = popup.querySelector(".write-us-form");
      var nameWriteUs = popup.querySelector(".name-icon-write-us");
      var emailWriteUs = popup.querySelector(".email-icon-write-us");
      var letterWriteUs = popup.querySelector(".letter-icon-write-us");
      var isStorageSupport = true;
      var storage;

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
            localStorage.setItem ("emailWriteUs",
              emailWriteUs.value
            );
          }
        }
      });

      window.addEventListener("keydown", function (evt) {
if (evt.keyCode ===27) {
  evt.preventDefault();
  if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  }
}
      })
