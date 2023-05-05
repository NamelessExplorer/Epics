import logo from './logo.svg';
import './App.css';
import Navbar from './Components/navbar';
import Menu from './Components/menu';
import Map from './Components/map';
import Data from './Components/data';
import 'bootstrap/dist/css/bootstrap.min.css';


<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>


function App() {
  return (
    <>
      <div className="flex-container column" style={{backgroundColor: "rgba(21,13,67,1)"}}>
        <Navbar />
        <div className='flex-container row'>
          <div className="flex-container column" style={{ width: "15.5%", height: "12.5%", backgroundColor: "rgba(21,13,67,1)" }}>
            <Menu />
          </div>
          <div className="flex-container row" style={{ width: "40%", backgroundColor: "rgba(21,13,67,1)" }}>
            <Map />
          </div>

          <div className="flex-container column" style={{ backgroundColor: "rgba(21,13,67,1)" }}>
            <Data />
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
