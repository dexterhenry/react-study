import { Link, NavLink } from "react-router-dom";

export const MenuConceptos = () => {
  return (
    <nav>
      <ol>
        <li>
          <span> Enlaces html (no remcomendado): </span>
          <a href="/">Home</a>
          <a href="/acerca">acerca</a>
          <a href="/contacto">contacto</a>
        </li>
        <li>
          <span>Componente Link: </span>
          <Link to="/"> Home </Link>
          <Link to="/acerca"> Acerca </Link>
          <Link to="/contacto"> Contacto </Link>
          <Link to="/no-existe"> Error 404 </Link>
        </li>
        <li>
          <span>Componente NavLink: </span>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink exact to="/acerca" activeClassName="active">
            Acerca
          </NavLink>
          <NavLink exact to="/contacto" activeClassName="active">
            Contacto
          </NavLink>
        </li>
        <li>
          <span> Parámetros: </span>
          <Link to="/usuario/dexter">Dexter</Link>
          <Link to="/usuario/lis">Lis</Link>
        </li>
        <li>
          <span>Parametros de consulta: </span>
          <Link to="/productos"> Productos</Link>
        </li>
        <li>
          <span>Redirecciones</span>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
        </li>
        <li>Rutas anidadas</li>
        <Link to="/react">React</Link>
      </ol>
    </nav>
  );
};
