import "./App.css";
import foto from "./Gabriel-Jesus-PNG-Image.png"

function App() {
  return (
    <div className="container">
      
      <div className="card">
        <img
          src={foto}
          alt="Foto"
          className="foto"
        />

        <h1>Gabriel Rodrigues Nakamura de Oliveira</h1>
        <p className="info">Bragança Paulista - SP</p>
        <p className="info">gabriel29nakamura@gmail.com</p>

        <h2>🎯 Objetivo</h2>
        <p>
          Busco oportunidade na área de Tecnologia para desenvolver
          minhas habilidades e adquirir experiência profissional.
        </p>

        <h2>🎓 Formação</h2>
        <p>
          Análise e Desenvolvimento de Sistemas - IFSP (em andamento)
        </p>

        <h2>💻 Habilidades</h2>
        <ul>
          <li>HTML, CSS</li>
          <li>JavaScript</li>
          <li>React JS</li>
          <li>Linguagem C</li> 
          <li>Portugol</li> 
          <li>Python</li>
        </ul>

        <h2>🌍 Idiomas</h2>
        <p>Português (nativo) | Inglês (intermediário)</p>

        <h2>⚡ Sobre mim</h2>
        <p>
          Boa comunicação, facilidade para trabalho em equipe, gosto de aprender
          coisas novas e tenho interesse em tecnologia.
        </p>

      </div>

    </div>
  );
}

export default App;