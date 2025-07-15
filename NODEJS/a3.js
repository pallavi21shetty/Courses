
// const fetch = require('node-fetch');

// async function getUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json();
//     console.log('User names:');
//     users.forEach(user => console.log(`- ${user.name}`));
//   } catch (error) {
//     console.error('Failed to fetch users:', error);
//   }
// }

// getUsers();



const btn = document.getElementById("btn-search");
const userList = document.getElementById("userList");
btn.addEventListener("click", async () => {
  userList.innerHTML = ''; 
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
       const data = await res.json();
       // console.log('User names:');
      data.forEach(user => {
        //console.log(`- ${user.name}`);
        const li = document.createElement('li');
        li.textContent = `${user.name} (${user.email})`;
        userList.appendChild(li);
    });
  } catch (err) {
   console.error('Failed to fetch users:', err);
  }
});