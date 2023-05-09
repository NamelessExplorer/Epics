import home from "./assets/Icon_awesome-home.png";
import loc from "./assets/Icon_awesome-map-marked-alt.png"
import dashboard from "./assets/Icon_material-dashboard.png"
import question from "./assets/Icon_feather-help-circle.png"

export default function Menu() {
    return (
        <ul className="flex-container column" style={{borderRight:"1px solid grey", height:"100%"}}>
            <li style={{listStyle:"none", display:"inline-block", padding:"25%",marginRight:"0%", borderBottom:"1px solid grey", paddingBottom:"20%"}}><img src={dashboard} /></li>
            <li style={{listStyle:"none", display:"inline-block", padding:"25%",marginRight:"0%", borderBottom:"1px solid grey", paddingBottom:"20%"}}><img src={home}  /></li>
            <li style={{listStyle:"none", display:"inline-block", padding:"25%",marginRight:"0%", borderBottom:"1px solid grey", paddingBottom:"20%"}}><img src={loc} /></li>
            <li style={{listStyle:"none", display:"inline-block", padding:"25%",marginRight:"0%", borderBottom:"1px solid grey", paddingBottom:"25%"}}><img src={question} /></li>
            <li> </li>
            <li> </li>
            <li> </li>        
        </ul>
    )
}