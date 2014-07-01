var defaultEq = '\\sum_i P(x_i) \\log_2 P(x_i)';

$(document).ready(function() {
  showDefault();
});

function showDefault() {
  $("textarea").val(defaultEq);
  $("#displayarea").html(delimit(defaultEq));
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, "displayarea"]);
}

function delimit(s) {
  return '\\[' + s + '\\]';
}
