var inp_text = document.getElementById('input_text');
var history_text = document.getElementById('out_text');
var out_result = document.getElementById('output_result');
var arr = new Array();
var arr_for_result = new Array();
var for_history = new Array();
var all_history = new Array();

function onButtonClick(e){
    var elem_by_id = document.getElementById(e).value;
   
    if(elem_by_id == '0' || elem_by_id == '1' || elem_by_id == '2' || elem_by_id == '3' || elem_by_id == '4' || elem_by_id == '5' || elem_by_id == '6' || elem_by_id == '7' || elem_by_id == '8' || elem_by_id == '9'|| elem_by_id == '.'){
        if(inp_text.value == '0'){     
            inp_text.value = elem_by_id;
            arr.push(elem_by_id);
        }
        else{
            inp_text.value += elem_by_id;
            arr.push(elem_by_id);
        }
    }
    
    else if(elem_by_id == '+' || elem_by_id == '-' || elem_by_id == '*' || elem_by_id == '/'){
        if(inp_text.value == '0'){
            if(elem_by_id == '+' || elem_by_id == '-' || elem_by_id == '*' || elem_by_id == '/'){
                arr_for_result.pop();
                var k = arr.join('') + elem_by_id;
                arr_for_result.push(k);
                history_text.innerHTML = arr_for_result.join('');
            }        
        }
        else{
            arr_for_result.push(arr.join(''));
            arr_for_result.push(elem_by_id);
            history_text.innerHTML = arr_for_result.join('');
            arr.length=0;

            inp_text.value='0';
        }    
    }

    else if(elem_by_id == '='){
        if(inp_text.value != '0'){
            arr_for_result.push(arr.join(''));
            history_text.innerHTML = arr_for_result.join('');
            inp_text.value='0';
            var result = eval(history_text.innerHTML);
            result=parseFloat(result.toFixed(4));
        }
        else if(isNaN(arr_for_result[arr_for_result.length-1])){
            arr_for_result.pop();
            var a = arr_for_result.join('');
            var result = eval(a);
            result=parseFloat(result.toFixed(4));
        }
        for_history.push(arr_for_result.join(''));
        for_history.push('=');
        for_history.push(result);
        out_result.innerHTML = result;
        arr.length=0;
        arr_for_result.length=0;
    }

    else if(elem_by_id == 'clearl'){
        if(inp_text.value != '0'){
            inp_text.value = inp_text.value.slice(0, - 1 );
            arr.pop();
        }
    }

    else if(elem_by_id == 'tan' || elem_by_id == 'sin' || elem_by_id == 'cos'){
        var number = parseFloat(arr.join(''));
        var result;
        if(elem_by_id == 'tan'){
            result= Math.tan(number * Math.PI/180);
        }
        else if(elem_by_id == 'sin'){
            result= Math.sin(number * Math.PI/180);
        }
        else if(elem_by_id == 'cos'){
            result= Math.cos(number * Math.PI/180);
        }
        result = parseFloat(result.toFixed(4));
        history_text.innerHTML = elem_by_id + "(" + number + ")";
        out_result.innerHTML = result;
        for_history.push(history_text.innerHTML);
        for_history.push('=');
        for_history.push(result);
        inp_text.value='0';
        arr.length=0;
    }

    else if(elem_by_id == 'sqrt'){
        var number = parseFloat(arr.join(''));
        var result = Math.sqrt(number);
        result = parseFloat(result.toFixed(4));
        history_text.innerHTML = history_text.style.content = '&radic;' + number ;
        out_result.innerHTML = result;
        for_history.push(history_text.innerHTML);
        for_history.push('=');
        for_history.push(result);
        alert(for_history.join(''));
        inp_text.value='0';
        arr.length=0;
    }
    else if(elem_by_id == 'C'){
        all_history.push(for_history.join(''));
        all_history.push("<hr id='hr_for_hist'/>")
        for_history.length=0;
        history_text.innerHTML=all_history.join('');
        inp_text.value='0';
        out_result.innerHTML="";
    }
    else if(elem_by_id == 'reset'){
        all_history.length=0;
        inp_text.value='0';
        out_result.innerHTML="";
        history_text.innerHTML="";
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
            main_cl.style.height = '250px';
        }
    }
}
