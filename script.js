var inp_text = document.getElementById('input_text');
var history_text = document.getElementById('out_text');

function onButtonClick(e){
    var elem_by_id = document.getElementById(e).innerHTML;
    let arr=new Array();

    if(inp_text.value === '0'){
        inp_text.value = elem_by_id;
        arr.push(elem_by_id);
    }
    else{
        inp_text.value += elem_by_id;
        arr.push(elem_by_id);
        
    }

}
