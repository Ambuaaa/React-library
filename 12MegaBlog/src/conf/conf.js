export const conf = {
  appwriteUrl: String (import.meta.env.VITE_APPWRITE_URL), // gurantee hai ki string value hi aegi 
  appwriteProject_Id: String (import.meta.env.VITE_PROJECT_ID), // gurantee hai ki string value hi aegi 
  appwriteDatabase_Id: String (import.meta.env.VITE_DATABASE_ID), // gurantee hai ki string value hi aegi 
  appwriteCollection_Id: String (import.meta.env.VITE_COLLECTION_ID), // gurantee hai ki string value hi aegi 
  appwriteBucket_Id: String (import.meta.env.VITE_BUCKET_ID) // gurantee hai ki string value hi aegi 

}

// we made this because in production ,
// har baar ye bolna jaake jaisa App.jsx me humne kiya hai - import.meta.env.VITE_APPWRITE_URL . TO ye ho sakta hai , ki ye environmental variable load hi na ho. TO wahan puri application hi crash hoti hai.
// Bht baar ye bhi hota hai , ki env variable ke andar directly, jo id hai wo string me na hokar direct ho - e.g = 6893a0ed0039fc7870e4 ... ab isme socho ki alphabets nahi hain, to ye treat to number jaisa hota. PAR ENV VARIBALE SARA KA SRA STRING ME HONA CHAHIYE


export default conf 