function showPage(pageId) {
    
    document.querySelectorAll('.page').forEach(div => div.style.display = 'none');
   
    document.getElementById(pageId).style.display = 'block';
}
let k=1;
function func(){

const alphabet=document.getElementById(alpha);
let d=arr[k];

let str=document.querySelector(`.q-${k}`).innerHTML.toString();
console.log(str[1]);


for(i=0;i<str.length;i++){
    if(str[i]=="_" ){
        
        str = str.replace("_", alphabet.innerHTML);
        if(d[i]==str[i]){
            
            document.querySelector(`.q-${k}`).innerHTML=str;
            document.querySelector(`.symbol-${k}`).innerHTML="✅"

           
      if(d==str){
    document.querySelector(`.levels-${k}`).innerHTML="You Win!❤️"
    document.querySelector(`.levels-${k}`).style.color="green"
    
    k++;
    console.log(k)
     }

        break
        ;}
        else{
            str = str.replace( str[i],"_");
            document.querySelector(`.symbol-${k}`).innerHTML="❌"
            
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
        "RONALDO",
    ]


