import './main.css';

import { mount } from 'svelte';
import * as Router from '@koffeine/svelte-router';
import App from './App.svelte';

await Router.init([
]);

export default mount(App, { target: document.body });
