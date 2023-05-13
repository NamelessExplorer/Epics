import Menu from './Components/menu';
import Map from './Components/map';
import Data from './Components/data';
import { Helmet } from 'react-helmet';

function page1() {
    return (
      <>
  
        <Helmet>
          <script src="https://www.amcharts.com/lib/3/ammap.js"></script>
          <script src="https://www.amcharts.com/lib/3/maps/js/indiaLow.js"></script>
          <script src="https://www.amcharts.com/lib/3/themes/none.js"></script>
        </Helmet>
        
          <div className='flex-container row'>
            <div className="flex-container column" style={{ width: "15.5%", height: "12.5%", backgroundColor: "rgba(21,13,67,1)" }}>
              <Menu />
            </div>
            <div className="flex-container row" style={{ width: "40%", backgroundColor: "rgba(21,13,67,1)" }}>
              <Map />
            </div>
  
            <div className="flex-container column" style={{ width: "41.5%", backgroundColor: "rgba(21,13,67,1)" }}>
              <Data />
            </div>
  
          </div>
        
      </>
    );
  }
  
  export default page1;
  