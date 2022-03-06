import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    // <div></div>
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
                <input type="number" />
              </div>
            </div>
            <div className="tip-section">
              <lable>Select Tip %</lable>
              <div className="tip-section-container">
                <button>5%</button>
                <button>10%</button>
                <button>15%</button>
                <button>20%</button>
                <button>25%</button>
                <button className="custom">Custom</button>
              </div>
            </div>
            <div className="bill-section">
              <label>Number of People</label>
              <div>
                <svg
                  height={24}
                  width="24"
                  className="dollar"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
                </svg>
                <input type="text" />
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
                <p className="tip-summary-dollar">$4.27</p>
              </div>
              <div className="tip-amount-summary-section">
                <div className="tip-amount-section">
                  <p className="tip-amount">Total</p>
                  <p className="per">/ person</p>
                </div>
                <p className="tip-summary-dollar">$32.79</p>
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
