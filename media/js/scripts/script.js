$(document).ready(function() {
    
    $('.regex_form').submit(function() {
        var regex = $('.regex_dropdown').val();
        var regex_function_name = regex.replace(/ /g,"_");
        var search_key = $('.search_key').val();
        var fn = regex_function_name + "('" + search_key + "');";
        eval(fn);
        return false;
    });

    function A_string_that_starts_with(search_key) {
    	$('.answer').append('To get any sentence which begins with ' + search_key + ' Just add a ^ to the beginning of the word, so the regex will look like "^' + search_key + '"');
    	$('.answer').fadeIn();
    	//return false;
    }
    function A_string_that_ends_with(search_key) {
    	console.log(search_key);
    }
    function A_string_that_starts_and_ends_with(search_key) {
    	console.log(search_key);
    }
    function A_string_that_has_the_text(search_key) {
    	console.log(search_key);
    }

});