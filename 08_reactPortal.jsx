/*---
React Portal provides a way to render a child component into a DOM node that exists outside the hierarchy of the parent component.
Example: if we want to render a modal, we can use react portal to render it outside the parent component hierarchy by using 

syntax:
ReactDom.createPortal(child, parent-container)

child: modal
parent-container-div with id 'modal-root'

---*/

// inside index.html create a div with id 'modal-root'
// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <title>React Portal Example</title>
//   </head>
//   <body>
//     <div id="root"></div>
//     <div id="modal-root"></div> <!-- target -->
//   </body>
// </html>


// App.jsx
import React, { useState } from "react";
import Modal from "./Modal";
import "./index.css";

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <h1>React Portal Example</h1>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2>This is a Portal Modal!</h2>
          <p>It is rendered outside the root DOM hierarchy.</p>
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </Modal>
      )}
    </div>
  );
}


// Modal.jsx
import ReactDOM from "react-dom";

function Modal({ children, onClose }) {
  return ReactDOM.createPortal(                                    //creating portal for modal
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
