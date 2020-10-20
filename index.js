const express = require('express')
const path = require('path')
const app = express()
const port = 469
var errorPlatform = "Android"
var errorCode = 0 //Unofficial standards: 462 for chroot, 464 for BSD Jail, 495 for Windows 95 PC, 498 for Windows 98 PC, 497 for Windows XP PC
//471 for dog cage, 470 for coffee cup, 469 for Android, 468 for iPhone, 467 for Mac, 466 for Windows PC, 465 for Linux PC.
//These will be auto-set.
var relImgPath = "image.png" //change this to your relative path for your image.

//END OF PROPERTIES
if (errorPlatform == "dog cage") {
    errorCode = 471
} else if (errorPlatform == "coffee cup") {
    errorCode = 470
} else if (errorPlatform == "Windows 95 PC") {
    errorCode = 495
} else if (errorPlatform == "Windows 98 PC") {
    errorCode = 498
} else if (errorPlatform == "chroot") {
    errorCode = 462
} else if (errorPlatform == "BSD Jail") {
    errorCode = 464
} else if (errorPlatform == "Android") {
    errorCode = 469
} else if (errorPlatform == "iPhone") {
    errorCode = 468
} else if (errorPlatform == "Mac") {
    errorCode = 467
} else if (errorPlatform == "Windows PC") {
    errorCode = 466
} else if (errorPlatform == "Linux PC") {
    errorCode = 465
} else if (errorPlatform == "Windows XP PC") {
    errorCode = 497
}

var imagePath = path.resolve(relImgPath)
var error469html = `<!DOCTYPE html>
<html>
<head><title>I'm a(n) ${errorPlatform}.</title></head>
<body><h1>Error ${errorCode}: I'm a(n) ${errorPlatform}</h1><p>You have tried to request a website from a(n) ${errorPlatform}, but got this error instead. :'(</p></body>
</html>`



app.get('/', (req, res) => {
  res.status(errorCode).send(error469html)
})

app.listen(port, () => {
  console.log(`Error 469 listening at http://localhost:${port}`)
})