import './App.css';
import Testimonio from './componets/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio 
          nombre="Shaw Wang"
          pais="Singapour"
          imagen="2"
          cargo="Ingeniera de Software"
          empresa="Amazon"
          testimonio="Ingeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de Software"  />
        
        <Testimonio 
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="1"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio="Ingeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de Software" />

        <Testimonio 
          nombre="Sara Thurma"
          pais="Nigeria"
          imagen="3"
          cargo="Ingeniera de Software"
          empresa="Chatdesk"
          testimonio="Ingeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de SoftwareIngeniera de Software" />

      </div>
    </div>
  );
}

export default App;
