// Validación de formulario (Bootstrap)
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      } else {
        event.preventDefault()
        alert('Formulario enviado correctamente (demo).')
        form.reset()
        form.classList.remove('was-validated')
        return
      }
      form.classList.add('was-validated')
    }, false)
  })
})();

// AOS (animaciones al hacer scroll)
document.addEventListener('DOMContentLoaded', () => {
  if (window.AOS) AOS.init({ duration: 700, once: true, offset: 80 });
});
