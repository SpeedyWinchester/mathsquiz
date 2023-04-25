var play1name=localStorage.getItem("name1")
var lowercase=""
var play2name=localStorage.getItem("name2")
var player1score=0
var player2score=0
var correctans=0
document.getElementById("player1sc").innerHTML=player1score
document.getElementById("player2sc").innerHTML=player2score
document.getElementById("player1n").innerHTML=play1name+":"
document.getElementById("player2n").innerHTML=play2name+":"
document.getElementById("qturn").innerHTML="Question turn-"+play1name
document.getElementById("aturn").innerHTML="Answer turn-"+play2name
function sending(){
    getnumber1=document.getElementById("number1").value
    getnumber2=document.getElementById("number2").value
    correctans=getnumber1*getnumber2
    Question="<h4>"+"Q."+getnumber1+"x"+getnumber2+"</h4>"
    input="<br>"+"answer:"+"<input id='answer' type='text'>"
    button="<br><br>"+"<button onclick='checkans()'class='btn btn-info'>check</button>"
    row=Question+input+button
    document.getElementById("output").innerHTML=row
    document.getElementById("number1").value=""
    document.getElementById("number2").value=""

}
var questionturn="player1"
var answerturn="player2"
function checkans(){
    getans=document.getElementById("answer").value
    if (getans==correctans) {
        if (answerturn=="player2") {
            player2score=player2score+1
           
document.getElementById("player2sc").innerHTML=player2score
        }
       else{
        player1score=player1score+1
        document.getElementById("player1sc").innerHTML=player1score
       }
            
        }
        if (questionturn=="player1") {
            questionturn="player2"
            document.getElementById("qturn").innerHTML="question turn:"+play2name
        }
        else{
            questionturn="player1"
            document.getElementById("qturn").innerHTML="question turn:"+play1name
        }
        if (answerturn=="player2") {
            answerturn="player1"
            document.getElementById("aturn").innerHTML="answerturn:"+play1name
        }
        else{
            answerturn="player2"
            document.getElementById("aturn").innerHTML="answerturn:"+play2name
        }
        document.getElementById("answer.").value=""
       }