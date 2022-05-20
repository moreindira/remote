let images=["./images/1.png",
             "./images/2.png",
             "./images/3.png",
              "./images/4.png",
               "./images/5.png",
               "./images/6.png"];

function rolling()
{
    const img=document.getElementById("img1");
    let randomnumber=Math.floor(Math.random()*6)+1;
    
    let index=randomnumber-1;
    
    img.setAttribute("src",images[index]);
    div1.onclick=animation;

}
function animation()
{
    const img=document.getElementById("img1");
    
    img.src='./images/dice-roll.gif';
   

    div1=document.getElementById('dice');
    console.log(div1);
    div1.onclick=rolling;


}