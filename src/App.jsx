import { BrowserRouter } from 'react-router-dom';
import PathRouter from './PathRouter';
import './Styles/General.scss'

function App() {
  return (
    <main>
      <BrowserRouter>
        <PathRouter />
      </BrowserRouter>
    </main>
  );
}

export default App;
