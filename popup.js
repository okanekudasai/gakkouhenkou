
btn.addEventListener("click", function() {
    var answer = "";
    for (var s of ip.value) {
        if (s=='[') answer+='{';
        else if (s==']') answer+='}';
        else answer+=s;
    }
    var newWord = document.createElement("input");
    newWord.value = answer;
    
    box.appendChild(newWord);
    newWord.select();
    document.execCommand("Copy");
    newWord.setAttribute("style", "display: none");
    state.innerText = "복사되었음";
})