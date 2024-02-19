// HTML ELEMENTS
const buttonAddRandom = document.querySelector('#btn-add-random');
const tableBody = document.querySelector('tbody#contacts');

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);
const rowTemplate = (contact) => {
	return `
  <td>
    <img src="${contact.pictureUrl}" />
  </td>
  <td> ${contact.name} </td>
  <td> ${contact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `;
};

const createNewRow = (contact) => {
	const row = document.createElement('tr');
	row.innerHTML = rowTemplate(contact);
	row.querySelector('.btn-delete').addEventListener('click', (e) => {
		e.target.parentNode.parentNode.remove();
	});
	row.querySelector('.btn-like').addEventListener('click', (e) => {
		e.target.parentNode.classList.toggle('selected');
	});
	tableBody.appendChild(row);
};

// Get the element from the spliced array
const randomContact = splicedArr[0];
createNewRow(randomContact);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);

// Your code goes here ...
threeContacts.forEach((contact) => createNewRow(contact));

const addRandomBtn = document.getElementById('btn-add-random');

addRandomBtn.addEventListener('click', (e) => {
	console.log(e.target);
	const randomIndex = Math.floor(Math.random() * contacts.length);
	const randomContact = contacts.splice(randomIndex, 1)[0];
  createNewRow(randomContact)
});
