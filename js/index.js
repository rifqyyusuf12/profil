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
function Like(color){
    if(this.onclick=true)
    return like.style.color = 'red'
}

//tbl follow
let follow = document.getElementById("tFollow")
function onFollow(){
  if(onclick=true)
  return follow.textContent = 'unfollow',
   alert(`Anda yakin mengikuti ?`)

}

//tbl edit

let edit = document.getElementById("tEdit")
let fullEdit = document.getElementById("fullEditBox")
console.log(fullEdit)
function onEdit() {
  if(onclick=true)
  return fullEdit.style.display = "block"

}