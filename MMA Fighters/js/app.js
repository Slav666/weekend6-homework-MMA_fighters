document.addEventListener('DOMContentLoaded', () => {
  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);
//
  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const readingListItem = createReadingListItem(event.target);
  const readingList = document.querySelector('#reading-list');
  readingList.appendChild(readingListItem);

  event.target.reset();
}

const createReadingListItem = function (form) {
  const readingListItem = document.createElement('li');
  readingListItem.classList.add('reading-list-item');

  const name = document.createElement('h2');
  name.textContent = form.name.value;
  readingListItem.appendChild(name);

  const organization = document.createElement('h3');
  organization.textContent = form.organization.value;
  readingListItem.appendChild(organization);

  const weight = document.createElement('h2');
  weight.textContent = form.weight.value;
  readingListItem.appendChild(weight);

  const style = document.createElement('h2');
  style.textContent = form.style.value;
  readingListItem.appendChild(style);

  return readingListItem;
}

const handleDeleteAllClick = function (event) {
  const readingList = document.querySelector('#reading-list');
  readingList.innerHTML = '';
}
// this function lets Bruce lee makes a sound when
// user click save
 function playSound () {
document.getElementById('play').play();
}
