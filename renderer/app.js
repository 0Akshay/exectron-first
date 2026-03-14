document.getElementById("btn").onclick = () => {
    alert(window.api.hello());
};

document.getElementById("insertBtn").onclick = () => {
    const id = window.api.addUser("Akshay");
    alert("Added user: " + id);
}