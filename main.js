const form = document.getElementById('leadForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        nombre: form.nombre.value,
        empresa: form.empresa.value,
        correo: form.correo.value,
        servicio: form.servicio.value,
        descripcion: form.descripcion.value
    };

    console.log('Lead enviado:', formData);

    /*
    AQUI CONECTAS n8n:

    fetch('https://TU-WEBHOOK-N8N', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    */

    successMessage.style.display = 'block';

    form.reset();
});