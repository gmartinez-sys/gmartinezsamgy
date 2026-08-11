import React from 'react'

function App() {
  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '30px', maxWidth: '850px', margin: '0 auto', color: '#1e293b' }}>
      
      {/* Encabezado */}
      <header style={{ borderBottom: '3px solid #0d9488', paddingBottom: '15px', marginBottom: '25px' }}>
        <h1 style={{ color: '#0d9488', fontSize: '2.8rem', margin: 0 }}>SAMGY</h1>
        <p style={{ fontSize: '1.2rem', color: '#64748b', marginTop: '5px' }}>
          Sistema Web de Gestión de Datos - Colegio San Alberto Magno
        </p>
      </header>

      {/* Integrantes */}
      <section style={{ backgroundColor: '#f0fdf4', borderLeft: '5px solid #10b981', padding: '15px 20px', borderRadius: '6px', marginBottom: '25px' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#047857' }}> Integrantes del Proyecto:</h3>
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '1.8' }}>
          <li><strong>Yaricel Paola Bayter Samera</strong> (@ybayter)</li>
          <li><strong>Mathias Jose Hernandez Bermudez</strong> (@mhernadez-rgb)</li>
          <li><strong>Gabriela de los Angeles Martinez Navarro</strong> (@gmartinez-sys)</li>
          <li><strong>Andrea Carolina Pallares Medina</strong> (@apallares-mdna)</li>
          <li><strong>Sajoha Paola Vasquez Rodriguez</strong> (@svasquez-rdg)</li>
        </ul>
      </section>

      {/* Descripción del Problema */}
      <section style={{ marginBottom: '25px' }}>
        <h2>Presentación del Proyecto</h2>
        <p style={{ lineHeight: '1.6' }}>
          En el área de enfermería del <strong>Colegio San Alberto Magno</strong>, la gestión de datos académicos, registros clínicos e historiales de prácticas suele llevarse a cabo de forma manual o desorganizada. 
          <strong> SAMGY</strong> nace como una solución digital moderna para centralizar, estructurar y optimizar el manejo de esta información, asegurando un acceso rápido y seguro para estudiantes y docentes.
        </p>
      </section>

      {/* Objetivos */}
      <section style={{ marginBottom: '25px' }}>
        <h2> Objetivos de SAMGY</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Objetivo General:</strong> Desarrollar una plataforma web funcional que organice la gestión de datos del área de enfermería.</li>
          <li>Digitalizar la toma de registros en prácticas formativas.</li>
          <li>Reducir el tiempo de búsqueda de historiales académicos y clínicos.</li>
          <li>Garantizar un registro transparente de la información para el equipo docente.</li>
        </ul>
      </section>

      {/* Herramientas */}
      <section style={{ backgroundColor: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <h3 style={{ marginTop: 0 }}> Herramientas Tecnológicas Implementadas</h3>
        <p style={{ margin: 0, lineHeight: '1.6' }}>
          • <strong>React.js:</strong> Para la creación de interfaces de usuario mediante componentes.<br />
          • <strong>Vite:</strong> Como entorno de desarrollo local rápido y ligero.<br />
          • <strong>Git & GitHub:</strong> Para el control de versiones y el trabajo colaborativo del grupo.
        </p>
      </section>

    </div>
  )
}

export default App