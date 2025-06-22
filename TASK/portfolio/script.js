
document.getElementById('contactBtn').addEventListener('click', function () {
  alert('Thank you! Your message has been submitted.');
});

const homeButton = document.querySelector('.button');
homeButton.addEventListener('mouseenter', () => {
  homeButton.style.backgroundColor = '#0d6efd';
});
homeButton.addEventListener('mouseleave', () => {
  homeButton.style.backgroundColor = ''; 
});



const messageBox = document.getElementById('messageBox');
const charCount = document.getElementById('charCount');
messageBox.addEventListener('input', () => {
  charCount.textContent = `${messageBox.value.length} characters`;
});



  const text = "Web Developer";
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typedText").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  window.onload = typeWriter;

