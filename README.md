# 👤 Practice Contact Cards

A responsive **Contact Cards App** built with **HTML, CSS, and JavaScript** that fetches user data and displays interactive user profiles with dynamic post viewing.

---


## 🧠 Features

* 👥 Fetch and display users from an API
* 🧾 Clickable user cards
* 🔄 Dynamic navigation between pages
* 📝 View posts for each selected user
* 🔍 Filter posts by user ID
* 💾 Uses `localStorage` to persist selected user
* 📱 Fully responsive layout
* 🎨 Clean card-based UI design

---

## 🛠️ Tech Stack

* **HTML5** – Semantic structure
* **CSS3** – Flexbox, responsive layout, styling
* **JavaScript (ES6+)** – DOM manipulation, async/await, API handling

---

## 🔌 APIs Used

* Users:

  ```
  https://jsonplaceholder.typicode.com/users
  ```

* Posts:

  ```
  https://jsonplaceholder.typicode.com/posts?userId=:id
  ```

---

## ⚙️ How It Works

1. Fetch users from the API
2. Render user cards dynamically
3. Click a user → store `id` in `localStorage`
4. Redirect to `user.html`
5. Fetch posts using stored `id`
6. Render posts dynamically
7. Filter posts using search input

---

## 📂 Project Structure

```bash
Practice-Contact-Cards/
│
├── index.html        # User list page
├── user.html         # User posts page
├── index.css         # Shared styling
├── index.js          # Renders users
├── user.js           # Renders posts + filtering
└── assets/           # Images (if any)
```

---

## 🧩 Key Concepts Learned

* API integration with `fetch()`
* Async JavaScript (`async/await`)
* DOM rendering with `.map()`
* Event handling (`onclick`, `onchange`)
* Page communication using `localStorage`
* Responsive UI design with Flexbox

---

## 🎯 Future Improvements

* 🔍 Live search (no reload)
* 🔙 Better routing instead of `localStorage`
* 🛒 Add user profile page
* 🎨 UI animations and transitions
* 🌐 Replace mock API with real backend

---

## 📸 Preview

*(Add screenshots here)*

---

## 🙌 Acknowledgements

Built using the free JSONPlaceholder API for mock data and inspired by real-world frontend patterns.

---

## 📬 Contact

* GitHub: *Your GitHub link*
* Portfolio: *Your portfolio link*
