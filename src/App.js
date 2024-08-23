import './App.css';
import WebRoutes from './webRoutes/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <WebRoutes />
    </div>
  );
}

export default App;
