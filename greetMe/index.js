export const handler = async(event) => {
    // TODO implement

    let message = "Hello world!";
    let data = event.data;
    let newImage = await resizeImage();


    // const response = {
    //     statusCode : 200,
    //     body: JSON.stringify(message)
    // }

    return newImage
};

const resizeImage = (data) => new Promise((resolve, reject) => {
    // TODO implement
    
    if (error) {
        reject(error);
    } else {
        resolve(result);
    }
})