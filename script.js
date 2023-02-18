var rightPanel = document.getElementById('scroll');
var sections = document.getElementsByClassName('section');
var buttons = document.getElementsByClassName('button');

rightPanel.addEventListener('scroll', function() {
  for (var i = 0; i < sections.length; i++) {
    if (isInView(sections[i])) {
        setActiveButton(buttons[i]);
        break;
    }
  }
});

function isInView(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function setActiveButton(button) {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }
  button.classList.add('active');
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    var targetId = this.getAttribute('data-target');
    var targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({behavior: 'smooth'});
  });
}