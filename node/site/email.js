var currenUser;

function createLogin(){

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebaseConfig.auth().createUserwithEmailAndPassaword(email, password).then(user=>{
        console.log('Usuario', user);
        alert('Usuario criado e feito e login');
    }).catch(err =>{
        console.log('erro', err);
    });

} 

function loginEmail(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInwithEmailAndpassword(email,password).then(()=>{
        alert('usuario logado!');
     }) .catch(err =>{
        console.error('Error' , err)
     });   
}

currenUser =  firebase.auth().currenUser;

function deletaUsuario(){
    if(currenUser){
        currenUser.delete().then(()=>{
            alert('Usuario excluido');
        })
    }
}

function logout(){
    firebase.auth().signOut().then(()=>{
alert("usuario deslogado");
    })
}
