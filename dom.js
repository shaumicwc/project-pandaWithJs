// number 1

//  External js script added in index.html file



// number 2

const h2Elements = document.querySelectorAll('h2');

for (let i = 0; i < h2Elements.length; i++) {
  h2Elements[i].style.color = 'lightblue';
}


// number 3

const backpackColor = document.getElementById('backpack');
backpackColor.style.backgroundColor = 'tomato';

//number 4

const cardBorders = document.getElementsByClassName('card');
for (let i = 0; i < cardBorders.length; i++) {
  cardBorders[i].style.borderRadius = "30px";
}


// number 5


const button = document.getElementById("click-handler-btn");
function handleClick() {
  console.log("Button was clicked!");
}
button.addEventListener("click", handleClick);


// number 6

const buyNowBtn = document.getElementsByClassName('panda-btn-buy-now');
for (const item of buyNowBtn) {
  item.addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target);
  })
}


// number 7

document.getElementById('exampleInputEmail1').addEventListener('keyup', function (event) {
  const text = event.target.value;
  const submitButton = document.getElementById('stay-btn');
  if (text == 'email') {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', true);
  }
})


//extra section here//

// number 8-optional with some modification

const image = document.getElementById("first-shoe");

image.addEventListener("mouseover", function () {
  image.src = "./images/wall-bang.jpg";
});

image.addEventListener("mouseout", function () {
  image.src = "./images/shoes/shoe-1.png";
});

// number 8-optional main


// document.getElementById('first-shoe').addEventListener('mouseover', function(){
//     if(EventTarget = 'mouseout'){
//         this.src = './images/wall-bang.jpg';
//     }else if(EventTarget = 'mouseout'){
//         this.src = './images/categories/watch.png'
//     }
// })


// number 9-optional 

document.getElementById('footer-section-style').addEventListener('dblclick', function () {
  this.style.backgroundColor = 'goldenRod';
})


