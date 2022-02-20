let fullImgBox = document.getElementById ("fullImgBox")
let fullImg = document.getElementById ("fullImg")

function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}

// load more logic

let loadMoreBtn = document.querySelector('#load-more')
let currentItem = 1

loadMoreBtn.onclick = () =>{
  let boxes = [...document.querySelectorAll('.box')];
  for (var i = currentItem; i < currentItem + 1; i++){
    boxes[i].style.display = 'inline-block';
  }
  currentItem += 1;
}



//tbl like
const like = document.getElementById("tLike")
  tLike.src2 = color;

function Like(color){
    if(this.onclick=true)
    return like.style.color = 'red'
}



