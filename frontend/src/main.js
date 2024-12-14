import { loginForm } from "./components/login/login";
import { login } from "./helpers/usuarios";

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  const formularioLogin = loginForm();
  app.appendChild(formularioLogin); 
});