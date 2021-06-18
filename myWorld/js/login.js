
const button=document.querySelector('.button');
const email=document.querySelector('.email');
const password=document.querySelector('.password');
const rocket=document.querySelector('.rocket');
function login(e){
    e.preventDefault();
auth.signInWithEmailAndPassword(email.value,password.value).then(()=>{
    rocket.style.display="inline";
    email.value="";
    password.value="";
    setTimeout(()=>{
    document.getElementById('form').submit();},1700)
}).catch((error)=>{
    alert(error.message);
})
}
