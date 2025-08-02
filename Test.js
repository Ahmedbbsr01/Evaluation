import{
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStageChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js"

const email= document.getElementById("email");
const password= document.getElementById("password");
const signup= document.getElementById("signup");
const login= document.getElementById("login");
const logout= document.getElementById("logout");
const ideaform= document.getElementById("ideaform");
const submit= document.getElementById("submit");
const feed= document.getElementById("feed");
