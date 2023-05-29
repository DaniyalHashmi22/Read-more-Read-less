function readMore() {
    var pbtn = document.getElementById('none');
    var inp = document.getElementById("inp").value
    var text = document.getElementById("text")
    var kap =inp.trim().split(' ')
    var num = kap.slice(0 , 5)
    text.innerHTML = num.join(' ');
    pbtn.style.display='block'
}

var pbtn = document.getElementById('none');

pbtn.onclick = function(e){
    var inp = document.getElementById("inp").value
    var text = document.getElementById("text")
    if(pbtn.classList.contains('content')){
    pbtn.classList.remove('content')
        pbtn.innerHTML ='ReadLess'
        text.innerHTML = inp;
    }else{
        var kap =inp.trim().split(' ')
        var num = kap.slice(0 , 5)
        text.innerHTML = num.join(' ');
        pbtn.classList.add('content')
    }
}