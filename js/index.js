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
function onLove(on) {
  on.target.style.color = "red"
}

function offLove(off) {
  off.target.style.color = "black"
}

let like = document.getElementById("tLike")

like.addEventListener("click", onLove)
if (onLove == true) {
  like.addEventListener("click", onLove)
}
else if (onLove == true) {
  like.addEventListener("click", offLove)
}
// udah coba ganti getelementsbyclass ga kepanggil addeventlistener ga bisa baca  function, dan  belum bisa berfungsi on off

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
function onEdit() {
  if(onclick=true)
  return fullEdit.style.display = "block"

}