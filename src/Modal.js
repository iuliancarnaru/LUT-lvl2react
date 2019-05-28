import React, { Component } from "react";
import Portal from "./Portal";
import styled from "styled-components";
import Icon from "./Utilities/Icon";

export default class Modal extends Component {
  render() {
    const { children, on, toggle } = this.props;
    return (
      <div>
        <Portal>
          {on && (
            <ModalWrapper onClick={toggle}>
              <ModalCard>
                <CloseButton onClick={toggle}>
                  <Icon name="close" />
                </CloseButton>
                <div>{children}</div>
              </ModalCard>
            </ModalWrapper>
          )}
        </Portal>
      </div>
    );
  }
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalCard = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 10;
  min-width: 320px;
  text-align: center;
  margin-bottom: 100px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
  padding: 10px;
`;
