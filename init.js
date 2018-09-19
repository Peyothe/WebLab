document.addEventListener("DOMContentLoaded", function(event) {
    console.log('Ready w/ JQ');
});

$(document).ready(function() {
    $('#menu a').on('click', function(e) {
        e.preventDefault();
    })
});
