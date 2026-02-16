// console.log(1);
// setTimeout(() => {
//   console.log(2);
// }, 1000);
// console.log(3);

// setTimeout(() => {
//   console.log(4);
// }, 500);
//const ampoule = document.querySelector('.ampoule')
// setInterval(
//   () => {
//     ampoule.classList.toggle('on')
//     ampoule.classList.toggle('off')
//   }, 1500
// )
let olRegions = document.querySelector('.regions');
const regions  = ['Djerba', 'Soussa', 'Kasserine', 'Tatouin', 'Beja', 'Kef', 'Bizerte', 'Nabeul'];
let index = 0;
setInterval(
  () => {
    if (index == regions.length) {
      olRegions.innerHTML = '';
      index = 0;
    }
    const li = document.createElement('li');
    li.innerHTML = regions[index++];
    olRegions.insertBefore(li, olRegions.firstChild);
  }, 1500
)