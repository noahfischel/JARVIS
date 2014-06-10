//===============================================================================
//:: Format Page
//===============================================================================

document.write("<link href='style.css' rel='stylesheet' type='text/css'>");
document.write("<div id='main'>");


//===============================================================================
//:: Retrieve Input
//===============================================================================

vinput = document.getElementById("input").innerHTML
document.getElementById("input").innerHTML = ""
vinput = vinput.split("|");


//===============================================================================
//:: Data Processing
//===============================================================================

switch(vinput[0]){

case "welcome":
	//welcome|text

	document.write("<div id='header'>Project Alpha</div>");
	document.write("<div class='shield'></div>");
	document.write("<div id='sub'>Welcome!</div>");

	document.write("<div id='txtholder'></div>");

	if(vinput[1]!=""){document.write("<div id='update'>"+vinput[1]+"</div>")}

	vout = []
	var vnow = new Date();
	vx = Math.floor(vnow.getMinutes()/15)

	vout[0]  = "Check out the weather on multiple cities using the 'Add New Location' command"
	vout[1]  = "Reopen the GUI at anytime via 'Open Interface'"
	vout[2]  = "'Change computer name to [...]' renames Alpha"
	vout[3]  = "'Call me [...]' changes how Alpha refers to you"

	vout[4]  = "Check the computer's battery, RAM and CPU with 'Check System Status'"
	vout[5]  = "Send emails directly from Alpha with 'Write New Email'"
	vout[6]  = "'Set Alarm to [Time]' to sound the alarm at the desired time"
	vout[7]  = "Fully control Chrome and Firefox via voice commands"

	vout[8]  = "Play some quick games over the Slot Machine and Spin the Wheel"
	vout[9]  = "Create and Cast Spells with the Dungeon & Dragons module"
	vout[10] = "Check Email and Facebook via voice and interact with the output via mouse"
	vout[11] = "Controll all your music on iTunes and WMP"

	vout[12] = "'Create New Shortcut' to your favorite websites and frequently used files and folders"
	vout[13] = "Easy access to your RSS Feeds with 'Read [Feed]'. Don't forget to add them to the feed list first"
	vout[14] = "'Search [Site] for [...]' let's you search any site for the info you need and opens it right up for you"
	vout[15] = "Shutdown or Restart the computer via voice"

	vout[16] = "'Check [Entp] Stocks' gives you the most up to date info on your current stocks"
	vout[17] = "'Translate [...] to [Language]' gives you easy access to Google Translate feature"
	vout[18] = "Check on your favorite personalities news via Twitter with 'Read [Person] Twitter'"
	vout[19] = "Integrated Wolfram module. Ask anything and have Alpha answer it for you"


	document.write("<div class='txt'>For a list of all available commands, say 'Show Commands List'</div>");
	document.write("<div class='txt'>"+vout[0+vx]+".</div>");
	document.write("<div class='txt'>"+vout[4+vx]+".</div>");
	document.write("<div class='txt'>"+vout[8+vx]+".</div>");
	document.write("<div class='txt'>"+vout[12+vx]+".</div>");
	document.write("<div class='txt'>"+vout[16+vx]+".</div>");

	break;

case "wolfram":
	//wolfram|Original Input|error
	//wolfram|Original Input|Input Title|Input1;Input2;Input3|Result Title|Result Data

	document.write("<div id='header'>Wolfram|Alpha</div>");
	document.write("<div class='shield'><img src='imgs/shields/wolfram.png'/></div>");
	document.write("<div id='txtholder'></div>");

	if((vinput[2]=="error")||(vinput[2]=="")){document.write("<div class='txt'><img src='imgs/hal.png' /></div>");}
	else{
		document.write("<div class='txt'>"+vinput[1]+"</div>");
		document.write("<div class='txt'>");		
		vwolf = vinput[3].split(";");
		for(i=0;i<vwolf.length;i++){
			if(i>0){document.write("<br>");}
			document.write(vwolf[i]);
		}
		document.write("</div>");
		document.write("<div class='txt'>");		
		vwolf = vinput[5].split(";");
		for(i=0;i<vwolf.length;i++){
			if(i>0){document.write("<br>");}
			document.write(vwolf[i]);
		}
		document.write("</div>");
	}
	document.write("<div class='wolframtxt'>For more information, check <a href='http://www.wolframalpha.com/input/?i="+vinput[1]+"' target='_blank'>Wolfram|Alpha</a></div>");
	break;

case "calendar":
	//calendar
	var vtoday = new Date();
	var vdate  = new Date();
	var vday   = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
	var vmonth = ["January","February","March","April","May","June","July","August","September","October","November","December"]

	document.write("<div id='header'>Calendar</div>");
	document.write("<div class='shield'></div>");

	document.write("<div class='calendar'><div class='week'>"+vday[vtoday.getDay()]+"</div><div class='date'>"+vtoday.getDate()+"</div>"+vmonth[vtoday.getMonth()]+"</div>");
	document.write("<div class='calendar'>");

	document.write("<div class='weekday'>S</div>");
	document.write("<div class='weekday'>M</div>");
	document.write("<div class='weekday'>T</div>");
	document.write("<div class='weekday'>W</div>");
	document.write("<div class='weekday'>T</div>");
	document.write("<div class='weekday'>F</div>");
	document.write("<div class='weekday'>S</div>");

	vtotdays = 0;

	vdate.setDate(1);
	for (i=1;i<=vdate.getDay();i++){
		document.write("<div class='day'></div>");
		vtotdays++;
	}

	vdate.setMonth(vdate.getMonth()+1);
	vdate.setDate(1);
	vdate.setDate(vdate.getDate()-1);
	for (i=1;i<=vdate.getDate();i++){
		if(i==vtoday.getDate()){document.write("<div class='today'>"+i+"</div>")}
		else{document.write("<div class='day'>"+i+"</div>")}
		vtotdays++;
	}

	for (i=1;vtotdays<42;vtotdays++){
		document.write("<div class='day'></div>");
	}

	document.write("</div>");
	break;

case "time":
	//time
	document.write("<div id='header'>Current Time</div>");
	document.write("<div class='shield'></div>");

	var vtoday = new Date();
	vhours = vtoday.getHours();
	vmins = vtoday.getMinutes();
	if (vhours > 12){vhours=vhours-12}
	if (vtoday.getHours()>=12) {AMPM = "PM"} else {AMPM = "AM"}

	document.write('<div id="timekeeper">')
	document.write('<div class="flip clock">'+Math.floor(vhours/10)+'<div class="divider"></div></div>');
	document.write('<div class="flip clock">'+vhours%10+'<div class="divider"></div></div>');
	document.write('<div class="spacer"></div>');
	document.write('<div class="flip clock">'+Math.floor(vmins/10)+'<div class="divider"></div></div>');
	document.write('<div class="flip clock">'+vmins%10+'<div class="divider"></div><div class="ampm">'+AMPM+'</div></div>');
	document.write('</div>');
	break;

case "alarm":
	//alarm|text|HH:MM AM
	vhour = vinput[2].split(":");
	vtime = vhour[1].split(" ");

	document.write("<div id='header'>Alarm</div>");
	document.write("<div class='shield'></div>");
	document.write("<div id='sub'>"+vinput[1]+"</div>");

	document.write('<div id="timekeeper">')
	document.write('<div class="flip clock">'+Math.floor(vhour[0]/10)+'<div class="divider"></div></div>');
	document.write('<div class="flip clock">'+vhour[0]%10+'<div class="divider"></div></div>');
	document.write('<div class="spacer"></div>');
	document.write('<div class="flip clock">'+Math.floor(vtime[0]/10)+'<div class="divider"></div></div>');
	document.write('<div class="flip clock">'+vtime[0]%10+'<div class="divider"></div><div class="ampm">'+vtime[1]+'</div></div>');
	document.write('</div>');

	break;

case "list":

	function imgError(image) {
	    image.onerror = "";
	    image.src = "imgs/shield.png";
	    return true;
	}

	//list|type|main text|sub|text1|link1|text2|link2|text3|link3...
	document.write("<div id='header'>"+vinput[2]+"</div>");
	document.write("<div class='shield'><img src='imgs/shields/"+vinput[1]+".png' onerror='imgError(this);'/></div>");
	if(vinput[3]!=""){document.write("<div id='sub'>"+vinput[3]+"</div>")}
	document.write("<div id='txtholder'></div>");

	for (i=4;i<=vinput.length-1;i=i+2){
		document.write("<div class='txt'>");
		if(vinput[i+1]!=""){document.write("<a target='_blank' href='"+vinput[i+1]+"'>")}
		document.write(vinput[i]);
		if(vinput[i+1]!=""){document.write("</a>")}
		document.write("</div>");
	}

	break;

case "stocks":
	//stocks|name1|code1|price1|change1|percent1|previous1|name2...
	document.write("<div id='header'>Stocks</div>");
	document.write("<div class='shield'><img src='imgs/shields/stocks.png'/></div>");

	vtot = (vinput.length - 1)/6;

	if(vtot<=3){
		for(i=1; i<vinput.length - 1;i = i+6){
			document.write("<div class='wbig'>");
			document.write(vinput[i+1]);
			document.write("<div class='banner wdown'>"+vinput[i]+"</div>");
			document.write("</div>");

			document.write("<div class='wbig'>");
			document.write(vinput[i+2]);
			document.write("<div class='banner wdown wright'>"+vinput[i+4]+"</div>");
			document.write("<div class='banner wup wleft'>"+vinput[i+3]+"</div>");
			document.write("</div>");

			document.write("<div style='width: 350px; height:15px; float:left;'></div>");
		}
	}
	else{
		for(i=1; i<vinput.length - 1;i = i+6){
			document.write("<div class='wbig'>");
			document.write(vinput[i+2]);
			document.write("<div class='banner wdown'>"+vinput[i]+"</div>");
			document.write("<div class='banner wup wright'>"+vinput[i+4]+"</div>");
			document.write("<div class='banner wup wleft'>"+vinput[i+3]+"</div>");
			document.write("</div>");

			if((i+5)%12==0){document.write("<div style='width: 350px; height:15px; float:left;'></div>")}
		}
	}
	
	break;

case "random":
	
	switch(vinput[1]){
	case "dice":
	//random|dice|sides|#1|#2|#3...
		vdice = vinput.length - 3
		
		vtot = 0;
		for(i=0;i<vdice;i++){
			vinput[i+3]++
			vinput[i+3]--
			vtot = vtot + vinput[i+3]
		}

		document.write("<div id='header'>Dice</div>");
		document.write("<div class='shield' style='background: url(imgs/shields/plain.png);'><div class='diceout'>"+vtot+"</div></div>");
		document.write("<div id='sub'>"+vdice+"d"+vinput[2]+"</div>");

		if(vdice==1){vtype="giant"}
		else{
			if(vdice<=6){vtype="big"}
			else{
				if(vdice<=12){vtype="med"}
				else{vtype="small"}
			}
		}

		for(i=0;i<vdice;i++){
			document.write("<div class='d "+vtype+"'>"+vinput[i+3]+"</div>")
		}
		break;
	
	case "coins":
	//random|coins|#1|#2|#3...
		vdice = vinput.length - 2

		document.write("<div id='header'>Coins</div>");
		document.write("<div class='shield'></div>");
		document.write("<div id='sub'>"+vdice+" Coins</div>");

		if(vdice==1){vtype="cgiant"}
		else{
			if(vdice<=6){vtype="cbig"}
			else{
				if(vdice<=12){vtype="cmed"}
				else{vtype="csmall"}
			}
		}

		for(i=0;i<vdice;i++){
			document.write("<img src='imgs/coins/"+vinput[i+2]+".png' class='"+vtype+"'/>")
		}
		break;

	case "number":
	//random|number|nmax|#1|#2|#3...
		vdice = vinput.length - 2

		document.write("<div id='header'>Random Number</div>");
		document.write("<div class='shield'></div>");
		document.write("<div id='sub'>Max: "+vinput[2]+"</div>");
		document.write("<div id='txtholder'></div>");

		for(i=1;i<vdice;i++){
			document.write("<div class='txt'>"+vinput[i+2]+"</div>");
		}
		break;

	default:
		document.write("<div class='text'>Random Output Error</div>");
	}
	break;

case "DND":
	//DND|Name|Type|MOD|Sides|Dice1|Dice2...

	vdice = vinput.length - 5;

	vtot = 0;
	for(i=5;i<vinput.length;i++){
		vinput[i]++
		vinput[i]--
		vtot = vtot + vinput[i]
	}
	vinput[3]++; vinput[3]--;
	vtot = vtot + vinput[3];

	if(vinput[3]<0){vmod="-";vinput[3]=vinput[3]*(-1);}else{vmod="+"}

	document.write("<div id='header'>"+vinput[1]+"</div>");
	document.write("<div class='shield' style='background: url(imgs/DND/"+vinput[2]+".png);'><div class='diceout'>"+vtot+"</div></div>");
	document.write("<div id='sub'>"+(vinput.length-5)+"d"+vinput[4]+vmod+vinput[3]+"</div>");

		if(vdice==1){vtype="giant"}
		else{
			if(vdice<=6){vtype="big"}
			else{
				if(vdice<=12){vtype="med"}
				else{vtype="small"}
			}
		}

		for(i=0;i<vdice;i++){
			document.write("<div class='d "+vtype+"'>"+vinput[i+5]+"</div>")
		}

	break;

case "weather":
	switch(vinput[1]){
	case "current":
	//weather|current|wicon|local|temp|wname|CorF|wcode
		document.write("<div id='header'>"+vinput[3]+"</div>");
		document.write("<div class='shield'><img src='imgs/shields/weather.png'/></div>");
		document.write("<div id='sub'>"+vinput[7]+"</div>");

		document.write("<div class='wbig'>"+vinput[4]+"°"+vinput[6]);
		document.write("<div class='banner wup'>"+vinput[3]+"</div>");
		document.write("</div>");
		
		document.write("<div class='wbig'>");
		document.write("<img src='imgs/wicons/"+vinput[2]+".png'/>");
		document.write("<div class='banner wdown'>"+vinput[5]+"</div>");
		document.write("</div>");

		break;

	case "forecast":
	//weather|forecast|day|local|min|max|day|night|wname day|wname night|CorF|wcode
		document.write("<div id='header'>"+vinput[3]+"</div>");
		document.write("<div class='shield'><img src='imgs/shields/weather.png'/></div>");
		document.write("<div id='sub'>"+vinput[2]+"</div>");

		document.write("<div class='wbig'>");
		document.write("<img src='imgs/wicons/"+vinput[6]+".png'/>");
		document.write("<div class='banner wdown'>"+vinput[8]+"</div>");
		document.write("<div class='banner wup wleft'>"+vinput[4]+"°"+vinput[10]+"</div>");
		document.write("</div>");

		document.write("<div class='wbig'>");
		document.write("<img src='imgs/wicons/"+vinput[7]+".png'/>");
		document.write("<div class='banner wdown'>"+vinput[9]+"</div>");
		document.write("<div class='banner wup wright'>"+vinput[5]+"°"+vinput[10]+"</div>");
		document.write("</div>");

		break;

	case "week":
	//weather|week|CorF|local|wcode|wicon|temp|wname|day1|wicon1|min1|max1|day2|...|max6
		document.write("<div id='header'>"+vinput[3]+"</div>");
		document.write("<div class='shield'><img src='imgs/shields/weather.png'/></div>");
		document.write("<div id='sub'>"+vinput[4]+"</div>");

		document.write("<div class='wbig'>"+vinput[6]+"°"+vinput[2]);
		document.write("<div class='banner wup'>"+vinput[3]+"</div>");
		document.write("</div>");
		
		document.write("<div class='wbig'>");
		document.write("<img src='imgs/wicons/"+vinput[5]+".png'/>");
		document.write("<div class='banner wdown'>"+vinput[7]+"</div>");
		document.write("</div>");

		for(i=8;i<=vinput.length-1;i=i+4){
			document.write("<div class='wbig wmed'>");
			document.write("<img src='imgs/wicons/"+vinput[i+1]+".png'/>");
			document.write("<div class='banner wdmini'>"+vinput[i]+"</div>");
			document.write("<div class='banner wupmini wlmini'>"+vinput[i+2]+"°"+vinput[2]+"</div>");
			document.write("<div class='banner wupmini wrmini'>"+vinput[i+3]+"°"+vinput[2]+"</div>");
			document.write("</div>");
		}
		break;

	default:
		document.write("<div id='header'>Error</div>");
		document.write("<div class='shield'></div>");
		document.write("<div class='txtholder'></div>");
		document.write("<div class='txt'>Output Type Undefined</div>");
	}	
	break;

case "games":
	document.write("<div id='header'></div>");
	document.write("<img id='games' src='imgs/games/top.png' />");

	switch(vinput[1]){
	case "slots":
	//games|slots|Slot1|Slot2|Slot3|Coins|Payout
		vtot = vinput[6]

		document.write("<div class='gameholder'>");
		for(i=2;i<=4;i++){
			document.write("<img class='slot' src='imgs/games/"+vinput[i]+".png'/>");
		}
		document.write("<div class='chips'>");
		document.write("<div class='chipstotal'>"+vinput[5]+"</div>");
		document.write("<div class='chipspayout'>"+vtot+"</div>");
		document.write("</div>");
		document.write("<img class='slot' src='imgs/games/payout.png'/>");
		document.write("</div>");
		break;

	case "wheel":
	//games|wheel|angle|payout|total
		document.write("<div class='gameholder'>");
		document.write("<img id='wheel' src='imgs/games/wheel.png'/>");
		document.write("</br>");
		document.write("<img id='arrow' src='imgs/games/arrow.png'/>");
		document.write("<div class='chips'>");
		document.write("<div class='chipstotal'>"+vinput[4]+"</div>");
		document.write("<div class='chipspayout'>"+vinput[3]+"</div>");
		document.write("</div>");
		document.write("</div>");

		vdeg = vinput[2]*30;
		document.getElementById("wheel").style['WebkitTransform'] = "rotate("+vdeg+"deg)";
		document.getElementById("wheel").style['MozTransform'] = "rotate("+vdeg+"deg)";
		break;

	case "badges":
	//games|badges|B1|B2...|B12
		vbadges = ["u1","u1","u1","u2","u2","u2","u3","u3","u3","u4","u4","u4"];
		document.write("<div class='gameholder'>");
		for (i=0; i<=11; i++){
			if(vinput[i+2]==1) {document.write("<img class='badge' src='imgs/games/badges/"+i+".png'/>")}
			else{document.write("<img class='badge' src='imgs/games/badges/"+vbadges[i]+".png'/>")}
		}
		document.write("</div>");

		break;

	default:
		document.write("<div id='header'>Error</div>");
		document.write("<div class='shield'></div>");
		document.write("<div class='txtholder'></div>");
		document.write("<div class='txt'>Output Type Undefined</div>");
	}	
	break;

case "system":
	//system|battery|ram|cpu
	document.write("<div id='header'>System</div>");
	document.write("<div class='shield'><img src='imgs/shields/system.png'/></div>");

	document.write("<div class='bat hex'>"+vinput[1]+"<div class='sysname'>Battery</div>");
	document.write('<canvas id="cbat" class="arc" width="175px" height="175px"></canvas>');
	document.write("</div>");

	document.write("<div class='sys hex'>"+vinput[2]+"<div class='sysname'>RAM</div>");
	document.write('<canvas id="cram" class="arc" width="175px" height="175px"></canvas>');
	document.write("</div>");

	document.write("<div class='sys hex'>"+vinput[3]+"<div class='sysname'>CPU</div>");
	document.write('<canvas id="ccpu" class="arc" width="175px" height="175px"></canvas>');
	document.write("</div>");

	//BATTERY
	var c=document.getElementById("cbat");
	var ctx=c.getContext("2d");
	ctx.beginPath();
	varc = (((vinput[1]/100)*1.5)+0.75)*Math.PI;
	ctx.arc(87.5,87.5,62.5,0.75*Math.PI,varc);
	ctx.lineWidth = 5;
	var grad= ctx.createLinearGradient(0, 0, 0, 150);
	grad.addColorStop(0, '#830068');
	grad.addColorStop(1, "#13001f");
	ctx.strokeStyle = grad;
	ctx.stroke();

	//RAM
	var c=document.getElementById("cram");
	var ctx=c.getContext("2d");
	ctx.beginPath();
	varc = (((vinput[2]/100)*1.5)+0.75)*Math.PI;
	ctx.arc(87.5,87.5,62.5,0.75*Math.PI,varc);
	ctx.lineWidth = 5;
	var grad= ctx.createLinearGradient(0, 0, 0, 150);
	grad.addColorStop(0, '#830068');
	grad.addColorStop(1, "#13001f");
	ctx.strokeStyle = grad;
	ctx.stroke();

	//CPU
	var c=document.getElementById("ccpu");
	var ctx=c.getContext("2d");
	ctx.beginPath();
	varc = (((vinput[3]/100)*1.5)+0.75)*Math.PI;
	ctx.arc(87.5,87.5,62.5,0.75*Math.PI,varc);
	ctx.lineWidth = 5;
	var grad= ctx.createLinearGradient(0, 0, 0, 150);
	grad.addColorStop(0, '#830068');
	grad.addColorStop(1, "#13001f");
	ctx.strokeStyle = grad;
	ctx.stroke();

	break;

default:
	document.write("<div id='header'>Error</div>");
	document.write("<div class='shield'></div>");
	document.write("<div class='txtholder'></div>");
	document.write("<div class='txt'>Output Type Undefined</div>");
}




//===============================================================================
//:: Close DIV
//===============================================================================

document.write("</div>");
