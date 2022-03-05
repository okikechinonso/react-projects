import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="tip-app">
      <div className="tip-app-container">
        <div className="tip-app-content">
          <div className="bill-section">
            <label>Bill</label>
            <div>
              <p className="dollar">$</p>
              <input type="text" />
            </div>
          </div>
          <div className="tip-section">
            <p>Select Tip %</p>
            <div className="tip-section-container">
              <button>5%</button>
              <button>10%</button>
              <button>15%</button>
              <button>20%</button>
              <button>25%</button>
              <button>Custom</button>
            </div>
          </div>
          <div className="bill-section">
            <label>Number of People</label>
            <div>
              <p className="dollar">$</p>
              <input type="text" />
            </div>
          </div>
          <div className="summary-section-container">
            <div className="summary-section">
              <div className="tip-amount-summary-section">
                <div className="tip-amount-section">
                  <p className="tip-amount">Tip Amount</p>
                  <p className="per">/ person</p>
                </div>
                <p>$</p>
              </div>
              <div className="tip-amount-summary-section">
                <div className="tip-amount-section">
                  <p className="tip-amount">Total</p>
                  <p className="per">/ person</p>
                </div>
                <p>$</p>
              </div>
            </div>
            <button>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
