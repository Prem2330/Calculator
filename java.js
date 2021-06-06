var color = ["hsl(222, 26%, 31%)", "hsl(0, 0%, 90%)","hsl(268, 75%, 9%)"];
var i=0;
function val()
{
  if(i===3)
  i=0;
  document.body.style.backgroundColor= color[i];
  i++;
}

var result = document.getElementById('result');

  function pushBtn(obj) {

      var pushed = obj.innerHTML;

      if (pushed == '=') {
          // Calculate
          result.innerHTML = eval(result.innerHTML);

      } else if (pushed === "RESET") {
          // All Clear
          result.innerHTML = '0';

      } else {
          if (result.innerHTML == '0') {
              result.innerHTML = pushed;

          } else {
              result.innerHTML += pushed;
          }
      }
  }
