import { Helmet } from "react-helmet";


export default function Map() {
    return (

        <>
            <Helmet>
                <script src="https://www.amcharts.com/lib/3/ammap.js"></script>
                <script src="https://www.amcharts.com/lib/3/maps/js/indiaLow.js"></script>
                <script src="https://www.amcharts.com/lib/3/themes/none.js"></script>
            </Helmet>
            <script>
                
            </script>
            <div id="chartdiv" />
        </>

    )
}