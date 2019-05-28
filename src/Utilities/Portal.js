import { Component } from "react";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal");

export default class Portal extends Component {
  element = document.createElement("div");

  componentDidMount() {
    portalRoot.appendChild(this.element);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.element);
  }
}
