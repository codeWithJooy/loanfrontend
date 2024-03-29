import React from "react";
import "../../styles/global.css";
import "../../styles/number.css";
import Header from "../../components/Header/Header";
import {useHistory} from 'react-router-dom' 

const IdentifyScreen = () => {
  const history=useHistory()

  const handleProceed=()=>{
     history.push("/current")
  }
  return (
    <div className="main">
      <Header title="Identify Yourself" img="Assets/back.png" />
      <div className="container">
        <div className="card">
          <div className="numberSection">
            <div className="inputSection">
              <div className="inputLabel">
                <label>Aadhar Number</label>
              </div>
              <div className="inputText">
                <input type="text" />
              </div>
            </div>
            <div className="inputSection">
              <div className="inputLabel">
                <label>Pan Number</label>
              </div>
              <div className="inputText">
                <input type="text" />
              </div>
            </div>
            <div className="proceedSection">
              <button onClick={handleProceed}>Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentifyScreen;