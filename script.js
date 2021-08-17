window.onload = async () => {
  fetchUsers("https://jsonplaceholder.typicode.com/users");
};
async function fetchUsers(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayUsers(data);
    }
  } catch (error) {
    console.log(error);
  }
}

function displayUsers(data) {
  let userList = document.querySelector(".user-list");

  data.forEach((user) => {
    let userItem = document.createElement("li");
    userItem.classList.add("list-group-item", "user-item");
    userItem.innerText = `${user.name}----${user.username}----${user.email}`;
    userList.append(userItem);
  });
}

async function filterFunction(data) {
  let searchField = document.querySelector(".searchField");
  searchField.addEventListener("change", function (event) {
    console.log(event.target.value);
  });

  let filteredUser = document.querySelector(".navigationFilter");
  let filterOption = document.querySelectorAll("option");
  filteredUser.addEventListener("change", function (e) {
    console.log(e.target.value);

    if (e.target.value == "Name") {
      console.log("this is the name");
    }

    if (e.target.value == "Username") {
    }

    if (e.target.value == "E-mail") {
    }
  });
}
