---

title: Native Form Validation
cat: nativeHTML
image: ""
desc: Native HTML form validation can be accomplished without any JavaScript. 
---


<html-code>
<form action="#" method="post">     
            <h3>Sign up</h3>
            <div>  <p><span style="color:red">*</span> Required</p></div>
            <section>        
                <label for="name" class="required">Full Name </label>
                <input id="name" name="name" autocomplete="name"  pattern="[\p{L}\.\- ]+" required placeholder=" ">
            </section>
            <section>        
                <label for="email" class="required">Email</label>
                <input id="email" name="email" autocomplete="username" type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="email@youremail.com" value=" "/>
                <div class="input_error">Please enter an emain address formatted as "email@youremail.com"</div>
            </section>
            <section>
                <label for="password">Password</label>
                <input id="passwordInput" name="password" type="password" autocomplete="new-password" minlength="8" aria-describedby="password-constraints" required placeholder="Eight or more characters."/>
                <div class="input_error">Please enter eight or more characters.</div>
                <button id="toggle-password" type="button" aria-label="Show password as plain text. Warning: this will display your password on the screen.">Show password</button>
        </section>
        <button id="sign-up">Sign up</button>
</form>
</html-code>

<css-code>
:root{
		--error-red: rgb(196, 0, 0);
		--svg-alert: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24"  focusable="false" aria-hidden="true" data-testid="ErrorIcon"%3E%3Cpath fill="rgb(196, 0, 0)" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z"%3E%3C/path%3E%3C/svg%3E');
	}
	.input_error{
  		color: var(--error-red);
		margin: 0 0 0 20px;
		font-family: Arial, sans-serif;
		font-weight: 400;
		text-align: left;
		font-size: 0.875rem;
		line-height: 1.4;
		position: relative;
		-webkit-font-smoothing: antialiased;
		display: none;
		&::before {
			position: absolute;
			left: -20px;
			top: 2px;
			display: block;
			content: var(--svg-alert);
		}
		&::after{
			display: block;
		}
	}
	input{
		border: 1px solid black;
		border-radius: 4px;
		size: 5em;
	}
	input:not(:focus):not(:placeholder-shown):invalid {
		border-color: red;
		
	}
	input:not(:focus):not(:placeholder-shown):invalid  + .input_error {
  		display: block;
		
	}
	input:not(:focus):not(:placeholder-shown):valid  {
		border-color: rgb(111, 193, 89);
	}
	input:valid + .input_error {
  		display: none;
	}

	.instruction{
		color: rgb(75, 77, 79);
		font-size: 14px;
		line-height: 20px;
		font-family: Arial, sans-serif;
		font-weight: 400;
	}
	label{
		font-size: 16px;
    	line-height: 20px;
    	font-family: Arial, sans-serif;
      display: block;
	}
	.required:after{
		content: "*";
		color: red;
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

