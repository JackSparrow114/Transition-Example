$('.trigger').on('click', function(){
    $(this).toggleClass('clicked');
    document.getElementById('click-text').innerText = "Click Here!";
});