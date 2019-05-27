import React from "react";
//import React, { Fragment } from "react";
import Toggle from "./ToggleRPC";
import Portal from "./Portal";

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
            // <Fragment>
            //   {on && <h1>Show me</h1>}
            //   <button onClick={toggle}>Show / Hide</button>
            // </Fragment>

            <>
              {on && <h1>Show me</h1>}
              <Portal>{on && <h1>Show me from Portal</h1>}</Portal>
              <button onClick={toggle}>Show / Hide</button>
            </>
          )}
        </Toggle>
      </header>
    </div>
  );
}

export default App;
