/*
 * File : .js
 * Date : 
 * Author: kagorus (Nathan Powell)
 */
var stars = [
    //Data Supplied by Jasch
    {// Main Sequence 0
        "name": "Main sequence", "type": ['O', 'B', 'A', 'F', 'G', 'K', 'M', 'L', 'T', 'Y'], "k": 2880
    },
    {// Proto stars 1
        "name": "Proto stars", "type": ['TTS', 'AeBe'], "k": 2880
    },
    {// Wolf-Rayet 2
        "name": "Wolf-Rayet", "type": ['W', 'WN', 'WNC', 'WC', 'WO'], "k": 2880
    },
    {// Carbon Stars 3
        "name": "Carbon stars", "type": ['CS', 'C', 'CN', 'CJ', 'CH', 'CHd'], "k": 2880
    },
    {// MISSING DATA!!!! 4
        "name": "unknown1", "type": ['MS', 'S'], "k": 0
    },
    {// DATA IS LACKING AT BEST 5
        "name": "White dwarfs", "type": ['D', 'DA', 'DAB', 'DAO', 'DAZ', 'DAV', 'DB', 'DBZ', 'DO', 'DOV', 'DQ', 'DC', 'DCV', 'DX'], "k": 33737
    },
    {// 6
        "name": "Neutron", "type": ['N'], "k": 54309
    },
    {// 7
        "name": "Black hole", "type": ['H', 'SupermassiveBlackHole'], "k": 54309
    },
    {// 8
        "name": "Exotic", "type": ['X'], "k": 0
    },
    {// 9
        "name": "Super giant", "type": ['A_BlueWhiteSuperGiant', 'F_WhiteSuperGiant', 'M_RedSuperGiant'], "k": 2880
    },
    {// 10
        "name": "Giant", "type": ['M_RedGiant', 'K_OrangeGiant'], "k": 2880
    }
];

var bodies = [
    { "name": "Rocky and Icy","body": ['Rocky body', 'Icy body', 'Rocky ice body'],"k": 720,"terrak": 223971},
    { "name": "Metal Rich","body": ['Metal rich body'],"k": 52292,"terrak": 55292},
    { "name": "High metal content","body": ['High metal content body'],"k": 27313,"terrak": 241607},
    { "name": "Earthlike","body": ['Earthlike body'],"k": 155581,"terrak": 279088},
    { "name": "Water","body": ['Water world'],"k": 155581,"terrak": 279088},
    { "name": "Ammonia","body": ['Ammonia world'],"k": 232619,"a": 177,"terrak": 1},
    { "name": "Class 1 Gas Giant","body": ['Sudarsky class I gas giant'],"k": 3974,"terrak": 1},
    { "name": "Class 2 Gas Giant","body": ['Sudarsky class II gas giant', 'Helium rich gas giant', 'Helium gas giant'
                 ],"k": 23168,"terrak": 1},
    { "name": "Class 3 Gas Giant","body": ['Sudarsky class III gas giant',
            'Gas giant with water based life', 
            'Gas giant with ammonia based life','Water giant', 
            'Water giant with life'],"k": 720,"terrak": 1},
    { "name": "Class 4 Gas Giant","body": ['Sudarsky class IV gas giant'], "k": 720,"terrak": 1},
    { "name": "Class 5 Gas Giant","body": ['Sudarsky class V gas giant'], "k": 720,"terrak": 1}
];
function findEvent(current, event) {
    if (current.event === event) {
        return true;
    } else {
        return false;
    }
}

function fuelCalc(max, current) {
    if (current / max < 0.2) {
        //Display / Return Warning Level
        console.log("Warning! Fuel below 20%");
    }
    //console.log(current/max);
}
function updateHud(current) {

    //Update Info on screen
    document.getElementById('cmdrJumps').innerHTML = jumps;
    document.getElementById('cmdrDistance').innerHTML = jumpDistances + " LY";
    //The Fun Part, Shows info about events, scans jumps ect.

    //Builds the event html
    //console.log(current);
    if (!current){
        firstLoad = 0;
        console.log("First Load Finished");
    }
    else{
       // console.log(current);
    var event = buildEvent(current);
    
    }
    if (event) {
        document.getElementById('earthLikes').innerHTML = earthLikes;
        document.getElementById('journalEvent').innerHTML = event;
        document.getElementById('estProfit').innerHTML = formatCredits(estProfit) + " CR" + "(" + formatCredits(estProfitFirst) + "CR)";
        document.getElementById('soldData').innerHTML = formatCredits(profits) + " CR";
    }

}

