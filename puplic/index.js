
//getnumber

function display (num){
  var result = document.getElementById("input");
  result.value += num;
  console.log (num)
}
 //getresult

 function result(){
  var result = document.getElementById("input");
  result.value = eval(result.value)
  console.log (result.value)

 }
 
   // clear result

    function clearresult(){
      var result = document.getElementById("input");
      result.value = '';
      console.log (' ');
    }

    //del result

    function del(){
      var result = document.getElementById("input");
      result.value=result.value.slice(0,-1)
      

    }
