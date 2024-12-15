import { removeSessionKey, setSessionKey } from "../../helpers/sessionKey";
import { login } from "../../helpers/usuarios";
import { registerForm } from "../register/register";
import { createSpinner, hideSpinner, showSpinner } from "../spinner/spinner";
import './login.css';

export const loginForm = () => {
    const app = document.getElementById('app'); 
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

    const logoutBtn = document.createElement('button');
    logoutBtn.innerHTML = 'Cerrar Sesión';
    logoutBtn.style.display = 'none';

    const spinner = createSpinner();

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const usernameInput = document.querySelector('#login-username');
        const passwordInput = document.querySelector('#login-password');
        
        const username = usernameInput.value;
        const password = passwordInput.value;
        
        try {
            const response = await login(username, password);

            if(!response.ok){
                form.reset();
            }
            showSpinner();
            alert(`Has iniciado sesión con el usuario: ${username}.`);
            setSessionKey("sessionKey", username);
            setTimeout(() => {
                hideSpinner();
                if(localStorage.hasOwnProperty("sessionKey") && localStorage.getItem("sessionKey")){
                    logoutBtn.style.display = 'block';
                
                    logoutBtn.addEventListener("click", () => {
                        showSpinner();
                        setTimeout(() => {
                            hideSpinner();
                            removeSessionKey("sessionKey");
                            alert("Has cerrado sesión.");
                            location.reload();
                            },200);
                        });
                    };
                    form.reset();
                },2000);
        } catch (error) {
            alert("Error al iniciar sesión. Usuario o contraseña incorrectos.");
            console.error("Error al iniciar sesión. Usuario o contraseña incorrectos --> ",error);
        }
        
    });

    registerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showSpinner(); 
        setTimeout(() => {
            hideSpinner();
            const app = document.getElementById('app');
            app.innerHTML = '';
            const register = registerForm();
            app.appendChild(register);
        },2000);
    });

    form.append(registerBtn, spinner);
    app.appendChild(logoutBtn);

    return form;
};