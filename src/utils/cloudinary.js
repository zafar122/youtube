import {v2 as cloudinary} from "cloudinary"
import fs from "fs"



cloudinary.config({ 
  cloud_name: process.env.CLOUINARY_CLOUD_NAME,
  api_key: process.env.CLOUINARY_API_KEY,
  api_secret: process.env.CLOUINARY_API_SECRET,
});

const UploadOnCloudinary = async (localFilePath)=>{
  try {
    if (!localFilePath) {
      //upload the file cloudinary
     const response= await cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
      })
      //file uploaded successfull
      console.log("file uploaded successfull in cloudinary",response.url);
      return response
    }
  } catch (error) {
    fs.unlinkSync(localFilePath)//remove the locally saved temporary file as the upload operation got failed
    return null;
  }
}

export {UploadOnCloudinary}