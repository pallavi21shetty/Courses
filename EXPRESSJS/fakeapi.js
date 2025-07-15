
const btn= document.getElementById("fetchBtn");
  const output = document.getElementById("output");
  btn.addEventListener("click", async () => {
    output.innerHTML = "";
    try{
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  data.forEach(product => {
    const div = document.createElement("div");
    div.textContent = `${product.title} - $${product.price}`;
    output.appendChild(div);
  });
}
catch(err){
    console.error('failedto fetch users:',err);
}
});
