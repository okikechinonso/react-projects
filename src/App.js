import "./App.css";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(null);
  const [tipAmount, setTipAmount] = useState(0);
  const [tipRate, setTipRate] = useState(5);
  const [people, setPeople] = useState("");
  const [peramount, setPerAmount] = useState(0);

  const onClictButton = (e) => {
    if (people === ""){
      setTipAmount(
        ((amount * (e.target.value / 100)) / 1).toPrecision(4)
      );
      setPerAmount((c) => (c = amount *  (e.target.value/100) / 1)).toPrecision(4);
    }else{
      setTipAmount(
        ((amount * (e.target.value / 100)) / people).toPrecision(4)
      );
      setPerAmount(
        ((amount * (e.target.value / 100)) / people).toPrecision(4)
      );
    }
     
    console.log(tipRate);
  };
  const onChangeAmount = (e) => {
      if (e.target.value.trim() === "") {
        setAmount(null);
        setTipAmount(0);
      }

      if( people === "" && e.target.value.trim() !== ""){
        setAmount(e.target.value);
        setTipAmount(
          ((e.target.value * (tipRate / 100)) / 1).toPrecision(4)
        );
        setPerAmount((c) => (c = e.target.value / 1)).toPrecision(4);
      }
      
      console.log("typing")
    
  };
  const onChangePeople = (e) => {
    if (e.target.value.trim() === "") {
      setPeople((c) => (c = 1));
      setTipAmount(
        (c) => (c = ((amount * (tipRate / 100)) / 1).toPrecision(4))
      );
      setPerAmount(amount/1)
      setPeople("")
    } else {
      setPeople((c) => (c = e.target.value));
      setTipAmount(
        (c) =>
          (c = ((amount * (tipRate / 100)) / e.target.value).toPrecision(5))
      );
      setPerAmount((c) => (c = amount / e.target.value));
      console.log(amount + "tip");
    }
  };

  const onReset = () =>{
    setAmount("")
    setPeople("")
    setPerAmount(0)
    setTipRate(5)
    setTipAmount(0)
  }

  return (
    <div className="tip-app">
      <div className="tip-title">
        <div>SPLI</div> <div>TTER</div>
      </div>
      <div className="tip-app-container">
        <div className="tip-app-content">
          <div className="desktop">
            <div className="bill-section">
              <label>Bill</label>
              <div>
                <span className="dollar">$</span>
                <input
                  onChange={onChangeAmount}
                  type="number"
                  name="amount"
                  placeholder="Amount"
                  value={amount}
                />
              </div>
            </div>
            <div className="tip-section">
              <label>Select Tip %</label>
              <br />
              <div className="tip-section-container">
                <button onClick={onClictButton} className="tip" value="5">
                  5%
                </button>
                <button onClick={onClictButton} className="tip" value="10">
                  10%
                </button>
                <button onClick={onClictButton} className="tip" value="15">
                  15%
                </button>
                <button onClick={onClictButton} className="tip" value="20">
                  20%
                </button>
                <button onClick={onClictButton} className="tip" value="25">
                  25%
                </button>
                <button onClick={onClictButton} className="custom" value="5">
                  Custom
                </button>
              </div>
            </div>
            <div className="bill-section">
              <label>Number of People</label>
              <br />
              <div>
                <svg
                  height={24}
                  width="24"
                  className="dollar"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <g color="hsl(184, 14%, 56%)">
                    <path
                      fill="currentcolor"
                      d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
                    />
                  </g>
                </svg>
                <input
                  onChange={onChangePeople}
                  type="number"
                  name="people"
                  placeholder="No. of People"
                  value={people}
                />
              </div>
            </div>
          </div>

          <div className="summary-section-container">
            <div className="summary-section">
              <div className="tip-amount-summary-section">
                <div className="tip-amount-section">
                  <p className="tip-amount">Tip Amount</p>
                  <p className="per">/ person</p>
                </div>
                <p className="tip-summary-dollar">${tipAmount}</p>
              </div>
              <div className="tip-amount-summary-section">
                <div className="tip-amount-section">
                  <p className="tip-amount">Total</p>
                  <p className="per">/ person</p>
                </div>
                <p className="tip-summary-dollar">${peramount}</p>
              </div>
            </div>
            <button onClick={onReset}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
