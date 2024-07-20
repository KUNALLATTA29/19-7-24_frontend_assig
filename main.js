function zoom(){
    let a = document.getElementById("input").value;
    document.getElementById("container").style.backgroundColor = `${a}`;
}

function handle(){
    let b = document.getElementById("ran").value
    let a = document.getElementById("text")
    a.style.fontSize = `${b}px`;
}