import "./App.css";
import { useState } from "react";

function App() {
  const [tipAmount, setTipAmount] = useState(0);
  const [people, setPeople] = useState(1);
  const [amountPerPerson, setAmountPerPerson] = useState(0);
  const [defaultTipRate, SetDefaultTipRate] = useState(0.05);
  const [totalAmount, setTotalAmount] = useState("");

  const onChangeAmount = (e) => {
    let amount = e.target.value / people;
    let tip = (amount * defaultTipRate) / people;
    setTipAmount(tip.toPrecision(4));
    setAmountPerPerson((amount + tip).toPrecision(4));
    setTotalAmount(amount.toPrecision(4));
  };

  const onClictButton = (e) => {
    let tipRate = e.target.value;
    let tip = (totalAmount * tipRate) / people;
    setTipAmount(tip.toPrecision(4));
    setAmountPerPerson((totalAmount + tip).toPrecision(4));
    SetDefaultTipRate(tipRate);
  };

  const onChangePeople = (e) => {
    let currPeople = e.target.value;
    let tip = 0;
    if (currPeople === "") {
      currPeople = 1;
      tip = (totalAmount * defaultTipRate) / currPeople;
      setTipAmount(tip.toPrecision(4));
      setAmountPerPerson((totalAmount / currPeople + tip).toPrecision(4));
      setPeople(currPeople);
      console.log(tipAmount + " " + currPeople);
    } else {
      tip = (totalAmount * defaultTipRate) / currPeople;
      setTipAmount(tip.toPrecision(4));
      setAmountPerPerson((totalAmount / currPeople + tip).toPrecision(4));
      setPeople(currPeople);
    }
    //console.log(totalAmount + " " + currPeople);
  };

  const onReset = () => {
    setTipAmount(0)
    setPeople(1)
    setAmountPerPerson(0)
    SetDefaultTipRate(0.05)
    setTotalAmount()
  };

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
                />
              </div>
            </div>
            <div className="tip-section">
              <label>Select Tip %</label>
              <br />
              <div className="tip-section-container">
                <button onClick={onClictButton} className="tip" value="0.05">
                  5%
                </button>
                <button onClick={onClictButton} className="tip" value="0.1">
                  10%
                </button>
                <button onClick={onClictButton} className="tip" value="0.15">
                  15%
                </button>
                <button onClick={onClictButton} className="tip" value="0.20">
                  20%
                </button>
                <button onClick={onClictButton} className="tip" value="0.25">
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
                <p className="tip-summary-dollar">${amountPerPerson}</p>
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
