var inp_text = document.getElementById('input_text');
var history_text = document.getElementById('out_text');

function onButtonClick(e){
    var elem_by_id = document.getElementById(e).innerHTML;
    var arr = new Array();

    if(inp_text.value == '0'){
        inp_text.value = elem_by_id;
        arr.push(elem_by_id);
        alert(arr.join());   
    }
    else if(elem_by_id == "+"){
        alert(arr.length);
    }
    
    else{
        inp_text.value += elem_by_id;
        arr.push(elem_by_id);     
    }
}

document.getElementById("more").onclick = function() {
    var six_r=document.getElementsByClassName("six_row");
    var main_cl=document.getElementById("main");
    for (var i=0; i < six_r.length; i++){
        if(six_r[i].style.display == 'none'){
            six_r[i].style.display = 'block';
                main_cl.style.height= '290px';
        }
        else{
            six_r[i].style.display = 'none';
            main_cl.style.height= '250px';
        }
    }
}
