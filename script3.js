document.querySelector('.card').addEventListener('click', function() {
    this.classList.toggle('is-opened');
});
        $(document).ready(function() {
        var $clickMe = $('.click-icon'),
        $card = $('.card');
        $card.on('click', function() {
        $(this).toggleClass('is-opened');
        $clickMe.toggleClass('is-hidden');
        });
});