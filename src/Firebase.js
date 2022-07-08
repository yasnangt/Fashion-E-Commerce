import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, onSnapshot, doc, deleteDoc } from 'firebase/firestore'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updatePassword, updateProfile,signOut, onAuthStateChanged} from "firebase/auth";
import toast from "react-hot-toast";
import store from './store'
import {login as loginHandle, logout as logoutHandle} from './store/auth';
import { openModal } from "./store/modal";
import { setTodos } from "./store/todos";
import { memo } from "react";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app)

export const register = async (email, password) => {
  try{
    const {user} = await createUserWithEmailAndPassword(auth, email, password)
  return user;
  }
  catch(error){
    toast.error(error.message)
  }
}
export const login = async(email,password) => {
  try{
    const {user} = await signInWithEmailAndPassword(auth, email, password)  
    return user
  }
  catch(error){
    toast.error(error.message)
  }
} 
export const logout = async() => {
  try{
    await signOut(auth)
    return true 
  }catch(error){
    toast.error(error.message)
  }
}
export const update = async data => {
  try {
    await updateProfile(auth.currentUser, data)
    toast.success('Profil Güncellendi')
    return true;
  } catch (error) {
    toast.error(error.message)
  }
  
}
export const resetPassword = async password => {
  try {
    await updatePassword(auth.currentUser, password)
    toast.success('Şifre Güncellendi')
    return true;
  } catch (error) {
    if(error.code === 'auth/requires-recent-login'){
      store.dispatch(openModal({
        name: 're-auth-modal'
      }))
    }
    toast.error(error.message)
  }
  
}
export const emailVerification = async () => {
  try {
    await sendEmailVerification(auth.currentUser)
    toast.success(`Doğrulama maili ${auth.currentUser.email} adresine gönderildi, lütfen kontrol edin!`)
  } catch (error) {
    toast.error(error.message)
  }
}
  onAuthStateChanged(auth, (user) => {
    if(user){
      store.dispatch(loginHandle({
        displayName: user.displayName,
        email:user.email,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL,
        uid: user.uid

      }))
    }
    else{
      store.dispatch(logoutHandle())
    }
  })
  
export const addTodo = async data => {
  try {
    const result= await addDoc(collection(db,'todos'),data)
    toast.success("Ürün Başarıyla Eklendi")
  } catch (error) {
    toast.error(error.message)
  }
  

}
export const deleteProduct = async id => {
  try {
    await deleteDoc(doc(db, 'todos', id))
    toast.success("Ürün Başarıyla Silindi")
  } catch (error) {
    toast.error(error.message)
  }
  
}
onSnapshot(collection(db,"todos"), (doc) => {
  store.dispatch(
   setTodos(doc.docs.reduce((todos,todo) => [...todos, {...todo.data(), id: todo.id}],[]))
  )
})

export default memo(app) 