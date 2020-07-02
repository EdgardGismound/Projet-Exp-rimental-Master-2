function generate(type, videopres){
    var content = ""
    for(i=0; i<10; i++){
    if(type=="video"){
        content=content+"<div class='case'><video src="+i+".mp4 width=100% height=100% controls loop></div>"
    } if(type=="photo"){
        content=content+"<div class='case'><img src="+i+".jpg width=100% height=100%></div>"
    }
    }
    console.log(content);
    if(videopres=="novideopres"){videotop.innerHTML= ""}
    else{videotop.innerHTML = "<video src="+videoPres+" type='video/mp4' controls autoplay></video>"}
    grid.innerHTML = content
}