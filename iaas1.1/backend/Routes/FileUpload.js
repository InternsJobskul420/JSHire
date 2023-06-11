const upload = require('../middleware/multer');
const express = require('express')
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Candidates = require('../models/Candidates')

router.post('/UploadCv', upload.fields([{ name: 'cv' }, { name: 'profilePic' }]), async (req, res) => {
    try {
      const { company, jobRole, link, name, email, collegeName } = req.body;
      const { cv, profilePic } = req.files;
  
      const candidate = {
        name,
        email,
        collegeName,
        cv: cv ? cv[0].path : null,
        profilePic: profilePic ? profilePic[0].path : null
      };
  
      const candidateData = await Candidates.findOneAndUpdate(
        { company, 'openings.jobRole': jobRole, 'openings.link': link },
        { $push: { 'openings.$.candidates': candidate } },
        { new: true }
      );
  
      if (candidateData) {
        res.status(200).json({ success: true, message: 'File uploaded successfully' });
      } else {
        res.status(404).json({ success: false, error: 'Opening not found' });
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).json({ success: false, error: 'Failed to upload file' });
    }
  });
  