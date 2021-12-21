$('h1#').hide();

$('h1#heading1').hide();

$('h1.heading2').hide();
$('.heading2').hide();

$("p span").css("color", "red");
$("span").css("color", "red");

$('ul#list li:first').css('color', 'red');
$('ul#list li:last').css('color', 'blue');
$('ul#list li:even').css('background-color', 'green');
$('ul#list li:odd').css('background-color', '#ccc');

// bullet removed from every 3rd list item //
$('ul#list li:nth-child(3n)').css('list-style', 'none');

$(':button').hide();
$(':submit').hide();
$(':text').hide();

$('[href]').css('color', 'red');
$('a[href="http://www.google.com"]').css('color', 'green');

$('*').hide();