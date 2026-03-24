// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

const usersListEl = document.getElementById("userList");

async function main() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await response.json();

    usersListEl.innerHTML = userData.map((user) => userHTML(user)).join("");
  } catch (error) {
    usersListEl.innerHTML = `<p class="error-message">Unable to load users.</p>`;
    console.error(error);
  }
}

main();

function showUserPosts(id) {
  localStorage.setItem("id", id);
  window.location.href = "user.html";
}

function userHTML(user) {
  return `
    <div class="user">
      <div class="user-card" onclick="showUserPosts(${user.id})">
        <div class="user-card__container">
          <h3>${user.name}</h3>
          <p><b>Email:</b> ${user.email}</p>
          <p><b>Phone:</b> ${user.phone}</p>
          <p>
            <b>Website:</b>
            <a href="https://${user.website}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">
              ${user.website}
            </a>
          </p>
        </div>
      </div>
    </div>
  `;
}