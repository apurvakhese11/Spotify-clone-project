console.log("WELCOME TO SPOTIFY");
let songIndex =0;
let audioElement = new Audio('song/1.mp3');
let masterplay=document.getElementById("masterplay");
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementById('songItems'));
let songs=[
    {songname:"Zindagi bate de", filePath:"song/1.mp3", coverPath:"cover/cover7.jpg"},
    {songname:"kar har maidan fateh", filePath:"song/2 .mp3", coverPath:"cover/cover7.jpg"},
    {songname:"khol de par", filePath:"song/3.mp3", coverPath:"cover/cover7.jpg"},
    {songname:"yaara", filePath:"song/4.mp3", coverPath:"cover/cover7.jpg"},
    {songname:"manjaabi", filePath:"song/5.mp3", coverPath:"cover/cover7.jpg"},
    
    
]
songItems.forEach(element => {
    console.log(element,1);
    element.getElementById("img")[0].src=songIndex.coverPathPath;
    element.getElementByClassName("songname")(0).innerText=song[i].songname;
});
masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement<=0){
        audioElement.play();
        masterplay.classList.remove("far fa-play fa-circle");
        masterplay.classList.add("far fa-pause fa-circle");
        gif.style.opacity=-0;
    }
    else{
        audioElement.play();
        masterplay.classList.remove("far fa-pasue fa-circle");
        masterplay.classList.add("far fa-play fa-circle");

    }
})
audioElement.addEventListener('timeupdate',()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>
    audioElement.currentTime=myProgressBar.value *audioElement.

)