function buildEvent(current) {
    
    if (current.event) {
        var event = "<br>Last Event:<hr>" + current.event;
    }

    //Fuel Scoop Event
    if (current.event === "FuelScoop") {
        event = event + " Complete.  " + current.Scooped + " T <br> Fuel Level: " + current.Total + " T";
    }
    //FsdJump
    else if (current.event === "FSDJump") {
        event = event + " Complete <br> Current System -> " + current.StarSystem + "<br> You Jumped -> " + current.JumpDist + " LY";
    }
    //Scan Complete
    else if (current.event === "Scan") {
       // var lastScan = celestialBodies[celestialBodies.length - 1];
        var lastScan = current;
        //For A Star
        if (lastScan.StarType) {
            value = computeValue("Star",lastScan);
            estProfit = estProfit + value[1];
            estProfitFirst = estProfitFirst + (value[1])*1.5;
            event = event + " Star : " + lastScan.BodyName + "<br> Type: " + value[0] +" : "+lastScan.StarType + "<br>Solar Masses : " + lastScan.StellarMass + "<br> Approximate Value : " + value[1] + " CR";
        }
        //Planets + Bodies
        else {
            value = computeValue("Planet",lastScan);
            //console.log(value[0]);
            if(value[0] === "Earthlike"){earthLikes = earthLikes + 1;}
            estProfit = estProfit + value[1];
            
            estProfitFirst = estProfitFirst + (value[1])*1.5;
            event = event + lastScan.BodyName + "<br> Type: " + value[0] + "<br>Earth Masses : " + lastScan.MassEM + "<br>Approximate Value : " + formatCredits(value[1])+ " CR";
            ;
        }
    }
	else if (current.event === "SellExplorationData"){
		console.log(current.Systems);
		console.log(current.BaseValue);
		console.log(current.Bonus);
                profits = profits + current.BaseValue + current.Bonus;
                
	}

    return event;
}

function computeValue(bodyType,data) {
    
    // x + a * mass
//        return planet_data[15].
    if(bodyType === "Star"){
        var starClass = data.StarType;
        //console.log(starClass);
    for (i = 0; i < stars.length; i++) {
        var body = stars[i].type.indexOf(starClass);
        //console.log(body);
        if(body >= 0){
            var value = roundCredits(stars[i].k + (data.StellarMass * stars[i].k / 66.25));
            var name = stars[i].name;
            return [name,value];
        }
    }
}

    if(bodyType === "Planet"){
        var bodyClass = data.PlanetClass;
//        console.log(data.PlanetClass);
        for (i = 0; i < bodies.length; i++) {
        var body = bodies[i].body.indexOf(bodyClass);
//        console.log(body);
        if(body >= 0){
            //console.log(bodies[i]);
            var value = roundCredits(bodies[i].k + (3 * bodies[i].k * Math.pow(data.MassEM,0.199977) /5.3));
			if(data.TerraformState === "Terraformable" || data.PlanetClass === "Earthlike body"){ 
			value = value + roundCredits(bodies[i].terrak + (3* bodies[i].terrak *Math.pow(data.MassEM,0.199977)/5.3));;
			}
            var name = bodies[i].name;
//            console.log(name,value);
                return [name,value];
        }
    }
    }
}
function formatCredits(x) {
       
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    number = parts.join(".");
    
    return number;

    }
function roundCredits(x){
    rounded = Math.round(x);
    return rounded;
}

function generateIcon(event){
    if(event === "FSDJump"){
        
    }
}

function computeScans(Bodies,current){
//    if (current.event === "Scan"){
//        Bodies.pop();
//    } 
    for (i = 0; i < Bodies.length; i++) {
         buildEvent(Bodies[i]);
         
     }
}