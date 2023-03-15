const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('error-message');

linkForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let val = input.value;
  if (!val) {
    errMsg.innerHTML = 'Please enter something'
    input.classList.add('border-red');
    return;
  }
  if (!validURL(val)) {
    errMsg.innerHTML = 'Invalid URL'
    input.classList.add('border-red');
    return;
  }

  errMsg.innerHTML = '';
  input.classList.remove('border-red');
  alert('Success')

})


// Validate a URL
function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?' +
      '(\\#[-a-z\\d_]*)?$',
    'i'
  )
  return !!pattern.test(str)
}

const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle)

function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
}
