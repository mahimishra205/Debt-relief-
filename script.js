document.getElementById('consultationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('formResponse').classList.remove('hidden');
    this.reset();
});
