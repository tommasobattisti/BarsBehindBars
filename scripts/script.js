$(document).ready(function() {
    
    $('#mobile-menu-btn').click(function() {
        if ($('#mobile-menu-dropdown').hasClass('hidden')) {
            $('#mobile-menu-dropdown').removeClass('hidden');
            $('#mobile-menu-btn').html('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>');
        } else {
            $('#mobile-menu-dropdown').addClass('hidden');
            $('#mobile-menu-btn').html('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>')
        };
    });
});
