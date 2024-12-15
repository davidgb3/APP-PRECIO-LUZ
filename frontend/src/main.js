import { loginForm } from "./components/login/login";

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  const formularioLogin = loginForm();
  app.appendChild(formularioLogin); 
});