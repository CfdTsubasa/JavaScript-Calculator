let result = 0;
let process = 0;

$(".symbol").prop("disabled",true);

function input(value){
  if($(".equation").text() == "0"){
    if(value == "."){
      value = "0."
    }
    process = value;
  }else{
    process += value;
  }
  $(".equation").text(process);

  if(isNaN(value)){
    $(".symbol").prop("disabled",true);
  }else{
    $(".symbol").prop("disabled",false);
  }
}

function allClear(){
  $(".equation").text("0");
  process = 0;
  result = 0;
  $(".symbol,.double-zero").prop("disabled",true);
}

function calc(){
  result = eval(process)
  $(".equation").text(result);
  process = result;
}