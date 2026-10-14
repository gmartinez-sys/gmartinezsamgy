import React, { useState, useRef } from 'react';
import './style.css';

export default function App() {
  const [vistaActual, setVistaActual] = useState('inicio');
  const [imagenIndex, setImagenIndex] = useState(0);
  const nosotrosRef = useRef(null);

  const imagenesEnfermeria = [
    '/imagenes/enfermeria1.jpg',
    '/imagenes/enfermeria2.jpg'
  ];

  const irANosotros = () => {
    if (vistaActual !== 'inicio') {
      setVistaActual('inicio');
      setTimeout(() => {
        nosotrosRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      nosotrosRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const siguienteImagen = () => {
    setImagenIndex((prev) => (prev + 1) % imagenesEnfermeria.length);
  };

  const anteriorImagen = () => {
    setImagenIndex((prev) => (prev - 1 + imagenesEnfermeria.length) % imagenesEnfermeria.length);
  };

  return (
    <div className="contenedor-principal">
      <header className="header-samgy">
        <div className="logo-contenedor">
          <img src="/logo-samgy.png" alt="Logo SAMGY" className="logo-img" />
          <span className="logo-texto">SAMGY</span>
        </div>

        <nav className="nav-menu">
          <button 
            className={`nav-link ${vistaActual === 'inicio' ? 'activo' : ''}`}
            onClick={() => setVistaActual('inicio')}
          >
            Inicio
          </button>
          
          <button 
            className="nav-link"
            onClick={irANosotros}
          >
            Nosotros
          </button>

          <button 
            className={`nav-link ${vistaActual === 'buscar' ? 'activo' : ''}`}
            onClick={() => setVistaActual('buscar')}
          >
            Buscar Estudiantes
          </button>

          <button 
            className={`nav-link ${vistaActual === 'registro' ? 'activo' : ''}`}
            onClick={() => setVistaActual('registro')}
          >
            Nuevo Registro
          </button>

          <button 
            className={`nav-link ${vistaActual === 'historial' ? 'activo' : ''}`}
            onClick={() => setVistaActual('historial')}
          >
            Historial de Visitas
          </button>
        </nav>
      </header>

      <main className="contenido-main">
        {vistaActual === 'inicio' && (
          <>
            <section className="carrusel-seccion">
              <div className="carrusel-contenedor">
                <button className="carrusel-btn prev" onClick={anteriorImagen}>&#10094;</button>
                <img 
                  src={imagenesEnfermeria[imagenIndex]} 
                  alt={`Enfermería del colegio ${imagenIndex + 1}`} 
                  className="carrusel-imagen"
                />
                <button className="carrusel-btn next" onClick={siguienteImagen}>&#10095;</button>
              </div>
              <div className="carrusel-info">
                <h1>Sistema de Enfermería Escolar SAMGY</h1>
                <p>Atención médica y seguimiento de salud para los estudiantes del Colegio San Alberto Magno.</p>
              </div>
            </section>

            <section ref={nosotrosRef} className="seccion-nosotros">
              <h2>Nosotros</h2>
              <div className="tarjetas-grid">
                <div className="tarjeta-nosotros">
                  <h3>Calidad de Atención</h3>
                  <p>Contamos con personal capacitado para atender emergencias médicas y primeros auxilios de forma oportuna.</p>
                </div>
                <div className="tarjeta-nosotros">
                  <h3>Calidez</h3>
                  <p>Brindamos un trato empático, seguro y adecuado a cada uno de los estudiantes de nuestra institución.</p>
                </div>
                <div className="tarjeta-nosotros">
                  <h3>Seguimiento</h3>
                  <p>Llevamos el control detallado del historial de salud, alergias y contactos de emergencia de los alumnos.</p>
                </div>
              </div>
            </section>
          </>
        )}

        {vistaActual === 'buscar' && (
          <section className="seccion-modulo">
            <h2>Buscar Estudiantes</h2>
            <div className="formulario-contenedor">
              <input 
                type="text" 
                placeholder="Ingrese nombre o número de documento..." 
                className="input-buscar"
              />
              <button className="btn-primario">Buscar</button>
            </div>
            <div className="resultados-contenedor">
              <p className="texto-secundario">Ingrese un término para iniciar la búsqueda.</p>
            </div>
          </section>
        )}

        {vistaActual === 'registro' && (
          <section className="seccion-modulo">
            <h2>Nuevo Registro de Estudiante</h2>
            <form className="formulario-grid" onSubmit={(e) => e.preventDefault()}>
              <div className="campo">
                <label>Nombre Completo:</label>
                <input type="text" required placeholder="Nombre del alumno" />
              </div>

              <div className="campo">
                <label>Documento de Identidad:</label>
                <input type="text" required placeholder="Número de documento" />
              </div>

              <div className="campo">
                <label>Grado Escolar:</label>
                <select required defaultValue="">
                  <option value="" disabled>Seleccione el grado</option>
                  <option value="Preescolar">Preescolar</option>
                  <option value="1°">1°</option>
                  <option value="2°">2°</option>
                  <option value="3°">3°</option>
                  <option value="4°">4°</option>
                  <option value="5°">5°</option>
                  <option value="6°">6°</option>
                  <option value="7°">7°</option>
                  <option value="8°">8°</option>
                  <option value="9°">9°</option>
                  <option value="10°">10°</option>
                  <option value="11°">11°</option>
                </select>
              </div>

              <div className="campo">
                <label>Tipo de Sangre:</label>
                <input type="text" required placeholder="Ejemplo: O+" />
              </div>

              <div className="campo">
                <label>Alergias o Observaciones:</label>
                <input type="text" required placeholder="Alergias o condiciones médicas" />
              </div>

              <div className="campo">
                <label>Contacto del Acudiente:</label>
                <input type="text" required placeholder="Nombre y teléfono" />
              </div>

              <div className="campo-full">
                <button type="submit" className="btn-primario">Guardar Registro</button>
              </div>
            </form>
          </section>
        )}

        {vistaActual === 'historial' && (
          <section className="seccion-modulo">
            <h2>Historial de Visitas a Enfermería</h2>
            <div className="tabla-contenedor">
              <table className="tabla-samgy">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Estudiante</th>
                    <th>Grado</th>
                    <th>Motivo de Atención</th>
                    <th>Acción Tomada</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>14/10/2026</td>
                    <td>Juan Pablo Pérez</td>
                    <td>10°</td>
                    <td>Cefalea leve</td>
                    <td>Reposó 20 min / Notificación a acudiente</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>

      <footer className="footer-samgy">
        <p>Sistema SAMGY - Colegio San Alberto Magno</p>
      </footer>
    </div>
  );
}
