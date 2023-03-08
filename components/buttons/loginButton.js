import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<h1>Welcome to Vocab-YOU-Lary</h1><button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>';
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;