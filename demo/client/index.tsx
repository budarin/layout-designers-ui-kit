import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

const APP_ROOT_ID = 'root';

function renderApp() {
    let appRoot = document.getElementById(APP_ROOT_ID);

    if (!appRoot) {
        appRoot = document.body.appendChild(document.createElement('main'));
        appRoot.id = APP_ROOT_ID;
    }

    ReactDOM.render(<App />, appRoot, () => {
        const body = document.querySelector('body');

        if (body) {
            body.classList.add('interactive');
        }
    });

    return true;
}

renderApp();

if (module.hot) {
    module.hot.accept('../components/App', () => {
        renderApp();
    });
}
