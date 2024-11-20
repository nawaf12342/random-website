
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Logged in (simulation)! Redirecting to Admin Dashboard...');
    window.location.href = 'admin.html';
});
