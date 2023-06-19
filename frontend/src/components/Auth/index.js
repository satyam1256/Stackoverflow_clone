import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
  } from "firebase/auth";
  import React, { useState } from "react";
  import { useHistory } from "react-router-dom";
  import { auth, provider } from "../../Firebase";
  // import { getAuth, GoogleAuthProvider } from "firebase/auth";
  import {loading} from '../../features/userSlice';
  import "./index.css";
  
  function Index() {
    const history = useHistory();
    const [register, setRegister] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    function validateEmail(email) {
      const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
      if (reg.test(email) === false) {
        return false;
      } else return true;
    }

    const handleSignInGoogle = () => {
        signInWithPopup(auth, provider).then((res) => {
            // console.log(res);
            setLoading(false);
            history.push("/");  
        }).catch((error) => {
            setLoading(false);
            console.log(error.code);
        })
    }
    
    const handleRegister = () => {
        setError("");   
        setLoading(false);
        if (email == "" || password == "" || username == "") {
            setError("Required field is missing");
            setLoading(false);
        }
        else{
            createUserWithEmailAndPassword(auth, email, password).then((res) => {
                // console.log(res);
                history.push("/");
                setLoading(false);
            }).catch((error) => {
                console.log(error.code);
                setError(error.message);
                setLoading(false);
            })
        }
    }


    const handleSignIn = () => {
        setError("");
        setLoading(true);
        if (email == "" || password == "") {
            setError("Required field is missing");
            setLoading(false);
        }
        else if(!validateEmail(email)){
            setError("Invalid email");
            setLoading(false);
        }
        else{
            signInWithEmailAndPassword(auth, email, password).then((res) => {
                // console.log(res);
                history.push("/");
                setLoading(false);
            }).catch((error) => {
                console.log(error.code);
                setError(error.message);
                setLoading(false);
            })
        }
    }


    return (
      <div className="auth">
        <div className="auth-container">
          <p>Add another way to log in using any of the following services. </p>
          <div className="sign-options">
            <div onClick={handleSignInGoogle} className="single-option">
              <img
                alt="google"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              />
              <p>Login with Google</p>
            </div>
            <div className="single-option">
              <img
                alt="github"
                src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
              />
              <p>Login with Github</p>
            </div>
            <div className="single-option">
              <img
                alt="facebook"
                src="https://images.ctfassets.net/0gwlbcfnpdat/2Sqa0ouR1yFlLUgW297ZCH/028644fe367279ea6ae42e7a575d6a46/facebook-app-logo-250x250.png"
              />
              <p>Login with Facebook</p>
            </div>
          </div>
          <div className="auth-login">
            <div className="auth-login-container">
              {register ? (
                <>
                  {" "}
                  <div className="input-field">
                    <p>Username</p>
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="input-field">
                    <p>Email</p>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="input-field">
                    <p>Password</p>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                    />
                  </div>
                  <button
                    onClick={handleRegister}
                    disabled={loading}
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    {loading ? "Registering..." : "Register"}
                  </button>
                </>
              ) : (
                <>
                  <div className="input-field">
                    <p>Email</p>
                    <input type="text" />
                  </div>
                  <div className="input-field">
                    <p>Password</p>
                    <input type="password" />
                  </div>
                  <button
                    onClick={handleSignIn}
                    disabled={loading}
                    style={{
                      marginTop: "10px",
                    }}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </>
              )}
  
              <p
                onClick={() => setRegister(!register)}
                style={{
                  marginTop: "10px",
                  textAlign: "center",
                  color: "#0095ff",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {register ? "Login" : "Register"} ?
              </p>
            </div>
          </div>
          {error !== "" && (
            <p
              style={{
                color: "red",
                fontSize: "14px",
              }}
            >
              {error}
            </p>
          )}
        </div>
      </div>
    );
  }

  export default Index;
