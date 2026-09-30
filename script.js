
const baseDatosEstudiantes = [
  {
    nombre: "Juan Pablo Pérez",
    documento: "1001234567",
    grado: "10°A",
    tipoSangre: "O+",
    alergias: "Penicilina",
    tutor: "Carlos Pérez (3001234567)"
  },
  {
    nombre: "María Fernanda Gómez",
    documento: "1007654321",
    grado: "11°B",
    tipoSangre: "A+",
    alergias: "Ninguna",
    tutor: "Ana Gómez (3019876543)"
  },
  {
    nombre: "Santiago Martínez",
    documento: "1002983746",
    grado: "9°C",
    tipoSangre: "B-",
    alergias: "Polen y Acaros",
    tutor: "Laura Martínez (3024567890)"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const btnBuscar = document.getElementById("btnBuscar");
  const inputBusqueda = document.getElementById("inputBusqueda");
  const mensajeResultado = document.getElementById("mensajeResultado");

  const realizarBusqueda = () => {
    const termino = inputBusqueda.value.trim().toLowerCase();

    if (termino === "") {
      mensajeResultado.style.color = "#d9534f";
      mensajeResultado.innerHTML = "⚠️ Por favor, ingresa un nombre o documento para buscar.";
      return;
    }

    const estudianteEncontrado = baseDatosEstudiantes.find(est => 
      est.nombre.toLowerCase().includes(termino) || est.documento.includes(termino)
    );

    if (estudianteEncontrado) {
      mensajeResultado.style.color = "#03658C";
      mensajeResultado.innerHTML = `
        <div style="background: #ffffff; border: 2px solid #4FB3D9; border-radius: 8px; padding: 15px; margin-top: 15px; text-align: left; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <h4 style="margin: 0 0 8px 0; color: #03658C;">📋 Ficha Médica Encontrada</h4>
          <p style="margin: 4px 0;"><strong>Estudiante:</strong> ${estudianteEncontrado.nombre}</p>
          <p style="margin: 4px 0;"><strong>Documento:</strong> ${estudianteEncontrado.documento}</p>
          <p style="margin: 4px 0;"><strong>Grado:</strong> ${estudianteEncontrado.grado}</p>
          <p style="margin: 4px 0;"><strong>Tipo de Sangre:</strong> ${estudianteEncontrado.tipoSangre}</p>
          <p style="margin: 4px 0;"><strong>Alergias:</strong> ${estudianteEncontrado.alergias}</p>
          <p style="margin: 4px 0;"><strong>Contacto Tutor:</strong> ${estudianteEncontrado.tutor}</p>
        </div>
      `;
    } else {
      mensajeResultado.style.color = "#d9534f";
      mensajeResultado.innerHTML = `❌ No se encontró ningún estudiante con "${inputBusqueda.value}". Intenta con "Juan", "María" o "1001".`;
    }
  };

  btnBuscar.addEventListener("click", realizarBusqueda);

  inputBusqueda.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      realizarBusqueda();
    }
  });

  const enlacesNav = document.querySelectorAll("nav a");

  enlacesNav.forEach(enlace => {
    enlace.addEventListener("click", (e) => {
      const href = enlace.getAttribute("href");
      
      if (href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const seccionDestino = document.querySelector(href);
        
        if (seccionDestino) {
          seccionDestino.scrollIntoView({
            behavior: "smooth"
          });
        }

        // Marcar enlace como activo
        enlacesNav.forEach(l => l.classList.remove("activo"));
        enlace.classList.add("activo");
      }
    });
  });
});
