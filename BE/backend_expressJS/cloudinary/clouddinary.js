const cloudinary = require('cloudinary').v2;
cloudinary.config({
    secure: true
  });


  const delteImage = async(imagesId)=>{
        // console.log(cloudinary.config());  
        for(let i=0; i<imagesId.length; i++){
          // console.log('call delete')
          await   cloudinary.uploader.destroy(
              `shop/${imagesId[i]}`,
              { invalidate: true, resource_type: "image" }).then(result => {})
                                                            .catch(error=>console.log(error))
        }
  }

module.exports={
    delteImage
}