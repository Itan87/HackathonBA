function validarFormulario() {
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var phoneInput = document.getElementById('phone');

  var name = nameInput.value.trim();
  var email = emailInput.value.trim();
  var phone = phoneInput.value.trim();

  // Validar el campo de nombre
  if (!/^[a-zA-Z]+$/.test(name)) {
    alert('Por favor, ingresa un nombre válido (solo letras).');
    return false;
  }

  // Validar el campo de correo electrónico
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, ingresa un correo electrónico válido.');
    return false;
  }

  // Validar el campo de número de teléfono celular
  var phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    alert('Por favor, ingresa un número de teléfono celular válido (10 dígitos).');
    return false;
  }

  return true;
}

document.addEventListener('DOMContentLoaded', function() {
  var acceptButton = document.getElementById('accept-button');
  var popup = document.getElementById('popup');

  acceptButton.addEventListener('click', function() {
    popup.style.display = 'none';
  });
});


