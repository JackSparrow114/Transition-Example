$(document).ready(function(){
    $('#trigger-text').toggle();
    $('.trigger').on('click', function(){
        $(this).toggleClass('clicked');
        $('#trigger-text').toggle();
        $('#box-text').toggle();
    });
});