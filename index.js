// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 1000);
// console.log(3);

// setTimeout(() => {
//   console.log(4);
// }, 500);
const ampoule = document.querySelector('.ampoule');
ampoule.addEventListener('mouseenter', (e) => {
  console.log(e);
  ampoule.classList.toggle('on')
  ampoule.classList.toggle('off')
});
const lis = document.querySelectorAll('li');
const ol = document.querySelector('ol#numbers');
const body = document.querySelector('body');
body.addEventListener('dblclick', (e) => {
  const nodeToDelete = e.target;
  nodeToDelete.parentNode.removeChild(nodeToDelete);
})
//lis.forEach((li) => {
  ol.addEventListener('click', (e)=> {
    const li = e.target;
    console.log({li});
    
    li.style.color = (li.style.color == 'red') ? 'green': 'red';
  })
//})

a = document.querySelector('a');
a.addEventListener('click', (e) => {
  
  
  if (!confirm('sur t7ab tokhrej ?')) {
    e.preventDefault();
  }
})
// setInterval(
//   () => {
//     ampoule.classList.toggle('on')
//     ampoule.classList.toggle('off')
//   }, 1500
// )
let olRegions = document.querySelector('.regions');
const regions  = ['Djerba', 'Soussa', 'Kasserine', 'Tatouin', 'Beja', 'Kef', 'Bizerte', 'Nabeul'];
let index = 0;
// setInterval(
//   () => {
//     if (index == regions.length) {
//       olRegions.innerHTML = '';
//       index = 0;
//     }
//     const li = document.createElement('li');
//     li.innerHTML = regions[index++];
//     olRegions.insertBefore(li, olRegions.firstChild);
//   }, 1500
// )