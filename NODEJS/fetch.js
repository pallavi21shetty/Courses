// document.getElementById('fetchBtn').addEventListener('click', async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const users = await response.json();

//     const list = document.getElementById('userList');
//     list.innerHTML = ''; // Clear old data

//     users.forEach(user => {
//       const li = document.createElement('li');
//       li.textContent = `${user.name} (${user.email})`;
//       list.appendChild(li);
//     });
//   } catch (error) {
//     console.error('Error fetching users:', error);
//   }
// });



// fake store api

// const input = document.getElementById("input");
// const btn = document.getElementById("btn-search");
// const title = document.getElementById("title");
// const price = document.getElementById("price");
// const description = document.getElementById("description");
// async function getData(id) {
//   const response = await fetch(`https://fakestoreapi.com/products/${id}`);
//   return await response.json();
// }
// btn.addEventListener("click", async () => {
//   const idval = input.value; // get the value from input
//   const result = await getData(idval);
//   // Update UI with the fetched data
//   title.innerText = result.title;
//   price.innerText = `$${result.price}`;
//   description.innerText = result.description;
// });













    const input = document.getElementById("input");
    const btn = document.getElementById("btn-search");
    const title = document.getElementById("title");
    const price = document.getElementById("price");
    const description = document.getElementById("description");

    btn.addEventListener("click", async () => {
      const id = input.value;
      if (!id) return alert("Enter a product ID");

      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();

        title.innerText = data.title;
        price.innerText = `₹${data.price}`;
        description.innerText = data.description;
      } catch (err) {
        title.innerText = "";
        price.innerText = "";
        description.innerText = "Error fetching data.";
      }
    });