
const fetch = require('node-fetch');

async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log('User names:');
    users.forEach(user => console.log(`- ${user.name}`));
  } catch (error) {
    console.error('Failed to fetch users:', error);
  }
}

getUsers();
