import Menu from "./menu";
import Data from "./data";
import Secmen from "./Secmen";
import SecData from "./SecData";
function page2() {
    return (
        <>
            <div className='flex-container row dant'>
                <div className="flex-container column" style={{ width: "15.5%", borderRight:"1px solid grey" }}>
                    <Secmen />
                </div>

                <div className="flex-container column" style={{ width: "41.5%"}}>
                    <SecData/>
                </div>

            </div>
        </>
    )
}
export default page2;