import { createApp } from 'vue';
import App from './App.vue';

export class VueElement extends HTMLElement {
  connectedCallback() {
    const app = createApp(App);
    app.mount(this);
  }
}

customElements.define('vue-element', VueElement);
