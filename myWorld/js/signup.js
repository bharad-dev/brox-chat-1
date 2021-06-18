const email=document.querySelector('.email');
const password=document.querySelector('.password');
const username=document.querySelector('.username');
const male=document.querySelector('.male');
let gender
function login(e){
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email.value,password.value).then(()=>{
        email.value="";
        password.value="";
        if(male.checked){
            gender={
            gender:'male'}
        }
        else{
            gender={
                gender:'female'}
        }
        firestore.collection('user-info').doc(username.value).set(gender).then(()=>{
            console.log(success)
        })
        localStorage.setItem('username',username.value);
        setTimeout(()=>{
        document.getElementById('form').submit();},1700)
    }).catch((error)=>{
        alert(error.message);
    })
    }
    