$(document).ready(function() {
    
    $('.regex_form').submit(function() {
        var regex = $('.regex_dropdown').val();
        var regex_function_name = regex.replace(/ /g,"_");
        var search_key = $('.search_key').val();
        var fn = regex_function_name + "('" + search_key + "');";
        $('.answer').append('<h3>'+ regex + ' ' + search_key +'</h3>');
        eval(fn);
        return false;
    });

    function A_string_that_starts_with(search_key) {
    	$('.answer').append('Add a ^ to the beginning of the string, so the regex will look like "^' + search_key + '"');
    	$('.answer').fadeIn();
    }
    function A_string_that_ends_with(search_key) {
    	$('.answer').append('Add a $ to the end of the string, so the regex will look like "' + search_key + '$"');
    	$('.answer').fadeIn();
    }
    function A_string_that_starts_and_ends_with(search_key) {
    	$('.answer').append('Add a ^ to the beginning of the string and $ to the end, so the regex will look like "^' + search_key + '"$');
    	$('.answer').fadeIn();
    }
    function A_string_that_has_the_text(search_key) {
    	$('.answer').append('Just put the string in quotes, so the regex will look like "' + search_key + '"');
    	$('.answer').fadeIn();
    }

});