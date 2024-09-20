function toggleDetails(id) {
    const details = document.getElementById(id);
    details.style.display = (details.style.display === 'none' || details.style.display === '') ? 'block' : 'none';
}

function toggleFAQ(id) {
    const answer = document.getElementById(id);
    answer.style.display = (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';
}

function showTerms() {
    document.getElementById('terms-modal').classList.remove('hidden');
}

function showContact() {
    document.getElementById('contact-modal').classList.remove('hidden');
}

function hideModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}
