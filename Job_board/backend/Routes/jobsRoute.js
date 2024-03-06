const express = require("express")
const router = express.Router()
const controllers = require("../Controllers/jobController")
const { isloggedIn, isAdmin } = require("../Controllers/authController")
const multer = require("multer")
const fs = require("fs")

const dir = "/tmp";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const resumes = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, dir);
    },

    filename: function (req, file, cb) {
      const originalname = file.originalname;
      const uniqueSuffix = Date.now();
      const fileName = `${uniqueSuffix}_${originalname}`;
      cb(null, fileName);
    },
});

const upload = multer({ storage: resumes, limits: {
  fileSize: 1024 * 1024 * 4, // 4 MB limit
}, })

router.route('/jobs').get(controllers.getJobs);

router.route('/job/:id').get(controllers.getJob);

router.route('/create').post(isloggedIn, isAdmin, controllers.createJob);

router.route('/delete/:id').get(isloggedIn, isAdmin, controllers.deleteJob);

router.route('/user/resume/upload').post(isloggedIn, upload.single("resume"), controllers.resumeUpload);

router.route('/user/apply').post(isloggedIn, controllers.jobApplication);

module.exports = router