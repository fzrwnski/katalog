document.querySelectorAll('.whatsapp-button').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const flavor = this.getAttribute('data-flavor');
        const message = `I want a ${flavor}. Today is ${new Date().toLocaleDateString()}`;
        const whatsappUrl = `https://wa.me/+62895424461420?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });
});
