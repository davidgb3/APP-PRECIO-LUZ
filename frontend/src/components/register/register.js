import { resgister } from "../../helpers/usuarios";
import { loginForm } from "../login/login";

export const registerForm = () => {
    const form = document.createElement('form');
    form.id = 'register-form';
    form.innerHTML = `
        <h2>Iniciar Sesión</h2>
        <input type="text" placeholder="Nombre de usuario" id="register-username" required>
        <input type="password" placeholder="Contraseña" id="register-password" required>
        <input type="password" placeholder="Repita la contraseña" id="register-password-repeat" required>
        <input type="submit" value="Registrar Usuario" id="register-btn">
    `;

    const errorMessage = document.createElement('p');
    errorMessage.textContent = "";

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = "Cancelar";
       
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const passwordInput = document.querySelector('#register-password');
        const password = passwordInput.value;

        const passwordInputRepeat = document.querySelector('#register-password-repeat');
        const passwordRepeat = passwordInputRepeat.value;

        if (passwordRepeat === password){
            errorMessage.textContent = "";
            
            const usernameInput = document.querySelector('#register-username');
            const passwordInput = document.querySelector('#register-password');
            
            const username = usernameInput.value;
            const password = passwordInput.value;
            try {
                const response = await resgister(username, password);
            } catch (error) {
                console.log(error);
            }
            form.reset();
        }else{
            errorMessage.textContent = "Las contraseñas no coinciden.";
            form.appendChild(errorMessage);
        }
    });

    cancelBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const app = document.getElementById('app');
        app.innerHTML = '';
        const login = loginForm();
        app.appendChild(login);
    });
    
    form.appendChild(cancelBtn);
    return form;
};