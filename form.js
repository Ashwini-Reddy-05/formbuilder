function addField(type) {
    const label = prompt("Enter Field Label:");
    if (!label) return;
    
    const div = document.createElement("div");
    div.className = "form-group";
    
    let input;
    if (type === "textarea") {
        input = document.createElement("textarea");
    } else {
        input = document.createElement("input");
        input.type = type;
    }
    
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => div.remove();
    
    div.innerHTML = `<label>${label}</label>`;
    div.appendChild(input);
    div.appendChild(deleteBtn);
    
    document.getElementById("formArea").appendChild(div);
}
