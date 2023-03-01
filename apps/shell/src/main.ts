import { initFederation } from '@angular-architects/module-federation';

initFederation('/assets/mf.manifest.json', true)
  .then(() => {
    import('./bootstrap');
  })
  .catch(err => {
    console.error(err);
    import('./bootstrap');
  });
