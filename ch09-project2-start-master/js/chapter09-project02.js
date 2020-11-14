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
});