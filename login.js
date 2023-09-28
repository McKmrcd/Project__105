function login() {
    player_name = document.getElementById("player_name").Value;
    localStorage.setItem("player_name", player_name);

    window.location = "gamepage.html";
}