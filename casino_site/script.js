document.getElementById('signup-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('signup-popup').classList.remove('hidden');
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('signup-popup').classList.add('hidden');
});

document.getElementById('signup-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const data = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };
    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            alert('Επιτυχής εγγραφή!');
            document.getElementById('signup-popup').classList.add('hidden');
            e.target.reset();
        } else {
            alert('Σφάλμα κατά την εγγραφή');
        }
    } catch (err) {
        alert('Σφάλμα δικτύου');
    }
});
