import './style.css';

function GeneralInfo(){
    return(
        <div className="sectionCard">
            <label>Full Name</label>
            <input type="text"></input><br/>
            <label>E-mail</label>
            <input></input><br/>
            <label>Phone</label>
            <input></input><br/>
        </div>
    );
}

export default GeneralInfo;