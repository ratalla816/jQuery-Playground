$("h1#").hide();

$("h1#heading1").hide();

$("h1.heading2").hide();
$(".heading2").hide();

$("p span").css("color", "red");
$("span").css("color", "red");

$("ul#list li:first").css("color", "red");
$("ul#list li:last").css("color", "blue");
$("ul#list li:even").css("background-color", "green");
$("ul#list li:odd").css("background-color", "#ccc");

// bullet removed from every 3rd list item //
$("ul#list li:nth-child(3n)").css("list-style", "none");

$(":button").hide();
$(":submit").hide();
$(":text").hide();

$("[href]").css("color", "red");
$('a[href="http://www.google.com"]').css("color", "green");

$("*").hide();

$(document).ready(function () {
  $("#btn1").click(function () {
    alert("Button 1 was clicked!");
  });

  $("#btn2").click(function () {
    alert("Button 2 was clicked!");
  });

  $("#btn1").on("click", function () {
    alert("Button 1 was clicked!");
  });

  // hide paragraph //
  $("#btn1").on("click", function () {
    $(".paragraph1").hide();
  });

  // show paragraph //
  $("#btn2").click(function () {
    $(".paragraph1").show();
  });

  // toggle paragraph //
  $("#btn3").on("click", function () {
    $(".paragraph1").toggle();
  });
});

$("#btn4").dblclick(function () {
  $(".paragraph2").toggle();
});

$("#btn4").hover(function () {
  $(".paragraph2").toggle();
});

$("#btn5").on("mouseenter", function () {
  $(".paragraph2").toggle();
});

$("#btn5").on("mouseleave", function () {
  $(".paragraph2").toggle();
});

$("#btn5").on("mousemove", function () {
  $(".paragraph2").toggle();
});

$("#btn6").on("mousedown", function () {
  $(".paragraph2").toggle();
});

$("#btn6").on("mouseup", function () {
  $(".paragraph2").toggle();
});

 // console log all the objects attributes //
 $('#btn7').click(function (e) {
    console.log(e);
});

$('#btn8').click(function (e) {
    alert(e.currentTarget.id);
});

$('#btn9').click(function (e) {
    alert(e.currentTarget.innerHTML);
});

$('#btn10').click(function (e) {
    alert(e.currentTarget.outerHTML);
});

$('#btn11').click(function (e) {
    alert(e.currentTarget.className);
});

$('#btn12').on('mousemove', function (e) {
    $('#coords').html('Coords: Y: ' + e.clientY + ' X: ' + e.clientX);
});

$('input').focus(function () {
    //  alert('Focus');
    $(this).css('background', 'chartreuse');
});

$('input').blur(function () {
    //  alert('Blur');
    $(this).css('background', '#f4f4f4');
});

$('input').keyup(function (e) {
    //  alert('Blur');
    console.log(e.target.value)
});

$('select#preference').change(function (e) {
    alert('Changed');
});

$('select#preference').change(function (e) {
    alert(e.target.value);
});

$('#form').submit(function (e) {
    e.preventDefault();
    alert('Submitted');
    var name = $('input#name').val();
    console.log(name);
});
