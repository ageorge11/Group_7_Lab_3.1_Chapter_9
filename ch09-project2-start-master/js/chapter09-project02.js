window.addEventListener("load", function () {
    
    document.getElementById('thumbnails').onclick = function(event)
    {
        let tgt = event.target;
        if(tgt.tagName == 'IMG')
        {
            let t = tgt.title;
            let s= tgt.src.split(/(\\|\/)/g).pop();
            let a= tgt  .alt;
            
            document.querySelector('#featured > img').src='images/medium/'+s;
            document.querySelector('#featured > img').title=t;
            document.querySelector('#featured > figcaption').innerHTML = a;
           
          
        }
    }

    var f = document.getElementById("featured");
    
    f.addEventListener("onmouseover", function (event) {

        var caption = f.getElementsByTagName("figcaption");
        caption.style.opacity='80%';
        caption.style.transition = 'opacity 1s';
        
    });

    f.addEventListener("onmouseout", function( event ) {
       
        var caption =f.getElementsByTagName("figcaption");
       caption.style.opacity='0%';
       caption.style.transition = 'opacity 1s';
       
   });
});