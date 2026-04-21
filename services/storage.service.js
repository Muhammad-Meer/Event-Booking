const ImageKit = require('@imagekit/nodejs');



const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_ENDPOINT
});

async function uploadFile(file, fileName) {
  try {
    const result = await imagekit.upload({
      file: file,       // buffer
      fileName: fileName
    });

    return result;

  } catch (error) {
    console.error(error);
    throw new Error("File upload failed");
  }
}

module.exports = {
  uploadFile
};