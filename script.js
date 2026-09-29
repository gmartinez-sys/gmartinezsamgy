import React from 'react'

function App() {
  return (
    <div style={{ 
      fontFamily: "'Open Sans', sans-serif", 
      backgroundColor: '#FFFFFF', 
      padding: '30px', 
      maxWidth: '850px', 
      margin: '0 auto', 
      color: '#03658C' 
    }}>
      
      {/* Importación de fuentes de Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Open+Sans:wght@400;600&display=swap');
        h1, h2, h3 { fontFamily: 'Montserrat', sans-serif; }
      `}</style>

      {/* Encabezado */}
      <header style={{ borderBottom: '3px solid #4FB3D9', paddingBottom: '15px', marginBottom: '25px' }}>
        <h1 style={{ color: '#03658C', fontSize: '2.8rem', margin: 0, fontWeight: '700' }}>SAMGY</h1>
        <p style={{ fontSize: '1.2rem', color: '#03658C', marginTop: '5px' }}>
          Sistema Web de Gestión de Datos - Colegio San Alberto Magno
        </p>
      </header>

      {/* Integrantes */}
      <section style={{ backgroundColor: '#D9E2E8', borderLeft: '5px solid #03658C', padding: '15px 20px', borderRadius: '6px', marginBottom: '25px' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#03658C' }}>Integrantes del Proyecto:</h3>
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '1.8', color: '#03658C' }}>
          <li><strong>Yaricel Paola Bayter Samera</strong> (@ybayter) - QA / Tester</li>
          <li><strong>Mathias Jose Hernandez Bermudez</strong> (@mhernadez-rgb) - Desarrollador / Analista Lead</li>
          <li><strong>Gabriela De los Ángeles Martinez Navarro</strong> (@gmartinez-sys) - Líder del Proyecto</li>
          <li><strong>Andrea Carolina Pallares Medina</strong> (@apallares-mdna) - Diseñadora UX/UI</li>
          <li><strong>Sajoha Paola Vasquez Rodriguez</strong> (@svasquez-rdg) - Documentadora / Comunicaciones</li>
        </ul>
      </section>

      {/* Presentación del Proyecto */}
      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ color: '#03658C' }}>Presentación del Proyecto</h2>
        <p style={{ lineHeight: '1.6', color: '#333333' }}>
          En el área de enfermería del <strong>Colegio San Alberto Magno</strong>, la gestión de datos académicos y registros clínicos suele llevarse a cabo de forma manual. 
          <strong> SAMGY</strong> nace como una solución digital moderna para centralizar, estructurar y optimizar el manejo de esta información, asegurando un acceso rápido y seguro para el área médica y docente.
        </p>
      </section>

      {/* Objetivos */}
      <section style={{ marginBottom: '25px' }}>
        <h2 style={{ color: '#03658C' }}>Objetivos de SAMGY</h2>
        <ul style={{ lineHeight: '1.8', color: '#333333' }}>
          <li><strong>Objetivo General:</strong> Crear una base de datos digital estudiantil para facilitar consultas rápidas de enfermería y reducir el uso de papel[cite: 1].</li>
          <li>Desarrollar la plataforma web escolar para organizar datos de salud estudiantil[cite: 1].</li>
          <li>Registrar la información médica de los estudiantes y mejorar el control sanitario[cite: 1].</li>
          <li>Actualizar registros médicos periódicamente y generar reportes de control[cite: 1].</li>
        </ul>
      </section>

      {/* Herramientas */}
      <section style={{ backgroundColor: '#D9E2E8', padding: '20px', borderRadius: '8px', border: '1px solid #4FB3D9' }}>
        <h3 style={{ marginTop: 0, color: '#03658C' }}>Herramientas Tecnológicas Implementadas</h3>
        <p style={{ margin: 0, lineHeight: '1.6', color: '#333333' }}>
          • <strong>React.js:</strong> Para la creación de interfaces de usuario mediante componentes.<br />
          • <strong>Vite:</strong> Como entorno de desarrollo local rápido y ligero.<br />
          • <strong>Git & GitHub:</strong> Para el control de versiones y el trabajo colaborativo del grupo.
        </p>
      </section>

    </div>
  )
}

export default App

export default App
