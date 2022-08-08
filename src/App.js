import './App.css';
import Testimonio from './componets/Testimonio';

function App() {
  return (
    <div className="App">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <div className='contenedor-principal'>
        <Testimonio 
          nombre="Shaw Wang"
          pais="Singapour"
          imagen="2"
          cargo="Ingeniera de Software"
          empresa="Amazon"
          testimonio="I was fortunate enough to share my story of transitioning from sales to web development on the freeCodeCamp publication: How I Went from Sales to Front End Developer in 16 Months."  />
        
        <Testimonio 
          nombre="Emma Bostian"
          pais="Suecia"
          imagen="1"
          cargo="Ingeniera de Software"
          empresa="Spotify"
          testimonio="I kind of stumbled on this opportunity. On Reddit, I saw Quincy had posted about his upcoming AMA in the freeCodeCamp subreddit. There weren't many replies so I thought it would be fun to contribute early! I soon discovered the questions were meant to be asked in a thread on Hashnode." />

        <Testimonio 
          nombre="Sara Thurma"
          pais="Nigeria"
          imagen="3"
          cargo="Ingeniera de Software"
          empresa="Chatdesk"
          testimonio="#LockdownConf was the following day, so I knew I'd have to be patient with my reply. My sales instincts kicked in and I set myself a task to follow up the following day so my video wouldn't get lost in a sea of emails. I don't know what I expected. It felt silly not to put some effort into following through with this!" />

      </div>
    </div>
  );
}

export default App;
