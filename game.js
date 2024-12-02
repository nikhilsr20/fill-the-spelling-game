function showPage(pageId) {
    
    document.querySelectorAll('.page').forEach(div => div.style.display = 'none');
   
    document.getElementById(pageId).style.display = 'block';
}

function func(){

const alphabet=document.getElementById(alpha);


let k=document.querySelector(".array").innerHTML;
let d=arr[k];
console.log(d);
console.log(k);
let str=document.querySelector(".q-1").innerHTML.toString();
console.log(str[1]);


for(i=0;i<str.length;i++){
    if(str[i]=="_" ){
        
        str = str.replace("_", alphabet.innerHTML);
        if(d[i]==str[i]){
            
            document.querySelector(".q-1").innerHTML=str;
            document.querySelector(".symbol").innerHTML="✅"

           
      if(d==str){
    document.querySelector(".levels").innerHTML="You Win!"
    document.querySelector(".levels").style.color="green"
    document.querySelector(".levels").stylr.font="bolder"
     }

        break
        ;}
        else{
            str = str.replace( str[i],"_");
            document.querySelector(".symbol").innerHTML="❌"
            
        }
    }
  

    
}


}

    const arr=["hello",
        "SLEEP",
        "PARROT",
        "TIGER",
        "CARROT",
        "CASTLE",
        "ICECREAM",
        "DREAM",
        "ZEBRA",
        "WASHINGTON",
        "RONALDO"
    ]


