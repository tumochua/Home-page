import { useState } from "react";
import "./Modal.scss";
function Modal({ showlHideMoal, handleShowHideMoadl }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleCloseModal = () => {
    handleShowHideMoadl(!showlHideMoal);
  };
  const handleSignIn = () => {
    handleShowHideMoadl(!showlHideMoal);
    console.log({
      name,
      password,
    });
  };

  return (
    <>
      {showlHideMoal && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              {" "}
              &times;{" "}
            </span>
            <div className="form-login">
              <h2 className="form-login-title">SIGN IN TO YOUR ACCOUNT</h2>
              <div className="form-login-field">
                <div>
                  <input
                    className="input-name"
                    type="text"
                    placeholder="name"
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    className="input-password"
                    type="password"
                    value={password}
                    placeholder="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <button className="form-sign-in" onClick={handleSignIn}>
                    SIGN IN
                  </button>
                </div>
                <div>Forgot your password?</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
