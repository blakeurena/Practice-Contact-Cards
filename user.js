const postsListEl = document.querySelector(".post-list");
const id = localStorage.getItem("id");

async function onSearchChange(event) {
  const id = event.target.value;
  renderPosts(id);
}

async function renderPosts(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    const postsData = await response.json();

    postsListEl.innerHTML = postsData
      .map((post) => postHTML(post))
      .join("");
  } catch (error) {
    postsListEl.innerHTML = `<p>Failed to load posts</p>`;
    console.error(error);
  }
}

function postHTML(post) {
  return `
    <div class="post">  
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>
  `;
}

// initial load
renderPosts(id);