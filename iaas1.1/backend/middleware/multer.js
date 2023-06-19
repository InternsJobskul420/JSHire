const multer = require('multer');
const path = require('path')
const fs = require('fs')


const uploadDirectory = path.join(__dirname,'..', 'uploads');

console.log(uploadDirectory);

if(!fs.existsSync(uploadDirectory)){
    fs.mkdirSync(uploadDirectory)
}

// // Configure how the files are stored
// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     // Where to store the file
//     cb(null, 'E:/Internship2023/JobskulHire/JSHire/iaas1.1/backend/uploads');
//   },
//   filename: function(req, file, cb) {
//     const fileExtension = path.extname(file.originalname);
//     cb(null, new Date().toISOString() + file.originalname + fileExtension);
//   }
// });

// const fileFilter = (req, file, cb) => {
//   // Reject a file if it's not a jpg, png, or pdf
//   if (
//     file.mimetype === 'image/jpeg' ||
//     file.mimetype === 'image/png' ||
//     file.mimetype === 'application/pdf'
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const upload = multer({
//   storage: storage,
// //   limits: {
// //     fileSize: 1024 * 1024 * 5, // 5MB limit for file size
// //   },
//   fileFilter: fileFilter
// });


const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,'uploads')
    },
    filename: function(req,file,cb){
        const fileExtension = path.extname(file.originalname);
        cb(null, file.originalname);
    },
});

const fileFilter = (req, file,cb)=>{
    const allowedFileTypes = ["image/jpeg", "image/jpg","image/png", "application/pdf"]
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null,true)
    }
    else{
        cb(null,false)
    }
}


const uploadMiddleware = multer({storage, fileFilter});
// const uploadMiddleware = multer({
//     storage: multer.diskStorage({
//         destination: function(req,file,cb){
//             cb(null,"uploads")
//         },
//         filename:function(req,file,cb){
//             cb(null,file.filename)
//         }
//     })
// })



module.exports = uploadMiddleware;
