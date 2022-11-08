/*
 * File : core.js
 * Author: kagorus (Nathan Powell)
 */



    var stars = document.getElementById("Detail_Stars");
//    var planets = document.getElementById("Detail_Planets");
    function show_values($object){
        stars.innerHTML=stars.innerHTML + $object['Type'] + "-" + 
                $object['Base_Credits'] + "<br>" ;
    }
    
    function load_trip(){
        var content = document.getElementById("Content");
        console.log("Load_Trip Loaded");
        //Code To Show Info Panel
        if (localStorage.getItem("Trip_Data")) {
            var data = JSON.parse(localStorage.Trip_Data);
            var systems = data.length;
            var profit_min = 0;
            
            var profit_max = 0;
            
            
            for(i = 0; i < data.length ;i++){
                profit_min = profit_min + data[i][23];
                profit_max = profit_max + data[i][24];
            }
            profit_min = numberWithCommas(profit_min);
            profit_max = numberWithCommas(profit_max);
            //Add The Panel
            content.innerHTML="<div class='panel'>Systems Visited: "+ systems 
                    +" | "+ "Profit(Min):  " + profit_min + " CR | " + 
                    "Profit(Max):  " + profit_max + " CR" +
                    
                    
                    
                    
                    "</div>"+ content.innerHTML;
        }
        else {
            content.innerHTML="<div class='panel'>No Trips Currently In Progress \n\
            Starting A New Trip </div><br>" + content.innerHTML;

        }
    }
    
   function numberWithCommas(x) {
       
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");

    }

    
    
    function build_array(){
        var system = document.getElementById("system_input");
        var i;
        var number = 0;
        var number_d = 0;
        var system_data = [system.elements[0].value];
        //Start at 1 To Ignore The System Name
        for(i = 1; i < system.length ;i++){
            
            if(system.elements[i].value === "" || isNaN(system.elements[i].value
                    )){system.elements[i].value = "0";}
            if (system[i].name >= 0){
                number =system.elements[i].value;
                
            }
            else{
                number_d = "."+system.elements[i].value ;
                number = number -0 + number_d;
                system_data.push (number);
            }
        }
        current_system.push(system_data);
        
        //Continues
        show_confirm(system_data);
    }
    
    function show_confirm(data){
        //console.log(data);
        var response = "";
        response = response + "<button onclick = 'save_system()'>Confirm \n\
            </button><hr>";
        var i;
        var object;
        var value;
        var value_1st;
        var object_value;
        var object_name;
        var value_total;
        var value_total_max;
        var object_value_max;
        var total = 0;
        var total_max = 0;
            for(i = 1; i < data.length ;i++){
            object = data[i].split(".");
            object_value = planet_data[i-1].Min_Credits;
            object_value_max = planet_data[i-1].Max_Credits;
            object_name = planet_data[i-1].Type;
            value = object[0] * object_value;
            
            value_1st = object[1] * (object_value*1.5);
            value_total_max = (object[0] * object_value_max) + (object[1] 
                    *(object_value_max*1.5));
            value_total = value + value_1st;
            total = total + value_total;
           
            total_max = total_max + value_total_max;
            value_total = numberWithCommas(value_total);
            value_total_max = numberWithCommas(value_total_max);
            
            if (value > 1 || value_1st > 1) {
                
           
            response = response + 
                    "<div class='planet_data'><div class='planet_data_title'>" + 
                    object_name + 
                    "</div><div class='planet_data_cont'>" + 
                    value_total + "CR -" + value_total_max + "CR <br>"
                    + "Scanned : "+object[0]+"<br>"  + "1st Scan : " +
                    object[1] +"</div></div>";
             }
            }
        //Push Values into system array
        current_system[0].push(total);
        current_system[0].push(total_max);
        total_max = numberWithCommas(total_max);
        total = numberWithCommas(total);
        response =  "<div class='system'>System :" + data[0] + 
                "</div><div class='total'>" + total + "CR - " + 
                total_max + "CR</div>" + response;
        document.getElementById("Content").innerHTML= 
                "<div class='Details'>"+response+"</div>";
        //console.log (response);
        
    }
    function save_system(){
        // If A System Is Allready In Local Storage
        if (localStorage.getItem("Trip_Data")) {
            var data = JSON.parse(localStorage.Trip_Data);
            //console.log(data);
            data.push(current_system[0]);
            //console.log(data);
            localStorage.Trip_Data = JSON.stringify(data);
        }
        //For  A New Trip
        else {
            localStorage.Trip_Data = JSON.stringify(current_system);
        }
        //console.log(localStorage.Trip_Data);
        location.reload();
    }
    
    

    function last_trip(){
        var data = JSON.parse(localStorage.Trip_Data);
        console.log(data[data.length-1]);
    }