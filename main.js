function add_user(){
    math_player1 =  document.getElementById("math_player1_name_input").value;
    math_player2 =  document.getElementById("math_player2_name_input").value;
    
    localStorage.setItem("math_player1", math_player1);
    localStorage.setItem("math_player2", math_player2);
    
    }
    
function next_page(){
    window.location("index2.html");
}    