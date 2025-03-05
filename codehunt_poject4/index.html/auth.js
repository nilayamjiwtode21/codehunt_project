document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Simple validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate authentication
    const userData = {
        email: email,
        name: 'John Doe',
        avatar: '/placeholder.svg?height=32&width=32'
    };
    
    // Store user data
    localStorage.setItem('user', JSON.stringify(userData));
    
    // Redirect to dashboard
    window.location.href = 'index.html';
});

// Check if user is logged in
function checkAuth() {
    const user = localStorage.getItem('user');
    if (!user && window.location.pathname !== '/login.html') {
        window.location.href = 'login.html';
    }
}

// Run auth check
checkAuth();