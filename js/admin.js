
document.getElementById('users-btn').addEventListener('click', () => {
    document.getElementById('content-area').innerHTML = '<h2>Manage Users</h2><p>This is a simulation.</p>';
});
document.getElementById('logs-btn').addEventListener('click', () => {
    document.getElementById('content-area').innerHTML = '<h2>View Logs</h2><p>Logs will appear here (simulation).</p>';
});
document.getElementById('settings-btn').addEventListener('click', () => {
    document.getElementById('content-area').innerHTML = '<h2>Settings</h2><p>Settings page (simulation).</p>';
});
