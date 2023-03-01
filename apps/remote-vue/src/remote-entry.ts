import { DynamicRemoteEntry } from '@tvp/creator';
import { createApp } from 'vue';
import App from './App.vue';

export class VueElement extends DynamicRemoteEntry {
  connectedCallback() {
    const app = createApp(App);
    app.mount(this);
  }
}

customElements.define('vue-element', VueElement);
