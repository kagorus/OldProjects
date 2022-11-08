/*
 * File : file_loader.js
 * Date :
 * Author: kagorus (Nathan Powell)
 */
var lastLine = 0;
var stop = 0;
var systems = [];
var celestialBodies = [];
var jumpDistances = 0;
var jumps = 0;
var docked = [];
//Make sure to make this change based on ship later
var max_fuel = 32;
var hyperdiction = 1;
var earthLikes = 0;
var estProfit = 0;
var estProfitFirst = 0;
var firstLoad = 1;
var loadStarted = 0;
var profits = 0;
var resetOnFirst = 0;
var allScans = [];

function loadFile() {
    var input, file, fr;
    if (typeof window.FileReader !== 'function') {
        alert("The file API isn't supported on this browser yet.");
        return;
    }
    input = document.getElementById('fileinput');
    if (!input) {
        alert("Um, couldn't find the fileinput element.");
    } else if (!input.files) {
        alert("This browser doesn't seem to support the `files` property of file inputs.");
    } else if (!input.files[0]) {
        alert("Please select a file before clicking 'Load'");
    } else {
        file = input.files[0];
        fr = new FileReader();
        fr.onload = receivedText;
        fr.readAsText(file);
    }

    function receivedText(e) {
        lines = e.target.result;
        //Split the file into an array/json object on every new line
        lines = lines.split("\r\n");
        //Remove the last value of the array due to a empty line
        lines.pop();
        //Start Loading the log file and doing the fun stuff
        
        readLog(lines);
        //setInterval(loadFile(),1000);
    }
}

function readLog(log) {
    var current = [];

    for (i = lastLine; i < log.length; i++) {
        //Parses the Next part in the log
        current = JSON.parse(log[i]);
        //console.info(current);
        //Find FSD Jumps

        if (findEvent(current, "FSDJump")) {
            jumpDistances = jumpDistances + roundCredits(current.JumpDist);
            //Push the system Info to the array & Set up the jump counter
            systems.push(current);
            jumps = jumps + 1;
        }

        //Find Scans (bodies and stars)
        if (findEvent(current, "Scan")) {
            celestialBodies.push(current);
            allScans.push(current);
            
        }
        //Detect Docked
        if (findEvent(current, "Docked")) {
            docked = current;
        }
        if (findEvent(current, "FuelLevel")) {

        }
        if (findEvent(current, "SellExplorationData")){
            console.log("Data Sold, Money Reset");
            resetOnFirst = 1;
            estProfit = 0;
            estProfitFirst = 0;
        }
          //When Logging is complete set the last line so the next time the file is loaded
        //it doesnt start again at the beginning.
        lastLine = i + 1;
        //End of For Loop (Loading Log File)
    }
  
    //Upadtes the onscreen display in the index
    
    //Calculate the scan worth before updating the hud the first time.
    
    updateHud(current);
    
    console.log("Loop Completed");
    if (firstLoad === 1){
        if (loadStarted === 0){
        scans = celestialBodies;
        loadStarted = 1;
        console.log(scans);
    }
        
        
        
//        console.log(scans);
        updateHud(celestialBodies[0]);
        
        document.getElementById('btnReset').style.display = 'inline';
        document.getElementById('form').style.display = 'none';
        document.getElementById('journalEvent').style.display = 'initial';
        celestialBodies = celestialBodies.slice(1);
        if (stop === 1){
            document.getElementById('btnReset').style.display = 'none';
            document.getElementById('form').style.display = 'inline';
            document.getElementById('journalEvent').style.display = 'none';
        }
        else{
        setTimeout(loadFile,50);
        }
    }
    else if (stop === 0) {
        if (resetOnFirst === 1){
            estProfit = 0;
            estProfitFirst = 0;
            resetOnFirst = 0;
            console.log("Data Sold.. Resetting Estimate");
        }
        //Hides the Form And Shows a Stop Button
        document.getElementById('btnReset').style.display = 'inline';
        document.getElementById('form').style.display = 'none';
        document.getElementById('journalEvent').style.display = 'initial';
        setTimeout(loadFile, 2000);
    } else {
    document.getElementById('btnReset').style.display = 'none';
    document.getElementById('form').style.display = 'inline';
    document.getElementById('journalEvent').style.display = 'none';

    }
}

//Stops the Timeout Above
function stopLoading() {
    stop = 1;
    firstLoad = 1;
    loadStarted = 0;
    
}
function resetLoader() {
    stop = 0;
    lastLine = 0;
    firstLoad = 1;
    loadStarted = 0;
}
