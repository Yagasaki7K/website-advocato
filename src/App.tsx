import { useState } from "react";
import { FaCog } from "react-icons/fa";
import { MdWarningAmber } from "react-icons/md";
import { FaComments } from "react-icons/fa";



import "./App.css";

function App() {
    const [Process, setProcess] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState(null);

     const handleConsultar = () => {
        setShowModal(true);
    };
    return (
        <div className="Consult">
            <h1>Advocato</h1>
            <h2>Consulta de processos de forma simples</h2>
            <input
                type="number"
                value={Process}    
                required
                placeholder="Insira o número do processo"
                onChange={(e) => setProcess(e.target.value)}
            />
            <button onClick={handleConsultar}>Consultar</button>
            <p>Consulte intimações e movimentações de forma clara e rápida</p>
            
            <div className="howWork">
                <fieldset><h2 className="howTitle"><FaCog/> Como funciona</h2></fieldset>   
                <fieldset>
                <ol>
                   <li> <strong>1</strong> Digite o numero do processo
                   </li>
                   <li> <strong>2</strong> Nos buscamos as movimentações
                   </li>
                   <li>
                    <strong>3</strong> Voce entendeu o que aconteceu
                   </li>
                </ol>
                </fieldset>
            </div>
            <div className="features">
                <p> <MdWarningAmber/>Dados Publicos</p><p>Sem cadastro</p> <p>Gratuito</p>
            </div>
        <div className="Resumeprocess">
            <details>
                <summary><FaComments/>Resumo simplificado</summary>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <p></p>
                </details>
         </div>
          <div className="Resumeprocess">
            <details>
                <summary><FaComments/>Informação ténicas</summary>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <p></p>
                </details>
         </div>
          <div>
                <p className="features">Acessar diretamente</p>
                <br/>
                <a href="https://www.exemplo.com">Abrir no diário da Justiça</a>
            </div>
        </div>
    );
}

export default App;
