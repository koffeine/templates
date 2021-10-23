import './main.css';

import * as Router from '@koffeine/svelte-router';
import App from './App.svelte';

Router.init([
]);

new App({ target: document.body }); // eslint-disable-line no-new
