// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const ncrip = require("ncrip")
import dbConnect from "../../lib/DbConnection";
import user from "../../models/user";
import nextConnect from 'next-connect';
import multer from 'multer';

const upload = multer({
  storage: multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});






export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};

// pages/api/hello.js
import nc from "next-connect";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
})
  .use(upload.array('file'))
  .get((req, res) => {
    
    res.send("Hello world");
  })
  .post((req, res) => {
    console.log(req.file)
    res.json({ hello: "world" });
  })
  .put(async (req, res) => {
    res.end("async/await is also supported!");
  })
  .patch(async (req, res) => {
    throw new Error("Throws me around! Error can be caught and handled.");
  });

export default handler;