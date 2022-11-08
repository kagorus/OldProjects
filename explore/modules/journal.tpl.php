<html>
    <head>
        <title>Explorer's Log(WIP) - Kagorus Inc</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="css/main.css" >
        <script src="js/main.js" type="text/javascript"></script>
        <script src="js/file_loader.js" type="text/javascript"></script>
    </head>
    <body>

        <div class="mainBody">


            Under Construction and not final.<br>
            <div class="label">CMDR</div> <s></s> <div class="value">Login Not Implimented</div> <br>
            <div class="label">Jumps </div> <s></s> <div class="value" id='cmdrJumps'>Load to Calculate</div><br>
            <div class="label">Distance Traveled </div> <s></s> <div class="value" id='cmdrDistance'>Load to Calculate</div><br>
            <div class="label">Earthlikes </div> <s></s> <div class="value" id ="earthLikes"></div><br>
            <div class="label">Exploration (From Journal Files, Systems Sold) </div> <s></s> <div class="value" id="soldData">0Cr</div><br>
            <div class="label">Estimated Profit(Not Sold) / First Discovery Bonuses</div> <s></s> <div class="value" id="estProfit"> 0Cr</div><br>
            <!--Shows Info + The Form For Loading Files For Users-->
            <div id="Journal">
                <!--This Div is for warnings,fuel for instance-->
                <div class="journalWarning"></div>
                <!--This is the Button For Stopping Loading (Only Visible While Loading)-->    
                <input type ='button' id='btnReset' style= 'display:none;' value='Stop Loading' onclick='stopLoading();'>
                <div class="journalEvent" id='journalEvent'><div id='eventIcon'></div></div>
                <!--This is the form for loading Journal Files-->
                <form id="jsonFile" name="jsonFile" enctype="multipart/form-data" method="post">
                    <fieldset id="form">
                        <h2 id="journalText">Pick Your Journal File.</h2>
                        <i>Journal Files Are found in <br>(<a href='#'>C:\%username%\Saved Games\Frontier Developments\Elite Dangerous</a>)</i><hr>
                        <label for="fileinput" class="custom-file-upload"> 
                        <i ></i>Choose Journal File
                         </label>
                        <input type='file' id='fileinput' onclick='resetLoader();' >
                        <input type='button' id='btnLoad' value='Load' onclick='loadFile();'>

                    </fieldset>

            </div>
        </div>



        <div class="footer">
            Explorer's Log - Kagorus Inc (Nathan Powell) 2017 | All Rights Reserved | Elite Trip 
            was created using assets and imagery from Elite: Dangerous, with the 
            permission of Frontier Developments plc, for non-commercial purposes. It is 
            not endorsed by nor reflects the views or opinions of Frontier Developments 
            and no employee of Frontier Developments was involved in the making of it. 
            | Contact : <a href="mailto:admin@kagorus.net">admin@kagorus.net</a>
            <hr>
            <i>
                Enjoying The Tool? Consider Donating To Help Keep Development Going Or To
                Show Your appreciation for all the hard work, Thanks For Using Explorer's Log!
                <button onclick='window.open("https://www.twitchalerts.com/donate/kagorus",
                    "_blank", "location=yes,height=900,width=650,scrollbars=yes,status=yes");
                        '>Donate!</button></i></div>

    </body>

</html>
