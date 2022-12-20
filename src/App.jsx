import { BrowserRouter } from 'react-router-dom';
import PathRouter from './PathRouter';
import PortProvider from './Context/PortfolioProvider';
import './Styles/General.scss'

function App() {
  return (
    <main>
      <PortProvider>
        <BrowserRouter>
          <PathRouter />
        </BrowserRouter>
      </PortProvider>  
    </main>
  );
}

export default App;
