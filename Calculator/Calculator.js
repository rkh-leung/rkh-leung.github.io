let entries = [];
let total = 0;
let temp = '';
const btn = document.querySelector('section');
const ans = document.getElementById('input');
btn.addEventListener('click', calculateHandler);

function calculateHandler(event) {
  let val = event.target.value;
  // console.log(val);
  if (!isNaN(val) || val === '.') {
    temp += val;
    ans.innerHTML = temp.substring(0, 10);
  } else if (val === 'AC') {
    entries = [];
    temp = '';
    total = 0;
    ans.innerHTML = 0;
  } else if (val === 'CE') {
    temp = 0;
    $("#answer").val('');
  } else if (val === 'x') {
    entries.push(temp);
    entries.push('*');
    temp = '';
  } else if (val === '÷') {
    entries.push(temp);
    entries.push('/');
    temp = '';
  } else if (val === '=') {
    entries.push(temp);
    var nt = Number(entries[0]);
    for (var i = 1; i < entries.length; i++) {
      var nextNum = Number(entries[i + 1]);
      var symbol = entries[i];

      if (symbol === '+') { nt += nextNum; } else if (symbol === '-') { nt -= nextNum; } else if (symbol === '*') { nt *= nextNum; } else if (symbol === '/') { nt /= nextNum; }

      i++;
    }
    if (nt < 0) {
      nt = Math.abs(nt) + '-';
    }

    ans.innerHTML = nt;
    entries = [];
    temp = '';

  } else {
    entries.push(temp);
    entries.push(val);
    temp = '';
  }
};