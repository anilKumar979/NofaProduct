import React, { useEffect, useState, useRef } from 'react';
import axios from "axios";
import PropTypes from 'prop-types'
import MyButton from './MyButton'
import { useMsal } from '@azure/msal-react'
import { setUserSession, removeUserSession } from '../../sessionStorage/userStore';
import { useIsAuthenticated } from '@azure/msal-react';
import { useHistory } from "react-router-dom";

import { useDetectOutsideClick } from "./useDetectOutsideClick";
const Header = ({ title }) => {
  const { instance, accounts, inProgress } = useMsal()
  const [sessionemail, setSessionEmail] = useState();
  const [sessionname, setSessionName] = useState();
  const [Token, setToken] = useState();
  const [loader, setLoader] = React.useState(false)
  const isAuthenticated = useIsAuthenticated()
  const history = useHistory();
  useEffect(() => {
    if (inProgress === 'none' && accounts.length > 0) {
      setLoader(true)
      const request = {
        account: accounts[0],
        scopes: ["https://cahcdb2c.b2clogin.com/cahcdb2c.onmicrosoft.com/b2c_1_nofaapplicants/oauth2/v2.0/token"]
      };
      // Retrieve an access token
      instance.acquireTokenSilent(request)
        .then(response => {
          console.log(response);
          setToken(response.idToken);
          setSessionEmail(response.account.username);
          sessionStorage.setItem('email', response.account.username);
          setUserSession(response.idToken, response.account.username, response.idTokenClaims.given_name, response.idTokenClaims.sub)
          const username = sessionStorage.getItem('username');
          setSessionName(username);
          const article = { email: response.account.username, sub: response.idTokenClaims.sub };
          const headers1 = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          };
          axios.post('http://localhost:9005/api/faast/users', article, { headers1 })
            .then(res => {
             // console.log(JSON.stringify(res.data))
              sessionStorage.setItem('user', JSON.stringify(res.data));
              const user = sessionStorage.getItem('user');
              if(user){
                setLoader(false)
              }else{
                setLoader(true)
              }

            }).catch(function (error) {

              // if(error.status === undefined) {

              //   window.location.reload();
              // }

              console.log(error);
              // console.log(JSON.stringify(error.status) )

            });


        })
        .catch(error => console.log('token error', error));
    }

  }, [inProgress, accounts, instance]);


  const LoginHandler = () => {
    // console.log("Trying to login via popup")
    try {
      const loginResponse = instance.loginRedirect().then(response => {
        console.log("Login Response: " + response.json())
      });

      console.log(loginResponse)
    } catch (err) {
      console.log(err);
    }
  }

  const LogoutHandler = () => {
    try {
      // console.log("Trying to logout")
      const logoutResponse = instance.logout();
      removeUserSession();
      setLoader(true)
    } catch (err) {
      console.log(err)
    }
  }
  const listOrg = () => {
    window.location.href = "/organization/view";
 }
 const goToProfile = () => {
  window.location.href = "/snap";
}
  // setTimeout(function(){  
  //   LogoutHandler();
  // }, 5000000);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  return (

    <div>
      {/* <div className="row">
          {loader ?
            <div className="loader-wrapper">
            <div className="loader"></div>

          </div>
            :
            <></>

          }
        </div> */}
      <ul className="azureLoginBtncss">

        {/* <li ><i className="fa fa-sign-out" aria-hidden="true"></i> <MyButton text={isAuthenticated ? "Logout" : "Login"} onClick={isAuthenticated ? LogoutHandler : LoginHandler}></MyButton></li> */}
        {isAuthenticated ? 
        <li className="headli"><a className='headerProfile' onClick={onClick}><i className="fa fa-user-o" aria-hidden="true"></i> Welcome {sessionname} <i className="fa fa-angle-down" aria-hidden="true"></i></a>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <div className='imgpro'>
              <i className="fa fa-user-o" aria-hidden="true"></i>
              </div>
            </li>
            <li>
              <p>{sessionname}</p>
              <p>{sessionemail}</p>
            </li>
            <li className='borderr2'>
            <MyButton  onClick={listOrg} text={"Manage Your Organization"} ></MyButton>
            </li>
            <li className='borderr'>
            <a  onClick={goToProfile}  >Your Profile</a>
            </li>
            <li className='borderr'>
            <MyButton text={isAuthenticated ? "Logout" : "Login"} onClick={isAuthenticated ? LogoutHandler : LoginHandler}></MyButton>
            </li>
          </ul>
        </nav>
        </li>
  : <></>
}
      </ul>

    </div>
  )
}

Header.defaultProps = {
  title: 'Sample React App'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}


export default Header
