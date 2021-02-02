import Header from './components/header/header';
import Projetos from './pages/projetos/projetos';
import QeumSou from './pages/quemsou/quemsou';
import Conhecimentos from './pages/conhecimentos/conhecimentos'
import Initial from './pages/initial/initial'
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Link to="/">
      <h1 className="title">ELTON ORTIZ</h1>
      </Link>
      <Header></Header>
      <Switch>
        <Route path="/projetos">
          <Projetos></Projetos>
        </Route>
        <Route path="/quemsou">
          <QeumSou></QeumSou>
        </Route>
        <Route path="/conhecimentos">
          <Conhecimentos></Conhecimentos>
        </Route>
        <Route path="/">
          <Initial></Initial>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
