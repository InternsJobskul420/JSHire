const multer = require('multer');

// Configure how the files are stored
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    // Where to store the file
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // Reject a file if it's not a jpg, png, or pdf
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'application/pdf'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB limit for file size
  },
  fileFilter: fileFilter
});

module.exports = upload;
