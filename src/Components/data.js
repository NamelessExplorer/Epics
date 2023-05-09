export default function Data() {
    return (

        <div className="flex-container" style={{ borderLeft: "1px solid grey", height: "100%" }}>
            <div className='box-1'>
                <div className="flex-container column">
                    <div className="stat1">
                        <p>Total Anganwadi<br /> 000000</p>

                        <div className="flex-container row">
                            <div className="Aspiring" style={{ width: "36.33%", borderTop: "1px solid white", borderRight: "1px solid white" }}><p>Aspiring<br />000000</p></div>
                            <div className="Rising" style={{ width: "36.33%", borderTop: "1px solid white", borderRight: "1px solid white" }}><p>Rising<br />000000</p></div>
                            <div className="Model" style={{ width: "36.33%", borderTop: "1px solid white" }}><p>Model<br />000000</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stat1">
                <div className='box-2 flex-container row'>
                    <div className="disease" style={{ width: "50%", borderRight: "1px solid white" }}><p>Disease spread<br />00000</p></div>
                    <div className="covid" style={{ width: "45%" }}><p>Covid<br />00000</p></div>
                </div>
            </div>

            <div className="stat1">
                <div className='box-3 flex-container column' style={{ width: "50%" }}>
                    <div className="flex-container row">
                        <div className="wellnour" style={{ width: "50%", borderBottom: "1px solid white", borderRight: "1px solid white" }}>
                        <p>Well Nourished<br/>00000</p>
                        </div>
                        <div className="undernour" style={{ width: "50%", borderBottom: "1px solid white" }}>
                            <p>Under Nourished<br/>00000</p>
                        </div>
                    </div>
                    <div className="mathealth" style={{ width: "50%", borderBottom: "1px solid white" }}>
                            <p>Maternal Health<br/>00000</p>
                        </div>
                </div>
            </div>

        </div>
    )
}