document.addEventListener("DOMContentLoaded",()=>{
  const categories = ["<i class='fa-solid fa-compass'></i>","All","Music","Mixes","Data Science","APIs","Coke Studio","Indian popbmusic", "System Design", "Jukebox","Comentary","Webpages","Playlists","Live","Chill-Out music","Dramedy","Ghazal","Rapping","Recently Uploaded"," New to you"];

const catSelect = document.querySelector('.category-selection')


categories.forEach(category =>{
  const cat = document.createElement('div')
  cat.classList.add('category')
  cat.innerHTML=`<p>${category}</p>`
  catSelect.appendChild(cat)
})

const vids=["https://i.ytimg.com/vi_webp/A5tomOP8yVw/hqdefault.webp",
"https://i.ytimg.com/vi_webp/-2RAq5o5pwc/hqdefault.webp",
"https://i.ytimg.com/vi_webp/rCKbR90QiFQ/hqdefault.webp",
"https://i.ytimg.com/vi_webp/HTeP7ja9UFY/hqdefault.webp",
"https://i.ytimg.com/vi_webp/UvwmBQBTWBY/hqdefault.webp",
"https://i.ytimg.com/vi_webp/u9BQhXf4yQc/hqdefault.webp",
"https://i.ytimg.com/vi_webp/_XBVWlI8TsQ/hqdefault.webp",
"https://i.ytimg.com/vi_webp/UvwmBQBTWBY/hqdefault.webp",
"https://i.ytimg.com/vi/MhXCj8E9CZU/hqdefault.jpg",
"https://i.ytimg.com/vi/RLzC55ai0eo/hqdefault.jpg",
"https://i.ytimg.com/vi_webp/u9BQhXf4yQc/hqdefault.webp",
"https://i.ytimg.com/vi_webp/_XBVWlI8TsQ/hqdefault.webp",
"https://i.ytimg.com/vi_webp/u9BQhXf4yQc/hqdefault.webp",
"https://i.ytimg.com/vi/MhXCj8E9CZU/hqdefault.jpg",
"https://i.ytimg.com/vi/RLzC55ai0eo/hqdefault.jpg",
"https://i.ytimg.com/vi_webp/a3Ue-LN5B9U/hqdefault.webp"]


const videos=document.querySelector(".videos")

vids.forEach(vid=>{
  const videoCard = document.createElement("div")
  videoCard.classList.add('video-card')
  videoCard.innerHTML=`
  <img src=${vid} alt="">

            <div class="desc">
                <div class="details">
                    <img src="./Images/download.png" alt="">
                    <div class="video-desc">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        <span class="video-creator" style="color: grey;">
                            LearnWithKhan <span>&#183;</span> 1 year ago <span>&#183;</span> 222k views
                        </span>
                    </div>
                </div>
                <div class="menu"><i class="fa-solid fa-ellipsis-vertical"></i></div>
            </div>
  
  `
  videos.appendChild(videoCard)
})
function Meme(){
  window.location.href='meme.index.html'
}
let catMeme= document.querySelectorAll(".category")
catMeme.forEach(element => {
  element.addEventListener('click',Meme);
});
let viMeme = document.querySelectorAll(".video-card")
viMeme.forEach(element => {
  element.addEventListener('click',Meme);
});
})