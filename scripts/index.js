let prompt;
let color;
let computer_colors = [];
let user_colors = [];
let current_color;
document.addEventListener("DOMContentLoaded", load);
// const red = document.getElementById('red');
// const green = document.getElementById('green');
// const blue = document.getElementById('blue');
// const yellow = document.getElementById('yellow');
let level;
let i;

function userInput(event){
    event.target.classList.add("select");
    // wait 0.1 sec
    setTimeout(() => {
        event.target.classList.remove("select");
        user_colors.push(event.target);
        if(computer_colors[i]==user_colors[i]){
            i++;
        }else{
            prompt.innerHTML = "You lose";
            for(let i = 0; i < color.length; i++){
                color[i].removeEventListener("click", userInput);
            }
            //Wait 3 sec and the wait for a keydown or click
            setTimeout(() => {
                prompt.innerHTML = "Click any key on keyboard to start again";
                for(let i = 0; i < color.length; i++){
                    color[i].addEventListener("click", start);
                }
                document.addEventListener('keydown', start);    
                clearTimeout()
            },3000);
        }
        if(i == level){ 
            setTimeout(() => {
                generate_computer_color();
            },200);
            level++;
            prompt.innerHTML = "Level: " + level;
            i = 0;
            user_colors = [];
        }
        clearTimeout();
    },100);
    
}

function generate_computer_color(){
    current_color = color[Math.floor(Math.random()*4)];
    current_color.classList.add('select');
    // keep the effect of the current_color for 1 sec
    setTimeout(() => {
        current_color.classList.remove("select");
        clearTimeout();
        computer_colors.push(current_color);
        console.log(computer_colors);
        i = 0;
    },1000);
    for(let i = 0; i < color.length; i++){
        color[i].addEventListener("click", userInput);
    }
}

function start(){
    document.removeEventListener('keydown', start);
    for(let i = 0; i < color.length; i++){
        color[i].removeEventListener("click", start);
    }
    i = 0;
    level = 1;
    document.getElementById('prompt').innerHTML = "Level: " + level;
    generate_computer_color();
    
}

function load(){
    document.addEventListener('keydown', start);
    color = [document.getElementById('red'), document.getElementById('green'),
            document.getElementById('blue'), document.getElementById('yellow')];
    prompt = document.getElementById('prompt');
    for(let i = 0; i < color.length; i++){
        color[i].addEventListener("click", start);
    }

}