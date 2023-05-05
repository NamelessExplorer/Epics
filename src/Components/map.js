import map from "./assets/mp.png";

export default function Map(){
    return(
        <img src={map} class="map" style={{maxWidth:"35%", maxHeight:"35%",paddingTop:"16%", marginTop:"24%", marginLeft:"30%", marginRight:"15%" }}/>
    )
}