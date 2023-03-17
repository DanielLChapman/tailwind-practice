const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

//tabs event listener
tabs.forEach((x) => {
  x.addEventListener('click', onTabClick)
});

function onTabClick(e) {
  //deactivate all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove('border-softRed', 'border-b-4', 'md:border-b-0')
  })

  //hide all panels 
  panels.forEach((panel) => {
    panel.classList.add('hidden');
  })

  //activate a new tab
  e.target.classList.add('border-softRed', 'border-b-4')
  //show panel
  const target = e.target.getAttribute('data-target');
  document.getElementById('panels').getElementsByClassName(target)[0].classList.remove('hidden')
}




// Hamburger button listener

const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')

btn.addEventListener('click', navToggle)


function navToggle() {
  btn.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')

  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg')
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg')
  }
}
