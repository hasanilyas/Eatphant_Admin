// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyAbKaRDmW3oGnllFn7pAktjY2Mefkae270",
    authDomain: "eatphanttest.firebaseapp.com",
    databaseURL: "https://eatphanttest.firebaseio.com",
    projectId: "eatphanttest",
    storageBucket: "eatphanttest.appspot.com",
    messagingSenderId: "773028266379"
  }
}; 
