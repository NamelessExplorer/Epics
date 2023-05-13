import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import page1 from './page1';
import DataPage from './Components/DataPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';

<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>

function App() {
  return (
    <>

      <Helmet>
        <script src="https://www.amcharts.com/lib/3/ammap.js"></script>
        <script src="https://www.amcharts.com/lib/3/maps/js/indiaLow.js"></script>
        <script src="https://www.amcharts.com/lib/3/themes/none.js"></script>
      </Helmet>
      <div className="page flex-container column">
        <Navbar />
        <DataPage />
      </div>
    </>
  );
}

export default App;
