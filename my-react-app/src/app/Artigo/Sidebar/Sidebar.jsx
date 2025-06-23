import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function Sidebar() {
    return (
      <aside className="sidebar">
        <a href="/Curso.html" className="back-link">
          <FontAwesomeIcon icon={faArrowLeft} /> Voltar para Primeiro Projeto
        </a>
      </aside>
    );
  }
  