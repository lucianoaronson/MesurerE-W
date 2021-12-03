async function sendMail() {
    const url = "https://sendmailer-smtp.herokuapp.com/api/v1/private";
    await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json' //Important, Only JSON content type!
        },
        body: JSON.stringify({

            //Email config
            name: 'Mesurer E&W', //from email Name
            to: 'lucianoaronson@gmail.com', //to email address
            subject: 'Formulario', //email subject
            typeMSG: 'html', //text or html
            message: `
            Formulario:<br>
            - Nombre: ${document.getElementById('nombre').value}<br>
            - Telefono: ${document.getElementById('telefono').value}<br>
            - Correo electronico: ${document.getElementById('correo').value}<br>
            <br>
            - Mensaje:
            ${document.getElementById('mensaje').value}
            `, //your message
        })
    }).then(res => res.text())
        .then(res => console.log(res))
        .then(Swal.fire({
            icon: 'success',
            title: 'Formulario enviado!',
            text: 'El correo fue enviado...',
        }))
}