import { login } from "../../helpers/usuarios";
import { registerForm } from "../register/register";

export const loginForm = () => {
    const form = document.createElement('form');
    form.id = 'login-form';
    form.innerHTML = `
        <h2>Iniciar Sesión</h2>
        <input type="text" placeholder="Nombre de usuario" id="login-username" required>
        <input type="password" placeholder="Contraseña" id="login-password" required>
        <input type="submit" value="Iniciar Sesión" id="login-btn">
    `;

    const registerBtn = document.createElement('button');
    registerBtn.innerHTML = 'Registrase';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const usernameInput = document.querySelector('#login-username');
        const passwordInput = document.querySelector('#login-password');
        
        const username = usernameInput.value;
        const password = passwordInput.value;

        try {
            const response = await login(username, password);
        } catch (error) {
            console.log(error);
        }
        form.reset();
    });

    registerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const app = document.getElementById('app');
        app.innerHTML = '';
        const register = registerForm();
        app.appendChild(register);
    });

    form.appendChild(registerBtn);

    return form;
};