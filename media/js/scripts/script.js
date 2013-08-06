$(document).ready(function() {
    
    // Get data from form
    $('.regex_form').submit(function() {
        var regex = $('.regex_dropdown').val();
        var regex_function_name = regex.replace(/ /g,"_");
        var search_key = $('.search_key').val();
        var search_sentence = $('.search_sentence').val();
        //console.log(search_sentence);
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
    function Match_file_extension(search_key, search_sentence) {
        var myRegexp = /[^\\]*\.(\w+)$/;
        var check_regex = search_key.match(myRegexp);
        var extension = check_regex[1];
        $('.answer').append('Match your URL to the following regex ' + myRegexp + '');
        $('.answer').append('<p>Your file extension is: ' + extension + '</p>');
        $('.answer').fadeIn();
    }

    function Check_for_external_link(search_key, search_sentence) {
        var theDomain = window.location.hostname;
        var myRegexp = RegExp('^((f|ht)tps?:)?//(?!' + location.host + ')');
        var check_regex = myRegexp.test(search_key);
        if (check_regex == true) {
            $('.answer').append('<p>This URL does not match ours: ' + theDomain + '</p>');
        }else{
            $('.answer').append('<p>This URL does match ours: ' + theDomain + '</p>');
        }
        $('.answer').append('Test your URLs against this piece of regex ^((f|ht)tps?:)?//(?!' + location.host + ')');
        $('.answer').append('<p>Where ' + location.host + ' equals your domain</p>');
        $('.answer').fadeIn();
    }

    function Check_http_or_https(search_key, search_sentence) {
        var check_regex = search_key.match("^(http|https)://");
        $('.answer').append('Add a ^ to the beginning of the string and ? before the colon and forward slashes, E.g. "^https?://"');
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

    // On dropdown change
    $(".regex_dropdown").change(function() {
       var dropdown_item = $(this).val();
       console.log(dropdown_item);
       if (dropdown_item == "Match file extension" || dropdown_item == "Check for external link" || dropdown_item == "Check http or https") {
            disable_element();
       }else{
            $('.search_sentence').removeClass('disabled');
            $('.add_textarea').css('display','block');
       }
    });

    // Disable element
    function disable_element() {
        $('.search_sentence').addClass('disabled');
        $('.add_textarea').css('display','none');
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