    // circle skill bars //////////////////////////////////////////////
    const circles = document.querySelectorAll('.circle');
    circles.forEach(elem=>{
        var dots = elem.getAttribute("data-dots");
        var marked = elem.getAttribute("data-precent");
        var precent = Math.floor(dots*marked/100);
        var points = "";
        var rotate= 360 / dots;
    
        for(let i = 0; i < dots ; i++){
            points +=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
        }
        elem.innerHTML=points;

        const pointsMarked = elem.querySelectorAll('.points');
        for(let i=0; i <precent; i++){
            pointsMarked[i].classList.add('marked')
        }
    })