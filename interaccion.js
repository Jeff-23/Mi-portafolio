const btn = document.getElementById('button');/*logica de formulario con email js*/ 

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_blsbqp9';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar';
                alert('¡Mensaje enviado correctamente!');
                
                this.reset();
            }, (err) => {
                btn.value = 'Enviar';
                alert(JSON.stringify(err));
            });
    });