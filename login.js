// Get the modal "ไว้เปิดpop-up"
function name() {
    var modal = document.getElementById('formlogin');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}