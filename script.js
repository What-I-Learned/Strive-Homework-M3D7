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
    userItem.innerText = user.name;
    userList.append(userItem);
  });
}
