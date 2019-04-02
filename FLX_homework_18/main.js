const modal = document.getElementById('myModal');
const modalContent = document.querySelector('.modal-content');
const span = document.getElementsByClassName("close")[0];
let profiles = [];
// MODAL CLOSE LISTENERS
span.onclick = function() {
  closeModal();
}
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

// INIT
getUsers();

function closeModal() {
  const modalBody = document.getElementById('modal-body');
  modalBody.remove();
  modal.style.display = "none";
}

function openUsersPosts(id) {
  getPosts(id);
  modal.style.display = 'block';
}

function openEditMode(arr) {
  renderUserForm({
    username: arr[0],
    companyName: arr[1],
    city: arr[2],
    street: arr[3],
    zipcode: arr[4],
    userId: arr[5]
  });
  modal.style.display = 'block';
}

function getUsers() {
  const url  = 'https://jsonplaceholder.typicode.com/users';
  const xhr  = new XMLHttpRequest();

  xhr.open('GET', url)
  xhr.onload = function () {
    profiles = JSON.parse(xhr.responseText);
    renderUserCard(profiles);
  }
  xhr.send();
}

function getPosts(userId) {
  const url  = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
  const xhr  = new XMLHttpRequest();
  xhr.open('GET', url)
  xhr.onload = function () {
    const posts = JSON.parse(xhr.responseText);

    Promise.all(posts.map((post) => {
      return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`).then(data => data.json());
    })).then((comments) => {
      posts.forEach((post, i) => {
        post.comments = comments[i];
      });
      renderPosts(posts);
    });

  }
  xhr.send();
}

function getComments(postId) {
  const url  = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
  const xhr  = new XMLHttpRequest();
  xhr.open('GET', url)
  xhr.onload = function () {
    const comments = JSON.parse(xhr.responseText);
    renderComments(comments);
  }
  xhr.send();
}

function deleteUser(userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { method: 'DELETE' })
    .then(() => {
      const card = document.getElementsByClassName(`container-${userId}`);
      card[0].remove();
    });
}

function editUser(userId) {
  const newData = {
    username: document.getElementById('input-username').value,
    street: document.getElementById('input-street').value,
    city: document.getElementById('input-city').value,
    zip: document.getElementById('input-zip').value,
    company: document.getElementById('input-company').value
  };

  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
    method: 'PUT',
    body: JSON.stringify({
      id: userId,
      username: newData.username,
      address: {
        street: newData.street,
        city: newData.city,
        zipcode: newData.zip
      },
      company: {
        name: newData.company
      }
    })
  }).then(() => {
    closeModal();
  });
}

function renderComments(data) {
  let htmlString = '';
  for(let i = 0; i < data.length; i++) {
    const { name, email, body } = data[i];
    htmlString += `
      <p><b>${name}</b></p>
      <p><b>${email}</b></p>
      <p>${body}</p>`;
  };

  return htmlString;
}

function renderPosts(data) {
  let htmlString = '';
  for(let i = 0; i < data.length; i++) {
    const { title, body } = data[i];
    const postId = data[i].id;

    htmlString += `
      <h4>${title}</h4>
      <div>${body}</div>
      <div class="comments">${renderComments(data[i].comments)}</div>`;
  };

  modalContent.insertAdjacentHTML('beforeend', `<div id="modal-body">${htmlString}</div>`);
}

function renderUserCard(data) {
  let htmlString = '';
  for(let i = 0; i < data.length; i++) {
    const username = data[i].username;
    const userId = data[i].id;
    const companyName = data[i].company.name;
    const {
      city,
      zipcode,
      street
    } = data[i].address;

    htmlString += `<div class="container container-${userId}">

<div class="col">
        <img id="kitten-${i}"/>
        <div>
          <span><b>Username:</b></span>
          <a class="label" onclick="openUsersPosts(${userId})">${username}</a>
        </div>
      </div>
      <div class="col">
        <div>
          <span><b>Adress:</b></span>
          <address>
            <p>${zipcode}</p>
            <p>${city}</p>
            <p>${street}</p>
          </address>
        </div>
        <div>
          <span><b>Company name:</b></span>
          <span class="label">${companyName}</span>
        </div>
      </div>
      <div class="col">
        <button class="btn edit" onclick="openEditMode(['${username}', '${companyName}', '${city}', '${street}', ${zipcode}, ${userId}])">EDIT</button>
        <button class="btn delete" onclick="deleteUser(${userId})">DELETE</button>
      </div>
    </div>`;

    fetch('https://api.thecatapi.com/v1/images/search?size=small')
      .then(response => response.json())
      .then(json => {
        document.getElementById(`kitten-${i}`).src = json[0].url;
      });
  }
  document.body.insertAdjacentHTML('afterbegin', `<div id="userlist">${htmlString}</div>`);
}

function renderUserForm(userData) {
  let htmlString = `<div id="modal-body">
    <label>Username:</label>
    <input id="input-username" type="text" value="${userData.username}"><br/><br/>
    <label>Company Name:</label>
    <input id="input-company" type="text" value="${userData.companyName}"><br/><br/>
    <label>City:</label>
    <input id="input-city" type="text" value="${userData.city}"><br/><br/>
    <label>Zipcode:</label>
    <input id="input-zip" type="text" value="${userData.zipcode}"><br/><br/>
    <label>Street:</label>
    <input id="input-street" type="text" value="${userData.street}"><br/><br/>
    <button type="button" onclick="editUser(${userData.userId})">Save</button>
  </div>`;

  modalContent.insertAdjacentHTML('beforeend', htmlString);
}
