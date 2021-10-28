import './main.css';

import * as Router from '@koffeine/svelte-router';
import App from './App.svelte';

Router.init([
]);

export default new App({ target: document.body });
