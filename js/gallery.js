var imgs = document.querySelectorAll('img');//Grabs the first instance of the image element which is the big image in the figure element.
var caption = document.querySelector("figcaption");//Grabs the figcaption element that goes with the big image
// \/ - I wasn't sure if I could do below so I adjusted some of the code to just work with selecting all the images. I just don't want to get in trouble for using it.
//var littleImg = document.querySelectorAll('li > img');//After doing some research into the querySelector, I learned that you can use css selectors. This allows grabbing exactly the image in the li elements.
var userObjs = [];//This variable is used to hold a bunch of objects. These objects are for each of the list items images.


/*
   This is an object constructor. This is used to create an object out of each small image in the list.
*/
function Image(smallImgUrl, description) {//When creating the object, call this function with filling the details of the image src and alt attributes
   this.smallImgUrl = smallImgUrl;//Sets the object variable of smallImgUrl to the small image src attribute passed into the function call
   this.description = description;//Sets the object variable of description to the small image alt attribute passed into the function call
 
   // These methods are used to grab the object variables and send them to wherever the function was called
   this.getLargeImage = function() {//Returns the color of the flower grabbed from the image file src attribute.
     return smallImgUrl.split("-")[1];//When recieving the smallImgUrl, it's formatted like this "flowers-color-small.jpg". So really all I want is the color part of the string, I achieve this by splitting the string
     //by "-" making it an array of ["flowers", "color", "small.jpg"]. all I want is the color so I return the second(1) element of the array.
   }
   this.getDescription = function(){//Returns the alt text of the img element stored as an object
      return description;
   }
 }

 function objectImageSetter(objId){//Sets the large image and figcaption text by grabbing info from an object that is specified by the number passed into the array.
   imgs[0].setAttribute("src", "images/flowers-"+userObjs[objId].getLargeImage()+"-large.jpg");
   caption.textContent=userObjs[objId].getDescription();
   styler(objId);
 }

 function styler(imgId){//Simple border styler that changes the border style of the border selected from solid to dotted and switching the non selected borders to solid so border don't stay dotted.
  imgId=imgId+1;
  for(let x =1; x<imgs.length; x++)
    imgs[x].style.borderStyle = "solid";
  
  imgs[imgId].style.borderStyle = "dotted";
 }

 for (let x = 1; x<imgs.length;x++){//Creates a object for each of the images elemnts in the list. Populating the object vars with the src and alt attribute contents of the image element.
   userObjs[x-1] = new Image(imgs[x].getAttribute('src'), imgs[x].getAttribute('alt'));
 }


 for (let x = 1; x<imgs.length;x++){//Adds an event listener to each of the small images that just say to run the objectImageSetter passing and objectId to specify what object to use for that button/image.
    imgs[x].addEventListener('click', function(event) {
      objectImageSetter(x-1);
    });
 }

