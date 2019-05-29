import React from "react";
import { Toggle} from "Utilities";
import { Modal } from "Elements";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toggle>
          {({ on, toggle }) => (
            <>
              <button onClick={toggle}>Open</button>
              <Modal on={on} toggle={toggle}>
                <h1>Still in modal</h1>
              </Modal>
            </>
          )}
        </Toggle>
      </header>
    </div>
  );
}

export default App;
