import React from "react";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import "./App.css";
import axios from "axios";

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

  const responseFacebook = (response) => {
    const { accessToken, userID } = response;

    axios
      .post("http://localhost:4000/api/facebookLogin", {
        accessToken,
        userID,
      })
      .then((res) => {
        console.log(res.data);
      });
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
      <div>
        <FacebookLogin
          appId={process.env.REACT_APP_APP_ID}
          autoLoad={false}
          callback={responseFacebook}
        />
      </div>
    </div>
  );
};

export default App;
