$(document).ready(function() {
    
    // Get data from form
    $('.regex_form').submit(function() {
        var regex = $('.regex_dropdown').val();
        var regex_function_name = regex.replace(/ /g,"_");
        var search_key = $('.search_key').val();
        var search_sentence = $('.search_sentence').val();
        var fn = regex_function_name + "('" + search_key + "', '" + search_sentence +"');";
        $('.answer').append('<h3>'+ regex + ' ' + search_key +'</h3>');
        eval(fn);
        return false;
    });

    // Check and calculate regex
    function At_the_beginning_of(search_key, search_sentence) {
    	var n=search_sentence.match("^" + search_key + "");
    	$('.answer').append('<p>Add a ^ to the beginning of the string, E.g. "^' + search_key + '"</p>');
    	$('.answer').append('<p>' + n + '</p>');
    	$('.answer').fadeIn();
    }
    function At_the_end_of(search_key, search_sentence) {
    	var n=search_sentence.match(search_key + "$");
    	$('.answer').append('Add a $ to the end of the string, E.g. "' + search_key + '$"');
    	$('.answer').append('<p>' + n + '</p>');
    	$('.answer').fadeIn();
    }
    function At_the_begining_and_end_of(search_key, search_sentence) {
    	var n=search_sentence.match("^" + search_key + "$");
    	$('.answer').append('Add a ^ to the beginning of the string and $ to the end, E.g. "^' + search_key + '"$');
    	$('.answer').append('<p>' + n + '</p>');
    	$('.answer').fadeIn();
    }
    function Anywhere(search_key, search_sentence) {
    	var n=search_sentence.match(search_key);
    	$('.answer').append('Just put the string in quotes, E.g. "' + search_key + '"');
    	$('.answer').append('<p>' + n + '</p>');
    	$('.answer').fadeIn();
    }

});