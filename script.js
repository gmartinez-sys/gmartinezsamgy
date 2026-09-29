// Esperar a que el HTML cargue completamente
document.addEventListener('DOMContentLoaded', () => {
  const btnBuscar = document.getElementById('btnBuscar');
  const inputBusqueda = document.getElementById('inputBusqueda');
  const mensajeResultado = document.getElementById('mensajeResultado');

  // Función de búsqueda simulada
  if (btnBuscar) {
    btnBuscar.addEventListener('click', () => {
      const valor = inputBusqueda.value.trim();
      
      if (valor === '') {
        mensajeResultado.textContent = 'Por favor escribe un nombre o documento.';
        mensajeResultado.style.color = '#d9534f';
      } else {
        mensajeResultado.textContent = `Buscando registros de: "${valor}"...`;
        mensajeResultado.style.color = '#03658C';
      }
    });
  }
});
