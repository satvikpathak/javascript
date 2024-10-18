let btn = document.querySelectorAll(".box");
let r = document.querySelector(".rbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO=  true;

let winp = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

btn.forEach((box)=>{
    box.addEventListener("click", () =>{
        if(box.innerText===""){
            if(turnO){
                box.innerText="O";
                turnO=false;
            }
            else{
                box.innerText="X";
                turnO=true;
            }
        }

        checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of winp){
        let posn1val = btn[pattern[0]].innerText;
        let posn2val = btn[pattern[1]].innerText;
        let posn3val = btn[pattern[2]].innerText;

        if(posn1val!="" && posn2val!="" && posn3val!=""){
            if(posn1val===posn2val && posn2val===posn3val){
                console.log("winner",posn1val);
                showWinner(posn1val);
            }
        }
    }
}

const disableButton = () => {
    for(let box of btn){
        box.disabled = true;
    }
}

const enableButton = () => {
    for(let box of btn){
        box.disabled = false;
    }
}

const showWinner = (winner) =>{
    disableButton();
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}


r.onclick = ()=>{
    btn.forEach((box) => {
        box.innerText="";
        msgContainer.classList.add("hide");
        enableButton();
    });
};