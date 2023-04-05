const im = require('imagemagick');
const fs = require('fs');
const os = require('os');
const { v4: uuidv4 } = require('uuid');
const {promisify} = require('util');
const AWS = require('aws-sdk');

const resizeAsync = promisify(im.resize);
const readFileAsync = promisify(fs.readFile);
const unlinkAsync = promisify(fs.unlink);

AWS.config.update({ region: 'us-west-1' });
const s3 = new AWS.S3();

// console.log("Hello Serverless")

exports.handler = async (event) => {
    let filesProcessed = event.Records.map( async (record) => {
        let bucket = record.s3.bucket.name;
        let filename = record.s3.object.key;

        // Get file from S3
        var params = {
            Bucket: bucket,
            Key: filename
        };
        let inputData = await s3.getObject(params).promise();

        // Resize the file
        let tempFile = os.tmpdir() + '/' + uuidv4() + '.jpg';
        let resizeArgs = {
            srcData: inputData.Body,
            dstPath: tempFile,
            width: 150
        };
        await resizeAsync(resizeArgs);

        // Read the resized file
        let resizedData = await readFileAsync(tempFile);

        // Upload the new file to s3
        let targetFilename = filename.substring(0, filename.lastIndexOf('.')) + '-small.jpg';
        var params = {
            Bucket: bucket + '-dest',
            Key: targetFilename,
            Body: new Buffer.from(resizedData),
            ContentType: 'image/jpeg'
        };

        await s3.putObject(params).promise();
        return await unlinkAsync(tempFile);
    });

    await Promise.all(filesProcessed);
    console.log("done");
    return "done";
}