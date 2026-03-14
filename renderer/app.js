console.log(window.api);

document.getElementById("btn").onclick = () => {
    alert(window.api.hello());
    // alert("Hello world");
};

document.getElementById("insertBtn").onclick = () => {
    const id = window.api.addUser("Akshay");
    alert("Added user: " + id);
}