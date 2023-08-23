const firebaseConfig = {
    apiKey: "AIzaSyC_hOg6bZCPlVN121S-_uacN7kzKo2Rodo",
    authDomain: "projeto2mibteste-91d98.firebaseapp.com",
    projectId: "projeto2mibteste-91d98",
    storageBucket: "projeto2mibteste-91d98.appspot.com",
    messagingSenderId: "498437651526",
    appId: "1:498437651526:web:932c6da50ae83dcfbd9e47"
  };

  firebase.initializeApp(firebaseConfig);

  const emailField = document.getElementById('email');

  const passwordfield = document.getElementById('passwprd');

  const loginButton = document.getElementById("loginButton")

 

  loginButton.addEventListenerEventListener('click', ()=>{

const email = emailFiled.value;

const password = passwordFiled.value;

 

firebase.auth().signInWithEmailAndPassaword(email, password)

.then((userCredential)=>{

    //Usuário logado com sucesso

    const user = userCredential.user;

    console.log('Usuário logado:',user);

})

.catch((error)=>{

    //tratar erros de autenticaçao

    const errorMessage = error.message;

    console.error('Erro de Autenticação:', errorMessage);

});

});