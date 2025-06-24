document.getElementById('signup-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('signup-popup').classList.remove('hidden');
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('signup-popup').classList.add('hidden');
});
