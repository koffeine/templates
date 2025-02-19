import './main.css';

import { mount } from 'svelte';
import * as Router from '@koffeine/svelte-router';
import App from './App.svelte';

Router.init([
]);

export default mount(App, { target: document.body });
