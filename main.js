var next_image = [
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sad-love-quotes-1576706196.jpg?crop=0.669xw:1.00xh;0.257xw,0&resize=640:*",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKi4eDIi4wiNW5yhw-710Z36eUCQ0pEItRA&usqp=CAU",
        "https://www.freedigitalphotos.net/images/img/homepage/394230.jpg",
        "https://www.gizbot.com/images/2020-09/realme-7_159921061900.jpg",
        "https://www.istockphoto.com/resources/images/HomePage/FourPack/Illustrations-907872186.jpg"
    ];
var next_images_for_image_2 = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92eisuWOx3tEjeW14mT9ACVgXDwIRBGtnww&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyP2vktrvo9rlhz4jQDnSsI-D-WL92iX36Ig&usqp=CAU",
        "https://bsmedia.business-standard.com/_media/bs/img/article/2020-07/28/full/1595904030-4016.jpg",
        "https://images-na.ssl-images-amazon.com/images/I/81SVOMzaHWL._SL1280_.jpg",
        "https://www.setaswall.com/wp-content/uploads/2017/03/Nature-Spring-Flowers-Landscapes-Wallpaper-2880x1800.jpg"
    ];
var u = 0;

function next_slide() {
    if (u >= 5) {
        u = 0;
    }
    document.getElementById("Image_1").src = next_image[u];
    document.getElementById("image_2").src = next_images_for_image_2[u];
    u++;
}
