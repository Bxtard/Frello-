import React from 'react';

import  './login.css';

function LogIn() {
  return(
    <div className='login'>
      
      <header class="login__header"> <img class="login__header__logo"  src="..\img\trello.png" alt=""/></header>
      <div class="login__form">
        <h1>Log in to Trello</h1>
        <input class="login__email "type="email" name="email" placeholder= " Enter email"/>
        <input class="login__password "type="password" name="email" placeholder= " Enter password"/>    
        <button class="login__button"><b>Log in</b></button>
        <p>OR</p>
        <div class="login__with">
          <button class="login__with__button"> <img class="login__with__img" src="..\img\google.png" alt=""/> <b>Continue with Google</b> </button>
          <button class="login__with__button"> <img class="login__with__img" src="..\img\microsoft.png" alt=""/> <b>Continue with Microsoft</b> </button>
          <button class="login__with__button"> <img class="login__with__img" src="..\img\apple.png" alt=""/> <b>Continue with Apple</b> </button>
        </div>
        <a href="">Log in with SSO</a>
        <hr/>
        <div class="login__cantlog">
          <ul>
            <li> <a href="">Can't log in?</a> </li>
            <li> <a href="">Sign up for an account</a> </li>
          </ul>
        </div>
      </div>
      <div class="login__politics">
        <p class="login__politics__Service"><a href="">Terms of Service</a></p>              
        <p class="login__politics_Privacy"><a href="">Privacy Policy</a></p>
      </div>   
    <div class="login__language">
      <select name="Language Picker" class="login__language-picker">
        <option value="">Select your language…</option>
        <option value="">English</option>
        <option value="">Español</option>
        <option value="">Français</option>
        <option value="">Italiano</option>
        <option value="">Türkçe</option>
        <option value="">ภาษาไทย</option>
        <option value="">Українська</option>    
      </select>
    </div>
  </div>
);
}

export default LogIn;
