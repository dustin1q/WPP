---

title: Native Form Validation
image: ""
desc: Native HTML form validation can be accomplished without any JavaScript. 
---


<html-code>
 <form action="#" method="post">     
            <h3>Sign up</h3>
            <section>        
            <label for="name">Full Name *</label>
            <input id="name" name="name" autocomplete="name" 
                    pattern="[\p{L}\.\- ]+" required placeholder="Your name">
            </section>
            <section>        
            <label for="email">Email *</label>
            <input id="email" name="email" autocomplete="username"
                    type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="email@youremail.com" >
            </section>
            <section>
                  <label for="password">Password *</label>
                
                <input id="passwordInput" name="password" type="password" autocomplete="new-password" 
                    minlength="8" aria-describedby="password-constraints" required placeholder="Eight or more characters.">
                <button id="toggle-password" type="button" aria-label="Show password as plain text. 
                        Warning: this will display your password on the screen.">Show password</button>
                <div id="password-constraints">  <p>* Required</p></div>
            </section>
            <button id="sign-up">Sign up</button>
        </form>
</html-code>

<css-code>
input {
    border: 1px solid #ccc;
    width: 100%; 
    background-color: rgb(255, 255, 255);
    margin: 10px 0px 10px 0px;
  }
  input::placeholder {
    color: #141414;
    background: #ffffff;
    padding: 10px;
    width: 100%; 
  }
  input:not(:focus):invalid {
    color: red;
    outline-color: red;
    background-color: rgb(230, 192, 175);
  }
  input:not(:focus):valid {
    color: green;
    outline-color: green;
    background-color: rgb(175, 230, 175);
  }
  label {
    display: block;
    font-size: 20px;
    font-size: var(--large-mobile-font-size);
    font-weight: 400;
    margin: 0 0 3px 0;
  }
</css-code>
<js-code>
// The following JS Toggles the password input type between "text and password. 
//This is an optional feature and has no impact on form validation.
const togglePasswordButton = document.getElementById('toggle-password');
togglePasswordButton.addEventListener('click', togglePassword);

function togglePassword() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePasswordButton.textContent = 'Hide password';
    togglePasswordButton.setAttribute('aria-label',
      'Hide password.');
  } else {
    passwordInput.type = 'password';
    togglePasswordButton.textContent = 'Show password';
    togglePasswordButton.setAttribute('aria-label',
      'Show password as plain text. ' +
      'Warning: this will display your password on the screen.');
  }
}

</js-code>

