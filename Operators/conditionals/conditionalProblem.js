var room = "billiards";
var suspect = "Mr Parkes";
var weapon = "";
var solved = false;


if (room === "billiards"){

    weapon = 'poison';
    if(suspet === "Mr. Kalehoff")
    solved = true;
}
else if (room === "galerry"){
    weapon = 'trophy';
    if(suspect === "Mr. Van Cleve")
    solved = true;

}
else if (room === "dining room"){
    weapon = 'knife';
    if(suspect === "Mr. Parkes")
    solved = true;
}
if(solved){
    console.log(suspect + "did it in" +room+ "with" +weapon+"!")
}