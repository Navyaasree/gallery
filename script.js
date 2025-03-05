// let imageGallery= document.getElementsByClassName("imageGallery");
var enlarge = document.getElementById("imgbox");
var opened = document.getElementById("opened");


function openimg(pic) {
enlarge.style.display ="flex";
opened.src = pic;

}

function closeimg() {
    enlarge.style.display ="none";
}