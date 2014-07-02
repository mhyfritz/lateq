var defaultEq = '\\sum_i P(x_i) \\log_2 P(x_i)';
var defaultFontSize = 30;
var defaultBgColor = '#ffffff';
var defaultFgColor = '#000000';
var fontSizeStep = 20;
var minFontSize = 5;

$(document).ready(function() {
  showDefault();

  $("#eqinput").on('change keyup paste', function() {
    $("#displayarea").html(delimit($(this).val()));
    MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'displayarea']);
  });

  $("#bgcolor").change(function() {
    setBgColor($("#bgcolor").val());
  });

  $("#fgcolor").change(function() {
    setFgColor($("#fgcolor").val());
  }); 

  $("#fontsize").on('input', function() {
    setFontSize(getFontSize());
  });

  $("#fontsizeplus").on('click', function() {
    var newFontSize = getFontSize() + fontSizeStep;
    $("#fontsize").val(newFontSize);
    setFontSize(newFontSize);
  });

  $("#fontsizeminus").on('click', function() {
    var oldFontSize = getFontSize();
    var newFontSize = oldFontSize < (minFontSize + fontSizeStep)
                      ? minFontSize
                      : oldFontSize - fontSizeStep;
    $("#fontsize").val(newFontSize);
    setFontSize(newFontSize);
  });
});

function showDefault() {
  $("#eqinput").val(defaultEq);
  $("#displayarea").html(delimit(defaultEq));
  $("#fontsize").val(defaultFontSize);
  $("#bgcolor").val(defaultBgColor);
  $("#fgcolor").val(defaultFgColor);
  MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'displayarea']);
  MathJax.Hub.Queue(setFontSize(defaultFontSize));
  MathJax.Hub.Queue(setBgColor(defaultBgColor));
  MathJax.Hub.Queue(setFgColor(defaultFgColor));
}

function delimit(s) {
  return '\\[' + s + '\\]';
}

function getFontSize() {
  return parseInt($("#fontsize").val(), 10);
}

function setFontSize(x) {
  $('#displayarea').css('font-size', x);
}

function setBgColor(col) {
  $("#displayarea").css("background-color", col);
}

function setFgColor(col) {
  $("#displayarea").css("color", col);
}
