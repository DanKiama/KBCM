const images = [
    {
        "photo": {
            "file": {
                "url": "//images.ctfassets.net/i6lqydrpe4hk/6y0psij2o02YIwGScEo4kS/2de9854808fdf2365c41a2746fd6c899/photo-1421986527537-888d998adb74.jpeg",
                "details": {
                    "image": {
                        "height": 1673,
                        "width": 2509
                    }
                }
            }
        }
    },
]

let newImageData = [];
images.forEach((image) => {
    let imageData = [];
    imageData = {
        url: image.photo.file.url,
        height: image.photo.file.details.image.height,
        width: image.photo.file.details.image.width,
    }
    newImageData.push(imageData);
})
console.log(newImageData);


