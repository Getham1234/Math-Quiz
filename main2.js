player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
question_turn = "player_1"
answer_turn =  "player_2"
document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Questoin Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send(){
    num_1 = document.getElementById("num_1").value;
    num_2 = document.getElementById("num_2").value;
    equasion = num_1 + " x " + num_2;
    question = "<h4 id='equasion_diplay'>Q. " + equasion + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    row = question + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num_1").value = "";
    document.getElementById("num_2").value = "";

    document.getElementById("num_inputs").innerHTML = ""
}
function check(){
    answer = num_1*num_2
    console.log("The answer is " + answer);
    player_answer = document.getElementById("input_check_box").value;

    if (player_answer==answer){
        if(answer_turn=="player_1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn=="player_1"){
        question_turn = "player_2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else{
        question_turn = "player_1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }
    if(answer_turn=="player_1"){
        answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else{
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";

    word_input = "<input type='text' id='num_1' class='form-control' placeholder='Enter Number'>";
    word_input2 = "<input type='text' id='num_2' class='form-control' placeholder='Enter Number'>";
    button = "<button onclick='send()' class='btn btn-success'>Send</button>";
    input = word_input + word_input2 + button;
    document.getElementById("num_inputs").innerHTML = input;
}