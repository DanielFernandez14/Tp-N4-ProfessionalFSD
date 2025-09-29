import { Tarjeta }  from "./Components/Tarjeta/Tarjeta.jsx"

function App() {
  return (
      <div className="app">
        <Tarjeta
        nombre="Daniel Fernandez"
        profesion="Desarrollador Web"
        imagen="/Personajes/Personaje1.png"
        descripcion="Apasionado por la tecnología y el desarrollo web, con experiencia en múltiples proyectos y un enfoque en la creación de soluciones innovadoras."
        />
        <Tarjeta
        nombre="Maria Gomez"
        profesion="Diseñadora Gráfica"
        imagen="/Personajes/Personaje2.png"
        descripcion="Creativa y detallista, especializada en diseño gráfico y branding. Comprometida con la creación de identidades visuales impactantes."
        />
        <Tarjeta
        nombre="Luis Martinez"
        profesion="Especialista en Marketing Digital"
        imagen="/Personajes/Personaje3.png"
        descripcion="Experto en estrategias de marketing digital, SEO y gestión de redes sociales. Enfocado en aumentar la visibilidad y el alcance de las marcas."
        />
        <Tarjeta
        nombre="Ana Rodriguez"
        profesion="Gestora de Proyectos"
        imagen="/Personajes/Personaje4.png"
        descripcion="Profesional en gestión de proyectos con habilidades en liderazgo y organización. Experiencia en la coordinación de equipos multidisciplinarios."
        />
      </div>
  )
}

export default App
