// Estudiantes por defecto si el navegador aún no tiene ninguno guardado
const iniciales = [
  {
    nombre: "Juan Pablo Pérez",
    documento: "1001234567",
    grado: "10°A",
    tipoSangre: "O+",
    alergias: "Penicilina",
    tutor: "Carlos Pérez (3001234567)"
  }
];

// Obtener la lista guardada en localStorage o usar la inicial
let baseDatosEstudiantes = JSON.parse(localStorage.getItem("samgy_estudiantes")) || iniciales;

document.addEventListener("DOMContentLoaded", () => {
  const btnBuscar = document.getElementById("btnBuscar");
  const inputBusqueda = document.getElementById("inputBusqueda");
  const mensajeResultado = document.getElementById("mensajeResultado");
  const formEstudiante = document.getElementById("formEstudiante");
  const mensajeGuardado = document.getElementById("mensajeGuardado");

  // Guardar en la memoria local
  const guardarEnStorage = () => {
    localStorage.setItem("samgy_estudiantes", JSON.stringify(baseDatosEstudiantes));
  };

  // ==========================================
  // Búsqueda de Estudiantes
  // ==========================================
  const realizarBusqueda = () => {
    const termino = inputBusqueda.value.trim().toLowerCase();

    if (termino === "") {
      mensajeResultado.style.color = "#d9534f";
      mensajeResultado.innerHTML = "⚠️ Ingresa un nombre, apellido o documento.";
      return;
    }

    const encontrado = baseDatosEstudiantes.find(est => 
      est.nombre.toLowerCase().includes(termino) || est.documento.includes(termino)
    );

    if (encontrado) {
      mensajeResultado.innerHTML = `
        <div style="background: #ffffff; border: 2px solid #4FB3D9; border-radius: 8px; padding: 15px; margin-top: 15px; text-align: left;">
          <h4 style="margin: 0 0 8px 0; color: #03658C;">📋 Ficha Médica Encontrada</h4>
          <p style="margin: 4px 0;"><strong>Estudiante:</strong> ${encontrado.nombre}</p>
          <p style="margin: 4px 0;"><strong>Documento:</strong> ${encontrado.documento}</p>
          <p style="margin: 4px 0;"><strong>Grado:</strong> ${encontrado.grado}</p>
          <p style="margin: 4px 0;"><strong>Tipo de Sangre:</strong> ${encontrado.tipoSangre}</p>
          <p style="margin: 4px 0;"><strong>Alergias:</strong> ${encontrado.alergias}</p>
          <p style="margin: 4px 0;"><strong>Contacto Tutor:</strong> ${encontrado.tutor}</p>
        </div>
      `;
    } else {
      mensajeResultado.style.color = "#d9534f";
      mensajeResultado.innerHTML = `❌ No existe ninguna ficha para "${inputBusqueda.value}". Regístralo en el formulario de abajo.`;
    }
  };

  btnBuscar.addEventListener("click", realizarBusqueda);
  inputBusqueda.addEventListener("keypress", (e) => {
    if (e.key === "Enter") realizarBusqueda();
  });

  // ==========================================
  // Registrar Nuevo Estudiante
  // ==========================================
  formEstudiante.addEventListener("submit", (e) => {
    e.preventDefault();

    const nuevoEstudiante = {
      nombre: document.getElementById("regNombre").value.trim(),
      documento: document.getElementById("regDocumento").value.trim(),
      grado: document.getElementById("regGrado").value.trim(),
      tipoSangre: document.getElementById("regSangre").value.trim(),
      alergias: document.getElementById("regAlergias").value.trim(),
      tutor: document.getElementById("regTutor").value.trim()
    };

    // Añadir a la lista y guardar
    baseDatosEstudiantes.push(nuevoEstudiante);
    guardarEnStorage();

    // Notificar y limpiar campos
    mensajeGuardado.style.color = "#28a745";
    mensajeGuardado.innerHTML = `✅ ¡Ficha de <strong>${nuevoEstudiante.nombre}</strong> guardada exitosamente! Ya puedes buscarlo por su nombre o documento.`;
    formEstudiante.reset();
  });

  // Navegación suave
  document.querySelectorAll("nav a").forEach(enlace => {
    enlace.addEventListener("click", (e) => {
      const href = enlace.getAttribute("href");
      if (href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
