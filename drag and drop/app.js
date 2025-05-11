const lists = document.getElementsByClassName('list');
const right = document.querySelector('#right');
const left = document.querySelector('#left');
for (list of lists) {
  slist.addEventEventlistener('dragstart', function (e) {
    let selected = e.target;
    right.addEventListener('dragover', function (e) {
      e.preventDefault();
    });
     right.addEventListener('drop', function (e) {
       right.appendChild(selected);
       selected = null;
     });
 
  });
}
