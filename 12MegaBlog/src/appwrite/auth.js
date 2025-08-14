import {conf} from "../conf/conf.js"

import { Client, Account, ID} from "appwrite" ;

//NOTE- Sare methods account pe hin lagte hain ... bhai account pe hin na banaoge createAccount wagaira

// humne class bana li aur seedhe ke seedhe export kar di, to is class ko jo bhi use karega usko object banana parega is class se
export class AuthService { 
  client = new Client() ; //pehle do propoery appint kiye hain // new Client() creates a brand new Appwrite Client object. // That object has its own internal state and methods to talk to Appwrite’s backend. // client now refers to that object inside your AuthService instance.
  account; 

  constructor(){ // initialize 
    this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProject_Id) ;
    this.account = new Account(this.client) ;  // Creates an Account object from Appwrite SDK, connected to this specific client. // This account object now has methods like createEmailSession() for logging in users. 
  }

  // creating the account
  async createAccount ({email, password, name}){
    try {
      const userAccount = await this.account.create(ID.unique(), email, password, name) ;
      if(userAccount){
        return this.login({email, password}) // directly calling the login if the userAccount is being created
      }
      else{
        return userAccount ;
      }
    } 
    catch (error) {
      throw error ;       
    }
  }

  // creating login 
  async login({email, password}){
    try {
      return await this.account.createEmailPasswordSession(email, password) ; // documentation(.createEmailSession)
    } 
    catch (error) {
      throw error ; 
    }
  }

  // find if the user already there or not
  async getCurrentUser() {
    try {
      return await this.account.get() ; // documentation
    }
     catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }
    return null ; 
  }

  // logout
  async logout(){
    try {
      await this.account.deleteSessions() ; 
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
  }
}
}

// to kyon na aisa karein ke sedhe object bana ke export kar dein kqki object ko hi import kar lo , aur object pe saare ke saare methods lage lagae hain (Smart Approach)
const authService = new AuthService() ; // authService.logout() etc. seedhe use kar sakte hain kahin bhi 

export default authService 

/** 
  
4️⃣ Now you can do
import authService from './path/to/authService';
authService.login({ email: 'a@b.com', password: '123' });
authService.logout();

No need to create a new instance anywhere else — your “smart approach” works exactly as intended.

*/