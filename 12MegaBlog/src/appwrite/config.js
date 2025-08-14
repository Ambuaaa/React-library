import {conf} from '../conf/conf'

import {Client, ID, Databases, Storage, Query} from "appwrite" ;

export class Service{
  client = new Client()
  databases;
  bucket ; // storage

  constructor(){
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProject_Id)
    this.databases = new Databases(this.client) ;
    this.bucket = new Storage(this.client) ;
  }
//--------create Post-----------
  async createPost({title, slug, content, featuredImage, status, userId }){
    try {
      return await this.databases.createDocument( // check the documentation 
        conf.appwriteDatabase_Id,
        conf.appwriteCollection_Id,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      )
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error); 
      
    }
  }
// -------update Post----------
  async updatePost(slug, {title, content, featuredImage, status}){  // slug is basically database Id here , hence we are using slug only to decide which document we are going to update.
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabase_Id,
        conf.appwriteCollection_Id,
        slug,
        { // bhai ye sab update kar sakte ho 
          title,
          content,
          featuredImage,
          status,
        }
      )
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }
  }

// ------ delete Post--------
async deletePost(slug){ // because it just need documentID
  try {
    await this.databases.deleteDocument(
      conf.appwriteDatabase_Id,
      conf.appwriteCollection_Id,
      slug,
    )
    return true;
  } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    return false ; 
  }
}

// -----get a particular post--------
async getPost(slug){
  try {
    return await this.databases.getDocument(
      conf.appwriteDatabase_Id,
      conf.appwriteCollection_Id,
      slug,
    )
  } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
      return false;
  }

}
//---- get all post ---------
// we here need only those values whose status is Active (aur tabhi to indexes me status lagaya tha(jo key tha) ) - indexes hai tab hi query bana sakte
async getPosts(queries = [Query.equal("status", "active")]){ // no argument becuase we are taking all the posts
  try {
    return await this.databases.listDocuments(
      conf.appwriteDatabase_Id,
      conf.appwriteCollection_Id,
      queries,
    )
  } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
      return false;
  }
}
//------------------------------


// -------file upload service-------
async uploadFile(file){
try {
  return await this.bucket.createFile(
    conf.appwriteBucket_Id,
    ID.unique(), // file id
    file
  )
} catch (error) {
    console.log("Appwrite service :: getCurrentUser :: error", error);
    return false ;
}
}
//--------delete File ------------
async deleteFile(fileID){
  try {
    await this.bucket.deleteFile(
      conf.appwriteBucket_Id,
      fileID
    )
    return true ; 
  } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
      return false ;
  }
}
//-----get preview of the file -------------
getFilePreview(fileID){ // async me bhi daal sakte hain . bas aisehi fast hai to direct likh rahe 
  return this.bucket.getFilePreview(
    conf.appwriteBucket_Id,
    fileID,
  )
}
}

const service = new Service()

export default service // not Service because it won't be useful - taaki bana banaya object hin hum de dein 