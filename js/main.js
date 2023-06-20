(function () {
  function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle', 'blue');

    const containerWidth = document.querySelector('main').offsetWidth;
    const containerHeight = document.querySelector('main').offsetHeight;

    const randomX = Math.random() * (containerWidth - 200); // Adjusted random position within container width
    const randomY = Math.random() * (containerHeight - 200); // Adjusted random position within container height

    circle.style.transform = `translate(${randomX}px, ${randomY}px)`;
    document.querySelector('main').appendChild(circle);

    // const moveCircle = () => {
    //   let deltaX = (Math.random() - 1) * 10;
    //   let deltaY = (Math.random() - 1) * 10;
    //
    //   const circleX = parseFloat(circle.style.transform.split('(')[1].split('px')[0]);
    //   const circleY = parseFloat(circle.style.transform.split(',')[1].split('px')[0]);
    //
    //   let newX = circleX + deltaX;
    //   let newY = circleY + deltaY;
    //
    //   // Check if the circle reaches the container borders
    //   if (newX <= 0 || newX >= containerWidth - 200) {
    //     deltaX *= -1; // Reverse horizontal direction
    //     newX = circleX + deltaX;
    //   }
    //
    //   if (newY <= 0 || newY >= containerHeight - 200) {
    //     deltaY *= -1; // Reverse vertical direction
    //     newY = circleY + deltaY;
    //   }
    //
    //   newX = Math.max(0, Math.min(newX, containerWidth - 200));
    //   newY = Math.max(0, Math.min(newY, containerHeight - 200));
    //
    //   circle.style.transform = `translate(${newX}px, ${newY}px)`;
    //
    //   // Repeat the animation
    //   requestAnimationFrame(moveCircle);
    // };
    // moveCircle();
  }

  // createCircle()
}());
let activeTabId = 'mobile'

function smoothScroll(elementId) {
  document.querySelector(`#${elementId}`).scrollIntoView({
    behavior: 'smooth'
  });
}

function setActiveTab(id, event) {
  const target = event.target;
  const elem = document.querySelector(`#${id}`);
  const prevElem = document.querySelector(`#${activeTabId}`);
  const prevTabElem = document.querySelector(`.${activeTabId}`);
  prevTabElem.classList.remove('active')
  prevElem.classList.remove('active')
  target.classList.add('active');
  elem.classList.add('active')
  activeTabId = id;
}

function moveScroll(direction) {
  const scrollContainer = document.querySelector('.industries-container');
  const scrollAmount = scrollContainer.offsetWidth * 0.3;
  const position = direction === 'add' ? scrollContainer.scrollLeft + scrollAmount : scrollContainer.scrollLeft - scrollAmount;

  scrollContainer.scrollTo({
    left: position,
    behavior: 'smooth'
  });
}
