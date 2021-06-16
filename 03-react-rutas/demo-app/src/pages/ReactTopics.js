import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Topic from "../components/Topic";

const ReactTopics = () => {
  let match = useRouteMatch();
  console.log(match);
  //path nos permite construir rutas relativas<Route>, mientras que 'url' nos permite contruir enlaces relativos <Link> o <NavLink>

  let { path, url } = useRouteMatch();
  return (
    <div>
      <h2>Temas de React</h2>
      <ul>
        <li>
          <Link to={`${url}/jsx`}>JSX</Link>
        </li>
        <li>
          <Link to={`${url}/props`}>Props</Link>
        </li>
        <li>
          <Link to={`${url}/estado`}>Estado</Link>
        </li>
        <li>
          <Link to={`${url}/componentes`}>Componentes</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={path}>
          <h4>Elige un tema de react</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            corporis facilis ratione nesciunt obcaecati totam id non doloremque
            aliquam, consequuntur enim cumque quibusdam sapiente a voluptatum
            sunt commodi dignissimos perspiciatis.
          </p>
        </Route>
        <Route path={`${path}/:topic`} component={Topic} />
      </Switch>
    </div>
  );
};

export default ReactTopics;
