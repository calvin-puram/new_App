import React from "react";
import { GoogleLogin } from "react-google-login";
import "./App.css";
const axios = require("axios");
const App = () => {
  const responseSuccessGoogle = (response) => {
    axios
      .post("http://localhost:4000/api/googleLogin", {
        tokenId: response.tokenId,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  const responseErrorGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className='col-md-6 offset-md-3 text-center mt-5'>
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText='Login With Google'
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrorGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default App;
