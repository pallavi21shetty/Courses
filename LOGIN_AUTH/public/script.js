// Register form
const registerForm = document.getElementById('registerForm');
if (registerForm) {
  registerForm.addEventListener('submit', async e => {
    e.preventDefault();
    const form = new FormData(registerForm);
    const data = {
      username: form.get('username'),
      password: form.get('password'),
      email: form.get('email'),
      age: form.get('age'),
      address: form.get('address')
    };
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    document.getElementById('regMsg').innerText = result.message || result.error;
  });
}

// Login form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async e => {
    e.preventDefault();
    const form = new FormData(loginForm);
    const data = {
      username: form.get('username'),
      password: form.get('password')
    };
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    if (res.ok) {
      window.location.href = 'home.html';
    } else {
      alert(result.error);
      document.getElementById('loginMsg').innerText = result.error;
    }
  });
}
 const toggle = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');
    if (toggle && passwordField) {
      toggle.addEventListener('change', () => {
        passwordField.type = toggle.checked ? 'text' : 'password';
      });
    }