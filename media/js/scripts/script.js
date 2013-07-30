$(document).ready(function() {
    
    // Get data from form
    $('.regex_form').submit(function() {
        var regex = $('.regex_dropdown').val();
        var regex_function_name = regex.replace(/ /g,"_");
        var search_key = $('.search_key').val();
        var search_sentence = $('.search_sentence').val();
        console.log(search_sentence);
        var fn = regex_function_name + "('" + search_key + "', '" + search_sentence +"');";
        $('.answer').append('<h3>'+ regex + '</h3>');
        eval(fn);
        return false;
    });

    // Check and calculate regex
    function At_the_beginning_of(search_key, search_sentence) {
        var check_regex = search_sentence.match("^" + search_key + "");
        $('.answer').append('<p>Add a ^ to the beginning of the string, E.g. "^' + search_key + '"</p>');
        answer_regex(check_regex);
    }
    function At_the_end_of(search_key, search_sentence) {
        var check_regex = search_sentence.match(search_key + "$");
        $('.answer').append('Add a $ to the end of the string, E.g. "' + search_key + '$"');
        answer_regex(check_regex);
    }
    function Exact_match_of(search_key, search_sentence) {
        var check_regex = search_sentence.match("^" + search_key + "$");
        $('.answer').append('Add a ^ to the beginning of the string and $ to the end, E.g. "^' + search_key + '"$');
        answer_regex(check_regex);
    }
    function Anywhere(search_key, search_sentence) {
        var check_regex = search_sentence.match(search_key);
        $('.answer').append('Just put the string in quotes, E.g. "' + search_key + '"');
        answer_regex(check_regex);
    }

    // Tell user the answer to regex
    function answer_regex(answer) {
        if (answer == null) {
            $('.answer').append('<p>Your regex returned null</p>');
        }else{
            $('.answer').append('<p>Your regex returned true</p>');
        }
        $('.answer').fadeIn();
    }

    // Add extra textareas
    $(".add_textarea").click(function() {
        var count_textareas = $('.search_sentence').length;
        var next_textarea = count_textareas+1;
        console.log(count_textareas);
        $('#textarea-'+count_textareas).after('<textarea class="form-control search_sentence" id="textarea-'+ next_textarea +'"></textarea>');
        return false;
    });
});