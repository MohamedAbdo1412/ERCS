import espImage from "../assets/esp32.png";
export default function Hero() {
    return (
        <div className='Hero-Container'>
            <div className='Hero'>
                <h2>Help Reaches You <h2>Before You Even Call</h2></h2>
                <p>A smart emergency system that connects users, devices, and rescue teams in real time. Search for registered devices, apply for a new one, and manage emergencies instantly from one secure platform.</p>
                <div className="Hero-Btns">
                    <a className="Btn-Apply">Apply For A Device</a>
                    <a className="Btn-Login"> Learn More ..</a>
                </div>
            </div>
            <img src={espImage} alt="" />
        </div>
    )
}
