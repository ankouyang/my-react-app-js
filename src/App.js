import { routes } from '@router/index.js';
import renderRoutes from '@router/renderRoutes'
import './App.scss';

function App() {
  return (
    <div className="App">
      {renderRoutes(routes)}
    </div>
  );
}

export default App;
