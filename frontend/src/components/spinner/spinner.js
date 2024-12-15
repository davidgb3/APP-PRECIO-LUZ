import './spinner.css';
export const createSpinner = () => {
    const divSpinner = document.createElement('div');
    divSpinner.id = 'spinner-div';
    divSpinner.classList.add('spinner-div', 'hidden');

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    divSpinner.appendChild(spinner);
    return divSpinner;
};

export const showSpinner = () => {
    const spinnerDiv = document.getElementById('spinner-div');
    spinnerDiv.classList.remove('hidden');
};

export const hideSpinner = () => {
    const spinnerDiv = document.getElementById('spinner-div');
    spinnerDiv.classList.add('hidden');
};