import React from "react";
import Toggle from "./ToggleRPC";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Toggle
          display={({ on, toggle }) => (
            <div>
              {on && <h1>Show me</h1>}
              <button onClick={toggle}>Show / Hide</button>
            </div>
          )}
        />
        <Toggle
          display={({ on, toggle }) => (
            <div>
              {on && <h2>Item 1 | Item 2 | Item 3</h2>}
              <button onClick={toggle}>Menu</button>
            </div>
          )}
        /> */}
        <Toggle>
          {({ on, toggle }) => (
            <div>
              {on && <h1>Show me</h1>}
              <button onClick={toggle}>Show / Hide</button>
            </div>
          )}
        </Toggle>
      </header>
    </div>
  );
}

export default App;
