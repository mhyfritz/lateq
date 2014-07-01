var defaultEq = '\\sum_i P(x_i) \\log_2 P(x_i)';
var defaultFontSize = 30;
var defaultBgColor = '#ffffff';
var defaultFgColor = '#000000';

$(document).ready(function() {
  showDefault();
});

function showDefault() {
  $("textarea").val(defaultEq);
  $("#displayarea").html(delimit(defaultEq));
  $("#fontsize").val(defaultFontSize);
  $("input[name='bg-color']").val(defaultBgColor);
  $("input[name='fg-color']").val(defaultFgColor);
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, "displayarea"]);
  MathJax.Hub.Queue(setFontSize);
  MathJax.Hub.Queue(setBgColor(defaultBgColor));
  MathJax.Hub.Queue(setFgColor(defaultFgColor));
}

function delimit(s) {
  return '\\[' + s + '\\]';
}

function setFontSize() {
  var fontSize = parseInt($('#fontsize').val(), 10);
  $('#displayarea').css('font-size', fontSize);
}

function setBgColor(col) {
  $("#displayarea").css("background-color", col);
}

function setFgColor(col) {
    $("#displayarea").css("color", col);
}
