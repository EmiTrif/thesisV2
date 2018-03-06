function displayDashCharts(SIndex){
	//console.log(SIndex);
window.topicChart = dc.rowChart("#topicChart");
window.tierChart = dc.rowChart("#tierChart");	
window.annotationChart = dc.rowChart("#annotationChart");
window.timeChart = dc.rowChart("#timeChart");

window.genChart = dc.pieChart("#genChart");
window.subjChart = dc.rowChart("#subjChart");

//fetch data 
var topicTimeF = [747.711, 181.367, 250.292, 470.772, 193.292, 621.427, 258.842, 290.633, 436.731, 196.242, 376.136];
var genTimeF = [1976.371, 2047.074];
var subjTimeF = [405.116, 452.642, 421.868, 375.114, 379.254, 325.330, 460.166, 356.932, 397.277, 449.746];

var topicTimeI = [1417.081, 1080.877, 583.574, 1460.015, 1673.617, 994.232, 1488.086];
var genTimeI = [4690.176, 4159.360];
var subjTimeI = [832.177, 989.360, 1005.151, 815.446, 1066.229, 864.039, 831.456, 967.644, 765.397, 712.637];

var tierHightDef = 80;
var tierHight2 = 300;

var subjHightDef = 300;
var subjHight2 = 80;


var tierCH = tierHightDef;
var subjCH = subjHightDef;


var SOptions = {
	FGaze : {
		col : "https://thesisv2.herokuapp/GazeF",
		annCH : 350},	
	IGaze : {
		col : "https://thesisv2.herokuapp/GazeI",
		annCH : 400},
	FHead : {
		col : "https://thesisv2.herokuapp/HeadF",
		annCH : 550 },
	IHead : {
		col : "https://thesisv2.herokuapp/HeadI",
		annCH : 700 },
	FHand : {
		col : "https://thesisv2.herokuapp/HandF",
		annCH : 800 },
	IHand : {
		col : "https://thesisv2.herokuapp/HandI", 
		annCH : 1500 },	
	FTouch : {
		col : "https://thesisv2.herokuapp/TouchF",
		annCH : 700 },
	ITouch : {
		col : "https://thesisv2.herokuapp/TouchI",
		annCH : 900 },
	FPosture : {
		col : "https://thesisv2.herokuapp/PostureF",
		annCH : 300 },
	IPosture : {
		col : "https://thesisv2.herokuapp/PostureI",
		annCH : 350 },

	F013:	{
		col: "https://thesisv2.herokuapp/S013F",
		annCH : 1400,
		time : {
			T1 : 32.594,
			T2 : 15.331,
			T3 : 28.981,
			T4 : 44.541,
			T5 : 41.271,
			T6 : 78.145,
			T7 : 21.275,
			T8 : 40.357,
			T9 : 25.288,
			T10 : 15.256,
			T11 : 62.077
		}
	},
	I013:	{
		col: "https://thesisv2.herokuapp/S013I",
		annCH : 1200,
		time : {
			T1 : 161.248,
			T2 : 72.961,
			T3 : 112.999,
			T4 : 83.786,
			T5 : 76.122,
			T6 : 173.007,
			T7 : 0
		}
	},
	F040:	{
		col: "https://thesisv2.herokuapp/S040F",
		annCH : 900,
		time : {
			T1 : 68.539,
			T2 : 19.118,
			T3 : 27.873,
			T4 : 34.942,
			T5 : 16.257,
			T6 : 43.293,
			T7 : 17.194,
			T8 : 35.093,
			T9 : 104.921,
			T10 : 52.585,
			T11 : 32.827
		}
	},
	I040:	{
		col: "https://thesisv2.herokuapp/S040I",
		annCH : 1200,
		time : {
			T1 : 227.643,
			T2 : 84.137,
			T3 : 19.346,
			T4 : 112.159,
			T5 : 44.236,
			T6 : 13.940,
			T7 : 487.899
		}
	},
	F061:	{
		col: "https://thesisv2.herokuapp/S061F",
		annCH : 1000,
		time: {
			T1 : 104.605,
			T2 : 16.735,
			T3 : 14.909,
			T4 : 38.837,
			T5 : 13.492,
			T6 : 47.205,
			T7 : 33.644,
			T8 : 26.518,
			T9 : 24.510,
			T10 : 21.514,
			T11 : 79.899
		}
	},
	I061:	{
		col: "https://thesisv2.herokuapp/S061I",
		annCH : 1800,
		time : {
			T1 : 119.360,
			T2 : 77.200,
			T3 : 22.614,
			T4 : 257.747,
			T5 : 260.041,
			T6 : 132.442,
			T7 : 10.497,
			T7 : 125.250
		}
	},
	F065:	{
		col: "https://thesisv2.herokuapp/S065F",
		annCH : 1600,
		time: {
			T1 : 97.659,
			T2 : 12.649,
			T3 : 23.702,
			T4 : 43.508,
			T5 : 20.969,
			T6 : 38.241,
			T7 : 13.324,
			T8 : 22.698,
			T9 : 69.038,
			T10 : 9.501,
			T11 : 23.825
		}
	},
	I065:	{
		col: "https://thesisv2.herokuapp/S065I",
		annCH : 1800,
		time : {
			T1 : 167.888,
			T2 : 81.891,
			T3 : 36.407,
			T4 : 92.152,
			T5 : 183.994,
			T6 : 161.655,
			T7 : 91.459
		}
	},
	F074:	{
		col: "https://thesisv2.herokuapp/S074F",
		annCH : 900,
		time : {
			T1 : 62.888,
			T2 : 11.818,
			T3 : 28.852,
			T4 : 34.562,
			T5 : 16.356,
			T6 : 87.804,
			T7 : 25.417,
			T8 : 20.125,
			T9 : 51.773,
			T10 : 8.320,
			T11 : 31.339
		}
	},
	I074:	{
		col: "https://thesisv2.herokuapp/S074I",
		annCH : 1600,
		time : {
			T1 : 163.265,
			T2 : 65.674,
			T3 : 29.931,
			T4 : 182.478,
			T5 : 217.636,
			T6 : 221.929,
			T7 : 185.316
		}
	},
	F077:	{
		col: "https://thesisv2.herokuapp/S077F",
		annCH : 1200,
		time: {
			T1 : 68.787,
			T2 : 9.571,
			T3 : 21.585,
			T4 : 31.824,
			T5 : 15.670,
			T6 : 44.410,
			T7 : 25.118,
			T8 : 30.673,
			T9 : 32.498,
			T10 : 5.727,
			T11 : 39.467
		}
	},
	I077:	{
		col: "https://thesisv2.herokuapp/S077I",
		annCH : 1800,
		time : {
			T1 : 121.257,
			T2 : 312.087,
			T3 : 60.264,
			T4 : 129.971,
			T5 : 122.531,
			T6 : 51.488,
			T7 : 66.441
		}
	},
	F079:	{
		col: "https://thesisv2.herokuapp/S079F",
		annCH : 900,
		time: {
			T1 : 84.344,
			T2 : 22.676,
			T3 : 53.166,
			T4 : 67.429,
			T5 : 16.449,
			T6 : 60.276,
			T7 : 30.842,
			T8 : 25.647,
			T9 : 50.353,
			T10 : 12.728,
			T11 : 36.256
		}
	},
	I079:	{
		col: "https://thesisv2.herokuapp/S079I",
		annCH : 1200,
		time : {
			T1 : 113.167,
			T2 : 189.013,
			T3 : 141.666,
			T4 : 64.186,
			T5 : 133.482,
			T6 : 75.712,
			T7 : 114.230
		}
	},
	F090:	{
		col: "https://thesisv2.herokuapp/S090F",
		annCH : 900,
		time :{
			T1 : 74.705,
			T2 : 11.887,
			T3 : 12.899,
			T4 : 84.791,
			T5 : 15.479,
			T6 : 69.726,
			T7 : 9.361,
			T8 : 14.324,
			T9 : 20.571,
			T10 : 8.122,
			T11 : 35.067
		}
	},
	I090:	{
		col: "https://thesisv2.herokuapp/S090I",
		annCH : 2600,
		time : {
			T1 : 198.914,
			T2 : 59.526,
			T3 : 20.665,
			T4 : 143.286,
			T5 : 368.381,
			T6 : 65.214,
			T7 : 111.658
		}
	},
	F108:	{
		col: "https://thesisv2.herokuapp/S108F",
		annCH : 1600,
		time : {
			T1 : 60.762,
			T2 : 42.680,
			T3 : 18.292,
			T4 : 38.622,
			T5 : 14.668,
			T6 : 44.018,
			T7 : 50.765,
			T8 : 40.515,
			T9 : 40.740,
			T10 : 10.836,
			T11 : 35.379
		}
	},
	I108:	{
		col: "https://thesisv2.herokuapp/S108I",
		annCH : 1600,
		time : {
			T1 : 46.057,
			T2 : 86.939,
			T3 : 31.109,
			T4 : 186.147,
			T5 : 154.072,
			T6 : 64.702,
			T7 : 196.371
		}
	},
	F121:	{
		col: "https://thesisv2.herokuapp/S121F",
		annCH : 1200,
		time : {
			T1 : 92.828,
			T2 : 18.902,
			T3 : 20.033,
			T4 : 51.716,
			T5 : 22.681,
			T6 : 108.309,
			T7 : 31.902,
			T8 : 34.683,
			T9 : 17.039,
			T10 : 51.653,
			T11 : 0
		}
	},
	I121:	{
		col: "https://thesisv2.herokuapp/S121I",
		annCH : 1400,
		time : {
			T1 : 98.282,
			T2 : 51.449,
			T3 : 108.573,
			T4 : 208.103,
			T5 : 113.122,
			T6 : 34.143,
			T7 : 98.965
		}
	}
};

//placeholders:
switch (SIndex.substring(0, 1)){
	case 'F':
		var topicTimePlaceHolder = topicTimeF;
		var genderTimePlaceHolder = genTimeF; 
		var subjectTimePlaceHolder = subjTimeF; 
	break;
	case 'I':
		var topicTimePlaceHolder = topicTimeI;
		var genderTimePlaceHolder = genTimeI; 
		var subjectTimePlaceHolder = subjTimeI; 
	break;
}
if (!isNaN(SIndex.substring(1,2))){ //console.log(SIndex.substring(1,2));
	tierCH = tierHight2;
	subjCH = subjHight2;
}
//console.log(subjectTimePlaceHolder);

//fetch data
d3.json(SOptions[SIndex].col, function(data) {
	
	var ndx = crossfilter(data);
	

	function reduceAdd(p, v) {
		 	
	    switch (v.TopicID){	   
				case "T1": 	    
				//console.log(v.SubjectID);
	    		switch (v.SubjectID) {  
	    			case "013mv22_F":
	    			++p.count013F;
	    			if (p.count013F == 0) {p.time013F = 0} else {p.time013F = SOptions.F013.time.T1;}    	
	    			break;
	    			case "013mv22_I":
	    			++p.count013I;				
	    			if (p.count013I == 0) {p.time013I = 0} else {p.time013I = SOptions.I013.time.T1;}    	
	    			break;
	    			case "040fv24_F":
	    			++p.count040F;
	    			if (p.count040F == 0) {p.time040F = 0} else {p.time040F = SOptions.F040.time.T1;}    	
	    			break;
	    			case "040fv24_I":
	    			++p.count040I;
	    			if (p.count040I == 0) {p.time040I = 0} else {p.time040I = SOptions.I040.time.T1;}  
	    			//console.log(p.count040I+" : "+p.time040I);  
	    			break;
	    			case "061fv19_F":
	    			++p.count061F;
	    			if (p.count061F == 0) {p.time061F = 0} else {p.time061F = SOptions.F061.time.T1;}    	
	    			break;
	    			case "061fv19_I":
	    			++p.count061I;
	    			if (p.count061I == 0) {p.time061I = 0} else {p.time061I = SOptions.I061.time.T1;}    	
	    			break;
	    			case "065mc21_F":
	    			++p.count065F;
	    			if (p.count065F == 0) {p.time065F = 0} else {p.time065F = SOptions.F065.time.T1;}    	
	    			break;
	    			case "065mc21_I":
	    			++p.count065I;
	    			if (p.count065I == 0) {p.time065I = 0} else {p.time065I = SOptions.I065.time.T1;}    	
	    			break;
	    			case "074fc20_F":
	    			++p.count074F;
	    			if (p.count074F == 0) {p.time074F = 0} else {p.time074F = SOptions.F074.time.T1;}    	
	    			break;
	    			case "074fc20_I":
	    			++p.count074I;
	    			if (p.count074I == 0) {p.time074I = 0} else {p.time074I = SOptions.I074.time.T1;}    	
	    			break;
	    			case "077fc20_F":
	    			++p.count077F;
	    			if (p.count077F == 0) {p.time077F = 0} else {p.time077F = SOptions.F077.time.T1;}    	
	    			break;
	    			case "077fc20_I":
	    			++p.count077I;
	    			if (p.count077I == 0) {p.time077I = 0} else {p.time077I = SOptions.I077.time.T1;}    	
	    			break;
	    			case "079mc20_F":
	    			++p.count079F;
	    			if (p.count079F == 0) {p.time079F = 0} else {p.time079F = SOptions.F079.time.T1;}    	
	    			break;
	    			case "079mc20_I":
	    			++p.count079I;
	    			if (p.count079I == 0) {p.time079I = 0} else {p.time079I = SOptions.I079.time.T1;}    	
	    			break;
	    			case "090mc20_F":
	    			++p.count090F;
	    			if (p.count090F == 0) {p.time090F = 0} else {p.time090F = SOptions.F090.time.T1;}    	
	    			break;
	    			case "090mc20_I":
	    			++p.count090I;
	    			if (p.count090I == 0) {p.time090I = 0} else {p.time090I = SOptions.I090.time.T1;}    	
	    			break;
	    			case "108fv19_F":
	    			++p.count108F;
	    			if (p.count108F == 0) {p.time108F = 0} else {p.time108F = SOptions.F108.time.T1;}    	
	    			break;
	    			case "108fv19_I":
	    			++p.count108I;
	    			if (p.count108I == 0) {p.time108I = 0} else {p.time108I = SOptions.I108.time.T1;}    	
	    			break;
	    			case "121mv23_F":
	    			++p.count121F;
	    			if (p.count121F == 0) {p.time121F = 0} else {p.time121F = SOptions.F121.time.T1;}    	
	    			break;
	    			case "121mv23_I":
	    			++p.count121I;
	    			if (p.count121I == 0) {p.time121I = 0} else {p.time121I = SOptions.I121.time.T1;}    	
	    			break;
	    		}
				p.count = p.count013F+p.count013I+p.count040F+p.count040I+p.count061F+p.count061I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count121F+p.count121I; //console.log(p.count+ ": count \n");
				//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    		time = p.time013F+p.time013I+p.time040F+p.time040I+p.time061F+p.time061I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time121F+p.time121I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T2": 	    
	    		switch (v.SubjectID) {  
	    			case "013mv22_F":
	    			++p.count013F;
	    			if (p.count013F == 0) {p.time013F = 0} else {p.time013F = SOptions.F013.time.T2;}    	
	    			break;
	    			case "013mv22_I":
	    			++p.count013I;				
	    			if (p.count013I == 0) {p.time013I = 0} else {p.time013I = SOptions.I013.time.T2;}    	
	    			break;
	    			case "040fv24_F":
	    			++p.count040F;
	    			if (p.count040F == 0) {p.time040F = 0} else {p.time040F = SOptions.F040.time.T2;}    	
	    			break;
	    			case "040fv24_I":
	    			++p.count040I;
	    			if (p.count040I == 0) {p.time040I = 0} else {p.time040I = SOptions.I040.time.T2;}    	
	    			break;
	    			case "061fv19_F":
	    			++p.count061F;
	    			if (p.count061F == 0) {p.time061F = 0} else {p.time061F = SOptions.F061.time.T2;}    	
	    			break;
	    			case "061fv19_I":
	    			++p.count061I;
	    			if (p.count061I == 0) {p.time061I = 0} else {p.time061I = SOptions.I061.time.T2;}    	
	    			break;
	    			case "065mc21_F":
	    			++p.count065F;
	    			if (p.count065F == 0) {p.time065F = 0} else {p.time065F = SOptions.F065.time.T2;}    	
	    			break;
	    			case "065mc21_I":
	    			++p.count065I;
	    			if (p.count065I == 0) {p.time065I = 0} else {p.time065I = SOptions.I065.time.T2;}    	
	    			break;
	    			case "074fc20_F":
	    			++p.count074F;
	    			if (p.count074F == 0) {p.time074F = 0} else {p.time074F = SOptions.F074.time.T2;}    	
	    			break;
	    			case "074fc20_I":
	    			++p.count074I;
	    			if (p.count074I == 0) {p.time074I = 0} else {p.time074I = SOptions.I074.time.T2;}    	
	    			break;
	    			case "077fc20_F":
	    			++p.count077F;
	    			if (p.count077F == 0) {p.time077F = 0} else {p.time077F = SOptions.F077.time.T2;}    	
	    			break;
	    			case "077fc20_I":
	    			++p.count077I;
	    			if (p.count077I == 0) {p.time077I = 0} else {p.time077I = SOptions.I077.time.T2;}    	
	    			break;
	    			case "079mc20_F":
	    			++p.count079F;
	    			if (p.count079F == 0) {p.time079F = 0} else {p.time079F = SOptions.F079.time.T2;}    	
	    			break;
	    			case "079mc20_I":
	    			++p.count079I;
	    			if (p.count079I == 0) {p.time079I = 0} else {p.time079I = SOptions.I079.time.T2;}    	
	    			break;
	    			case "090mc20_F":
	    			++p.count090F;
	    			if (p.count090F == 0) {p.time090F = 0} else {p.time090F = SOptions.F090.time.T2;}    	
	    			break;
	    			case "090mc20_I":
	    			++p.count090I;
	    			if (p.count090I == 0) {p.time090I = 0} else {p.time090I = SOptions.I090.time.T2;}    	
	    			break;
	    			case "108fv19_F":
	    			++p.count108F;
	    			if (p.count108F == 0) {p.time108F = 0} else {p.time108F = SOptions.F108.time.T2;}    	
	    			break;
	    			case "108fv19_I":
	    			++p.count108I;
	    			if (p.count108I == 0) {p.time108I = 0} else {p.time108I = SOptions.I108.time.T2;}    	
	    			break;
	    			case "121mv23_F":
	    			++p.count121F;
	    			if (p.count121F == 0) {p.time121F = 0} else {p.time121F = SOptions.F121.time.T2;}    	
	    			break;
	    			case "121mv23_I":
	    			++p.count121I;
	    			if (p.count121I == 0) {p.time121I = 0} else {p.time121I = SOptions.I121.time.T2;}    	
	    			break;
	    		}
	    		p.count = p.count013F+p.count013I+p.count040F+p.count040I+p.count061F+p.count061I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count121F+p.count121I; //console.log(p.count+ ": count \n");
				//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    		time = p.time013F+p.time013I+p.time040F+p.time040I+p.time061F+p.time061I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time121F+p.time121I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T3": 	    
	    		switch (v.SubjectID) {  
	    			case "013mv22_F":
	    			++p.count013F;
	    			if (p.count013F == 0) {p.time013F = 0} else {p.time013F = SOptions.F013.time.T3;}    	
	    			break;
	    			case "013mv22_I":
	    			++p.count013I;				
	    			if (p.count013I == 0) {p.time013I = 0} else {p.time013I = SOptions.I013.time.T3;}    	
	    			break;
	    			case "040fv24_F":
	    			++p.count040F;
	    			if (p.count040F == 0) {p.time040F = 0} else {p.time040F = SOptions.F040.time.T3;}    	
	    			break;
	    			case "040fv24_I":
	    			++p.count040I;
	    			if (p.count040I == 0) {p.time040I = 0} else {p.time040I = SOptions.I040.time.T3;}    	
	    			break;
	    			case "061fv19_F":
	    			++p.count061F;
	    			if (p.count061F == 0) {p.time061F = 0} else {p.time061F = SOptions.F061.time.T3;}    	
	    			break;
	    			case "061fv19_I":
	    			++p.count061I;
	    			if (p.count061I == 0) {p.time061I = 0} else {p.time061I = SOptions.I061.time.T3;}    	
	    			break;
	    			case "065mc21_F":
	    			++p.count065F;
	    			if (p.count065F == 0) {p.time065F = 0} else {p.time065F = SOptions.F065.time.T3;}    	
	    			break;
	    			case "065mc21_I":
	    			++p.count065I;
	    			if (p.count065I == 0) {p.time065I = 0} else {p.time065I = SOptions.I065.time.T3;}    	
	    			break;
	    			case "074fc20_F":
	    			++p.count074F;
	    			if (p.count074F == 0) {p.time074F = 0} else {p.time074F = SOptions.F074.time.T3;}    	
	    			break;
	    			case "074fc20_I":
	    			++p.count074I;
	    			if (p.count074I == 0) {p.time074I = 0} else {p.time074I = SOptions.I074.time.T3;}    	
	    			break;
	    			case "077fc20_F":
	    			++p.count077F;
	    			if (p.count077F == 0) {p.time077F = 0} else {p.time077F = SOptions.F077.time.T3;}    	
	    			break;
	    			case "077fc20_I":
	    			++p.count077I;
	    			if (p.count077I == 0) {p.time077I = 0} else {p.time077I = SOptions.I077.time.T3;}    	
	    			break;
	    			case "079mc20_F":
	    			++p.count079F;
	    			if (p.count079F == 0) {p.time079F = 0} else {p.time079F = SOptions.F079.time.T3;}    	
	    			break;
	    			case "079mc20_I":
	    			++p.count079I;
	    			if (p.count079I == 0) {p.time079I = 0} else {p.time079I = SOptions.I079.time.T3;}    	
	    			break;
	    			case "090mc20_F":
	    			++p.count090F;
	    			if (p.count090F == 0) {p.time090F = 0} else {p.time090F = SOptions.F090.time.T3;}    	
	    			break;
	    			case "090mc20_I":
	    			++p.count090I;
	    			if (p.count090I == 0) {p.time090I = 0} else {p.time090I = SOptions.I090.time.T3;}    	
	    			break;
	    			case "108fv19_F":
	    			++p.count108F;
	    			if (p.count108F == 0) {p.time108F = 0} else {p.time108F = SOptions.F108.time.T3;}    	
	    			break;
	    			case "108fv19_I":
	    			++p.count108I;
	    			if (p.count108I == 0) {p.time108I = 0} else {p.time108I = SOptions.I108.time.T3;}    	
	    			break;
	    			case "121mv23_F":
	    			++p.count121F;
	    			if (p.count121F == 0) {p.time121F = 0} else {p.time121F = SOptions.F121.time.T3;}    	
	    			break;
	    			case "121mv23_I":
	    			++p.count121I;
	    			if (p.count121I == 0) {p.time121I = 0} else {p.time121I = SOptions.I121.time.T3;}    	
	    			break;
	    		}
	    		p.count = p.count013F+p.count013I+p.count040F+p.count040I+p.count061F+p.count061I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count121F+p.count121I; //console.log(p.count+ ": count \n");
				//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    		time = p.time013F+p.time013I+p.time040F+p.time040I+p.time061F+p.time061I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time121F+p.time121I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T4": 	    
	    		switch (v.SubjectID) {  
	    			case "013mv22_F":
	    			++p.count013F;
	    			if (p.count013F == 0) {p.time013F = 0} else {p.time013F = SOptions.F013.time.T4;}    	
	    			break;
	    			case "013mv22_I":
	    			++p.count013I;				
	    			if (p.count013I == 0) {p.time013I = 0} else {p.time013I = SOptions.I013.time.T4;}    	
	    			break;
	    			case "040fv24_F":
	    			++p.count040F;
	    			if (p.count040F == 0) {p.time040F = 0} else {p.time040F = SOptions.F040.time.T4;}    	
	    			break;
	    			case "040fv24_I":
	    			++p.count040I;
	    			if (p.count040I == 0) {p.time040I = 0} else {p.time040I = SOptions.I040.time.T4;}    	
	    			break;
	    			case "061fv19_F":
	    			++p.count061F;
	    			if (p.count061F == 0) {p.time061F = 0} else {p.time061F = SOptions.F061.time.T4;}    	
	    			break;
	    			case "061fv19_I":
	    			++p.count061I;
	    			if (p.count061I == 0) {p.time061I = 0} else {p.time061I = SOptions.I061.time.T4;}    	
	    			break;
	    			case "065mc21_F":
	    			++p.count065F;
	    			if (p.count065F == 0) {p.time065F = 0} else {p.time065F = SOptions.F065.time.T4;}    	
	    			break;
	    			case "065mc21_I":
	    			++p.count065I;
	    			if (p.count065I == 0) {p.time065I = 0} else {p.time065I = SOptions.I065.time.T4;}    	
	    			break;
	    			case "074fc20_F":
	    			++p.count074F;
	    			if (p.count074F == 0) {p.time074F = 0} else {p.time074F = SOptions.F074.time.T4;}    	
	    			break;
	    			case "074fc20_I":
	    			++p.count074I;
	    			if (p.count074I == 0) {p.time074I = 0} else {p.time074I = SOptions.I074.time.T4;}    	
	    			break;
	    			case "077fc20_F":
	    			++p.count077F;
	    			if (p.count077F == 0) {p.time077F = 0} else {p.time077F = SOptions.F077.time.T4;}    	
	    			break;
	    			case "077fc20_I":
	    			++p.count077I;
	    			if (p.count077I == 0) {p.time077I = 0} else {p.time077I = SOptions.I077.time.T4;}    	
	    			break;
	    			case "079mc20_F":
	    			++p.count079F;
	    			if (p.count079F == 0) {p.time079F = 0} else {p.time079F = SOptions.F079.time.T4;}    	
	    			break;
	    			case "079mc20_I":
	    			++p.count079I;
	    			if (p.count079I == 0) {p.time079I = 0} else {p.time079I = SOptions.I079.time.T4;}    	
	    			break;
	    			case "090mc20_F":
	    			++p.count090F;
	    			if (p.count090F == 0) {p.time090F = 0} else {p.time090F = SOptions.F090.time.T4;}    	
	    			break;
	    			case "090mc20_I":
	    			++p.count090I;
	    			if (p.count090I == 0) {p.time090I = 0} else {p.time090I = SOptions.I090.time.T4;}    	
	    			break;
	    			case "108fv19_F":
	    			++p.count108F;
	    			if (p.count108F == 0) {p.time108F = 0} else {p.time108F = SOptions.F108.time.T4;}    	
	    			break;
	    			case "108fv19_I":
	    			++p.count108I;
	    			if (p.count108I == 0) {p.time108I = 0} else {p.time108I = SOptions.I108.time.T4;}    	
	    			break;
	    			case "121mv23_F":
	    			++p.count121F;
	    			if (p.count121F == 0) {p.time121F = 0} else {p.time121F = SOptions.F121.time.T4;}    	
	    			break;
	    			case "121mv23_I":
	    			++p.count121I;
	    			if (p.count121I == 0) {p.time121I = 0} else {p.time121I = SOptions.I121.time.T4;}    	
	    			break;
	    		}
	    		p.count = p.count013F+p.count013I+p.count040F+p.count040I+p.count061F+p.count061I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count121F+p.count121I; //console.log(p.count+ ": count \n");
				//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    		time = p.time013F+p.time013I+p.time040F+p.time040I+p.time061F+p.time061I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time121F+p.time121I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T5": 	    
	    		switch (v.SubjectID) {  
	    			case "013mv22_F":
	    			++p.count013F;
	    			if (p.count013F == 0) {p.time013F = 0} else {p.time013F = SOptions.F013.time.T5;}    	
	    			break;
	    			case "013mv22_I":
	    			++p.count013I;				
	    			if (p.count013I == 0) {p.time013I = 0} else {p.time013I = SOptions.I013.time.T5;}    	
	    			break;
	    			case "040fv24_F":
	    			++p.count040F;
	    			if (p.count040F == 0) {p.time040F = 0} else {p.time040F = SOptions.F040.time.T5;}    	
	    			break;
	    			case "040fv24_I":
	    			++p.count040I;
	    			if (p.count040I == 0) {p.time040I = 0} else {p.time040I = SOptions.I040.time.T5;}    	
	    			break;
	    			case "061fv19_F":
	    			++p.count061F;
	    			if (p.count061F == 0) {p.time061F = 0} else {p.time061F = SOptions.F061.time.T5;}    	
	    			break;
	    			case "061fv19_I":
	    			++p.count061I;
	    			if (p.count061I == 0) {p.time061I = 0} else {p.time061I = SOptions.I061.time.T5;}    	
	    			break;
	    			case "065mc21_F":
	    			++p.count065F;
	    			if (p.count065F == 0) {p.time065F = 0} else {p.time065F = SOptions.F065.time.T5;}    	
	    			break;
	    			case "065mc21_I":
	    			++p.count065I;
	    			if (p.count065I == 0) {p.time065I = 0} else {p.time065I = SOptions.I065.time.T5;}    	
	    			break;
	    			case "074fc20_F":
	    			++p.count074F;
	    			if (p.count074F == 0) {p.time074F = 0} else {p.time074F = SOptions.F074.time.T5;}    	
	    			break;
	    			case "074fc20_I":
	    			++p.count074I;
	    			if (p.count074I == 0) {p.time074I = 0} else {p.time074I = SOptions.I074.time.T5;}    	
	    			break;
	    			case "077fc20_F":
	    			++p.count077F;
	    			if (p.count077F == 0) {p.time077F = 0} else {p.time077F = SOptions.F077.time.T5;}    	
	    			break;
	    			case "077fc20_I":
	    			++p.count077I;
	    			if (p.count077I == 0) {p.time077I = 0} else {p.time077I = SOptions.I077.time.T5;}    	
	    			break;
	    			case "079mc20_F":
	    			++p.count079F;
	    			if (p.count079F == 0) {p.time079F = 0} else {p.time079F = SOptions.F079.time.T5;}    	
	    			break;
	    			case "079mc20_I":
	    			++p.count079I;
	    			if (p.count079I == 0) {p.time079I = 0} else {p.time079I = SOptions.I079.time.T5;}    	
	    			break;
	    			case "090mc20_F":
	    			++p.count090F;
	    			if (p.count090F == 0) {p.time090F = 0} else {p.time090F = SOptions.F090.time.T5;}    	
	    			break;
	    			case "090mc20_I":
	    			++p.count090I;
	    			if (p.count090I == 0) {p.time090I = 0} else {p.time090I = SOptions.I090.time.T5;}    	
	    			break;
	    			case "108fv19_F":
	    			++p.count108F;
	    			if (p.count108F == 0) {p.time108F = 0} else {p.time108F = SOptions.F108.time.T5;}    	
	    			break;
	    			case "108fv19_I":
	    			++p.count108I;
	    			if (p.count108I == 0) {p.time108I = 0} else {p.time108I = SOptions.I108.time.T5;}    	
	    			break;
	    			case "121mv23_F":
	    			++p.count121F;
	    			if (p.count121F == 0) {p.time121F = 0} else {p.time121F = SOptions.F121.time.T5;}    	
	    			break;
	    			case "121mv23_I":
	    			++p.count121I;
	    			if (p.count121I == 0) {p.time121I = 0} else {p.time121I = SOptions.I121.time.T5;}    	
	    			break;
	    		}
	    		p.count = p.count013F+p.count013I+p.count040F+p.count040I+p.count061F+p.count061I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count121F+p.count121I; //console.log(p.count+ ": count \n");
				//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    		time = p.time013F+p.time013I+p.time040F+p.time040I+p.time061F+p.time061I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time121F+p.time121I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T6": 	    
	    		switch (v.SubjectID) {  
	    			case "013mv22_F":
	    			++p.count013F;
	    			if (p.count013F == 0) {p.time013F = 0} else {p.time013F = SOptions.F013.time.T6;}    	
	    			break;
	    			case "013mv22_I":
	    			++p.count013I;				
	    			if (p.count013I == 0) {p.time013I = 0} else {p.time013I = SOptions.I013.time.T6;}    	
	    			break;
	    			case "040fv24_F":
	    			++p.count040F;
	    			if (p.count040F == 0) {p.time040F = 0} else {p.time040F = SOptions.F040.time.T6;}    	
	    			break;
	    			case "040fv24_I":
	    			++p.count040I;
	    			if (p.count040I == 0) {p.time040I = 0} else {p.time040I = SOptions.I040.time.T6;}    	
	    			break;
	    			case "061fv19_F":
	    			++p.count061F;
	    			if (p.count061F == 0) {p.time061F = 0} else {p.time061F = SOptions.F061.time.T6;}    	
	    			break;
	    			case "061fv19_I":
	    			++p.count061I;
	    			if (p.count061I == 0) {p.time061I = 0} else {p.time061I = SOptions.I061.time.T6;}    	
	    			break;
	    			case "065mc21_F":
	    			++p.count065F;
	    			if (p.count065F == 0) {p.time065F = 0} else {p.time065F = SOptions.F065.time.T6;}    	
	    			break;
	    			case "065mc21_I":
	    			++p.count065I;
	    			if (p.count065I == 0) {p.time065I = 0} else {p.time065I = SOptions.I065.time.T6;}    	
	    			break;
	    			case "074fc20_F":
	    			++p.count074F;
	    			if (p.count074F == 0) {p.time074F = 0} else {p.time074F = SOptions.F074.time.T6;}    	
	    			break;
	    			case "074fc20_I":
	    			++p.count074I;
	    			if (p.count074I == 0) {p.time074I = 0} else {p.time074I = SOptions.I074.time.T6;}    	
	    			break;
	    			case "077fc20_F":
	    			++p.count077F;
	    			if (p.count077F == 0) {p.time077F = 0} else {p.time077F = SOptions.F077.time.T6;}    	
	    			break;
	    			case "077fc20_I":
	    			++p.count077I;
	    			if (p.count077I == 0) {p.time077I = 0} else {p.time077I = SOptions.I077.time.T6;}    	
	    			break;
	    			case "079mc20_F":
	    			++p.count079F;
	    			if (p.count079F == 0) {p.time079F = 0} else {p.time079F = SOptions.F079.time.T6;}    	
	    			break;
	    			case "079mc20_I":
	    			++p.count079I;
	    			if (p.count079I == 0) {p.time079I = 0} else {p.time079I = SOptions.I079.time.T6;}    	
	    			break;
	    			case "090mc20_F":
	    			++p.count090F;
	    			if (p.count090F == 0) {p.time090F = 0} else {p.time090F = SOptions.F090.time.T6;}    	
	    			break;
	    			case "090mc20_I":
	    			++p.count090I;
	    			if (p.count090I == 0) {p.time090I = 0} else {p.time090I = SOptions.I090.time.T6;}    	
	    			break;
	    			case "108fv19_F":
	    			++p.count108F;
	    			if (p.count108F == 0) {p.time108F = 0} else {p.time108F = SOptions.F108.time.T6;}    	
	    			break;
	    			case "108fv19_I":
	    			++p.count108I;
	    			if (p.count108I == 0) {p.time108I = 0} else {p.time108I = SOptions.I108.time.T6;}    	
	    			break;
	    			case "121mv23_F":
	    			++p.count121F;
	    			if (p.count121F == 0) {p.time121F = 0} else {p.time121F = SOptions.F121.time.T6;}    	
	    			break;
	    			case "121mv23_I":
	    			++p.count121I;
	    			if (p.count121I == 0) {p.time121I = 0} else {p.time121I = SOptions.I121.time.T6;}    	
	    			break;
	    		}
	    		p.count = p.count013F+p.count013I+p.count040F+p.count040I+p.count061F+p.count061I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count121F+p.count121I; //console.log(p.count+ ": count \n");
				//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    		time = p.time013F+p.time013I+p.time040F+p.time040I+p.time061F+p.time061I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time121F+p.time121I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n"); 
	    		break;
	    		case "T7":
	    		switch (v.SubjectID) {  
	    			case "013mv22_F":
	    			++p.count013F;
	    			if (p.count013F == 0) {p.time013F = 0} else {p.time013F = SOptions.F013.time.T7;}   	
	    			break;
	    			case "013mv22_I":
	    			++p.count013I;				
	    			if (p.count013I == 0) {p.time013I = 0} else {p.time013I = SOptions.I013.time.T7;} 
	    			break;
	    			case "040fv24_F":
	    			++p.count040F;
	    			if (p.count040F == 0) {p.time040F = 0} else {p.time040F = SOptions.F040.time.T7;}  
	    			break;
	    			case "040fv24_I":
	    			++p.count040I;
	    			if (p.count040I == 0) {p.time040I = 0} else {p.time040I = SOptions.I040.time.T7;}    	
	    			break;
	    			case "061fv19_F":
	    			++p.count061F;
	    			if (p.count061F == 0) {p.time061F = 0} else {p.time061F = SOptions.F061.time.T7;}    	
	    			break;
	    			case "061fv19_I":
	    			++p.count061I;
	    			if (p.count061I == 0) {p.time061I = 0} else {p.time061I = SOptions.I061.time.T7;}    	
	    			break;
	    			case "065mc21_F":
	    			++p.count065F;
	    			if (p.count065F == 0) {p.time065F = 0} else {p.time065F = SOptions.F065.time.T7;}    	
	    			break;
	    			case "065mc21_I":
	    			++p.count065I;
	    			if (p.count065I == 0) {p.time065I = 0} else {p.time065I = SOptions.I065.time.T7;}    	
	    			break;
	    			case "074fc20_F":
	    			++p.count074F;
	    			if (p.count074F == 0) {p.time074F = 0} else {p.time074F = SOptions.F074.time.T7;}    	
	    			break;
	    			case "074fc20_I":
	    			++p.count074I;
	    			if (p.count074I == 0) {p.time074I = 0} else {p.time074I = SOptions.I074.time.T7;}    	
	    			break;
	    			case "077fc20_F":
	    			++p.count077F;
	    			if (p.count077F == 0) {p.time077F = 0} else {p.time077F = SOptions.F077.time.T7;}    	
	    			break;
	    			case "077fc20_I":
	    			++p.count077I;
	    			if (p.count077I == 0) {p.time077I = 0} else {p.time077I = SOptions.I077.time.T7;}    	
	    			break;
	    			case "079mc20_F":
	    			++p.count079F;
	    			if (p.count079F == 0) {p.time079F = 0} else {p.time079F = SOptions.F079.time.T7;}    	
	    			break;
	    			case "079mc20_I":
	    			++p.count079I;
	    			if (p.count079I == 0) {p.time079I = 0} else {p.time079I = SOptions.I079.time.T7;}    	
	    			break;
	    			case "090mc20_F":
	    			++p.count090F;
	    			if (p.count090F == 0) {p.time090F = 0} else {p.time090F = SOptions.F090.time.T7;}    	
	    			break;
	    			case "090mc20_I":
	    			++p.count090I;
	    			if (p.count090I == 0) {p.time090I = 0} else {p.time090I = SOptions.I090.time.T7;}    	
	    			break;
	    			case "108fv19_F":
	    			++p.count108F;
	    			if (p.count108F == 0) {p.time108F = 0} else {p.time108F = SOptions.F108.time.T7;}    	
	    			break;
	    			case "108fv19_I":
	    			++p.count108I;
	    			if (p.count108I == 0) {p.time108I = 0} else {p.time108I = SOptions.I108.time.T7;}    	
	    			break;
	    			case "121mv23_F":
	    			++p.count121F;
	    			if (p.count121F == 0) {p.time121F = 0} else {p.time121F = SOptions.F121.time.T7;}    	
	    			break;
	    			case "121mv23_I":
	    			++p.count121I;
	    			if (p.count121I == 0) {p.time121I = 0} else {p.time121I = SOptions.I121.time.T7;}    	
	    			break;
	    		}
	    		p.count = p.count013F+p.count013I+p.count040F+p.count040I+p.count061F+p.count061I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count121F+p.count121I; //console.log(p.count+ ": count \n");
				//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    		time = p.time013F+p.time013I+p.time040F+p.time040I+p.time061F+p.time061I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time121F+p.time121I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n"); 
	    		break;
	    		case "T8":
	    		switch (v.SubjectID) {  
	    			case "013mv22_F":
	    			++p.count013F;
	    			if (p.count013F == 0) {p.time013F = 0} else {p.time013F = SOptions.F013.time.T8;}    	
	    			break;
	    			case "013mv22_I":
	    			++p.count013I;				
	    			if (p.count013I == 0) {p.time013I = 0} else {p.time013I = SOptions.I013.time.T8;}    	
	    			break;
	    			case "040fv24_F":
	    			++p.count040F;
	    			if (p.count040F == 0) {p.time040F = 0} else {p.time040F = SOptions.F040.time.T8;}    	
	    			break;
	    			case "040fv24_I":
	    			++p.count040I;
	    			if (p.count040I == 0) {p.time040I = 0} else {p.time040I = SOptions.I040.time.T8;}    	
	    			break;
	    			case "061fv19_F":
	    			++p.count061F;
	    			if (p.count061F == 0) {p.time061F = 0} else {p.time061F = SOptions.F061.time.T8;}    	
	    			break;
	    			case "061fv19_I":
	    			++p.count061I;
	    			if (p.count061I == 0) {p.time061I = 0} else {p.time061I = SOptions.I061.time.T8;}    	
	    			break;
	    			case "065mc21_F":
	    			++p.count065F;
	    			if (p.count065F == 0) {p.time065F = 0} else {p.time065F = SOptions.F065.time.T8;}    	
	    			break;
	    			case "065mc21_I":
	    			++p.count065I;
	    			if (p.count065I == 0) {p.time065I = 0} else {p.time065I = SOptions.I065.time.T8;}    	
	    			break;
	    			case "074fc20_F":
	    			++p.count074F;
	    			if (p.count074F == 0) {p.time074F = 0} else {p.time074F = SOptions.F074.time.T8;}    	
	    			break;
	    			case "074fc20_I":
	    			++p.count074I;
	    			if (p.count074I == 0) {p.time074I = 0} else {p.time074I = SOptions.I074.time.T8;}    	
	    			break;
	    			case "077fc20_F":
	    			++p.count077F;
	    			if (p.count077F == 0) {p.time077F = 0} else {p.time077F = SOptions.F077.time.T8;}    	
	    			break;
	    			case "077fc20_I":
	    			++p.count077I;
	    			if (p.count077I == 0) {p.time077I = 0} else {p.time077I = SOptions.I077.time.T8;}    	
	    			break;
	    			case "079mc20_F":
	    			++p.count079F;
	    			if (p.count079F == 0) {p.time079F = 0} else {p.time079F = SOptions.F079.time.T8;}    	
	    			break;
	    			case "079mc20_I":
	    			++p.count079I;
	    			if (p.count079I == 0) {p.time079I = 0} else {p.time079I = SOptions.I079.time.T8;}    	
	    			break;
	    			case "090mc20_F":
	    			++p.count090F;
	    			if (p.count090F == 0) {p.time090F = 0} else {p.time090F = SOptions.F090.time.T8;}    	
	    			break;
	    			case "090mc20_I":
	    			++p.count090I;
	    			if (p.count090I == 0) {p.time090I = 0} else {p.time090I = SOptions.I090.time.T8;}    	
	    			break;
	    			case "108fv19_F":
	    			++p.count108F;
	    			if (p.count108F == 0) {p.time108F = 0} else {p.time108F = SOptions.F108.time.T8;}    	
	    			break;
	    			case "108fv19_I":
	    			++p.count108I;
	    			if (p.count108I == 0) {p.time108I = 0} else {p.time108I = SOptions.I108.time.T8;}    	
	    			break;
	    			case "121mv23_F":
	    			++p.count121F;
	    			if (p.count121F == 0) {p.time121F = 0} else {p.time121F = SOptions.F121.time.T8;}    	
	    			break;
	    			case "121mv23_I":
	    			++p.count121I;
	    			if (p.count121I == 0) {p.time121I = 0} else {p.time121I = SOptions.I121.time.T8;}    	
	    			break;
	    		}
	    		p.count = p.count013F+p.count013I+p.count040F+p.count040I+p.count061F+p.count061I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count121F+p.count121I; //console.log(p.count+ ": count \n");
				//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    		time = p.time013F+p.time013I+p.time040F+p.time040I+p.time061F+p.time061I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time121F+p.time121I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T9":
	    		switch (v.SubjectID) {  
	    			case "013mv22_F":
	    			++p.count013F;
	    			if (p.count013F == 0) {p.time013F = 0} else {p.time013F = SOptions.F013.time.T9;}    	
	    			break;
	    			case "013mv22_I":
	    			++p.count013I;				
	    			if (p.count013I == 0) {p.time013I = 0} else {p.time013I = SOptions.I013.time.T9;}    	
	    			break;
	    			case "040fv24_F":
	    			++p.count040F;
	    			if (p.count040F == 0) {p.time040F = 0} else {p.time040F = SOptions.F040.time.T9;}    	
	    			break;
	    			case "040fv24_I":
	    			++p.count040I;
	    			if (p.count040I == 0) {p.time040I = 0} else {p.time040I = SOptions.I040.time.T9;}    	
	    			break;
	    			case "061fv19_F":
	    			++p.count061F;
	    			if (p.count061F == 0) {p.time061F = 0} else {p.time061F = SOptions.F061.time.T9;}    	
	    			break;
	    			case "061fv19_I":
	    			++p.count061I;
	    			if (p.count061I == 0) {p.time061I = 0} else {p.time061I = SOptions.I061.time.T9;}    	
	    			break;
	    			case "065mc21_F":
	    			++p.count065F;
	    			if (p.count065F == 0) {p.time065F = 0} else {p.time065F = SOptions.F065.time.T9;}    	
	    			break;
	    			case "065mc21_I":
	    			++p.count065I;
	    			if (p.count065I == 0) {p.time065I = 0} else {p.time065I = SOptions.I065.time.T9;}    	
	    			break;
	    			case "074fc20_F":
	    			++p.count074F;
	    			if (p.count074F == 0) {p.time074F = 0} else {p.time074F = SOptions.F074.time.T9;}    	
	    			break;
	    			case "074fc20_I":
	    			++p.count074I;
	    			if (p.count074I == 0) {p.time074I = 0} else {p.time074I = SOptions.I074.time.T9;}    	
	    			break;
	    			case "077fc20_F":
	    			++p.count077F;
	    			if (p.count077F == 0) {p.time077F = 0} else {p.time077F = SOptions.F077.time.T9;}    	
	    			break;
	    			case "077fc20_I":
	    			++p.count077I;
	    			if (p.count077I == 0) {p.time077I = 0} else {p.time077I = SOptions.I077.time.T9;}    	
	    			break;
	    			case "079mc20_F":
	    			++p.count079F;
	    			if (p.count079F == 0) {p.time079F = 0} else {p.time079F = SOptions.F079.time.T9;}    	
	    			break;
	    			case "079mc20_I":
	    			++p.count079I;
	    			if (p.count079I == 0) {p.time079I = 0} else {p.time079I = SOptions.I079.time.T9;}    	
	    			break;
	    			case "090mc20_F":
	    			++p.count090F;
	    			if (p.count090F == 0) {p.time090F = 0} else {p.time090F = SOptions.F090.time.T9;}    	
	    			break;
	    			case "090mc20_I":
	    			++p.count090I;
	    			if (p.count090I == 0) {p.time090I = 0} else {p.time090I = SOptions.I090.time.T9;}    	
	    			break;
	    			case "108fv19_F":
	    			++p.count108F;
	    			if (p.count108F == 0) {p.time108F = 0} else {p.time108F = SOptions.F108.time.T9;}    	
	    			break;
	    			case "108fv19_I":
	    			++p.count108I;
	    			if (p.count108I == 0) {p.time108I = 0} else {p.time108I = SOptions.I108.time.T9;}    	
	    			break;
	    			case "121mv23_F":
	    			++p.count121F;
	    			if (p.count121F == 0) {p.time121F = 0} else {p.time121F = SOptions.F121.time.T9;}    	
	    			break;
	    			case "121mv23_I":
	    			++p.count121I;
	    			if (p.count121I == 0) {p.time121I = 0} else {p.time121I = SOptions.I121.time.T9;}    	
	    			break;
	    		}
	    		p.count = p.count013F+p.count013I+p.count040F+p.count040I+p.count061F+p.count061I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count121F+p.count121I; //console.log(p.count+ ": count \n");
				//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    		time = p.time013F+p.time013I+p.time040F+p.time040I+p.time061F+p.time061I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time121F+p.time121I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T10": 
	    		switch (v.SubjectID) {  
	    			case "013mv22_F":
	    			++p.count013F;
	    			if (p.count013F == 0) {p.time013F = 0} else {p.time013F = SOptions.F013.time.T10;}    	
	    			break;
	    			case "013mv22_I":
	    			++p.count013I;				
	    			if (p.count013I == 0) {p.time013I = 0} else {p.time013I = SOptions.I013.time.T10;}    	
	    			break;
	    			case "040fv24_F":
	    			++p.count040F;
	    			if (p.count040F == 0) {p.time040F = 0} else {p.time040F = SOptions.F040.time.T10;}    	
	    			break;
	    			case "040fv24_I":
	    			++p.count040I;
	    			if (p.count040I == 0) {p.time040I = 0} else {p.time040I = SOptions.I040.time.T10;}    	
	    			break;
	    			case "061fv19_F":
	    			++p.count061F;
	    			if (p.count061F == 0) {p.time061F = 0} else {p.time061F = SOptions.F061.time.T10;}    	
	    			break;
	    			case "061fv19_I":
	    			++p.count061I;
	    			if (p.count061I == 0) {p.time061I = 0} else {p.time061I = SOptions.I061.time.T10;}    	
	    			break;
	    			case "065mc21_F":
	    			++p.count065F;
	    			if (p.count065F == 0) {p.time065F = 0} else {p.time065F = SOptions.F065.time.T10;}    	
	    			break;
	    			case "065mc21_I":
	    			++p.count065I;
	    			if (p.count065I == 0) {p.time065I = 0} else {p.time065I = SOptions.I065.time.T10;}    	
	    			break;
	    			case "074fc20_F":
	    			++p.count074F;
	    			if (p.count074F == 0) {p.time074F = 0} else {p.time074F = SOptions.F074.time.T10;}    	
	    			break;
	    			case "074fc20_I":
	    			++p.count074I;
	    			if (p.count074I == 0) {p.time074I = 0} else {p.time074I = SOptions.I074.time.T10;}    	
	    			break;
	    			case "077fc20_F":
	    			++p.count077F;
	    			if (p.count077F == 0) {p.time077F = 0} else {p.time077F = SOptions.F077.time.T10;}    	
	    			break;
	    			case "077fc20_I":
	    			++p.count077I;
	    			if (p.count077I == 0) {p.time077I = 0} else {p.time077I = SOptions.I077.time.T10;}    	
	    			break;
	    			case "079mc20_F":
	    			++p.count079F;
	    			if (p.count079F == 0) {p.time079F = 0} else {p.time079F = SOptions.F079.time.T10;}    	
	    			break;
	    			case "079mc20_I":
	    			++p.count079I;
	    			if (p.count079I == 0) {p.time079I = 0} else {p.time079I = SOptions.I079.time.T10;}    	
	    			break;
	    			case "090mc20_F":
	    			++p.count090F;
	    			if (p.count090F == 0) {p.time090F = 0} else {p.time090F = SOptions.F090.time.T10;}    	
	    			break;
	    			case "090mc20_I":
	    			++p.count090I;
	    			if (p.count090I == 0) {p.time090I = 0} else {p.time090I = SOptions.I090.time.T10;}    	
	    			break;
	    			case "108fv19_F":
	    			++p.count108F;
	    			if (p.count108F == 0) {p.time108F = 0} else {p.time108F = SOptions.F108.time.T10;}    	
	    			break;
	    			case "108fv19_I":
	    			++p.count108I;
	    			if (p.count108I == 0) {p.time108I = 0} else {p.time108I = SOptions.I108.time.T10;}    	
	    			break;
	    			case "121mv23_F":
	    			++p.count121F;
	    			if (p.count121F == 0) {p.time121F = 0} else {p.time121F = SOptions.F121.time.T10;}    	
	    			break;
	    			case "121mv23_I":
	    			++p.count121I;
	    			if (p.count121I == 0) {p.time121I = 0} else {p.time121I = SOptions.I121.time.T10;}    	
	    			break;
	    		}
	    		p.count = p.count013F+p.count013I+p.count040F+p.count040I+p.count061F+p.count061I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count121F+p.count121I; //console.log(p.count+ ": count \n");
				//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    		time = p.time013F+p.time013I+p.time040F+p.time040I+p.time061F+p.time061I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time121F+p.time121I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T11":
	    		switch (v.SubjectID) {  
	    			case "013mv22_F":
	    			++p.count013F;
	    			if (p.count013F == 0) {p.time013F = 0} else {p.time013F = SOptions.F013.time.T11;}    	
	    			break;
	    			case "013mv22_I":
	    			++p.count013I;				
	    			if (p.count013I == 0) {p.time013I = 0} else {p.time013I = SOptions.I013.time.T11;}    	
	    			break;
	    			case "040fv24_F":
	    			++p.count040F;
	    			if (p.count040F == 0) {p.time040F = 0} else {p.time040F = SOptions.F040.time.T11;}    	
	    			break;
	    			case "040fv24_I":
	    			++p.count040I;
	    			if (p.count040I == 0) {p.time040I = 0} else {p.time040I = SOptions.I040.time.T11;}    	
	    			break;
	    			case "061fv19_F":
	    			++p.count061F;
	    			if (p.count061F == 0) {p.time061F = 0} else {p.time061F = SOptions.F061.time.T11;}    	
	    			break;
	    			case "061fv19_I":
	    			++p.count061I;
	    			if (p.count061I == 0) {p.time061I = 0} else {p.time061I = SOptions.I061.time.T11;}    	
	    			break;
	    			case "065mc21_F":
	    			++p.count065F;
	    			if (p.count065F == 0) {p.time065F = 0} else {p.time065F = SOptions.F065.time.T11;}    	
	    			break;
	    			case "065mc21_I":
	    			++p.count065I;
	    			if (p.count065I == 0) {p.time065I = 0} else {p.time065I = SOptions.I065.time.T11;}    	
	    			break;
	    			case "074fc20_F":
	    			++p.count074F;
	    			if (p.count074F == 0) {p.time074F = 0} else {p.time074F = SOptions.F074.time.T11;}    	
	    			break;
	    			case "074fc20_I":
	    			++p.count074I;
	    			if (p.count074I == 0) {p.time074I = 0} else {p.time074I = SOptions.I074.time.T11;}    	
	    			break;
	    			case "077fc20_F":
	    			++p.count077F;
	    			if (p.count077F == 0) {p.time077F = 0} else {p.time077F = SOptions.F077.time.T11;}    	
	    			break;
	    			case "077fc20_I":
	    			++p.count077I;
	    			if (p.count077I == 0) {p.time077I = 0} else {p.time077I = SOptions.I077.time.T11;}    	
	    			break;
	    			case "079mc20_F":
	    			++p.count079F;
	    			if (p.count079F == 0) {p.time079F = 0} else {p.time079F = SOptions.F079.time.T11;}    	
	    			break;
	    			case "079mc20_I":
	    			++p.count079I;
	    			if (p.count079I == 0) {p.time079I = 0} else {p.time079I = SOptions.I079.time.T11;}    	
	    			break;
	    			case "090mc20_F":
	    			++p.count090F;
	    			if (p.count090F == 0) {p.time090F = 0} else {p.time090F = SOptions.F090.time.T11;}    	
	    			break;
	    			case "090mc20_I":
	    			++p.count090I;
	    			if (p.count090I == 0) {p.time090I = 0} else {p.time090I = SOptions.I090.time.T11;}    	
	    			break;
	    			case "108fv19_F":
	    			++p.count108F;
	    			if (p.count108F == 0) {p.time108F = 0} else {p.time108F = SOptions.F108.time.T11;}    	
	    			break;
	    			case "108fv19_I":
	    			++p.count108I;
	    			if (p.count108I == 0) {p.time108I = 0} else {p.time108I = SOptions.I108.time.T11;}    	
	    			break;
	    			case "121mv23_F":
	    			++p.count121F;
	    			if (p.count121F == 0) {p.time121F = 0} else {p.time121F = SOptions.F121.time.T11;}    	
	    			break;
	    			case "121mv23_I":
	    			++p.count121I;
	    			if (p.count121I == 0) {p.time121I = 0} else {p.time121I = SOptions.I121.time.T11;}    	
	    			break;
	    		}
	    		p.count = p.count013F+p.count013I+p.count040F+p.count040I+p.count061F+p.count061I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count121F+p.count121I; //console.log(p.count+ ": count \n");
				//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    		time = p.time013F+p.time013I+p.time040F+p.time040I+p.time061F+p.time061I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time121F+p.time121I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    	}	
	    return p;
	}

	function reduceRemove(p, v) {
		 switch (v.TopicID){
				case "T1": 	    
	    		switch (v.SubjectID) {  
	    			case "013mv22_F":
	    			--p.count013F;
	    			if (p.count013F == 0) {p.time013F = 0} else {p.time013F = SOptions.F013.time.T1;}    	
	    			break;
	    			case "013mv22_I":
	    			--p.count013I;				
	    			if (p.count013I == 0) {p.time013I = 0} else {p.time013I = SOptions.I013.time.T1;}    	
	    			break;
	    			case "040fv24_F":
	    			--p.count040F;
	    			if (p.count040F == 0) {p.time040F = 0} else {p.time040F = SOptions.F040.time.T1;}    	
	    			break;
	    			case "040fv24_I":
	    			--p.count040I;
	    			if (p.count040I == 0) {p.time040I = 0} else {p.time040I = SOptions.I040.time.T1;}   //console.log(p.count040I+" : "+p.time040I+"\n"); 	
	    			break;
	    			case "061fv19_F":
	    			--p.count061F;
	    			if (p.count061F == 0) {p.time061F = 0} else {p.time061F = SOptions.F061.time.T1;}    	
	    			break;
	    			case "061fv19_I":
	    			--p.count061I;
	    			if (p.count061I == 0) {p.time061I = 0} else {p.time061I = SOptions.I061.time.T1;}    	
	    			break;
	    			case "065mc21_F":
	    			--p.count065F;
	    			if (p.count065F == 0) {p.time065F = 0} else {p.time065F = SOptions.F065.time.T1;}    	
	    			break;
	    			case "065mc21_I":
	    			--p.count065I;
	    			if (p.count065I == 0) {p.time065I = 0} else {p.time065I = SOptions.I065.time.T1;}    	
	    			break;
	    			case "074fc20_F":
	    			--p.count074F;
	    			if (p.count074F == 0) {p.time074F = 0} else {p.time074F = SOptions.F074.time.T1;}    	
	    			break;
	    			case "074fc20_I":
	    			--p.count074I;
	    			if (p.count074I == 0) {p.time074I = 0} else {p.time074I = SOptions.I074.time.T1;}    	
	    			break;
	    			case "077fc20_F":
	    			--p.count077F;
	    			if (p.count077F == 0) {p.time077F = 0} else {p.time077F = SOptions.F077.time.T1;}    	
	    			break;
	    			case "077fc20_I":
	    			--p.count077I;
	    			if (p.count077I == 0) {p.time077I = 0} else {p.time077I = SOptions.I077.time.T1;}    	
	    			break;
	    			case "079mc20_F":
	    			--p.count079F;
	    			if (p.count079F == 0) {p.time079F = 0} else {p.time079F = SOptions.F079.time.T1;}    	
	    			break;
	    			case "079mc20_I":
	    			--p.count079I;
	    			if (p.count079I == 0) {p.time079I = 0} else {p.time079I = SOptions.I079.time.T1;}    	
	    			break;
	    			case "090mc20_F":
	    			--p.count090F;
	    			if (p.count090F == 0) {p.time090F = 0} else {p.time090F = SOptions.F090.time.T1;}    	
	    			break;
	    			case "090mc20_I":
	    			--p.count090I;
	    			if (p.count090I == 0) {p.time090I = 0} else {p.time090I = SOptions.I090.time.T1;}    	
	    			break;
	    			case "108fv19_F":
	    			--p.count108F;
	    			if (p.count108F == 0) {p.time108F = 0} else {p.time108F = SOptions.F108.time.T1;}    	
	    			break;
	    			case "108fv19_I":
	    			--p.count108I;
	    			if (p.count108I == 0) {p.time108I = 0} else {p.time108I = SOptions.I108.time.T1;}    	
	    			break;
	    			case "121mv23_F":
	    			--p.count121F;
	    			if (p.count121F == 0) {p.time121F = 0} else {p.time121F = SOptions.F121.time.T1;}    	
	    			break;
	    			case "121mv23_I":
	    			--p.count121I;
	    			if (p.count121I == 0) {p.time121I = 0} else {p.time121I = SOptions.I121.time.T1;}    	
	    			break;
	    		}
	    		p.count = p.count013F+p.count013I+p.count040F+p.count040I+p.count061F+p.count061I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count121F+p.count121I; //console.log(p.count+ ": count \n");
				//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    		time = p.time013F+p.time013I+p.time040F+p.time040I+p.time061F+p.time061I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time121F+p.time121I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log("time:" +time+" : "+p.count+"\n");
	    		break;
	    		case "T2": 	 
		    		switch (v.SubjectID) {     
		    			case "013mv22_F":
		    			--p.count013F;
		    			if (p.count013F == 0) {p.time013F = 0} else {p.time013F = SOptions.F013.time.T2;}    	
		    			break;
		    			case "013mv22_I":
		    			--p.count013I;				
		    			if (p.count013I == 0) {p.time013I = 0} else {p.time013I = SOptions.I013.time.T2;}    	
		    			break;
		    			case "040fv24_F":
		    			--p.count040F;
		    			if (p.count040F == 0) {p.time040F = 0} else {p.time040F = SOptions.F040.time.T2;}    	
		    			break;
		    			case "040fv24_I":
		    			--p.count040I;
		    			if (p.count040I == 0) {p.time040I = 0} else {p.time040I = SOptions.I040.time.T2;}    	
		    			break;
		    			case "061fv19_F":
		    			--p.count061F;
		    			if (p.count061F == 0) {p.time061F = 0} else {p.time061F = SOptions.F061.time.T2;}    	
		    			break;
		    			case "061fv19_I":
		    			--p.count061I;
		    			if (p.count061I == 0) {p.time061I = 0} else {p.time061I = SOptions.I061.time.T2;}    	
		    			break;
		    			case "065mc21_F":
		    			--p.count065F;
		    			if (p.count065F == 0) {p.time065F = 0} else {p.time065F = SOptions.F065.time.T2;}    	
		    			break;
		    			case "065mc21_I":
		    			--p.count065I;
		    			if (p.count065I == 0) {p.time065I = 0} else {p.time065I = SOptions.I065.time.T2;}    	
		    			break;
		    			case "074fc20_F":
		    			--p.count074F;
		    			if (p.count074F == 0) {p.time074F = 0} else {p.time074F = SOptions.F074.time.T2;}    	
		    			break;
		    			case "074fc20_I":
		    			--p.count074I;
		    			if (p.count074I == 0) {p.time074I = 0} else {p.time074I = SOptions.I074.time.T2;}    	
		    			break;
		    			case "077fc20_F":
		    			--p.count077F;
		    			if (p.count077F == 0) {p.time077F = 0} else {p.time077F = SOptions.F077.time.T2;}    	
		    			break;
		    			case "077fc20_I":
		    			--p.count077I;
		    			if (p.count077I == 0) {p.time077I = 0} else {p.time077I = SOptions.I077.time.T2;}    	
		    			break;
		    			case "079mc20_F":
		    			--p.count079F;
		    			if (p.count079F == 0) {p.time079F = 0} else {p.time079F = SOptions.F079.time.T2;}    	
		    			break;
		    			case "079mc20_I":
		    			--p.count079I;
		    			if (p.count079I == 0) {p.time079I = 0} else {p.time079I = SOptions.I079.time.T2;}    	
		    			break;
		    			case "090mc20_F":
		    			--p.count090F;
		    			if (p.count090F == 0) {p.time090F = 0} else {p.time090F = SOptions.F090.time.T2;}    	
		    			break;
		    			case "090mc20_I":
		    			--p.count090I;
		    			if (p.count090I == 0) {p.time090I = 0} else {p.time090I = SOptions.I090.time.T2;}    	
		    			break;
		    			case "108fv19_F":
		    			--p.count108F;
		    			if (p.count108F == 0) {p.time108F = 0} else {p.time108F = SOptions.F108.time.T2;}    	
		    			break;
		    			case "108fv19_I":
		    			--p.count108I;
		    			if (p.count108I == 0) {p.time108I = 0} else {p.time108I = SOptions.I108.time.T2;}    	
		    			break;
		    			case "121mv23_F":
		    			--p.count121F;
		    			if (p.count121F == 0) {p.time121F = 0} else {p.time121F = SOptions.F121.time.T2;}    	
		    			break;
		    			case "121mv23_I":
		    			--p.count121I;
		    			if (p.count121I == 0) {p.time121I = 0} else {p.time121I = SOptions.I121.time.T2;}    	
		    			break;
		    		}
	    		p.count = p.count013F+p.count013I+p.count040F+p.count040I+p.count061F+p.count061I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count121F+p.count121I; //console.log(p.count+ ": count \n");
				//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    		time = p.time013F+p.time013I+p.time040F+p.time040I+p.time061F+p.time061I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time121F+p.time121I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T3": 
		    		switch (v.SubjectID) {  	    
		    			case "013mv22_F":
		    			--p.count013F;
		    			if (p.count013F == 0) {p.time013F = 0} else {p.time013F = SOptions.F013.time.T3;}    	
		    			break;
		    			case "013mv22_I":
		    			--p.count013I;				
		    			if (p.count013I == 0) {p.time013I = 0} else {p.time013I = SOptions.I013.time.T3;}    	
		    			break;
		    			case "040fv24_F":
		    			--p.count040F;
		    			if (p.count040F == 0) {p.time040F = 0} else {p.time040F = SOptions.F040.time.T3;}    	
		    			break;
		    			case "040fv24_I":
		    			--p.count040I;
		    			if (p.count040I == 0) {p.time040I = 0} else {p.time040I = SOptions.I040.time.T3;}    	
		    			break;
		    			case "061fv19_F":
		    			--p.count061F;
		    			if (p.count061F == 0) {p.time061F = 0} else {p.time061F = SOptions.F061.time.T3;}    	
		    			break;
		    			case "061fv19_I":
		    			--p.count061I;
		    			if (p.count061I == 0) {p.time061I = 0} else {p.time061I = SOptions.I061.time.T3;}    	
		    			break;
		    			case "065mc21_F":
		    			--p.count065F;
		    			if (p.count065F == 0) {p.time065F = 0} else {p.time065F = SOptions.F065.time.T3;}    	
		    			break;
		    			case "065mc21_I":
		    			--p.count065I;
		    			if (p.count065I == 0) {p.time065I = 0} else {p.time065I = SOptions.I065.time.T3;}    	
		    			break;
		    			case "074fc20_F":
		    			--p.count074F;
		    			if (p.count074F == 0) {p.time074F = 0} else {p.time074F = SOptions.F074.time.T3;}    	
		    			break;
		    			case "074fc20_I":
		    			--p.count074I;
		    			if (p.count074I == 0) {p.time074I = 0} else {p.time074I = SOptions.I074.time.T3;}    	
		    			break;
		    			case "077fc20_F":
		    			--p.count077F;
		    			if (p.count077F == 0) {p.time077F = 0} else {p.time077F = SOptions.F077.time.T3;}    	
		    			break;
		    			case "077fc20_I":
		    			--p.count077I;
		    			if (p.count077I == 0) {p.time077I = 0} else {p.time077I = SOptions.I077.time.T3;}    	
		    			break;
		    			case "079mc20_F":
		    			--p.count079F;
		    			if (p.count079F == 0) {p.time079F = 0} else {p.time079F = SOptions.F079.time.T3;}    	
		    			break;
		    			case "079mc20_I":
		    			--p.count079I;
		    			if (p.count079I == 0) {p.time079I = 0} else {p.time079I = SOptions.I079.time.T3;}    	
		    			break;
		    			case "090mc20_F":
		    			--p.count090F;
		    			if (p.count090F == 0) {p.time090F = 0} else {p.time090F = SOptions.F090.time.T3;}    	
		    			break;
		    			case "090mc20_I":
		    			--p.count090I;
		    			if (p.count090I == 0) {p.time090I = 0} else {p.time090I = SOptions.I090.time.T3;}    	
		    			break;
		    			case "108fv19_F":
		    			--p.count108F;
		    			if (p.count108F == 0) {p.time108F = 0} else {p.time108F = SOptions.F108.time.T3;}    	
		    			break;
		    			case "108fv19_I":
		    			--p.count108I;
		    			if (p.count108I == 0) {p.time108I = 0} else {p.time108I = SOptions.I108.time.T3;}    	
		    			break;
		    			case "121mv23_F":
		    			--p.count121F;
		    			if (p.count121F == 0) {p.time121F = 0} else {p.time121F = SOptions.F121.time.T3;}    	
		    			break;
		    			case "121mv23_I":
		    			--p.count121I;
		    			if (p.count121I == 0) {p.time121I = 0} else {p.time121I = SOptions.I121.time.T3;}    	
		    			break;
		    		}
	    		p.count = p.count013F+p.count013I+p.count040F+p.count040I+p.count061F+p.count061I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count121F+p.count121I; //console.log(p.count+ ": count \n");
				//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    		time = p.time013F+p.time013I+p.time040F+p.time040I+p.time061F+p.time061I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time121F+p.time121I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T4":
		    		switch (v.SubjectID) {   	    
		    			case "013mv22_F":
		    			--p.count013F;
		    			if (p.count013F == 0) {p.time013F = 0} else {p.time013F = SOptions.F013.time.T3;}    	
		    			break;
		    			case "013mv22_I":
		    			--p.count013I;				
		    			if (p.count013I == 0) {p.time013I = 0} else {p.time013I = SOptions.I013.time.T3;}    	
		    			break;
		    			case "040fv24_F":
		    			--p.count040F;
		    			if (p.count040F == 0) {p.time040F = 0} else {p.time040F = SOptions.F040.time.T3;}    	
		    			break;
		    			case "040fv24_I":
		    			--p.count040I;
		    			if (p.count040I == 0) {p.time040I = 0} else {p.time040I = SOptions.I040.time.T3;}    	
		    			break;
		    			case "061fv19_F":
		    			--p.count061F;
		    			if (p.count061F == 0) {p.time061F = 0} else {p.time061F = SOptions.F061.time.T3;}    	
		    			break;
		    			case "061fv19_I":
		    			--p.count061I;
		    			if (p.count061I == 0) {p.time061I = 0} else {p.time061I = SOptions.I061.time.T3;}    	
		    			break;
		    			case "065mc21_F":
		    			--p.count065F;
		    			if (p.count065F == 0) {p.time065F = 0} else {p.time065F = SOptions.F065.time.T4;}    	
		    			break;
		    			case "065mc21_I":
		    			--p.count065I;
		    			if (p.count065I == 0) {p.time065I = 0} else {p.time065I = SOptions.I065.time.T4;}    	
		    			break;
		    			case "074fc20_F":
		    			--p.count074F;
		    			if (p.count074F == 0) {p.time074F = 0} else {p.time074F = SOptions.F074.time.T4;}    	
		    			break;
		    			case "074fc20_I":
		    			--p.count074I;
		    			if (p.count074I == 0) {p.time074I = 0} else {p.time074I = SOptions.I074.time.T4;}    	
		    			break;
		    			case "077fc20_F":
		    			--p.count077F;
		    			if (p.count077F == 0) {p.time077F = 0} else {p.time077F = SOptions.F077.time.T4;}    	
		    			break;
		    			case "077fc20_I":
		    			--p.count077I;
		    			if (p.count077I == 0) {p.time077I = 0} else {p.time077I = SOptions.I077.time.T4;}    	
		    			break;
		    			case "079mc20_F":
		    			--p.count079F;
		    			if (p.count079F == 0) {p.time079F = 0} else {p.time079F = SOptions.F079.time.T4;}    	
		    			break;
		    			case "079mc20_I":
		    			--p.count079I;
		    			if (p.count079I == 0) {p.time079I = 0} else {p.time079I = SOptions.I079.time.T4;}    	
		    			break;
		    			case "090mc20_F":
		    			--p.count090F;
		    			if (p.count090F == 0) {p.time090F = 0} else {p.time090F = SOptions.F090.time.T4;}    	
		    			break;
		    			case "090mc20_I":
		    			--p.count090I;
		    			if (p.count090I == 0) {p.time090I = 0} else {p.time090I = SOptions.I090.time.T4;}    	
		    			break;
		    			case "108fv19_F":
		    			--p.count108F;
		    			if (p.count108F == 0) {p.time108F = 0} else {p.time108F = SOptions.F108.time.T4;}    	
		    			break;
		    			case "108fv19_I":
		    			--p.count108I;
		    			if (p.count108I == 0) {p.time108I = 0} else {p.time108I = SOptions.I108.time.T4;}    	
		    			break;
		    			case "121mv23_F":
		    			--p.count121F;
		    			if (p.count121F == 0) {p.time121F = 0} else {p.time121F = SOptions.F121.time.T4;}    	
		    			break;
		    			case "121mv23_I":
		    			--p.count121I;
		    			if (p.count121I == 0) {p.time121I = 0} else {p.time121I = SOptions.I121.time.T4;}    	
		    			break;
		    		}
	    		p.count = p.count013F+p.count013I+p.count040F+p.count040I+p.count061F+p.count061I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count121F+p.count121I; //console.log(p.count+ ": count \n");
				//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    		time = p.time013F+p.time013I+p.time040F+p.time040I+p.time061F+p.time061I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time121F+p.time121I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T5": 
		    		switch (v.SubjectID) {  	    
		    			case "013mv22_F":
		    			--p.count013F;
		    			if (p.count013F == 0) {p.time013F = 0} else {p.time013F = SOptions.F013.time.T5;}    	
		    			break;
		    			case "013mv22_I":
		    			--p.count013I;				
		    			if (p.count013I == 0) {p.time013I = 0} else {p.time013I = SOptions.I013.time.T5;}    	
		    			break;
		    			case "040fv24_F":
		    			--p.count040F;
		    			if (p.count040F == 0) {p.time040F = 0} else {p.time040F = SOptions.F040.time.T5;}    	
		    			break;
		    			case "040fv24_I":
		    			--p.count040I;
		    			if (p.count040I == 0) {p.time040I = 0} else {p.time040I = SOptions.I040.time.T5;}    	
		    			break;
		    			case "061fv19_F":
		    			--p.count061F;
		    			if (p.count061F == 0) {p.time061F = 0} else {p.time061F = SOptions.F061.time.T5;}    	
		    			break;
		    			case "061fv19_I":
		    			--p.count061I;
		    			if (p.count061I == 0) {p.time061I = 0} else {p.time061I = SOptions.I061.time.T5;}    	
		    			break;
		    			case "065mc21_F":
		    			--p.count065F;
		    			if (p.count065F == 0) {p.time065F = 0} else {p.time065F = SOptions.F065.time.T5;}    	
		    			break;
		    			case "065mc21_I":
		    			--p.count065I;
		    			if (p.count065I == 0) {p.time065I = 0} else {p.time065I = SOptions.I065.time.T5;}    	
		    			break;
		    			case "074fc20_F":
		    			--p.count074F;
		    			if (p.count074F == 0) {p.time074F = 0} else {p.time074F = SOptions.F074.time.T5;}    	
		    			break;
		    			case "074fc20_I":
		    			--p.count074I;
		    			if (p.count074I == 0) {p.time074I = 0} else {p.time074I = SOptions.I074.time.T5;}    	
		    			break;
		    			case "077fc20_F":
		    			--p.count077F;
		    			if (p.count077F == 0) {p.time077F = 0} else {p.time077F = SOptions.F077.time.T5;}    	
		    			break;
		    			case "077fc20_I":
		    			--p.count077I;
		    			if (p.count077I == 0) {p.time077I = 0} else {p.time077I = SOptions.I077.time.T5;}    	
		    			break;
		    			case "079mc20_F":
		    			--p.count079F;
		    			if (p.count079F == 0) {p.time079F = 0} else {p.time079F = SOptions.F079.time.T5;}    	
		    			break;
		    			case "079mc20_I":
		    			--p.count079I;
		    			if (p.count079I == 0) {p.time079I = 0} else {p.time079I = SOptions.I079.time.T5;}    	
		    			break;
		    			case "090mc20_F":
		    			--p.count090F;
		    			if (p.count090F == 0) {p.time090F = 0} else {p.time090F = SOptions.F090.time.T5;}    	
		    			break;
		    			case "090mc20_I":
		    			--p.count090I;
		    			if (p.count090I == 0) {p.time090I = 0} else {p.time090I = SOptions.I090.time.T5;}    	
		    			break;
		    			case "108fv19_F":
		    			--p.count108F;
		    			if (p.count108F == 0) {p.time108F = 0} else {p.time108F = SOptions.F108.time.T5;}    	
		    			break;
		    			case "108fv19_I":
		    			--p.count108I;
		    			if (p.count108I == 0) {p.time108I = 0} else {p.time108I = SOptions.I108.time.T5;}    	
		    			break;
		    			case "121mv23_F":
		    			--p.count121F;
		    			if (p.count121F == 0) {p.time121F = 0} else {p.time121F = SOptions.F121.time.T5;}    	
		    			break;
		    			case "121mv23_I":
		    			--p.count121I;
		    			if (p.count121I == 0) {p.time121I = 0} else {p.time121I = SOptions.I121.time.T5;}    	
		    			break;
		    		}
	    		p.count = p.count013F+p.count013I+p.count040F+p.count040I+p.count061F+p.count061I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count121F+p.count121I; //console.log(p.count+ ": count \n");
				//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    		time = p.time013F+p.time013I+p.time040F+p.time040I+p.time061F+p.time061I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time121F+p.time121I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T6":
		    		switch (v.SubjectID) {  	    
		    			case "013mv22_F":
		    			--p.count013F;
		    			if (p.count013F == 0) {p.time013F = 0} else {p.time013F = SOptions.F013.time.T6;}    	
		    			break;
		    			case "013mv22_I":
		    			--p.count013I;				
		    			if (p.count013I == 0) {p.time013I = 0} else {p.time013I = SOptions.I013.time.T6;}    	
		    			break;
		    			case "040fv24_F":
		    			--p.count040F;
		    			if (p.count040F == 0) {p.time040F = 0} else {p.time040F = SOptions.F040.time.T6;}    	
		    			break;
		    			case "040fv24_I":
		    			--p.count040I;
		    			if (p.count040I == 0) {p.time040I = 0} else {p.time040I = SOptions.I040.time.T6;}    	
		    			break;
		    			case "061fv19_F":
		    			--p.count061F;
		    			if (p.count061F == 0) {p.time061F = 0} else {p.time061F = SOptions.F061.time.T6;}    	
		    			break;
		    			case "061fv19_I":
		    			--p.count061I;
		    			if (p.count061I == 0) {p.time061I = 0} else {p.time061I = SOptions.I061.time.T6;}    	
		    			break;
		    			case "065mc21_F":
		    			--p.count065F;
		    			if (p.count065F == 0) {p.time065F = 0} else {p.time065F = SOptions.F065.time.T6;}    	
		    			break;
		    			case "065mc21_I":
		    			--p.count065I;
		    			if (p.count065I == 0) {p.time065I = 0} else {p.time065I = SOptions.I065.time.T6;}    	
		    			break;
		    			case "074fc20_F":
		    			--p.count074F;
		    			if (p.count074F == 0) {p.time074F = 0} else {p.time074F = SOptions.F074.time.T6;}    	
		    			break;
		    			case "074fc20_I":
		    			--p.count074I;
		    			if (p.count074I == 0) {p.time074I = 0} else {p.time074I = SOptions.I074.time.T6;}    	
		    			break;
		    			case "077fc20_F":
		    			--p.count077F;
		    			if (p.count077F == 0) {p.time077F = 0} else {p.time077F = SOptions.F077.time.T6;}    	
		    			break;
		    			case "077fc20_I":
		    			--p.count077I;
		    			if (p.count077I == 0) {p.time077I = 0} else {p.time077I = SOptions.I077.time.T5;}    	
		    			break;
		    			case "079mc20_F":
		    			--p.count079F;
		    			if (p.count079F == 0) {p.time079F = 0} else {p.time079F = SOptions.F079.time.T5;}    	
		    			break;
		    			case "079mc20_I":
		    			--p.count079I;
		    			if (p.count079I == 0) {p.time079I = 0} else {p.time079I = SOptions.I079.time.T5;}    	
		    			break;
		    			case "090mc20_F":
		    			--p.count090F;
		    			if (p.count090F == 0) {p.time090F = 0} else {p.time090F = SOptions.F090.time.T5;}    	
		    			break;
		    			case "090mc20_I":
		    			--p.count090I;
		    			if (p.count090I == 0) {p.time090I = 0} else {p.time090I = SOptions.I090.time.T5;}    	
		    			break;
		    			case "108fv19_F":
		    			--p.count108F;
		    			if (p.count108F == 0) {p.time108F = 0} else {p.time108F = SOptions.F108.time.T5;}    	
		    			break;
		    			case "108fv19_I":
		    			--p.count108I;
		    			if (p.count108I == 0) {p.time108I = 0} else {p.time108I = SOptions.I108.time.T5;}    	
		    			break;
		    			case "121mv23_F":
		    			--p.count121F;
		    			if (p.count121F == 0) {p.time121F = 0} else {p.time121F = SOptions.F121.time.T5;}    	
		    			break;
		    			case "121mv23_I":
		    			--p.count121I;
		    			if (p.count121I == 0) {p.time121I = 0} else {p.time121I = SOptions.I121.time.T5;}    	
		    			break;
		    		}
	    		p.count = p.count013F+p.count013I+p.count040F+p.count040I+p.count061F+p.count061I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count121F+p.count121I; //console.log(p.count+ ": count \n");
				//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    		time = p.time013F+p.time013I+p.time040F+p.time040I+p.time061F+p.time061I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time121F+p.time121I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");    		
	    		break;
	    		case "T7":
		    		switch (v.SubjectID) {  	    
		    			case "013mv22_F":
		    			--p.count013F;
		    			if (p.count013F == 0) {p.time013F = 0} else {p.time013F = SOptions.F013.time.T7;}    	
		    			break;
		    			case "013mv22_I":
		    			--p.count013I;				
		    			if (p.count013I == 0) {p.time013I = 0} else {p.time013I = SOptions.I013.time.T7;}    	
		    			break;
		    			case "040fv24_F":
		    			--p.count040F;
		    			if (p.count040F == 0) {p.time040F = 0} else {p.time040F = SOptions.F040.time.T7;}    	
		    			break;
		    			case "040fv24_I":
		    			--p.count040I;
		    			if (p.count040I == 0) {p.time040I = 0} else {p.time040I = SOptions.I040.time.T7;}    	
		    			break;
		    			case "061fv19_F":
		    			--p.count061F;
		    			if (p.count061F == 0) {p.time061F = 0} else {p.time061F = SOptions.F061.time.T7;}    	
		    			break;
		    			case "061fv19_I":
		    			--p.count061I;
		    			if (p.count061I == 0) {p.time061I = 0} else {p.time061I = SOptions.I061.time.T7;}    	
		    			break;
		    			case "065mc21_F":
		    			--p.count065F;
		    			if (p.count065F == 0) {p.time065F = 0} else {p.time065F = SOptions.F065.time.T7;}    	
		    			break;
		    			case "065mc21_I":
		    			--p.count065I;
		    			if (p.count065I == 0) {p.time065I = 0} else {p.time065I = SOptions.I065.time.T7;}    	
		    			break;
		    			case "074fc20_F":
		    			--p.count074F;
		    			if (p.count074F == 0) {p.time074F = 0} else {p.time074F = SOptions.F074.time.T7;}    	
		    			break;
		    			case "074fc20_I":
		    			--p.count074I;
		    			if (p.count074I == 0) {p.time074I = 0} else {p.time074I = SOptions.I074.time.T7;}    	
		    			break;
		    			case "077fc20_F":
		    			--p.count077F;
		    			if (p.count077F == 0) {p.time077F = 0} else {p.time077F = SOptions.F077.time.T7;}    	
		    			break;
		    			case "077fc20_I":
		    			--p.count077I;
		    			if (p.count077I == 0) {p.time077I = 0} else {p.time077I = SOptions.I077.time.T7;}    	
		    			break;
		    			case "079mc20_F":
		    			--p.count079F;
		    			if (p.count079F == 0) {p.time079F = 0} else {p.time079F = SOptions.F079.time.T7;}    	
		    			break;
		    			case "079mc20_I":
		    			--p.count079I;
		    			if (p.count079I == 0) {p.time079I = 0} else {p.time079I = SOptions.I079.time.T7;}    	
		    			break;
		    			case "090mc20_F":
		    			--p.count090F;
		    			if (p.count090F == 0) {p.time090F = 0} else {p.time090F = SOptions.F090.time.T7;}    	
		    			break;
		    			case "090mc20_I":
		    			--p.count090I;
		    			if (p.count090I == 0) {p.time090I = 0} else {p.time090I = SOptions.I090.time.T7;}    	
		    			break;
		    			case "108fv19_F":
		    			--p.count108F;
		    			if (p.count108F == 0) {p.time108F = 0} else {p.time108F = SOptions.F108.time.T7;}    	
		    			break;
		    			case "108fv19_I":
		    			--p.count108I;
		    			if (p.count108I == 0) {p.time108I = 0} else {p.time108I = SOptions.I108.time.T7;}    	
		    			break;
		    			case "121mv23_F":
		    			--p.count121F;
		    			if (p.count121F == 0) {p.time121F = 0} else {p.time121F = SOptions.F121.time.T7;}    	
		    			break;
		    			case "121mv23_I":
		    			--p.count121I;
		    			if (p.count121I == 0) {p.time121I = 0} else {p.time121I = SOptions.I121.time.T7;}    	
		    			break;
		    		}
	    		p.count = p.count013F+p.count013I+p.count040F+p.count040I+p.count061F+p.count061I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count121F+p.count121I; //console.log(p.count+ ": count \n");
				//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    		time = p.time013F+p.time013I+p.time040F+p.time040I+p.time061F+p.time061I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time121F+p.time121I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T8":
		    		switch (v.SubjectID) {  	    
		    			case "013mv22_F":
		    			--p.count013F;
		    			if (p.count013F == 0) {p.time013F = 0} else {p.time013F = SOptions.F013.time.T5;}    	
		    			break;
		    			case "013mv22_I":
		    			--p.count013I;				
		    			if (p.count013I == 0) {p.time013I = 0} else {p.time013I = SOptions.I013.time.T8;}    	
		    			break;
		    			case "040fv24_F":
		    			--p.count040F;
		    			if (p.count040F == 0) {p.time040F = 0} else {p.time040F = SOptions.F040.time.T8;}    	
		    			break;
		    			case "040fv24_I":
		    			--p.count040I;
		    			if (p.count040I == 0) {p.time040I = 0} else {p.time040I = SOptions.I040.time.T8;}    	
		    			break;
		    			case "061fv19_F":
		    			--p.count061F;
		    			if (p.count061F == 0) {p.time061F = 0} else {p.time061F = SOptions.F061.time.T8;}    	
		    			break;
		    			case "061fv19_I":
		    			--p.count061I;
		    			if (p.count061I == 0) {p.time061I = 0} else {p.time061I = SOptions.I061.time.T8;}    	
		    			break;
		    			case "065mc21_F":
		    			--p.count065F;
		    			if (p.count065F == 0) {p.time065F = 0} else {p.time065F = SOptions.F065.time.T8;}    	
		    			break;
		    			case "065mc21_I":
		    			--p.count065I;
		    			if (p.count065I == 0) {p.time065I = 0} else {p.time065I = SOptions.I065.time.T8;}    	
		    			break;
		    			case "074fc20_F":
		    			--p.count074F;
		    			if (p.count074F == 0) {p.time074F = 0} else {p.time074F = SOptions.F074.time.T8;}    	
		    			break;
		    			case "074fc20_I":
		    			--p.count074I;
		    			if (p.count074I == 0) {p.time074I = 0} else {p.time074I = SOptions.I074.time.T8;}    	
		    			break;
		    			case "077fc20_F":
		    			--p.count077F;
		    			if (p.count077F == 0) {p.time077F = 0} else {p.time077F = SOptions.F077.time.T8;}    	
		    			break;
		    			case "077fc20_I":
		    			--p.count077I;
		    			if (p.count077I == 0) {p.time077I = 0} else {p.time077I = SOptions.I077.time.T8;}    	
		    			break;
		    			case "079mc20_F":
		    			--p.count079F;
		    			if (p.count079F == 0) {p.time079F = 0} else {p.time079F = SOptions.F079.time.T8;}    	
		    			break;
		    			case "079mc20_I":
		    			--p.count079I;
		    			if (p.count079I == 0) {p.time079I = 0} else {p.time079I = SOptions.I079.time.T8;}    	
		    			break;
		    			case "090mc20_F":
		    			--p.count090F;
		    			if (p.count090F == 0) {p.time090F = 0} else {p.time090F = SOptions.F090.time.T8;}    	
		    			break;
		    			case "090mc20_I":
		    			--p.count090I;
		    			if (p.count090I == 0) {p.time090I = 0} else {p.time090I = SOptions.I090.time.T8;}    	
		    			break;
		    			case "108fv19_F":
		    			--p.count108F;
		    			if (p.count108F == 0) {p.time108F = 0} else {p.time108F = SOptions.F108.time.T8;}    	
		    			break;
		    			case "108fv19_I":
		    			--p.count108I;
		    			if (p.count108I == 0) {p.time108I = 0} else {p.time108I = SOptions.I108.time.T8;}    	
		    			break;
		    			case "121mv23_F":
		    			--p.count121F;
		    			if (p.count121F == 0) {p.time121F = 0} else {p.time121F = SOptions.F121.time.T8;}    	
		    			break;
		    			case "121mv23_I":
		    			--p.count121I;
		    			if (p.count121I == 0) {p.time121I = 0} else {p.time121I = SOptions.I121.time.T8;}    	
		    			break;
		    		}
	    		p.count = p.count013F+p.count013I+p.count040F+p.count040I+p.count061F+p.count061I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count121F+p.count121I; //console.log(p.count+ ": count \n");
				//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    		time = p.time013F+p.time013I+p.time040F+p.time040I+p.time061F+p.time061I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time121F+p.time121I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T9":
		    		switch (v.SubjectID) {  	    
		    			case "013mv22_F":
		    			--p.count013F;
		    			if (p.count013F == 0) {p.time013F = 0} else {p.time013F = SOptions.F013.time.T9;}    	
		    			break;
		    			case "013mv22_I":
		    			--p.count013I;				
		    			if (p.count013I == 0) {p.time013I = 0} else {p.time013I = SOptions.I013.time.T9;}    	
		    			break;
		    			case "040fv24_F":
		    			--p.count040F;
		    			if (p.count040F == 0) {p.time040F = 0} else {p.time040F = SOptions.F040.time.T9;}    	
		    			break;
		    			case "040fv24_I":
		    			--p.count040I;
		    			if (p.count040I == 0) {p.time040I = 0} else {p.time040I = SOptions.I040.time.T9;}    	
		    			break;
		    			case "061fv19_F":
		    			--p.count061F;
		    			if (p.count061F == 0) {p.time061F = 0} else {p.time061F = SOptions.F061.time.T9;}    	
		    			break;
		    			case "061fv19_I":
		    			--p.count061I;
		    			if (p.count061I == 0) {p.time061I = 0} else {p.time061I = SOptions.I061.time.T9;}    	
		    			break;
		    			case "065mc21_F":
		    			--p.count065F;
		    			if (p.count065F == 0) {p.time065F = 0} else {p.time065F = SOptions.F065.time.T9;}    	
		    			break;
		    			case "065mc21_I":
		    			--p.count065I;
		    			if (p.count065I == 0) {p.time065I = 0} else {p.time065I = SOptions.I065.time.T9;}    	
		    			break;
		    			case "074fc20_F":
		    			--p.count074F;
		    			if (p.count074F == 0) {p.time074F = 0} else {p.time074F = SOptions.F074.time.T9;}    	
		    			break;
		    			case "074fc20_I":
		    			--p.count074I;
		    			if (p.count074I == 0) {p.time074I = 0} else {p.time074I = SOptions.I074.time.T9;}    	
		    			break;
		    			case "077fc20_F":
		    			--p.count077F;
		    			if (p.count077F == 0) {p.time077F = 0} else {p.time077F = SOptions.F077.time.T9;}    	
		    			break;
		    			case "077fc20_I":
		    			--p.count077I;
		    			if (p.count077I == 0) {p.time077I = 0} else {p.time077I = SOptions.I077.time.T9;}    	
		    			break;
		    			case "079mc20_F":
		    			--p.count079F;
		    			if (p.count079F == 0) {p.time079F = 0} else {p.time079F = SOptions.F079.time.T9;}    	
		    			break;
		    			case "079mc20_I":
		    			--p.count079I;
		    			if (p.count079I == 0) {p.time079I = 0} else {p.time079I = SOptions.I079.time.T9;}    	
		    			break;
		    			case "090mc20_F":
		    			--p.count090F;
		    			if (p.count090F == 0) {p.time090F = 0} else {p.time090F = SOptions.F090.time.T9;}    	
		    			break;
		    			case "090mc20_I":
		    			--p.count090I;
		    			if (p.count090I == 0) {p.time090I = 0} else {p.time090I = SOptions.I090.time.T9;}    	
		    			break;
		    			case "108fv19_F":
		    			--p.count108F;
		    			if (p.count108F == 0) {p.time108F = 0} else {p.time108F = SOptions.F108.time.T9;}    	
		    			break;
		    			case "108fv19_I":
		    			--p.count108I;
		    			if (p.count108I == 0) {p.time108I = 0} else {p.time108I = SOptions.I108.time.T9;}    	
		    			break;
		    			case "121mv23_F":
		    			--p.count121F;
		    			if (p.count121F == 0) {p.time121F = 0} else {p.time121F = SOptions.F121.time.T9;}    	
		    			break;
		    			case "121mv23_I":
		    			--p.count121I;
		    			if (p.count121I == 0) {p.time121I = 0} else {p.time121I = SOptions.I121.time.T9;}    	
		    			break;
		    		}
	    		p.count = p.count013F+p.count013I+p.count040F+p.count040I+p.count061F+p.count061I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count121F+p.count121I; //console.log(p.count+ ": count \n");
				//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    		time = p.time013F+p.time013I+p.time040F+p.time040I+p.time061F+p.time061I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time121F+p.time121I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T10": 
		    		switch (v.SubjectID) {  	    
		    			case "013mv22_F":
		    			--p.count013F;
		    			if (p.count013F == 0) {p.time013F = 0} else {p.time013F = SOptions.F013.time.T10;}    	
		    			break;
		    			case "013mv22_I":
		    			--p.count013I;				
		    			if (p.count013I == 0) {p.time013I = 0} else {p.time013I = SOptions.I013.time.T10;}    	
		    			break;
		    			case "040fv24_F":
		    			--p.count040F;
		    			if (p.count040F == 0) {p.time040F = 0} else {p.time040F = SOptions.F040.time.T10;}    	
		    			break;
		    			case "040fv24_I":
		    			--p.count040I;
		    			if (p.count040I == 0) {p.time040I = 0} else {p.time040I = SOptions.I040.time.T10;}    	
		    			break;
		    			case "061fv19_F":
		    			--p.count061F;
		    			if (p.count061F == 0) {p.time061F = 0} else {p.time061F = SOptions.F061.time.T10;}    	
		    			break;
		    			case "061fv19_I":
		    			--p.count061I;
		    			if (p.count061I == 0) {p.time061I = 0} else {p.time061I = SOptions.I061.time.T10;}    	
		    			break;
		    			case "065mc21_F":
		    			--p.count065F;
		    			if (p.count065F == 0) {p.time065F = 0} else {p.time065F = SOptions.F065.time.T10;}    	
		    			break;
		    			case "065mc21_I":
		    			--p.count065I;
		    			if (p.count065I == 0) {p.time065I = 0} else {p.time065I = SOptions.I065.time.T10;}    	
		    			break;
		    			case "074fc20_F":
		    			--p.count074F;
		    			if (p.count074F == 0) {p.time074F = 0} else {p.time074F = SOptions.F074.time.T10;}    	
		    			break;
		    			case "074fc20_I":
		    			--p.count074I;
		    			if (p.count074I == 0) {p.time074I = 0} else {p.time074I = SOptions.I074.time.T10;}    	
		    			break;
		    			case "077fc20_F":
		    			--p.count077F;
		    			if (p.count077F == 0) {p.time077F = 0} else {p.time077F = SOptions.F077.time.T10;}    	
		    			break;
		    			case "077fc20_I":
		    			--p.count077I;
		    			if (p.count077I == 0) {p.time077I = 0} else {p.time077I = SOptions.I077.time.T10;}    	
		    			break;
		    			case "079mc20_F":
		    			--p.count079F;
		    			if (p.count079F == 0) {p.time079F = 0} else {p.time079F = SOptions.F079.time.T10;}    	
		    			break;
		    			case "079mc20_I":
		    			--p.count079I;
		    			if (p.count079I == 0) {p.time079I = 0} else {p.time079I = SOptions.I079.time.T10;}    	
		    			break;
		    			case "090mc20_F":
		    			--p.count090F;
		    			if (p.count090F == 0) {p.time090F = 0} else {p.time090F = SOptions.F090.time.T10;}    	
		    			break;
		    			case "090mc20_I":
		    			--p.count090I;
		    			if (p.count090I == 0) {p.time090I = 0} else {p.time090I = SOptions.I090.time.T10;}    	
		    			break;
		    			case "108fv19_F":
		    			--p.count108F;
		    			if (p.count108F == 0) {p.time108F = 0} else {p.time108F = SOptions.F108.time.T10;}    	
		    			break;
		    			case "108fv19_I":
		    			--p.count108I;
		    			if (p.count108I == 0) {p.time108I = 0} else {p.time108I = SOptions.I108.time.T10;}    	
		    			break;
		    			case "121mv23_F":
		    			--p.count121F;
		    			if (p.count121F == 0) {p.time121F = 0} else {p.time121F = SOptions.F121.time.T10;}    	
		    			break;
		    			case "121mv23_I":
		    			--p.count121I;
		    			if (p.count121I == 0) {p.time121I = 0} else {p.time121I = SOptions.I121.time.T10;}    	
		    			break;
		    		}
	    		p.count = p.count013F+p.count013I+p.count040F+p.count040I+p.count061F+p.count061I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count121F+p.count121I; //console.log(p.count+ ": count \n");
				//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    		time = p.time013F+p.time013I+p.time040F+p.time040I+p.time061F+p.time061I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time121F+p.time121I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T11":
		    		switch (v.SubjectID) {  	    
		    			case "013mv22_F":
		    			--p.count013F;
		    			if (p.count013F == 0) {p.time013F = 0} else {p.time013F = SOptions.F013.time.T11;}    	
		    			break;
		    			case "013mv22_I":
		    			--p.count013I;				
		    			if (p.count013I == 0) {p.time013I = 0} else {p.time013I = SOptions.I013.time.T11;}    	
		    			break;
		    			case "040fv24_F":
		    			--p.count040F;
		    			if (p.count040F == 0) {p.time040F = 0} else {p.time040F = SOptions.F040.time.T11;}    	
		    			break;
		    			case "040fv24_I":
		    			--p.count040I;
		    			if (p.count040I == 0) {p.time040I = 0} else {p.time040I = SOptions.I040.time.T11;}    	
		    			break;
		    			case "061fv19_F":
		    			--p.count061F;
		    			if (p.count061F == 0) {p.time061F = 0} else {p.time061F = SOptions.F061.time.T11;}    	
		    			break;
		    			case "061fv19_I":
		    			--p.count061I;
		    			if (p.count061I == 0) {p.time061I = 0} else {p.time061I = SOptions.I061.time.T11;}    	
		    			break;
		    			case "065mc21_F":
		    			--p.count065F;
		    			if (p.count065F == 0) {p.time065F = 0} else {p.time065F = SOptions.F065.time.T11;}    	
		    			break;
		    			case "065mc21_I":
		    			--p.count065I;
		    			if (p.count065I == 0) {p.time065I = 0} else {p.time065I = SOptions.I065.time.T11;}    	
		    			break;
		    			case "074fc20_F":
		    			--p.count074F;
		    			if (p.count074F == 0) {p.time074F = 0} else {p.time074F = SOptions.F074.time.T11;}    	
		    			break;
		    			case "074fc20_I":
		    			--p.count074I;
		    			if (p.count074I == 0) {p.time074I = 0} else {p.time074I = SOptions.I074.time.T11;}    	
		    			break;
		    			case "077fc20_F":
		    			--p.count077F;
		    			if (p.count077F == 0) {p.time077F = 0} else {p.time077F = SOptions.F077.time.T11;}    	
		    			break;
		    			case "077fc20_I":
		    			--p.count077I;
		    			if (p.count077I == 0) {p.time077I = 0} else {p.time077I = SOptions.I077.time.T11;}    	
		    			break;
		    			case "079mc20_F":
		    			--p.count079F;
		    			if (p.count079F == 0) {p.time079F = 0} else {p.time079F = SOptions.F079.time.T11;}    	
		    			break;
		    			case "079mc20_I":
		    			--p.count079I;
		    			if (p.count079I == 0) {p.time079I = 0} else {p.time079I = SOptions.I079.time.T11;}    	
		    			break;
		    			case "090mc20_F":
		    			--p.count090F;
		    			if (p.count090F == 0) {p.time090F = 0} else {p.time090F = SOptions.F090.time.T11;}    	
		    			break;
		    			case "090mc20_I":
		    			--p.count090I;
		    			if (p.count090I == 0) {p.time090I = 0} else {p.time090I = SOptions.I090.time.T11;}    	
		    			break;
		    			case "108fv19_F":
		    			--p.count108F;
		    			if (p.count108F == 0) {p.time108F = 0} else {p.time108F = SOptions.F108.time.T11;}    	
		    			break;
		    			case "108fv19_I":
		    			--p.count108I;
		    			if (p.count108I == 0) {p.time108I = 0} else {p.time108I = SOptions.I108.time.T11;}    	
		    			break;
		    			case "121mv23_F":
		    			--p.count121F;
		    			if (p.count121F == 0) {p.time121F = 0} else {p.time121F = SOptions.F121.time.T11;}    	
		    			break;
		    			case "121mv23_I":
		    			--p.count121I;
		    			if (p.count121I == 0) {p.time121I = 0} else {p.time121I = SOptions.I121.time.T11;}    	
		    			break;
		    		}
	    		p.count = p.count013F+p.count013I+p.count040F+p.count040I+p.count061F+p.count061I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count121F+p.count121I; //console.log(p.count+ ": count \n");
				//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    		time = p.time013F+p.time013I+p.time040F+p.time040I+p.time061F+p.time061I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time121F+p.time121I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    	}	
	    return p;
	}

	function reduceInitial() {
	    return {
	        time013F: 0, time040F: 0, time061F: 0, time065F: 0, time074F: 0, time077F: 0, time079F: 0, time090F: 0, time108F: 0, time121F: 0, time013I: 0, time040I: 0, time061I: 0, time065I: 0, time074I: 0, time077I: 0, time079I: 0, time090I: 0, time108I: 0, time121I: 0, count013F: 0, count040F: 0, count061F: 0, count065F: 0, count074F: 0, count077F: 0, count079F: 0, count090F: 0, count108F: 0, count121F: 0, count013I: 0, count040I: 0, count061I: 0, count065I: 0, count074I: 0, count077I: 0, count079I: 0, count090I: 0, count108I: 0, count121I: 0, 
	        count:0, 
	        freq: 0
	    };
	}

	function reduceGenInitial() {
	    return {
	    	time013F: 0, time040F: 0, time061F: 0, time065F: 0, time074F: 0, time077F: 0, time079F: 0, time090F: 0, time108F: 0, time121F: 0, time013I: 0, time040I: 0, time061I: 0, time065I: 0, time074I: 0, time077I: 0, time079I: 0, time090I: 0, time108I: 0, time121I: 0,
	    	time013FT1: 0, time013FT2: 0, time013FT3: 0, time013FT4: 0, time013FT5: 0, time013FT6: 0, time013FT7: 0, time013FT8: 0, time013FT9: 0, time013FT10: 0, time013FT11: 0,
	    	time040FT1: 0, time040FT2: 0, time040FT3: 0, time040FT4: 0, time040FT5: 0, time040FT6: 0, time040FT7: 0, time040FT8: 0, time040FT9: 0, time040FT10: 0, time040FT11: 0,
	    	time061FT1: 0, time061FT2: 0, time061FT3: 0, time061FT4: 0, time061FT5: 0, time061FT6: 0, time061FT7: 0, time061FT8: 0, time061FT9: 0, time061FT10: 0, time061FT11: 0,
	    	time065FT1: 0, time065FT2: 0, time065FT3: 0, time065FT4: 0, time065FT5: 0, time065FT6: 0, time065FT7: 0, time065FT8: 0, time065FT9: 0, time065FT10: 0, time065FT11: 0,
	    	time074FT1: 0, time074FT2: 0, time074FT3: 0, time074FT4: 0, time074FT5: 0, time074FT6: 0, time074FT7: 0, time074FT8: 0, time074FT9: 0, time074FT10: 0, time074FT11: 0,
	    	time077FT1: 0, time077FT2: 0, time077FT3: 0, time077FT4: 0, time077FT5: 0, time077FT6: 0, time077FT7: 0, time077FT8: 0, time077FT9: 0, time077FT10: 0, time077FT11: 0,
	    	time079FT1: 0, time079FT2: 0, time079FT3: 0, time079FT4: 0, time079FT5: 0, time079FT6: 0, time079FT7: 0, time079FT8: 0, time079FT9: 0, time079FT10: 0, time079FT11: 0,
	    	time090FT1: 0, time090FT2: 0, time090FT3: 0, time090FT4: 0, time090FT5: 0, time090FT6: 0, time090FT7: 0, time090FT8: 0, time090FT9: 0, time090FT10: 0, time090FT11: 0,
	    	time108FT1: 0, time108FT2: 0, time108FT3: 0, time108FT4: 0, time108FT5: 0, time108FT6: 0, time108FT7: 0, time108FT8: 0, time108FT9: 0, time108FT10: 0, time108FT11: 0,
	    	time121FT1: 0, time121FT2: 0, time121FT3: 0, time121FT4: 0, time121FT5: 0, time121FT6: 0, time121FT7: 0, time121FT8: 0, time121FT9: 0, time121FT10: 0, time121FT11: 0,
	    	time013IT1: 0, time013IT2: 0, time013IT3: 0, time013IT4: 0, time013IT5: 0, time013IT6: 0, time013IT7: 0, time013IT8: 0, time013IT9: 0, time013IT10: 0, time013IT11: 0,
	    	time040IT1: 0, time040IT2: 0, time040IT3: 0, time040IT4: 0, time040IT5: 0, time040IT6: 0, time040IT7: 0, time040IT8: 0, time040IT9: 0, time040IT10: 0, time040IT11: 0,
	    	time061IT1: 0, time061IT2: 0, time061IT3: 0, time061IT4: 0, time061IT5: 0, time061IT6: 0, time061IT7: 0, time061IT8: 0, time061IT9: 0, time061IT10: 0, time061IT11: 0,
	    	time065IT1: 0, time065IT2: 0, time065IT3: 0, time065IT4: 0, time065IT5: 0, time065IT6: 0, time065IT7: 0, time065IT8: 0, time065IT9: 0, time065IT10: 0, time065IT11: 0,
	    	time074IT1: 0, time074IT2: 0, time074IT3: 0, time074IT4: 0, time074IT5: 0, time074IT6: 0, time074IT7: 0, time074IT8: 0, time074IT9: 0, time074IT10: 0, time074IT11: 0,
	    	time077IT1: 0, time077IT2: 0, time077IT3: 0, time077IT4: 0, time077IT5: 0, time077IT6: 0, time077IT7: 0, time077IT8: 0, time077IT9: 0, time077IT10: 0, time077IT11: 0,
	    	time079IT1: 0, time079IT2: 0, time079IT3: 0, time079IT4: 0, time079IT5: 0, time079IT6: 0, time079IT7: 0, time079IT8: 0, time079IT9: 0, time079IT10: 0, time079IT11: 0,
	    	time090IT1: 0, time090IT2: 0, time090IT3: 0, time090IT4: 0, time090IT5: 0, time090IT6: 0, time090IT7: 0, time090IT8: 0, time090IT9: 0, time090IT10: 0, time090IT11: 0,
	    	time108IT1: 0, time108IT2: 0, time108IT3: 0, time108IT4: 0, time108IT5: 0, time108IT6: 0, time108IT7: 0, time108IT8: 0, time108IT9: 0, time108IT10: 0, time108IT11: 0,
	    	time121IT1: 0, time121IT2: 0, time121IT3: 0, time121IT4: 0, time121IT5: 0, time121IT6: 0, time121IT7: 0, time121IT8: 0, time121IT9: 0, time121IT10: 0, time121IT11: 0,
	    	
	    	count013F: 0, count040F: 0, count061F: 0, count065F: 0, count074F: 0, count077F: 0, count079F: 0, count090F: 0, count108F: 0, count121F: 0, count013I: 0, count040I: 0, count061I: 0, count065I: 0, count074I: 0, count077I: 0, count079I: 0, count090I: 0, count108I: 0, count121I: 0, 
	    	count013FT1: 0, count013FT2: 0, count013FT3: 0, count013FT4: 0, count013FT5: 0, count013FT6: 0, count013FT7: 0,	count013FT8: 0,	count013FT9: 0,	count013FT10: 0, count013FT11: 0,  
	    	count040FT1: 0, count040FT2: 0, count040FT3: 0, count040FT4: 0, count040FT5: 0, count040FT6: 0, count040FT7: 0,	count040FT8: 0,	count040FT9: 0,	count040FT10: 0, count040FT11: 0, 	        
	    	count061FT1: 0, count061FT2: 0, count061FT3: 0, count061FT4: 0, count061FT5: 0, count061FT6: 0, count061FT7: 0,	count061FT8: 0,	count061FT9: 0,	count061FT10: 0, count061FT11: 0, 
	    	count065FT1: 0, count065FT2: 0, count065FT3: 0, count065FT4: 0, count065FT5: 0, count065FT6: 0, count065FT7: 0,	count065FT8: 0,	count065FT9: 0,	count065FT10: 0, count065FT11: 0, 
	    	count074FT1: 0, count074FT2: 0, count074FT3: 0, count074FT4: 0, count074FT5: 0, count074FT6: 0, count074FT7: 0,	count074FT8: 0,	count074FT9: 0,	count074FT10: 0, count074FT11: 0, 
	    	count077FT1: 0, count077FT2: 0, count077FT3: 0, count077FT4: 0, count077FT5: 0, count077FT6: 0, count077FT7: 0,	count077FT8: 0,	count077FT9: 0,	count077FT10: 0, count077FT11: 0,
	    	count079FT1: 0, count079FT2: 0, count079FT3: 0, count079FT4: 0, count079FT5: 0, count079FT6: 0, count079FT7: 0,	count079FT8: 0,	count079FT9: 0,	count079FT10: 0, count079FT11: 0, 
	    	count090FT1: 0, count090FT2: 0, count090FT3: 0, count090FT4: 0, count090FT5: 0, count090FT6: 0, count090FT7: 0,	count090FT8: 0,	count090FT9: 0,	count090FT10: 0, count090FT11: 0, 	
	    	count108FT1: 0, count108FT2: 0, count108FT3: 0, count108FT4: 0, count108FT5: 0, count108FT6: 0, count108FT7: 0,	count108FT8: 0,	count108FT9: 0,	count108FT10: 0, count108FT11: 0, 
	    	count121FT1: 0, count121FT2: 0, count121FT3: 0, count121FT4: 0, count121FT5: 0, count121FT6: 0, count121FT7: 0,	count121FT8: 0,	count121FT9: 0,	count121FT10: 0, count121FT11: 0, 
	       	count013IT1: 0, count013IT2: 0, count013IT3: 0, count013IT4: 0, count013IT5: 0, count013IT6: 0, count013IT7: 0,	count013IT8: 0,	count013IT9: 0,	count013IT10: 0, count013IT11: 0,  
	    	count040IT1: 0, count040IT2: 0, count040IT3: 0, count040IT4: 0, count040IT5: 0, count040IT6: 0, count040IT7: 0,	count040IT8: 0,	count040IT9: 0,	count040IT10: 0, count040IT11: 0, 	        
	    	count061IT1: 0, count061IT2: 0, count061IT3: 0, count061IT4: 0, count061IT5: 0, count061IT6: 0, count061IT7: 0,	count061IT8: 0,	count061IT9: 0,	count061IT10: 0, count061IT11: 0, 
	    	count065IT1: 0, count065IT2: 0, count065IT3: 0, count065IT4: 0, count065IT5: 0, count065IT6: 0, count065IT7: 0,	count065IT8: 0,	count065IT9: 0,	count065IT10: 0, count065IT11: 0, 
	    	count074IT1: 0, count074IT2: 0, count074IT3: 0, count074IT4: 0, count074IT5: 0, count074IT6: 0, count074IT7: 0,	count074IT8: 0,	count074IT9: 0,	count074IT10: 0, count074IT11: 0, 
	    	count077IT1: 0, count077IT2: 0, count077IT3: 0, count077IT4: 0, count077IT5: 0, count077IT6: 0, count077IT7: 0,	count077IT8: 0,	count077IT9: 0,	count077IT10: 0, count077IT11: 0,
	    	count079IT1: 0, count079IT2: 0, count079IT3: 0, count079IT4: 0, count079IT5: 0, count079IT6: 0, count079IT7: 0,	count079IT8: 0,	count079IT9: 0,	count079IT10: 0, count079IT11: 0, 
	    	count090IT1: 0, count090IT2: 0, count090IT3: 0, count090IT4: 0, count090IT5: 0, count090IT6: 0, count090IT7: 0,	count090IT8: 0,	count090IT9: 0,	count090IT10: 0, count090IT11: 0, 	
	    	count108IT1: 0, count108IT2: 0, count108IT3: 0, count108IT4: 0, count108IT5: 0, count108IT6: 0, count108IT7: 0,	count108IT8: 0,	count108IT9: 0,	count108IT10: 0, count108IT11: 0, 
	    	count121IT1: 0, count121IT2: 0, count121IT3: 0, count121IT4: 0, count121IT5: 0, count121IT6: 0, count121IT7: 0,	count121IT8: 0,	count121IT9: 0,	count121IT10: 0, count121IT11: 0, 

	        count: 0,
	        freq: 0
	    };
	}

	function reduceSubjInitial() {
	    return {
	    	countT1: 0, countT2: 0, countT3: 0, countT4: 0, countT5: 0, countT6: 0, countT7: 0,	countT8: 0,	countT9: 0,	countT10: 0, countT11: 0, timeT1: 0, timeT2: 0, timeT3: 0, timeT4: 0, timeT5: 0, timeT6: 0, timeT7: 0, timeT8: 0, timeT9: 0, timeT10: 0, timeT11: 0, 
	    	count: 0,
	        freq: 0
	    };
	}

	//RGA
	function reduceGenAdd(p, v) {
		switch (v.gender){
			case "m":				
				switch (v.SubjectID){
					case "013mv22_I":					
					switch (v.TopicID){
						case "T1":
						++p.count013IT1;
						if (p.count013IT1 == 0) {p.timeT1 = 0} else {p.time013IT1 = SOptions.I013.time.T1;}
						break;
						case "T2":
						++p.count013IT2;
						if (p.count013IT2 == 0) {p.timeT2 = 0} else {p.time013IT2 = SOptions.I013.time.T2;}
						break;
						case "T3":
						++p.count013IT3;
						if (p.count013IT3 == 0) {p.timeT3 = 0} else {p.time013IT3 = SOptions.I013.time.T3;}
						break;
						case "T4":
						++p.count013IT4;
						if (p.count013I4 == 0) {p.timeT4 = 0} else {p.time013IT4 = SOptions.I013.time.T4;}
						break;
						case "T5":
						++p.count013IT5;
						if (p.count013IT5 == 0) {p.time013IT5 = 0} else {p.time013IT5 = SOptions.I013.time.T5;}
						break;
						case "T6":
						++p.count013IT6;
						if (p.count013IT6 == 0) {p.time013IT6 = 0} else {p.time013IT6 = SOptions.I013.time.T6;}
						break;
						case "T7":
						++p.count013IT7;
						if (p.count013IT7 == 0) {p.time013IT7 = 0} else {p.time013IT7 = SOptions.I013.time.T7;}
						break;
						case "T8":
						++p.count013IT8;
						if (p.count013IT8 == 0) {p.time013IT8 = 0} else {p.time013IT8 = SOptions.I013.time.T8;}
						break;
						case "T9":
						++p.count013IT9;
						if (p.count013IT9 == 0) {p.time013IT9 = 0} else {p.time013IT9 = SOptions.I013.time.T9;}
						break;
						case "T10":
						++p.count013IT10;
						if (p.count013IT10 == 0) {p.time013IT10 = 0} else {p.time013IT10 = SOptions.I013.time.T10;}
						break;
						case "T11":
						++p.count013IT11;
						if (p.count013IT11 == 0) {p.time013IT11 = 0} else {p.time013IT11 = SOptions.I013.time.T11;}
						break;
					}
	    			p.count013I = p.count013IT1+p.count013IT2+p.count013IT3+p.count013IT4+p.count013IT5+p.count013IT6+p.count013IT7+p.count013IT8+p.count013IT9+p.count013IT10+p.count013IT11; //console.log(p.count+ ": count \n");
		    		//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
		    		p.time013I = p.time013IT1+p.time013IT2+p.time013IT3+p.time013IT4+p.time013IT5+p.time013IT6+p.time013IT7+p.time013IT8+p.time013IT9+p.time013IT10+p.time013IT11;
		    		break;
		    		case "013mv22_F":
					switch (v.TopicID){
						case "T1":
						++p.count013FT1;
						if (p.count013FT1 == 0) {p.time013FT1 = 0} else {p.time013FT1 = SOptions.F013.time.T1;}
						break;
						case "T2":
						++p.count013FT2;
						if (p.count013FT2 == 0) {p.time013FT2 = 0} else {p.time013FT2 = SOptions.F013.time.T2;}
						break;
						case "T3":
						++p.count013FT3;
						if (p.count013FT3 == 0) {p.time013FT3 = 0} else {p.time013FT3 = SOptions.F013.time.T3;}
						break;
						case "T4":
						++p.count013FT4;
						if (p.count013FT4 == 0) {p.time013FT4 = 0} else {p.time013FT4 = SOptions.F013.time.T4;}
						break;
						case "T5":
						++p.count013FT5;
						if (p.count013FT5 == 0) {p.time013FT5 = 0} else {p.time013FT5 = SOptions.F013.time.T5;}
						break;
						case "T6":
						++p.count013FT6;
						if (p.count013FT6 == 0) {p.time013FT6 = 0} else {p.time013FT6 = SOptions.F013.time.T6;}
						break;
						case "T7":
						++p.count013FT7;
						if (p.count013FT7 == 0) {p.time013FT7 = 0} else {p.time013FT7 = SOptions.F013.time.T7;}
						break;
						case "T8":
						++p.count013FT8;
						if (p.count013FT8 == 0) {p.time013FT8 = 0} else {p.time013FT8 = SOptions.F013.time.T8;}
						break;
						case "T9":
						++p.count013FT9;
						if (p.count013FT9 == 0) {p.time013FT9 = 0} else {p.time013FT9 = SOptions.F013.time.T9;}
						break;
						case "T10":
						++p.count013FT10;
						if (p.count013FT10 == 0) {p.time013FT10 = 0} else {p.time013FT10 = SOptions.F013.time.T10;}
						break;
						case "T11":
						++p.count013FT11;
						if (p.count013FT11 == 0) {p.time013FT11 = 0} else {p.time013FT11 = SOptions.F013.time.T11;}
						break;
					}
	    			p.count013F = p.count013FT1+p.count013FT2+p.count013FT3+p.count013FT4+p.count013FT5+p.count013FT6+p.count013FT7+p.count013FT8+p.count013FT9+p.count013FT10+p.count013FT11; //console.log(p.count+ ": count \n");
		    		//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
		    		p.time013F = p.time013FT1+p.time013FT2+p.time013FT3+p.time013FT4+p.time013FT5+p.time013FT6+p.time013FT7+p.time013FT8+p.time013FT9+p.time013FT10+p.time013FT11; 
		    		break;
		    		case "065mc21_I": 
	    			switch (v.TopicID){
						case "T1":
						++p.count065IT1;
						if (p.count065IT1 == 0) {p.time065IT1 = 0} else {p.time065IT1 = SOptions.I065.time.T1;}
						break;
						case "T2":
						++p.count065IT2;
						if (p.count065IT2 == 0) {p.time065IT2 = 0} else {p.time065IT2 = SOptions.I065.time.T2;}
						break;
						case "T3":
						++p.count065IT3;
						if (p.count065IT3 == 0) {p.time065IT3 = 0} else {p.time065IT3 = SOptions.I065.time.T3;}
						break;
						case "T4":
						++p.count065IT4;
						if (p.count065IT4 == 0) {p.time065IT4 = 0} else {p.time065IT4 = SOptions.I065.time.T4;}
						break;
						case "T5":
						++p.count065IT5;
						if (p.count065IT5 == 0) {p.time065IT5 = 0} else {p.time065IT5 = SOptions.I065.time.T5;}
						break;
						case "T6":
						++p.count065IT6;
						if (p.count065IT6 == 0) {p.time065IT6 = 0} else {p.time065IT6 = SOptions.I065.time.T6;}
						break;
						case "T7":
						++p.count065IT7;
						if (p.count065IT7 == 0) {p.time065IT7 = 0} else {p.time065IT7 = SOptions.I065.time.T7;}
						break;
						case "T8":
						++p.count065IT8;
						if (p.count065IT8 == 0) {p.time065IT8 = 0} else {p.time065IT8 = SOptions.I065.time.T8;}
						break;
						case "T9":
						++p.count065IT9;
						if (p.count065IT9 == 0) {p.time065IT9 = 0} else {p.time065IT9 = SOptions.I065.time.T9;}
						break;
						case "T10":
						++p.count065IT10;
						if (p.count065IT10 == 0) {p.time065IT10 = 0} else {p.time065IT10 = SOptions.I065.time.T10;}
						break;
						case "T11":
						++p.count065IT11;
						if (p.count065IT11 == 0) {p.time065IT11 = 0} else {p.time065IT11 = SOptions.I065.time.T11;}
						break;
					}
		    		p.count065I = p.count065IT1+p.count065IT2+p.count065IT3+p.count065IT4+p.count065IT5+p.count065IT6+p.count065IT7+p.count065IT8+p.count065IT9+p.count065IT10+p.count065IT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time065I = p.time065IT1+p.time065IT2+p.time065IT3+p.time065IT4+p.time065IT5+p.time065IT6+p.time065IT7+p.time065IT8+p.time065IT9+p.time065IT10+p.time065IT11;
			    	break;
		    		case "065mc21_F":	    
	    			switch (v.TopicID){
						case "T1":
						++p.count065FT1;
						if (p.count065FT1 == 0) {p.time065FT1 = 0} else {p.time065FT1 = SOptions.F065.time.T1;}
						break;
						case "T2":
						++p.count065FT2;
						if (p.count065FT2 == 0) {p.time065FT2 = 0} else {p.time065FT2 = SOptions.F065.time.T2;}
						break;
						case "T3":
						++p.count065FT3;
						if (p.count065FT3 == 0) {p.time065FT3 = 0} else {p.time065FT3 = SOptions.F065.time.T3;}
						break;
						case "T4":
						++p.count065FT4;
						if (p.count065FT4 == 0) {p.time065FT4 = 0} else {p.time065FT4 = SOptions.F065.time.T4;}
						break;
						case "T5":
						++p.count065FT5;
						if (p.count065FT5 == 0) {p.time065FT5 = 0} else {p.time065FT5 = SOptions.F065.time.T5;}
						break;
						case "T6":
						++p.count065FT6;
						if (p.count065FT6 == 0) {p.time065FT6 = 0} else {p.time065FT6 = SOptions.F065.time.T6;}
						break;
						case "T7":
						++p.count065FT7;
						if (p.count065FT7 == 0) {p.time065FT7 = 0} else {p.time065FT7 = SOptions.F065.time.T7;}
						break;
						case "T8":
						++p.count065FT8;
						if (p.count065FT8 == 0) {p.time065FT8 = 0} else {p.time065FT8 = SOptions.F065.time.T8;}
						break;
						case "T9":
						++p.count065FT9;
						if (p.count065FT9 == 0) {p.time065FT9 = 0} else {p.time065FT9 = SOptions.F065.time.T9;}
						break;
						case "T10":
						++p.count065FT10;
						if (p.count065FT10 == 0) {p.time065FT10 = 0} else {p.time065FT10 = SOptions.F065.time.T10;}
						break;
						case "T11":
						++p.count065FT11;
						if (p.count065FT11 == 0) {p.time065FT11 = 0} else {p.time065FT11 = SOptions.F065.time.T11;}
						break;						
					}
		    		p.count065F = p.count065FT1+p.count065FT2+p.count065FT3+p.count065FT4+p.count065FT5+p.count065FT6+p.count065FT7+p.count065FT8+p.count065FT9+p.count065FT10+p.count065FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time065F = p.time065FT1+p.time065FT2+p.time065FT3+p.time065FT4+p.time065FT5+p.time065FT6+p.time065FT7+p.time065FT8+p.time065FT9+p.time065FT10+p.time065FT11;
			    	break;
			    	case "079mc20_I":
	    			switch (v.TopicID){
						case "T1":
						++p.count079IT1;
						if (p.count079IT1 == 0) {p.time079IT1 = 0} else {p.time079IT1 = SOptions.I079.time.T1;}
						break;
						case "T2":
						++p.count079IT2;
						if (p.count079IT2 == 0) {p.time079IT2 = 0} else {p.time079IT2 = SOptions.I079.time.T2;}
						break;
						case "T3":
						++p.count079IT3;
						if (p.count079IT3 == 0) {p.time079IT3 = 0} else {p.time079IT3 = SOptions.I079.time.T3;}
						break;
						case "T4":
						++p.count079IT4;
						if (p.count079IT4 == 0) {p.time079IT4 = 0} else {p.time079IT4 = SOptions.I079.time.T4;}
						break;
						case "T5":
						++p.count079IT5;
						if (p.count079IT5 == 0) {p.time079IT5 = 0} else {p.time079IT5 = SOptions.I079.time.T5;}
						break;
						case "T6":
						++p.count079IT6;
						if (p.count079IT6 == 0) {p.time079IT6 = 0} else {p.time079IT6 = SOptions.I079.time.T6;}
						break;
						case "T7":
						++p.count079IT7;
						if (p.count079IT7 == 0) {p.time079IT7 = 0} else {p.time079IT7 = SOptions.I079.time.T7;}
						break;
						case "T8":
						++p.count079IT8;
						if (p.count079IT8 == 0) {p.time079IT8 = 0} else {p.time079IT8 = SOptions.I079.time.T8;}
						break;
						case "T9":
						++p.count079IT9;
						if (p.count079IT9 == 0) {p.time079IT9 = 0} else {p.time079IT9 = SOptions.I079.time.T9;}
						break;
						case "T10":
						++p.count079IT10;
						if (p.count079IT10 == 0) {p.time079IT10 = 0} else {p.time079IT10 = SOptions.I079.time.T10;}
						break;
						case "T11":
						++p.count079IT11;
						if (p.count079IT11 == 0) {p.time079IT11 = 0} else {p.time079IT11 = SOptions.I079.time.T11;}
						break;
					}
					//console.log(p.time079IT1+":t1 "+p.time079IT2+":t2 "+p.time079IT3+":t3 "+p.time079IT4+":4 "+p.time079IT5+":t5 "+p.time079IT6+":t6 "+p.time079IT7+":t7 "+p.time079IT8+":t8 "+p.time079IT9+":t9 "+p.time079IT10+":t10 "+p.time079IT11+":t11 ");
		    		p.count079I = p.count079IT1+p.count079IT2+p.count079IT3+p.count079IT4+p.count079IT5+p.count079IT6+p.count079IT7+p.count079IT8+p.count079IT9+p.count079IT10+p.count079IT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time079I = p.time079IT1+p.time079IT2+p.time079IT3+p.time079IT4+p.time079IT5+p.time079IT6+p.time079IT7+p.time079IT8+p.time079IT9+p.time079IT10+p.time079IT11;
			    	break;
		    		case "079mc20_F":	    
	    			switch (v.TopicID){
						case "T1":
						++p.count079FT1;
						if (p.count079FT1 == 0) {p.time079FT1 = 0} else {p.time079FT1 = SOptions.F079.time.T1;}
						break;
						case "T2":
						++p.count079FT2;
						if (p.count079FT2 == 0) {p.time079FT2 = 0} else {p.time079FT2 = SOptions.F079.time.T2;}
						break;
						case "T3":
						++p.count079FT3;
						if (p.count079FT3 == 0) {p.time079FT3 = 0} else {p.time079FT3 = SOptions.F079.time.T3;}
						break;
						case "T4":
						++p.count079FT4;
						if (p.count079FT4 == 0) {p.time079FT4 = 0} else {p.time079FT4 = SOptions.F079.time.T4;}
						break;
						case "T5":
						++p.count079FT5;
						if (p.count079FT5 == 0) {p.time079FT5 = 0} else {p.time079FT5 = SOptions.F079.time.T5;}
						break;
						case "T6":
						++p.count079FT6;
						if (p.count079FT6 == 0) {p.time079FT6 = 0} else {p.time079FT6 = SOptions.F079.time.T6;}
						break;
						case "T7":
						++p.count079FT7;
						if (p.count079FT7 == 0) {p.time079FT7 = 0} else {p.time079FT7 = SOptions.F079.time.T7;}
						break;
						case "T8":
						++p.count079FT8;
						if (p.count079FT8 == 0) {p.time079FT8 = 0} else {p.time079FT8 = SOptions.F079.time.T8;}
						break;
						case "T9":
						++p.count079FT9;
						if (p.count079FT9 == 0) {p.time079FT9 = 0} else {p.time079FT9 = SOptions.F079.time.T9;}
						break;
						case "T10":
						++p.count079FT10;
						if (p.count079FT10 == 0) {p.time079FT10 = 0} else {p.time079FT10 = SOptions.F079.time.T10;}
						break;
						case "T11":
						++p.count079FT11;
						if (p.count079FT11 == 0) {p.time079FT11 = 0} else {p.time079FT11 = SOptions.F079.time.T11;}
						break;
					}
		    		p.count079F = p.count079FT1+p.count079FT2+p.count079FT3+p.count079FT4+p.count079FT5+p.count079FT6+p.count079FT7+p.count079FT8+p.count079FT9+p.count079FT10+p.count079FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time079F = p.time079FT1+p.time079FT2+p.time079FT3+p.time079FT4+p.time079FT5+p.time079FT6+p.time079FT7+p.time079FT8+p.time079FT9+p.time079FT10+p.time079FT11;
			    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
			    	break;
			    	case "090mc20_I":
	    			switch (v.TopicID){
						case "T1":
						++p.count090IT1;
						if (p.count090IT1 == 0) {p.time090IT1 = 0} else {p.time090IT1 = SOptions.I090.time.T1;}
						break;
						case "T2":
						++p.count090IT2;
						if (p.count090IT2 == 0) {p.time090IT2 = 0} else {p.time090IT2 = SOptions.I090.time.T2;}
						break;
						case "T3":
						++p.count090IT3;
						if (p.count090IT3 == 0) {p.time090IT3 = 0} else {p.time090IT3 = SOptions.I090.time.T3;}
						break;
						case "T4":
						++p.count090IT4;
						if (p.count090IT4 == 0) {p.time090IT4 = 0} else {p.time090IT4 = SOptions.I090.time.T4;}
						break;
						case "T5":
						++p.count090IT5;
						if (p.count090IT5 == 0) {p.time090IT5 = 0} else {p.time090IT5 = SOptions.I090.time.T5;}
						break;
						case "T6":
						++p.count090IT6;
						if (p.count090IT6 == 0) {p.time090IT6 = 0} else {p.time090IT6 = SOptions.I090.time.T6;}
						break;
						case "T7":
						++p.count090IT7;
						if (p.count090IT7 == 0) {p.time090IT7 = 0} else {p.time090IT7 = SOptions.I090.time.T7;}
						break;
						case "T8":
						++p.count090IT8;
						if (p.count090IT8 == 0) {p.time090IT8 = 0} else {p.time090IT8 = SOptions.I090.time.T8;}
						break;
						case "T9":
						++p.count090IT9;
						if (p.count090IT9 == 0) {p.time090IT9 = 0} else {p.time090IT9 = SOptions.I090.time.T9;}
						break;
						case "T10":
						++p.count090IT10;
						if (p.count090IT10 == 0) {p.time090IT10 = 0} else {p.time090IT10 = SOptions.I090.time.T10;}
						break;
						case "T11":
						++p.count090IT11;
						if (p.count090IT11 == 0) {p.time090IT11 = 0} else {p.time090IT11 = SOptions.I090.time.T11;}
						break;
					}
		    		p.count090I = p.count090IT1+p.count090IT2+p.count090IT3+p.count090IT4+p.count090IT5+p.count090IT6+p.count090IT7+p.count090IT8+p.count090IT9+p.count090IT10+p.count090IT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time090I = p.time090IT1+p.time090IT2+p.time090IT3+p.time090IT4+p.time090IT5+p.time090IT6+p.time090IT7+p.time090IT8+p.time090IT9+p.time090IT10+p.time090IT11;
			    	break;
		    		case "090mc20_F":	    
		    		switch (v.TopicID){
						case "T1":
						++p.count090FT1;
						if (p.count090FT1 == 0) {p.time090FT1 = 0} else {p.time090FT1 = SOptions.F090.time.T1;}
						break;
						case "T2":
						++p.count090FT2;
						if (p.count090FT2 == 0) {p.time090FT2 = 0} else {p.time090FT2 = SOptions.F090.time.T2;}
						break;
						case "T3":
						++p.count090FT3;
						if (p.count090FT3 == 0) {p.time090FT3 = 0} else {p.time090FT3 = SOptions.F090.time.T3;}
						break;
						case "T4":
						++p.count090FT4;
						if (p.count090FT4 == 0) {p.time090FT4 = 0} else {p.time090FT4 = SOptions.F090.time.T4;}
						break;
						case "T5":
						++p.count090FT5;
						if (p.count090FT5 == 0) {p.time090FT5 = 0} else {p.time090FT5 = SOptions.F090.time.T5;}
						break;
						case "T6":
						++p.count090FT6;
						if (p.count090FT6 == 0) {p.time090F6 = 0} else {p.time090FT6 = SOptions.F090.time.T6;}
						break;
						case "T7":
						++p.count090FT7;
						if (p.count090FT7 == 0) {p.time090FT7 = 0} else {p.time090FT7 = SOptions.F090.time.T7;}
						break;
						case "T8":
						++p.count090FT8;
						if (p.count090FT8 == 0) {p.time090FT8 = 0} else {p.time090FT8 = SOptions.F090.time.T8;}
						break;
						case "T9":
						++p.count090FT9;
						if (p.count090FT9 == 0) {p.time090FT9 = 0} else {p.time090FT9 = SOptions.F090.time.T9;}
						break;
						case "T10":
						++p.count090FT10;
						if (p.count090FT10 == 0) {p.time090FT10 = 0} else {p.time090FT10 = SOptions.F090.time.T10;}
						break;
						case "T11":
						++p.count090FT11;
						if (p.count090FT11 == 0) {p.time090FT11 = 0} else {p.time090FT11 = SOptions.F090.time.T11;}
						break;
					}
		    		p.count090F = p.count090FT1+p.count090FT2+p.count090FT3+p.count090FT4+p.count090FT5+p.count090FT6+p.count090FT7+p.count090FT8+p.count090FT9+p.count090FT10+p.count090FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time090F = p.time090FT1+p.time090FT2+p.time090FT3+p.time090FT4+p.time090FT5+p.time090FT6+p.time090FT7+p.time090FT8+p.time090FT9+p.time090FT10+p.time090FT11;
			    	break;
			    	case "121mv23_I":
	    			switch (v.TopicID){
						case "T1":
						++p.count121IT1;
						if (p.count121IT1 == 0) {p.time121IT1 = 0} else {p.time121IT1 = SOptions.I121.time.T1;}
						break;
						case "T2":
						++p.count121IT2;
						if (p.count121IT2 == 0) {p.time121IT2 = 0} else {p.time121IT2 = SOptions.I121.time.T2;}
						break;
						case "T3":
						++p.count121IT3;
						if (p.count121IT3 == 0) {p.time121IT3 = 0} else {p.time121IT3 = SOptions.I121.time.T3;}
						break;
						case "T4":
						++p.count121IT4;
						if (p.count121IT4 == 0) {p.time121IT4 = 0} else {p.time121IT4 = SOptions.I121.time.T4;}
						break;
						case "T5":
						++p.count121IT5;
						if (p.count121IT5 == 0) {p.time121IT5 = 0} else {p.time121IT5 = SOptions.I121.time.T5;}
						break;
						case "T6":
						++p.count121IT6;
						if (p.count121IT6 == 0) {p.time121IT6 = 0} else {p.time121IT6 = SOptions.I121.time.T6;}
						break;
						case "T7":
						++p.count121IT7;
						if (p.count121IT7 == 0) {p.time121IT7 = 0} else {p.time121IT7 = SOptions.I121.time.T7;}
						break;
						case "T8":
						++p.count121IT8;
						if (p.count121IT8 == 0) {p.time121IT8 = 0} else {p.time121IT8 = SOptions.I121.time.T8;}
						break;
						case "T9":
						++p.count121IT9;
						if (p.count121IT9 == 0) {p.time121IT9 = 0} else {p.time121IT9 = SOptions.I121.time.T9;}
						break;
						case "T10":
						++p.count121IT10;
						if (p.count121IT10 == 0) {p.time121IT10 = 0} else {p.time121IT10 = SOptions.I121.time.T10;}
						break;
						case "T11":
						++p.count121IT11;
						if (p.count121IT11 == 0) {p.time121IT11 = 0} else {p.time121IT11 = SOptions.I121.time.T11;}
						break;
					}
	    		p.count121I = p.count121IT1+p.count121IT2+p.count121IT3+p.count121IT4+p.count121IT5+p.count121IT6+p.count121IT7+p.count121IT8+p.count121IT9+p.count121IT10+p.count121IT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
		    	p.time121I = p.time121IT1+p.time121IT2+p.time121IT3+p.time121IT4+p.time121IT5+p.time121IT6+p.time121IT7+p.time121IT8+p.time121IT9+p.time121IT10+p.time121IT11;
		    	break;
	    		case "121mv23_F":	    
		    		switch (v.TopicID){
						case "T1":
						++p.count121FT1;
						if (p.count121FT1 == 0) {p.time121FT1 = 0} else {p.time121FT1 = SOptions.F121.time.T1;}
						break;
						case "T2":
						++p.count121FT2;
						if (p.coun121FtT2 == 0) {p.time121FT2 = 0} else {p.time121FT2 = SOptions.F121.time.T2;}
						break;
						case "T3":
						++p.count121FT3;
						if (p.count121FT3 == 0) {p.time121FT3 = 0} else {p.time121FT3 = SOptions.F121.time.T3;}
						break;
						case "T4":
						++p.count121FT4;
						if (p.count121FT4 == 0) {p.time121FT4 = 0} else {p.time121FT4 = SOptions.F121.time.T4;}
						break;
						case "T5":
						++p.count121FT5;
						if (p.count121FT5 == 0) {p.time121FT5 = 0} else {p.time121FT5 = SOptions.F121.time.T5;}
						break;
						case "T6":
						++p.count121FT6;
						if (p.count121FT6 == 0) {p.time121FT6 = 0} else {p.time121FT6 = SOptions.F121.time.T6;}
						break;
						case "T7":
						++p.count121FT7;
						if (p.count121FT7 == 0) {p.time121FT7 = 0} else {p.time121FT7 = SOptions.F121.time.T7;}
						break;
						case "T8":
						++p.count121FT8;
						if (p.count121FT8 == 0) {p.time121FT8 = 0} else {p.time121FT8 = SOptions.F121.time.T8;}
						break;
						case "T9":
						++p.count121FT9;
						if (p.count121FT9 == 0) {p.time121FT9 = 0} else {p.time121FT9 = SOptions.F121.time.T9;}
						break;
						case "T10":
						++p.count121FT10;
						if (p.count121FT10 == 0) {p.time121FT10 = 0} else {p.time121FT10 = SOptions.F121.time.T10;}
						break;
						case "T11":
						++p.count121FT11;
						if (p.count121FT11 == 0) {p.time121FT11 = 0} else {p.time121FT11 = SOptions.F121.time.T11;}
						break;
					}
		    		p.count121F = p.count121FT1+p.count121FT2+p.count121FT3+p.count121FT4+p.count121FT5+p.count121FT6+p.count121FT7+p.count121FT8+p.count121FT9+p.count121FT10+p.count121FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time121F = p.time121FT1+p.time121FT2+p.time121FT3+p.time121FT4+p.time121FT5+p.time121FT6+p.time121FT7+p.time121FT8+p.time121FT9+p.time121FT10+p.time121FT11;
			    	break;
				}//switch Subj.ID
				p.count = p.count013I+p.count013F+p.count065I+p.count065F+p.count079I+p.count079F+p.count090I+p.count090F+p.count121I+p.count121F;
				time = p.time013F+p.time013I+p.time065I+p.time065F+p.time079I+p.time079F+p.time090I+p.time090F+p.time121I+p.time121F;
				if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};  
			break;
			case "f":
				switch (v.SubjectID){
					case "040fv24_I": 
					switch (v.TopicID){
						case "T1":
						++p.count040IT1;
						if (p.count040IT1 == 0) {p.time040IT1 = 0} else {p.time040IT1 = SOptions.I040.time.T1;}
						break;
						case "T2":
						++p.count040IT2;
						if (p.count040IT2 == 0) {p.time040IT2 = 0} else {p.time040IT2 = SOptions.I040.time.T2;}
						break;
						case "T3":
						++p.count040IT3;
						if (p.count040IT3 == 0) {p.time040IT3 = 0} else {p.time040IT3 = SOptions.I040.time.T3;}
						break;
						case "T4":
						++p.count040IT4;
						if (p.count040IT4 == 0) {p.time040IT4 = 0} else {p.time040IT4 = SOptions.I040.time.T4;}
						break;
						case "T5":
						++p.count040IT5;
						if (p.count040IT5 == 0) {p.time040IT5 = 0} else {p.time040IT5 = SOptions.I040.time.T5;}
						break;
						case "T6":
						++p.count040IT6;
						if (p.count040IT6 == 0) {p.time040IT6 = 0} else {p.time040IT6 = SOptions.I040.time.T6;}
						break;
						case "T7":
						++p.count040IT7;
						if (p.count040IT7 == 0) {p.time040IT7 = 0} else {p.time040IT7 = SOptions.I040.time.T7;}
						break;
						case "T8":
						++p.count040IT8;
						if (p.count040IT8 == 0) {p.time040IT8 = 0} else {p.time040IT8 = SOptions.I040.time.T8;}
						break;
						case "T9":
						++p.count040IT9;
						if (p.count040IT9 == 0) {p.time040IT9 = 0} else {p.time040IT9 = SOptions.I040.time.T9;}
						break;
						case "T10":
						++p.count040T10;
						if (p.count040IT10 == 0) {p.time040IT10 = 0} else {p.time040IT10 = SOptions.I040.time.T10;}
						break;
						case "T11":
						++p.count040IT11;
						if (p.count040IT11 == 0) {p.time040IT11 = 0} else {p.time040IT11 = SOptions.I040.time.T11;}
						break;
					}
		    		p.count040I = p.count040IT1+p.count040IT2+p.count040IT3+p.count040IT4+p.count040IT5+p.count040IT6+p.count040IT7+p.count040IT8+p.count040IT9+p.count040IT10+p.count040IT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time040I = p.time040IT1+p.time040IT2+p.time040IT3+p.time040IT4+p.time040IT5+p.time040IT6+p.time040IT7+p.time040IT8+p.time040IT9+p.time040IT10+p.time040IT11;
			    	//console.log("040: "+p.count040I+ " : " + p.time040I+ "\n");
			    	//console.log("040: "+p.count040I + " : " +p.time040I+ "\n");
			    	break;
			    	case "040fv24_F":	    
	    			switch (v.TopicID){
						case "T1":
						++p.count040FT1; //console.log(p.countT1 +" :40 \n");
						if (p.count040FT1 == 0) {p.time040FT1 = 0} else {p.time040FT1 = SOptions.F040.time.T1;}
						break;
						case "T2":
						++p.count040FT2;
						if (p.count040FT2 == 0) {p.time040FT2 = 0} else {p.time040FT2 = SOptions.F040.time.T2;}
						break;
						case "T3":
						++p.count040FT3;
						if (p.count040FT3 == 0) {p.time040FT3 = 0} else {p.time040FT3 = SOptions.F040.time.T3;}
						break;
						case "T4":
						++p.count040FT4;
						if (p.count040FT4 == 0) {p.time040FT4 = 0} else {p.time040FT4 = SOptions.F040.time.T4;}
						break;
						case "T5":
						++p.count040FT5;
						if (p.count040FT5 == 0) {p.time040FT5 = 0} else {p.time040FT5 = SOptions.F040.time.T5;}
						break;
						case "T6":
						++p.count040FT6;
						if (p.count040FT6 == 0) {p.time040FT6 = 0} else {p.time040FT6 = SOptions.F040.time.T6;}
						break;
						case "T7":
						++p.count040FT7;
						if (p.count040FT7 == 0) {p.time040FT7 = 0} else {p.time040FT7 = SOptions.F040.time.T7;};
						console.log(p.time040FT7+"\n");
						break;
						case "T8":
						++p.count040FT8;
						if (p.count040FT8 == 0) {p.time040FT8 = 0} else {p.time040FT8 = SOptions.F040.time.T8;}
						break;
						case "T9":
						++p.count404FT9;
						if (p.count404FT9 == 0) {p.time404FT9 = 0} else {p.time404FT9 = SOptions.F040.time.T9;}
						break;
						case "T10":
						++p.count404FT10;
						if (p.count404FT10 == 0) {p.time404FT10 = 0} else {p.time404FT10 = SOptions.F040.time.T10;}
						break;
						case "T11":
						++p.count404FT11;
						if (p.count404FT11 == 0) {p.time404FT11 = 0} else {p.time404FT11 = SOptions.F040.time.T11;}
						break;
					}
					p.count040F = p.count040FT1+p.count040FT2+p.count040FT3+p.count040FT4+p.count040FT5+p.count040FT6+p.count040FT7+p.count040FT8+p.count040FT9+p.count040FT10+p.count040FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time040F = p.time040FT1+p.time040FT2+p.time040FT3+p.time040FT4+p.time040FT5+p.time040FT6+p.time040FT7+p.time040FT8+p.time040FT9+p.time040FT10+p.time040FT11;
			    	break;
			    	case "061fv19_I":
			    	//console.log("061:" +p.time061I+"\n");
			    	//console.log("61:"+p.count061I+"\n");
			    	//console.log(p.time061IT1+":t1 "+p.time061IT2+":t2 "+p.time061IT3+":t3 "+p.time061IT4+":4 "+p.time061IT5+":t5 "+p.time061IT6+":t6 "+p.time061IT7+":t7 "+p.time061IT8+":t8 "+p.time061IT9+":t9 "+p.time061IT10+":t10 "+p.time061IT11+":t11 ");
	    			switch (v.TopicID){
						case "T1":
						++p.count061IT1;
						if (p.count061IT1 == 0) {p.time061IT1 = 0} else {p.time061IT1 = SOptions.I061.time.T1;}; 
						break;
						case "T2":
						++p.count061IT2;
						if (p.count061IT2 == 0) {p.time061IT2 = 0} else {p.time061IT2 = SOptions.I061.time.T2;}; 
						break;
						case "T3":
						++p.count061IT3;
						if (p.count061IT3 == 0) {p.time061IT3 = 0} else {p.time061IT3 = SOptions.I061.time.T3;}; 
						break;
						case "T4":
						++p.count061IT4;
						if (p.count061IT4 == 0) {p.time061IT4 = 0} else {p.time061IT4 = SOptions.I061.time.T4;}; 
						break;
						case "T5":
						++p.count061IT5;
						if (p.count061IT5 == 0) {p.time061IT5 = 0} else {p.time061IT5 = SOptions.I061.time.T5;}; 
						break;
						case "T6":
						++p.count061IT6;
						if (p.count061IT6 == 0) {p.time061IT6 = 0} else {p.time061IT6 = SOptions.I061.time.T6;}; 
						break;
						case "T7":
						++p.count061IT7;
						if (p.count061IT7 == 0) {p.time061IT7 = 0} else {p.time061IT7 = SOptions.I061.time.T7;}; 
						break;
						case "T8":
						++p.count061IT8;
						if (p.count061IT8 == 0) {p.time061IT8 = 0} else {p.time061IT8 = SOptions.I061.time.T8;}; 
						break;
						case "T9":
						++p.count061IT9;
						if (p.count061IT9 == 0) {p.time061IT9 = 0} else {p.time061IT9 = SOptions.I061.time.T9;}; 
						break;
						case "T10":
						++p.count061IT10;
						if (p.count061IT10 == 0) {p.time061IT10 = 0} else {p.time061IT10 = SOptions.I061.time.T10;}; 
						break;
						case "T11":
						++p.count061IT11;
						if (p.count061IT11 == 0) {p.time061IT11 = 0} else {p.time061IT11 = SOptions.I061.time.T11;}; 
						break;
					}
					//console.log(p.time061I+"\n");
					//console.log(p.time061IT1+"\n");
		    		p.count061I = p.count061IT1+p.count061IT2+p.count061IT3+p.count061IT4+p.count061IT5+p.count061IT6+p.count061IT7+p.count061IT8+p.count061IT9+p.count061IT10+p.count061IT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time061IT1+":t1 "+p.time061IT2+":t2 "+p.time061IT3+":t3 "+p.time061IT4+":4 "+p.time061IT5+":t5 "+p.time061IT6+":t6 "+p.time061IT7+":t7 "+p.time061IT8+":t8 "+p.time061IT9+":t9 "+p.time061IT10+":t10 "+p.time061IT11+":t11 ");
			    	p.time061I = p.time061IT1+p.time061IT2+p.time061IT3+p.time061IT4+p.time061IT5+p.time061IT6+p.time061IT7+p.time061IT8+p.time061IT9+p.time061IT10+p.time061IT11;
			    	//console.log("061: "+p.count061I + " : " +p.time061I+ "\n");
			    	break; 
	    			case "061fv19_F":	
	    			//console.log(p.count061F+"\n");    
	    			switch (v.TopicID){
						case "T1":
						++p.count061FT1; //console.log(p.countT1 +" :61 \n");
						if (p.count061FT1 == 0) {p.time061FT1 = 0} else {p.time061FT1 = SOptions.F061.time.T1;}
						break;
						case "T2":
						++p.count061FT2;
						if (p.count061FT2 == 0) {p.time061FT2 = 0} else {p.time061FT2 = SOptions.F061.time.T2;}
						break;
						case "T3":
						++p.count061FT3;
						if (p.count061FT3 == 0) {p.time061FT3 = 0} else {p.time061FT3 = SOptions.F061.time.T3;}
						break;
						case "T4":
						++p.count061FT4;
						if (p.count061FT4 == 0) {p.time061FT4 = 0} else {p.time061FT4 = SOptions.F061.time.T4;}
						break;
						case "T5":
						++p.count061FT5;
						if (p.count061FT5 == 0) {p.time061FT5 = 0} else {p.time061FT5 = SOptions.F061.time.T5;}
						break;
						case "T6":
						++p.count061FT6;
						if (p.count061FT6 == 0) {p.time061FT6 = 0} else {p.time061FT6 = SOptions.F061.time.T6;}
						break;
						case "T7":
						++p.count061FT7;
						if (p.count061FT7 == 0) {p.time061FT7 = 0} else {p.time061FT7 = SOptions.F061.time.T7;}
						break;
						case "T8":
						++p.count061FT8;
						if (p.count061FT8 == 0) {p.time061FT8 = 0} else {p.time061FT8 = SOptions.F061.time.T8;}
						break;
						case "T9":
						++p.count061FT9;
						if (p.count061FT9 == 0) {p.time061FT9 = 0} else {p.time061FT9 = SOptions.F061.time.T9;}
						break;
						case "T10":
						++p.count061FT10;
						if (p.count061FT10 == 0) {p.time061FT10 = 0} else {p.time061FT10 = SOptions.F061.time.T10;}
						break;
						case "T11":
						++p.count061FT11;
						if (p.count061FT11 == 0) {p.time061FT11 = 0} else {p.time061FT11 = SOptions.F061.time.T11;}
						break;
					}
		    		p.count061F = p.count061FT1+p.count061FT2+p.count061FT3+p.count061FT4+p.count061FT5+p.count061FT6+p.count061FT7+p.count061FT8+p.count061FT9+p.count061FT10+p.count061FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.count061FT1+" : "+p.count061FT2+" : "+p.count061FT3+" : "+p.count061FT4+" : "+p.count061FT6+" : "+p.count061FT7+" : "+p.count061FT8+" : "+p.count061FT9+" : "+p.count061FT10+" : "+p.count061FT11);	  
			    	p.time061F = p.time061FT1+p.time061FT2+p.time061FT3+p.time061FT4+p.time061FT5+p.time061FT6+p.time061FT7+p.time061FT8+p.time061FT9+p.time061FT10+p.time061FT11;
			    	break;
			    	case "074fc20_I": 
	    			switch (v.TopicID){
						case "T1":
						++p.count074IT1;
						if (p.count074IT1 == 0) {p.time074IT1 = 0} else {p.time074IT1 = SOptions.I074.time.T1;}
						break;
						case "T2":
						++p.count074IT2;
						if (p.count074IT2 == 0) {p.time074IT2 = 0} else {p.time074IT2 = SOptions.I074.time.T2;}
						break;
						case "T3":
						++p.count074IT3;
						if (p.count074IT3 == 0) {p.time074IT3 = 0} else {p.time074IT3 = SOptions.I074.time.T3;}
						break;
						case "T4":
						++p.count074IT4;
						if (p.count074IT4 == 0) {p.time074IT4 = 0} else {p.time074IT4 = SOptions.I074.time.T4;}
						break;
						case "T5":
						++p.count074IT5;
						if (p.count074IT5 == 0) {p.time074IT5 = 0} else {p.time074IT5 = SOptions.I074.time.T5;}
						break;
						case "T6":
						++p.count065IT6;
						if (p.count065IT6 == 0) {p.time065IT6 = 0} else {p.time074IT6 = SOptions.I074.time.T6;}
						break;
						case "T7":
						++p.count065IT7;
						if (p.count065IT7 == 0) {p.time065IT7 = 0} else {p.time065IT7 = SOptions.I074.time.T7;}
						break;
						case "T8":
						++p.count065IT8;
						if (p.count065IT8 == 0) {p.time065IT8 = 0} else {p.time065IT8 = SOptions.I074.time.T8;}
						break;
						case "T9":
						++p.count065IT9;
						if (p.count065IT9 == 0) {p.time065IT9 = 0} else {p.time065IT9 = SOptions.I074.time.T9;}
						break;
						case "T10":
						++p.count074IT10;
						if (p.count074IT10 == 0) {p.time074IT10 = 0} else {p.time074IT10 = SOptions.I074.time.T10;}
						break;
						case "T11":
						++p.count074IT11;
						if (p.count074IT11 == 0) {p.time074IT11 = 0} else {p.time074IT11 = SOptions.I074.time.T11;}
						break;
					}
		    		p.count074I = p.count074IT1+p.count074IT2+p.count074IT3+p.count074IT4+p.count074IT5+p.count074IT6+p.count074IT7+p.count074IT8+p.count074IT9+p.count074IT10+p.count074IT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time074I = p.time074IT1+p.time074IT2+p.time074IT3+p.time074IT4+p.time074IT5+p.time074IT6+p.time074IT7+p.time074IT8+p.time074IT9+p.time074IT10+p.time074IT11;
			    	break;
		    		case "074fc20_F":	    
	    			switch (v.TopicID){
						case "T1":
						++p.count074FT1;
						if (p.count074FT1 == 0) {p.time074FT1 = 0} else {p.time074FT1 = SOptions.F074.time.T1;}
						break;
						case "T2":
						++p.count074FT2;
						if (p.count074FT2 == 0) {p.time074FT2 = 0} else {p.time074FT2 = SOptions.F074.time.T2;}
						break;
						case "T3":
						++p.count074FT3;
						if (p.count074FT3 == 0) {p.time074FT3 = 0} else {p.time074FT3 = SOptions.F074.time.T3;}
						break;
						case "T4":
						++p.count074FT4;
						if (p.count074FT4 == 0) {p.time074FT4 = 0} else {p.time074FT4 = SOptions.F074.time.T4;}
						break;
						case "T5":
						++p.count074FT5;
						if (p.count074FT5 == 0) {p.time074FT5 = 0} else {p.time074FT5 = SOptions.F074.time.T5;}
						break;
						case "T6":
						++p.count074FT6;
						if (p.count074FT6 == 0) {p.time074FT6 = 0} else {p.time074FT6 = SOptions.F074.time.T6;}
						break;
						case "T7":
						++p.count074FT7;
						if (p.count074FT7 == 0) {p.time074FT7 = 0} else {p.time074FT7 = SOptions.F074.time.T7;}
						break;
						case "T8":
						++p.count074FT8;
						if (p.count074FT8 == 0) {p.time074FT8 = 0} else {p.time074FT8 = SOptions.F074.time.T8;}
						break;
						case "T9":
						++p.count074FT9;
						if (p.count074FT9 == 0) {p.time074FT9 = 0} else {p.time074FT9 = SOptions.F074.time.T9;}
						break;
						case "T10":
						++p.count074FT10;
						if (p.count074FT10 == 0) {p.time074FT10 = 0} else {p.time074FT10 = SOptions.F074.time.T10;}
						break;
						case "T11":
						++p.count074FT11;
						if (p.count074FT11 == 0) {p.time074FT11 = 0} else {p.time074FT11 = SOptions.F074.time.T11;}
						break;
					}
		    		p.count074F = p.count074FT1+p.count074FT2+p.count074FT3+p.count074FT4+p.count074FT5+p.count074FT6+p.count074FT7+p.count074FT8+p.count074FT9+p.count074FT10+p.count074FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time074F = p.time074FT1+p.time074FT2+p.time074FT3+p.time074FT4+p.time074FT5+p.time074FT6+p.time074FT7+p.time074FT8+p.time074FT9+p.time074FT10+p.time074FT11;
			    	break;
			    	case "077fc20_I":
	    			switch (v.TopicID){
						case "T1":
						++p.count077IT1;
						if (p.count077IT1 == 0) {p.time077IT1 = 0} else {p.time077IT1 = SOptions.I077.time.T1;}
						break;
						case "T2":
						++p.count077IT2;
						if (p.count077IT2 == 0) {p.time077IT2 = 0} else {p.time077IT2 = SOptions.I077.time.T2;}
						break;
						case "T3":
						++p.count077IT3;
						if (p.count077IT3 == 0) {p.time077IT3 = 0} else {p.time077IT3 = SOptions.I077.time.T3;}
						break;
						case "T4":
						++p.count077IT4;
						if (p.count077IT4 == 0) {p.time077IT4 = 0} else {p.time077IT4 = SOptions.I077.time.T4;}
						break;
						case "T5":
						++p.count077IT5;
						if (p.count077IT5 == 0) {p.time077IT5 = 0} else {p.time077IT5 = SOptions.I077.time.T5;}
						break;
						case "T6":
						++p.count077IT6;
						if (p.count077IT6 == 0) {p.time077IT6 = 0} else {p.time077IT6 = SOptions.I077.time.T6;}
						break;
						case "T7":
						++p.count077IT7;
						if (p.count077IT7 == 0) {p.time077IT7 = 0} else {p.time077IT7 = SOptions.I077.time.T7;}
						break;
						case "T8":
						++p.count077IT8;
						if (p.count077IT8 == 0) {p.time077IT8 = 0} else {p.time077IT8 = SOptions.I077.time.T8;}
						break;
						case "T9":
						++p.count077IT9;
						if (p.count077IT9 == 0) {p.time077IT9 = 0} else {p.time077IT9 = SOptions.I077.time.T9;}
						break;
						case "T10":
						++p.count077IT10;
						if (p.count077IT10 == 0) {p.time077IT10 = 0} else {p.time077IT10 = SOptions.I077.time.T10;}
						break;
						case "T11":
						++p.count077IT11;
						if (p.count077IT11 == 0) {p.time077IT11 = 0} else {p.time077IT11 = SOptions.I077.time.T11;}
						break;
					}
		    		p.count077I = p.count077IT1+p.count077IT2+p.count077IT3+p.count077IT4+p.count077IT5+p.count077IT6+p.count077IT7+p.count077IT8+p.count077IT9+p.count077IT10+p.count077IT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time077I = p.time077IT1+p.time077IT2+p.time077IT3+p.time077IT4+p.time077IT5+p.time077IT6+p.time077IT7+p.time077IT8+p.time077IT9+p.time077IT10+p.time077IT11;
			    	break;
		    		case "077fc20_F":	    
		    		switch (v.TopicID){
						case "T1":
						++p.count077FT1;
						if (p.count077FT1 == 0) {p.time077FT1 = 0} else {p.time077FT1 = SOptions.F077.time.T1;}
						break;
						case "T2":
						++p.countT2;
						if (p.count077FT2 == 0) {p.time077FT2 = 0} else {p.time077FT2 = SOptions.F077.time.T2;}
						break;
						case "T3":
						++p.countT3;
						if (p.count077FT3 == 0) {p.time077FT3 = 0} else {p.time077FT3 = SOptions.F077.time.T3;}
						break;
						case "T4":
						++p.count077FT4;
						if (p.count077FT4 == 0) {p.time077FT4 = 0} else {p.time077FT4 = SOptions.F077.time.T4;}
						break;
						case "T5":
						++p.count077FT5;
						if (p.count077FT5 == 0) {p.time077FT5 = 0} else {p.time077FT5 = SOptions.F077.time.T5;}
						break;
						case "T6":
						++p.count077FT6;
						if (p.count077FT6 == 0) {p.time077FT6 = 0} else {p.time077FT6 = SOptions.F077.time.T6;}
						break;
						case "T7":
						++p.count077FT7;
						if (p.count077FT7 == 0) {p.time077FT7 = 0} else {p.time077FT7 = SOptions.F077.time.T7;}
						break;
						case "T8":
						++p.countT8;
						if (p.count077FT8 == 0) {p.time077FT8 = 0} else {p.time077FT8 = SOptions.F077.time.T8;}
						break;
						case "T9":
						++p.count077FT9;
						if (p.count077FT9 == 0) {p.time077FT9 = 0} else {p.time077FT9 = SOptions.F077.time.T9;}
						break;
						case "T10":
						++p.count077FT10;
						if (p.count077FT10 == 0) {p.time077FT10 = 0} else {p.time077FT10 = SOptions.F077.time.T10;}
						break;
						case "T11":
						++p.count077FT11;
						if (p.count077FT11 == 0) {p.time077FT11 = 0} else {p.time077FT11 = SOptions.F013.time.T11;}
						break;
					}
		    		p.count077F = p.count077FT1+p.count077FT2+p.count077FT3+p.count077FT4+p.count077FT5+p.count077FT6+p.count077FT7+p.count077FT8+p.count077FT9+p.count077FT10+p.count077FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time077F = p.time077FT1+p.time077FT2+p.time077FT3+p.time077FT4+p.time077FT5+p.time077FT6+p.time077FT7+p.time077FT8+p.time077FT9+p.time077FT10+p.time077FT11;
			    	break;
			    	case "108fv19_I":
	    			switch (v.TopicID){
						case "T1":
						++p.count108IT1;
						if (p.count108IT1 == 0) {p.time108IT1 = 0} else {p.time108IT1 = SOptions.I108.time.T1;}
						break;
						case "T2":
						++p.count108IT2;
						if (p.count108IT2 == 0) {p.time108IT2 = 0} else {p.time108IT2 = SOptions.I108.time.T2;}
						break;
						case "T3":
						++p.count108IT3;
						if (p.count108IT3 == 0) {p.time108IT3 = 0} else {p.time108IT3 = SOptions.I108.time.T3;}
						break;
						case "T4":
						++p.count108IT4;
						if (p.count108IT4 == 0) {p.time108IT4 = 0} else {p.time108IT4 = SOptions.I108.time.T4;}
						break;
						case "T5":
						++p.count108IT5;
						if (p.count108IT5 == 0) {p.time108IT5 = 0} else {p.time108IT5 = SOptions.I108.time.T5;}
						break;
						case "T6":
						++p.count108IT6;
						if (p.count108IT6 == 0) {p.time108IT6 = 0} else {p.time108IT6 = SOptions.I108.time.T6;}
						break;
						case "T7":
						++p.count108IT7;
						if (p.count108IT7 == 0) {p.time108IT7 = 0} else {p.time108IT7 = SOptions.I108.time.T7;}
						break;
						case "T8":
						++p.count108IT8;
						if (p.count108IT8 == 0) {p.time108IT8 = 0} else {p.time108IT8 = SOptions.I108.time.T8;}
						break;
						case "T9":
						++p.count108IT9;
						if (p.count108IT9 == 0) {p.time108IT9 = 0} else {p.time108IT9 = SOptions.I108.time.T9;}
						break;
						case "T10":
						++p.count108IT10;
						if (p.count108IT10 == 0) {p.time108IT10 = 0} else {p.time108IT10 = SOptions.I108.time.T10;}
						break;
						case "T11":
						++p.count108IT11;
						if (p.count108IT11 == 0) {p.time108IT11 = 0} else {p.time108IT11 = SOptions.I108.time.T11;}
						break;
					}
		    		p.count108I = p.count108IT1+p.count108IT2+p.count108IT3+p.count108IT4+p.count108IT5+p.count108IT6+p.count108IT7+p.count108IT8+p.count108IT9+p.count108IT10+p.count108IT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time108I = p.time108IT1+p.time108IT2+p.time108IT3+p.time108IT4+p.time108IT5+p.time108IT6+p.time108IT7+p.time108IT8+p.time108IT9+p.time108IT10+p.time108IT11;
			    	break;
		    		case "108fv19_F":	    
		    		switch (v.TopicID){
						case "T1":
						++p.count108FT1;
						if (p.count108FT1 == 0) {p.time108FT1 = 0} else {p.time108FT1 = SOptions.F108.time.T1;}
						break;
						case "T2":
						++p.count108FT2;
						if (p.count108FT2 == 0) {p.time108FT2 = 0} else {p.time108FT2 = SOptions.F108.time.T2;}
						break;
						case "T3":
						++p.count108FT3;
						if (p.count108FT3 == 0) {p.time108FT3 = 0} else {p.time108FT3 = SOptions.F108.time.T3;}
						break;
						case "T4":
						++p.count108FT4;
						if (p.count108FT4 == 0) {p.time108FT4 = 0} else {p.time108FT4 = SOptions.F108.time.T4;}
						break;
						case "T5":
						++p.count108FT5;
						if (p.count108FT5 == 0) {p.time108FT5 = 0} else {p.time108FT5 = SOptions.F108.time.T5;}
						break;
						case "T6":
						++p.count108FT6;
						if (p.count108FT6 == 0) {p.time108FT6 = 0} else {p.time108FT6 = SOptions.F108.time.T6;}
						break;
						case "T7":
						++p.count108FT7;
						if (p.count108FT7 == 0) {p.time108FT7 = 0} else {p.time108FT7 = SOptions.F108.time.T7;}
						break;
						case "T8":
						++p.count108FT8;
						if (p.count108FT8 == 0) {p.time108FT8 = 0} else {p.time108FT8 = SOptions.F108.time.T8;}
						break;
						case "T9":
						++p.count108FT9;
						if (p.count108FT9 == 0) {p.time108FT9 = 0} else {p.time108FT9 = SOptions.F108.time.T9;}
						break;
						case "T10":
						++p.count108FT10;
						if (p.count108FT10 == 0) {p.time108FT10 = 0} else {p.time108FT10 = SOptions.F108.time.T10;}
						break;
						case "T11":
						++p.count108FT11;
						if (p.count108FT11 == 0) {p.time108FT11 = 0} else {p.time108FT11 = SOptions.F108.time.T11;}
						break;
					}
		    		p.count108F = p.count108FT1+p.count108FT2+p.count108FT3+p.count108FT4+p.count108FT5+p.count108FT6+p.count108FT7+p.count108FT8+p.count108FT9+p.count108FT10+p.count108FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time108F = p.time108FT1+p.time108FT2+p.time108FT3+p.time108FT4+p.time108FT5+p.time108FT6+p.time108FT7+p.time108FT8+p.time108FT9+p.time108FT10+p.time108FT11;
			    	break;
				}
				p.count = p.count040I+p.count040F+p.count061I+p.count061F+p.count074I+p.count074F+p.count077I+p.count077F+p.count108I+p.count108F; 
				time = p.time040I+p.time040F+p.time061I+p.time061F+p.time074I+p.time074F+p.time077I+p.time077F+p.time108I+p.time108F; //console.log(p.count061F +" : "+ p.time061F +"\n");
				if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
			break;
		}//switch gen
		return p;
	}

	function reduceGenRemove(p, v) {		
	    switch (v.gender){
			case "m":				
				switch (v.SubjectID){
					case "013mv22_I":					
					switch (v.TopicID){
						case "T1":
						--p.count013IT1;
						if (p.count013IT1 == 0) {p.timeT1 = 0} else {p.time013IT1 = SOptions.I013.time.T1;}
						break;
						case "T2":
						--p.count013IT2;
						if (p.count013IT2 == 0) {p.timeT2 = 0} else {p.time013IT2 = SOptions.I013.time.T2;}
						break;
						case "T3":
						--p.count013IT3;
						if (p.count013IT3 == 0) {p.timeT3 = 0} else {p.time013IT3 = SOptions.I013.time.T3;}
						break;
						case "T4":
						--p.count013IT4;
						if (p.count013I4 == 0) {p.timeT4 = 0} else {p.time013IT4 = SOptions.I013.time.T4;}
						break;
						case "T5":
						--p.count013IT5;
						if (p.count013IT5 == 0) {p.time013IT5 = 0} else {p.time013IT5 = SOptions.I013.time.T5;}
						break;
						case "T6":
						--p.count013IT6;
						if (p.count013IT6 == 0) {p.time013IT6 = 0} else {p.time013IT6 = SOptions.I013.time.T6;}
						break;
						case "T7":
						--p.count013IT7;
						if (p.count013IT7 == 0) {p.time013IT7 = 0} else {p.time013IT7 = SOptions.I013.time.T7;}
						break;
						case "T8":
						++p.count013IT8;
						if (p.count013IT8 == 0) {p.time013IT8 = 0} else {p.time013IT8 = SOptions.I013.time.T8;}
						break;
						case "T9":
						--p.count013IT9;
						if (p.count013IT9 == 0) {p.time013IT9 = 0} else {p.time013IT9 = SOptions.I013.time.T9;}
						break;
						case "T10":
						--p.count013IT10;
						if (p.count013IT10 == 0) {p.time013IT10 = 0} else {p.time013IT10 = SOptions.I013.time.T10;}
						break;
						case "T11":
						--p.count013IT11;
						if (p.count013IT11 == 0) {p.time013IT11 = 0} else {p.time013IT11 = SOptions.I013.time.T11;}
						break;
					}
	    			p.count013I = p.count013IT1+p.count013IT2+p.count013IT3+p.count013IT4+p.count013IT5+p.count013IT6+p.count013IT7+p.count013IT8+p.count013IT9+p.count013IT10+p.count013IT11; //console.log(p.count+ ": count \n");
		    		//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
		    		p.time013I = p.time013IT1+p.time013IT2+p.time013IT3+p.time013IT4+p.time013IT5+p.time013IT6+p.time013IT7+p.time013IT8+p.time013IT9+p.time013IT10+p.time013IT11;
		    		break;
		    		case "013mv22_F":
					switch (v.TopicID){
						case "T1":
						--p.count013FT1;
						if (p.count013FT1 == 0) {p.time013FT1 = 0} else {p.time013FT1 = SOptions.F013.time.T1;}
						break;
						case "T2":
						--p.count013FT2;
						if (p.count013FT2 == 0) {p.time013FT2 = 0} else {p.time013FT2 = SOptions.F013.time.T2;}
						break;
						case "T3":
						--p.count013FT3;
						if (p.count013FT3 == 0) {p.time013FT3 = 0} else {p.time013FT3 = SOptions.F013.time.T3;}
						break;
						case "T4":
						--p.count013FT4;
						if (p.count013FT4 == 0) {p.time013FT4 = 0} else {p.time013FT4 = SOptions.F013.time.T4;}
						break;
						case "T5":
						--p.count013FT5;
						if (p.count013FT5 == 0) {p.time013FT5 = 0} else {p.time013FT5 = SOptions.F013.time.T5;}
						break;
						case "T6":
						--p.count013FT6;
						if (p.count013FT6 == 0) {p.time013FT6 = 0} else {p.time013FT6 = SOptions.F013.time.T6;}
						break;
						case "T7":
						--p.count013FT7;
						if (p.count013FT7 == 0) {p.time013FT7 = 0} else {p.time013FT7 = SOptions.F013.time.T7;}
						break;
						case "T8":
						--p.count013FT8;
						if (p.count013FT8 == 0) {p.time013FT8 = 0} else {p.time013FT8 = SOptions.F013.time.T8;}
						break;
						case "T9":
						--p.count013FT9;
						if (p.count013FT9 == 0) {p.time013FT9 = 0} else {p.time013FT9 = SOptions.F013.time.T9;}
						break;
						case "T10":
						--p.count013FT10;
						if (p.count013FT10 == 0) {p.time013FT10 = 0} else {p.time013FT10 = SOptions.F013.time.T10;}
						break;
						case "T11":
						--p.count013FT11;
						if (p.count013FT11 == 0) {p.time013FT11 = 0} else {p.time013FT11 = SOptions.F013.time.T11;}
						break;
					}
	    			p.count013F = p.count013FT1+p.count013FT2+p.count013FT3+p.count013FT4+p.count013FT5+p.count013FT6+p.count013FT7+p.count013FT8+p.count013FT9+p.count013FT10+p.count013FT11; //console.log(p.count+ ": count \n");
		    		//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
		    		p.time013F = p.time013FT1+p.time013FT2+p.time013FT3+p.time013FT4+p.time013FT5+p.time013FT6+p.time013FT7+p.time013FT8+p.time013FT9+p.time013FT10+p.time013FT11; 
		    		break;
		    		case "065mc21_I": 
	    			switch (v.TopicID){
						case "T1":
						--p.count065IT1;
						if (p.count065IT1 == 0) {p.time065IT1 = 0} else {p.time065IT1 = SOptions.I065.time.T1;}
						break;
						case "T2":
						--p.count065IT2;
						if (p.count065IT2 == 0) {p.time065IT2 = 0} else {p.time065IT2 = SOptions.I065.time.T2;}
						break;
						case "T3":
						--p.count065IT3;
						if (p.count065IT3 == 0) {p.time065IT3 = 0} else {p.time065IT3 = SOptions.I065.time.T3;}
						break;
						case "T4":
						--p.count065IT4;
						if (p.count065IT4 == 0) {p.time065IT4 = 0} else {p.time065IT4 = SOptions.I065.time.T4;}
						break;
						case "T5":
						--p.count065IT5;
						if (p.count065IT5 == 0) {p.time065IT5 = 0} else {p.time065IT5 = SOptions.I065.time.T5;}
						break;
						case "T6":
						--p.count065IT6;
						if (p.count065IT6 == 0) {p.time065IT6 = 0} else {p.time065IT6 = SOptions.I065.time.T6;}
						break;
						case "T7":
						--p.count065IT7;
						if (p.count065IT7 == 0) {p.time065IT7 = 0} else {p.time065IT7 = SOptions.I065.time.T7;}
						break;
						case "T8":
						--p.count065IT8;
						if (p.count065IT8 == 0) {p.time065IT8 = 0} else {p.time065IT8 = SOptions.I065.time.T8;}
						break;
						case "T9":
						--p.count065IT9;
						if (p.count065IT9 == 0) {p.time065IT9 = 0} else {p.time065IT9 = SOptions.I065.time.T9;}
						break;
						case "T10":
						--p.count065IT10;
						if (p.count065IT10 == 0) {p.time065IT10 = 0} else {p.time065IT10 = SOptions.I065.time.T10;}
						break;
						case "T11":
						--p.count065IT11;
						if (p.count065IT11 == 0) {p.time065IT11 = 0} else {p.time065IT11 = SOptions.I065.time.T11;}
						break;
					}
		    		p.count065I = p.count065IT1+p.count065IT2+p.count065IT3+p.count065IT4+p.count065IT5+p.count065IT6+p.count065IT7+p.count065IT8+p.count065IT9+p.count065IT10+p.count065IT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time065I = p.time065IT1+p.time065IT2+p.time065IT3+p.time065IT4+p.time065IT5+p.time065IT6+p.time065IT7+p.time065IT8+p.time065IT9+p.time065IT10+p.time065IT11;
			    	break;
		    		case "065mc21_F":	    
	    			switch (v.TopicID){
						case "T1":
						--p.count065FT1;
						if (p.count065FT1 == 0) {p.time065FT1 = 0} else {p.time065FT1 = SOptions.F065.time.T1;}
						break;
						case "T2":
						--p.count065FT2;
						if (p.count065FT2 == 0) {p.time065FT2 = 0} else {p.time065FT2 = SOptions.F065.time.T2;}
						break;
						case "T3":
						--p.count065FT3;
						if (p.count065FT3 == 0) {p.time065FT3 = 0} else {p.time065FT3 = SOptions.F065.time.T3;}
						break;
						case "T4":
						--p.count065FT4;
						if (p.count065FT4 == 0) {p.time065FT4 = 0} else {p.time065FT4 = SOptions.F065.time.T4;}
						break;
						case "T5":
						--p.count065FT5;
						if (p.count065FT5 == 0) {p.time065FT5 = 0} else {p.time065FT5 = SOptions.F065.time.T5;}
						break;
						case "T6":
						--p.count065FT6;
						if (p.count065FT6 == 0) {p.time065FT6 = 0} else {p.time065FT6 = SOptions.F065.time.T6;}
						break;
						case "T7":
						--p.count065FT7;
						if (p.count065FT7 == 0) {p.time065FT7 = 0} else {p.time065FT7 = SOptions.F065.time.T7;}
						break;
						case "T8":
						--p.count065FT8;
						if (p.count065FT8 == 0) {p.time065FT8 = 0} else {p.time065FT8 = SOptions.F065.time.T8;}
						break;
						case "T9":
						--p.count065FT9;
						if (p.count065FT9 == 0) {p.time065FT9 = 0} else {p.time065FT9 = SOptions.F065.time.T9;}
						break;
						case "T10":
						--p.count065FT10;
						if (p.count065FT10 == 0) {p.time065FT10 = 0} else {p.time065FT10 = SOptions.F065.time.T10;}
						break;
						case "T11":
						--p.count065FT11;
						if (p.count065FT11 == 0) {p.time065FT11 = 0} else {p.time065FT11 = SOptions.F065.time.T11;}
						break;						
					}
		    		p.count065F = p.count065FT1+p.count065FT2+p.count065FT3+p.count065FT4+p.count065FT5+p.count065FT6+p.count065FT7+p.count065FT8+p.count065FT9+p.count065FT10+p.count065FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time065F = p.time065FT1+p.time065FT2+p.time065FT3+p.time065FT4+p.time065FT5+p.time065FT6+p.time065FT7+p.time065FT8+p.time065FT9+p.time065FT10+p.time065FT11;
			    	break;
			    	case "079mc20_I":
	    			switch (v.TopicID){
						case "T1":
						--p.count079IT1;
						if (p.count079IT1 == 0) {p.time079IT1 = 0} else {p.time079IT1 = SOptions.I079.time.T1;}
						break;
						case "T2":
						--p.count079IT2;
						if (p.count079IT2 == 0) {p.time079IT2 = 0} else {p.time079IT2 = SOptions.I079.time.T2;}
						break;
						case "T3":
						--p.count079IT3;
						if (p.count079IT3 == 0) {p.time079IT3 = 0} else {p.time079IT3 = SOptions.I079.time.T3;}
						break;
						case "T4":
						--p.count079IT4;
						if (p.count079IT4 == 0) {p.time079IT4 = 0} else {p.time079IT4 = SOptions.I079.time.T4;}
						break;
						case "T5":
						--p.count079IT5;
						if (p.count079IT5 == 0) {p.time079IT5 = 0} else {p.time079IT5 = SOptions.I079.time.T5;}
						break;
						case "T6":
						--p.count079IT6;
						if (p.count079IT6 == 0) {p.time079IT6 = 0} else {p.time079IT6 = SOptions.I079.time.T6;}
						break;
						case "T7":
						--p.count079IT7;
						if (p.count079IT7 == 0) {p.time079IT7 = 0} else {p.time079IT7 = SOptions.I079.time.T7;}
						break;
						case "T8":
						--p.count079IT8;
						if (p.count079IT8 == 0) {p.time079IT8 = 0} else {p.time079IT8 = SOptions.I079.time.T8;}
						break;
						case "T9":
						--p.count079IT9;
						if (p.count079IT9 == 0) {p.time079IT9 = 0} else {p.time079IT9 = SOptions.I079.time.T9;}
						break;
						case "T10":
						--p.count079IT10;
						if (p.count079IT10 == 0) {p.time079IT10 = 0} else {p.time079IT10 = SOptions.I079.time.T10;}
						break;
						case "T11":
						--p.count079IT11;
						if (p.count079IT11 == 0) {p.time079IT11 = 0} else {p.time079IT11 = SOptions.I079.time.T11;}
						break;
					}
					//console.log(p.time079IT1+":t1 "+p.time079IT2+":t2 "+p.time079IT3+":t3 "+p.time079IT4+":4 "+p.time079IT5+":t5 "+p.time079IT6+":t6 "+p.time079IT7+":t7 "+p.time079IT8+":t8 "+p.time079IT9+":t9 "+p.time079IT10+":t10 "+p.time079IT11+":t11 ");
		    		p.count079I = p.count079IT1+p.count079IT2+p.count079IT3+p.count079IT4+p.count079IT5+p.count079IT6+p.count079IT7+p.count079IT8+p.count079IT9+p.count079IT10+p.count079IT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time079I = p.time079IT1+p.time079IT2+p.time079IT3+p.time079IT4+p.time079IT5+p.time079IT6+p.time079IT7+p.time079IT8+p.time079IT9+p.time079IT10+p.time079IT11;
			    	break;
		    		case "079mc20_F":	    
	    			switch (v.TopicID){
						case "T1":
						--p.count079FT1;
						if (p.count079FT1 == 0) {p.time079FT1 = 0} else {p.time079FT1 = SOptions.F079.time.T1;}
						break;
						case "T2":
						--p.count079FT2;
						if (p.count079FT2 == 0) {p.time079FT2 = 0} else {p.time079FT2 = SOptions.F079.time.T2;}
						break;
						case "T3":
						--p.count079FT3;
						if (p.count079FT3 == 0) {p.time079FT3 = 0} else {p.time079FT3 = SOptions.F079.time.T3;}
						break;
						case "T4":
						--p.count079FT4;
						if (p.count079FT4 == 0) {p.time079FT4 = 0} else {p.time079FT4 = SOptions.F079.time.T4;}
						break;
						case "T5":
						--p.count079FT5;
						if (p.count079FT5 == 0) {p.time079FT5 = 0} else {p.time079FT5 = SOptions.F079.time.T5;}
						break;
						case "T6":
						--p.count079FT6;
						if (p.count079FT6 == 0) {p.time079FT6 = 0} else {p.time079FT6 = SOptions.F079.time.T6;}
						break;
						case "T7":
						--p.count079FT7;
						if (p.count079FT7 == 0) {p.time079FT7 = 0} else {p.time079FT7 = SOptions.F079.time.T7;}
						break;
						case "T8":
						--p.count079FT8;
						if (p.count079FT8 == 0) {p.time079FT8 = 0} else {p.time079FT8 = SOptions.F079.time.T8;}
						break;
						case "T9":
						--p.count079FT9;
						if (p.count079FT9 == 0) {p.time079FT9 = 0} else {p.time079FT9 = SOptions.F079.time.T9;}
						break;
						case "T10":
						--p.count079FT10;
						if (p.count079FT10 == 0) {p.time079FT10 = 0} else {p.time079FT10 = SOptions.F079.time.T10;}
						break;
						case "T11":
						--p.count079FT11;
						if (p.count079FT11 == 0) {p.time079FT11 = 0} else {p.time079FT11 = SOptions.F079.time.T11;}
						break;
					}
		    		p.count079F = p.count079FT1+p.count079FT2+p.count079FT3+p.count079FT4+p.count079FT5+p.count079FT6+p.count079FT7+p.count079FT8+p.count079FT9+p.count079FT10+p.count079FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time079F = p.time079FT1+p.time079FT2+p.time079FT3+p.time079FT4+p.time079FT5+p.time079FT6+p.time079FT7+p.time079FT8+p.time079FT9+p.time079FT10+p.time079FT11;
			    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
			    	break;
			    	case "090mc20_I":
	    			switch (v.TopicID){
						case "T1":
						--p.count090IT1;
						if (p.count090IT1 == 0) {p.time090IT1 = 0} else {p.time090IT1 = SOptions.I090.time.T1;}
						break;
						case "T2":
						--p.count090IT2;
						if (p.count090IT2 == 0) {p.time090IT2 = 0} else {p.time090IT2 = SOptions.I090.time.T2;}
						break;
						case "T3":
						--p.count090IT3;
						if (p.count090IT3 == 0) {p.time090IT3 = 0} else {p.time090IT3 = SOptions.I090.time.T3;}
						break;
						case "T4":
						--p.count090IT4;
						if (p.count090IT4 == 0) {p.time090IT4 = 0} else {p.time090IT4 = SOptions.I090.time.T4;}
						break;
						case "T5":
						--p.count090IT5;
						if (p.count090IT5 == 0) {p.time090IT5 = 0} else {p.time090IT5 = SOptions.I090.time.T5;}
						break;
						case "T6":
						--p.count090IT6;
						if (p.count090IT6 == 0) {p.time090IT6 = 0} else {p.time090IT6 = SOptions.I090.time.T6;}
						break;
						case "T7":
						--p.count090IT7;
						if (p.count090IT7 == 0) {p.time090IT7 = 0} else {p.time090IT7 = SOptions.I090.time.T7;}
						break;
						case "T8":
						--p.count090IT8;
						if (p.count090IT8 == 0) {p.time090IT8 = 0} else {p.time090IT8 = SOptions.I090.time.T8;}
						break;
						case "T9":
						--p.count090IT9;
						if (p.count090IT9 == 0) {p.time090IT9 = 0} else {p.time090IT9 = SOptions.I090.time.T9;}
						break;
						case "T10":
						--p.count090IT10;
						if (p.count090IT10 == 0) {p.time090IT10 = 0} else {p.time090IT10 = SOptions.I090.time.T10;}
						break;
						case "T11":
						--p.count090IT11;
						if (p.count090IT11 == 0) {p.time090IT11 = 0} else {p.time090IT11 = SOptions.I090.time.T11;}
						break;
					}
		    		p.count090I = p.count090IT1+p.count090IT2+p.count090IT3+p.count090IT4+p.count090IT5+p.count090IT6+p.count090IT7+p.count090IT8+p.count090IT9+p.count090IT10+p.count090IT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time090I = p.time090IT1+p.time090IT2+p.time090IT3+p.time090IT4+p.time090IT5+p.time090IT6+p.time090IT7+p.time090IT8+p.time090IT9+p.time090IT10+p.time090IT11;
			    	break;
		    		case "090mc20_F":	    
		    		switch (v.TopicID){
						case "T1":
						--p.count090FT1;
						if (p.count090FT1 == 0) {p.time090FT1 = 0} else {p.time090FT1 = SOptions.F090.time.T1;}
						break;
						case "T2":
						--p.count090FT2;
						if (p.count090FT2 == 0) {p.time090FT2 = 0} else {p.time090FT2 = SOptions.F090.time.T2;}
						break;
						case "T3":
						--p.count090FT3;
						if (p.count090FT3 == 0) {p.time090FT3 = 0} else {p.time090FT3 = SOptions.F090.time.T3;}
						break;
						case "T4":
						--p.count090FT4;
						if (p.count090FT4 == 0) {p.time090FT4 = 0} else {p.time090FT4 = SOptions.F090.time.T4;}
						break;
						case "T5":
						--p.count090FT5;
						if (p.count090FT5 == 0) {p.time090FT5 = 0} else {p.time090FT5 = SOptions.F090.time.T5;}
						break;
						case "T6":
						--p.count090FT6;
						if (p.count090FT6 == 0) {p.time090F6 = 0} else {p.time090FT6 = SOptions.F090.time.T6;}
						break;
						case "T7":
						--p.count090FT7;
						if (p.count090FT7 == 0) {p.time090FT7 = 0} else {p.time090FT7 = SOptions.F090.time.T7;}
						break;
						case "T8":
						--p.count090FT8;
						if (p.count090FT8 == 0) {p.time090FT8 = 0} else {p.time090FT8 = SOptions.F090.time.T8;}
						break;
						case "T9":
						--p.count090FT9;
						if (p.count090FT9 == 0) {p.time090FT9 = 0} else {p.time090FT9 = SOptions.F090.time.T9;}
						break;
						case "T10":
						--p.count090FT10;
						if (p.count090FT10 == 0) {p.time090FT10 = 0} else {p.time090FT10 = SOptions.F090.time.T10;}
						break;
						case "T11":
						--p.count090FT11;
						if (p.count090FT11 == 0) {p.time090FT11 = 0} else {p.time090FT11 = SOptions.F090.time.T11;}
						break;
					}
		    		p.count090F = p.count090FT1+p.count090FT2+p.count090FT3+p.count090FT4+p.count090FT5+p.count090FT6+p.count090FT7+p.count090FT8+p.count090FT9+p.count090FT10+p.count090FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time090F = p.time090FT1+p.time090FT2+p.time090FT3+p.time090FT4+p.time090FT5+p.time090FT6+p.time090FT7+p.time090FT8+p.time090FT9+p.time090FT10+p.time090FT11;
			    	break;
			    	case "121mv23_I":
	    			switch (v.TopicID){
						case "T1":
						--p.count121IT1;
						if (p.count121IT1 == 0) {p.time121IT1 = 0} else {p.time121IT1 = SOptions.I121.time.T1;}
						break;
						case "T2":
						--p.count121IT2;
						if (p.count121IT2 == 0) {p.time121IT2 = 0} else {p.time121IT2 = SOptions.I121.time.T2;}
						break;
						case "T3":
						--p.count121IT3;
						if (p.count121IT3 == 0) {p.time121IT3 = 0} else {p.time121IT3 = SOptions.I121.time.T3;}
						break;
						case "T4":
						--p.count121IT4;
						if (p.count121IT4 == 0) {p.time121IT4 = 0} else {p.time121IT4 = SOptions.I121.time.T4;}
						break;
						case "T5":
						--p.count121IT5;
						if (p.count121IT5 == 0) {p.time121IT5 = 0} else {p.time121IT5 = SOptions.I121.time.T5;}
						break;
						case "T6":
						--p.count121IT6;
						if (p.count121IT6 == 0) {p.time121IT6 = 0} else {p.time121IT6 = SOptions.I121.time.T6;}
						break;
						case "T7":
						--p.count121IT7;
						if (p.count121IT7 == 0) {p.time121IT7 = 0} else {p.time121IT7 = SOptions.I121.time.T7;}
						break;
						case "T8":
						--p.count121IT8;
						if (p.count121IT8 == 0) {p.time121IT8 = 0} else {p.time121IT8 = SOptions.I121.time.T8;}
						break;
						case "T9":
						--p.count121IT9;
						if (p.count121IT9 == 0) {p.time121IT9 = 0} else {p.time121IT9 = SOptions.I121.time.T9;}
						break;
						case "T10":
						--p.count121IT10;
						if (p.count121IT10 == 0) {p.time121IT10 = 0} else {p.time121IT10 = SOptions.I121.time.T10;}
						break;
						case "T11":
						--p.count121IT11;
						if (p.count121IT11 == 0) {p.time121IT11 = 0} else {p.time121IT11 = SOptions.I121.time.T11;}
						break;
					}
	    		p.count121I = p.count121IT1+p.count121IT2+p.count121IT3+p.count121IT4+p.count121IT5+p.count121IT6+p.count121IT7+p.count121IT8+p.count121IT9+p.count121IT10+p.count121IT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
		    	p.time121I = p.time121IT1+p.time121IT2+p.time121IT3+p.time121IT4+p.time121IT5+p.time121IT6+p.time121IT7+p.time121IT8+p.time121IT9+p.time121IT10+p.time121IT11;
		    	break;
	    		case "121mv23_F":	    
		    		switch (v.TopicID){
						case "T1":
						--p.count121FT1;
						if (p.count121FT1 == 0) {p.time121FT1 = 0} else {p.time121FT1 = SOptions.F121.time.T1;}
						break;
						case "T2":
						--p.count121FT2;
						if (p.coun121FtT2 == 0) {p.time121FT2 = 0} else {p.time121FT2 = SOptions.F121.time.T2;}
						break;
						case "T3":
						--p.count121FT3;
						if (p.count121FT3 == 0) {p.time121FT3 = 0} else {p.time121FT3 = SOptions.F121.time.T3;}
						break;
						case "T4":
						--p.count121FT4;
						if (p.count121FT4 == 0) {p.time121FT4 = 0} else {p.time121FT4 = SOptions.F121.time.T4;}
						break;
						case "T5":
						--p.count121FT5;
						if (p.count121FT5 == 0) {p.time121FT5 = 0} else {p.time121FT5 = SOptions.F121.time.T5;}
						break;
						case "T6":
						--p.count121FT6;
						if (p.count121FT6 == 0) {p.time121FT6 = 0} else {p.time121FT6 = SOptions.F121.time.T6;}
						break;
						case "T7":
						--p.count121FT7;
						if (p.count121FT7 == 0) {p.time121FT7 = 0} else {p.time121FT7 = SOptions.F121.time.T7;}
						break;
						case "T8":
						--p.count121FT8;
						if (p.count121FT8 == 0) {p.time121FT8 = 0} else {p.time121FT8 = SOptions.F121.time.T8;}
						break;
						case "T9":
						--p.count121FT9;
						if (p.count121FT9 == 0) {p.time121FT9 = 0} else {p.time121FT9 = SOptions.F121.time.T9;}
						break;
						case "T10":
						--p.count121FT10;
						if (p.count121FT10 == 0) {p.time121FT10 = 0} else {p.time121FT10 = SOptions.F121.time.T10;}
						break;
						case "T11":
						--p.count121FT11;
						if (p.count121FT11 == 0) {p.time121FT11 = 0} else {p.time121FT11 = SOptions.F121.time.T11;}
						break;
					}
		    		p.count121F = p.count121FT1+p.count121FT2+p.count121FT3+p.count121FT4+p.count121FT5+p.count121FT6+p.count121FT7+p.count121FT8+p.count121FT9+p.count121FT10+p.count121FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time121F = p.time121FT1+p.time121FT2+p.time121FT3+p.time121FT4+p.time121FT5+p.time121FT6+p.time121FT7+p.time121FT8+p.time121FT9+p.time121FT10+p.time121FT11;
			    	break;
				}//switch Subj.ID
				p.count = p.count013I+p.count013F+p.count065I+p.count065F+p.count079I+p.count079F+p.count090I+p.count090F+p.count121I+p.count121F;
				time = p.time013F+p.time013I+p.time065I+p.time065F+p.time079I+p.time079F+p.time090I+p.time090F+p.time121I+p.time121F;
				if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};  
			break;
			case "f":
				switch (v.SubjectID){
					case "040fv24_I": 
					switch (v.TopicID){
						case "T1":
						--p.count040IT1;
						if (p.count040IT1 == 0) {p.time040IT1 = 0} else {p.time040IT1 = SOptions.I040.time.T1;}
						break;
						case "T2":
						--p.count040IT2;
						if (p.count040IT2 == 0) {p.time040IT2 = 0} else {p.time040IT2 = SOptions.I040.time.T2;}
						break;
						case "T3":
						--p.count040IT3;
						if (p.count040IT3 == 0) {p.time040IT3 = 0} else {p.time040IT3 = SOptions.I040.time.T3;}
						break;
						case "T4":
						--p.count040IT4;
						if (p.count040IT4 == 0) {p.time040IT4 = 0} else {p.time040IT4 = SOptions.I040.time.T4;}
						break;
						case "T5":
						--p.count040IT5;
						if (p.count040IT5 == 0) {p.time040IT5 = 0} else {p.time040IT5 = SOptions.I040.time.T5;}
						break;
						case "T6":
						--p.count040IT6;
						if (p.count040IT6 == 0) {p.time040IT6 = 0} else {p.time040IT6 = SOptions.I040.time.T6;}
						break;
						case "T7":
						--p.count040IT7;
						if (p.count040IT7 == 0) {p.time040IT7 = 0} else {p.time040IT7 = SOptions.I040.time.T7;}
						break;
						case "T8":
						--p.count040IT8;
						if (p.count040IT8 == 0) {p.time040IT8 = 0} else {p.time040IT8 = SOptions.I040.time.T8;}
						break;
						case "T9":
						--p.count040IT9;
						if (p.count040IT9 == 0) {p.time040IT9 = 0} else {p.time040IT9 = SOptions.I040.time.T9;}
						break;
						case "T10":
						--p.count040T10;
						if (p.count040IT10 == 0) {p.time040IT10 = 0} else {p.time040IT10 = SOptions.I040.time.T10;}
						break;
						case "T11":
						--p.count040IT11;
						if (p.count040IT11 == 0) {p.time040IT11 = 0} else {p.time040IT11 = SOptions.I040.time.T11;}
						break;
					}
		    		p.count040I = p.count040IT1+p.count040IT2+p.count040IT3+p.count040IT4+p.count040IT5+p.count040IT6+p.count040IT7+p.count040IT8+p.count040IT9+p.count040IT10+p.count040IT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time040I = p.time040IT1+p.time040IT2+p.time040IT3+p.time040IT4+p.time040IT5+p.time040IT6+p.time040IT7+p.time040IT8+p.time040IT9+p.time040IT10+p.time040IT11;
			    	//console.log("040: "+p.count040I+ " : " + p.time040I+ "\n");
			    	//console.log("040: "+p.count040I + " : " +p.time040I+ "\n");
			    	break;
			    	case "040fv24_F":	    
	    			switch (v.TopicID){
						case "T1":
						--p.count040FT1; //console.log(p.countT1 +" :40 \n");
						if (p.count040FT1 == 0) {p.time040FT1 = 0} else {p.time040FT1 = SOptions.F040.time.T1;}
						break;
						case "T2":
						--p.count040FT2;
						if (p.count040FT2 == 0) {p.time040FT2 = 0} else {p.time040FT2 = SOptions.F040.time.T2;}
						break;
						case "T3":
						--p.count040FT3;
						if (p.count040FT3 == 0) {p.time040FT3 = 0} else {p.time040FT3 = SOptions.F040.time.T3;}
						break;
						case "T4":
						--p.count040FT4;
						if (p.count040FT4 == 0) {p.time040FT4 = 0} else {p.time040FT4 = SOptions.F040.time.T4;}
						break;
						case "T5":
						--p.count040FT5;
						if (p.count040FT5 == 0) {p.time040FT5 = 0} else {p.time040FT5 = SOptions.F040.time.T5;}
						break;
						case "T6":
						--p.count040FT6;
						if (p.count040FT6 == 0) {p.time040FT6 = 0} else {p.time040FT6 = SOptions.F040.time.T6;}
						break;
						case "T7":
						--p.count040FT7;
						if (p.count040FT7 == 0) {p.time040FT7 = 0} else {p.time040FT7 = SOptions.F040.time.T7;}
						break;
						case "T8":
						--p.count040FT8;
						if (p.count040FT8 == 0) {p.time040FT8 = 0} else {p.time040FT8 = SOptions.F040.time.T8;}
						break;
						case "T9":
						--p.count404FT9;
						if (p.count404FT9 == 0) {p.time404FT9 = 0} else {p.time404FT9 = SOptions.F040.time.T9;}
						break;
						case "T10":
						--p.count404FT10;
						if (p.count404FT10 == 0) {p.time404FT10 = 0} else {p.time404FT10 = SOptions.F040.time.T10;}
						break;
						case "T11":
						--p.count404FT11;
						if (p.count404FT11 == 0) {p.time404FT11 = 0} else {p.time404FT11 = SOptions.F040.time.T11;}
						break;
					}
					p.count040F = p.count040FT1+p.count040FT2+p.count040FT3+p.count040FT4+p.count040FT5+p.count040FT6+p.count040FT7+p.count040FT8+p.count040FT9+p.count040FT10+p.count040FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time040F = p.time040FT1+p.time040FT2+p.time040FT3+p.time040FT4+p.time040FT5+p.time040FT6+p.time040FT7+p.time040FT8+p.time040FT9+p.time040FT10+p.time040FT11;
			    	break;
			    	case "061fv19_I":
			    	//console.log("061:" +p.time061I+"\n");
			    	//console.log("61:"+p.count061I+"\n");
			    	//console.log(p.time061IT1+":t1 "+p.time061IT2+":t2 "+p.time061IT3+":t3 "+p.time061IT4+":4 "+p.time061IT5+":t5 "+p.time061IT6+":t6 "+p.time061IT7+":t7 "+p.time061IT8+":t8 "+p.time061IT9+":t9 "+p.time061IT10+":t10 "+p.time061IT11+":t11 ");
	    			switch (v.TopicID){
						case "T1":
						--p.count061IT1;
						if (p.count061IT1 == 0) {p.time061IT1 = 0} else {p.time061IT1 = SOptions.I061.time.T1;}; 
						break;
						case "T2":
						--p.count061IT2;
						if (p.count061IT2 == 0) {p.time061IT2 = 0} else {p.time061IT2 = SOptions.I061.time.T2;}; 
						break;
						case "T3":
						--p.count061IT3;
						if (p.count061IT3 == 0) {p.time061IT3 = 0} else {p.time061IT3 = SOptions.I061.time.T3;}; 
						break;
						case "T4":
						--p.count061IT4;
						if (p.count061IT4 == 0) {p.time061IT4 = 0} else {p.time061IT4 = SOptions.I061.time.T4;}; 
						break;
						case "T5":
						--p.count061IT5;
						if (p.count061IT5 == 0) {p.time061IT5 = 0} else {p.time061IT5 = SOptions.I061.time.T5;}; 
						break;
						case "T6":
						--p.count061IT6;
						if (p.count061IT6 == 0) {p.time061IT6 = 0} else {p.time061IT6 = SOptions.I061.time.T6;}; 
						break;
						case "T7":
						--p.count061IT7;
						if (p.count061IT7 == 0) {p.time061IT7 = 0} else {p.time061IT7 = SOptions.I061.time.T7;}; 
						break;
						case "T8":
						--p.count061IT8;
						if (p.count061IT8 == 0) {p.time061IT8 = 0} else {p.time061IT8 = SOptions.I061.time.T8;}; 
						break;
						case "T9":
						--p.count061IT9;
						if (p.count061IT9 == 0) {p.time061IT9 = 0} else {p.time061IT9 = SOptions.I061.time.T9;}; 
						break;
						case "T10":
						--p.count061IT10;
						if (p.count061IT10 == 0) {p.time061IT10 = 0} else {p.time061IT10 = SOptions.I061.time.T10;}; 
						break;
						case "T11":
						--p.count061IT11;
						if (p.count061IT11 == 0) {p.time061IT11 = 0} else {p.time061IT11 = SOptions.I061.time.T11;}; 
						break;
					}
					//console.log(p.time061I+"\n");
					//console.log(p.time061IT1+"\n");
		    		p.count061I = p.count061IT1+p.count061IT2+p.count061IT3+p.count061IT4+p.count061IT5+p.count061IT6+p.count061IT7+p.count061IT8+p.count061IT9+p.count061IT10+p.count061IT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time061IT1+":t1 "+p.time061IT2+":t2 "+p.time061IT3+":t3 "+p.time061IT4+":4 "+p.time061IT5+":t5 "+p.time061IT6+":t6 "+p.time061IT7+":t7 "+p.time061IT8+":t8 "+p.time061IT9+":t9 "+p.time061IT10+":t10 "+p.time061IT11+":t11 ");
			    	p.time061I = p.time061IT1+p.time061IT2+p.time061IT3+p.time061IT4+p.time061IT5+p.time061IT6+p.time061IT7+p.time061IT8+p.time061IT9+p.time061IT10+p.time061IT11;
			    	//console.log("061: "+p.count061I + " : " +p.time061I+ "\n");
			    	break; 
	    			case "061fv19_F":	
	    			//console.log(p.count061F+"\n");    
	    			switch (v.TopicID){
						case "T1":
						--p.count061FT1; //console.log(p.countT1 +" :61 \n");
						if (p.count061FT1 == 0) {p.time061FT1 = 0} else {p.time061FT1 = SOptions.F061.time.T1;}
						break;
						case "T2":
						--p.count061FT2;
						if (p.count061FT2 == 0) {p.time061FT2 = 0} else {p.time061FT2 = SOptions.F061.time.T2;}
						break;
						case "T3":
						--p.count061FT3;
						if (p.count061FT3 == 0) {p.time061FT3 = 0} else {p.time061FT3 = SOptions.F061.time.T3;}
						break;
						case "T4":
						--p.count061FT4;
						if (p.count061FT4 == 0) {p.time061FT4 = 0} else {p.time061FT4 = SOptions.F061.time.T4;}
						break;
						case "T5":
						--p.count061FT5;
						if (p.count061FT5 == 0) {p.time061FT5 = 0} else {p.time061FT5 = SOptions.F061.time.T5;}
						break;
						case "T6":
						--p.count061FT6;
						if (p.count061FT6 == 0) {p.time061FT6 = 0} else {p.time061FT6 = SOptions.F061.time.T6;}
						break;
						case "T7":
						--p.count061FT7;
						if (p.count061FT7 == 0) {p.time061FT7 = 0} else {p.time061FT7 = SOptions.F061.time.T7;}
						break;
						case "T8":
						--p.count061FT8;
						if (p.count061FT8 == 0) {p.time061FT8 = 0} else {p.time061FT8 = SOptions.F061.time.T8;}
						break;
						case "T9":
						--p.count061FT9;
						if (p.count061FT9 == 0) {p.time061FT9 = 0} else {p.time061FT9 = SOptions.F061.time.T9;}
						break;
						case "T10":
						--p.count061FT10;
						if (p.count061FT10 == 0) {p.time061FT10 = 0} else {p.time061FT10 = SOptions.F061.time.T10;}
						break;
						case "T11":
						--p.count061FT11;
						if (p.count061FT11 == 0) {p.time061FT11 = 0} else {p.time061FT11 = SOptions.F061.time.T11;}
						break;
					}
		    		p.count061F = p.count061FT1+p.count061FT2+p.count061FT3+p.count061FT4+p.count061FT5+p.count061FT6+p.count061FT7+p.count061FT8+p.count061FT9+p.count061FT10+p.count061FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.count061FT1+" : "+p.count061FT2+" : "+p.count061FT3+" : "+p.count061FT4+" : "+p.count061FT6+" : "+p.count061FT7+" : "+p.count061FT8+" : "+p.count061FT9+" : "+p.count061FT10+" : "+p.count061FT11);	  
			    	p.time061F = p.time061FT1+p.time061FT2+p.time061FT3+p.time061FT4+p.time061FT5+p.time061FT6+p.time061FT7+p.time061FT8+p.time061FT9+p.time061FT10+p.time061FT11;
			    	break;
			    	case "074fc20_I": 
	    			switch (v.TopicID){
						case "T1":
						--p.count074IT1;
						if (p.count074IT1 == 0) {p.time074IT1 = 0} else {p.time074IT1 = SOptions.I074.time.T1;}
						break;
						case "T2":
						--p.count074IT2;
						if (p.count074IT2 == 0) {p.time074IT2 = 0} else {p.time074IT2 = SOptions.I074.time.T2;}
						break;
						case "T3":
						--p.count074IT3;
						if (p.count074IT3 == 0) {p.time074IT3 = 0} else {p.time074IT3 = SOptions.I074.time.T3;}
						break;
						case "T4":
						--p.count074IT4;
						if (p.count074IT4 == 0) {p.time074IT4 = 0} else {p.time074IT4 = SOptions.I074.time.T4;}
						break;
						case "T5":
						--p.count074IT5;
						if (p.count074IT5 == 0) {p.time074IT5 = 0} else {p.time074IT5 = SOptions.I074.time.T5;}
						break;
						case "T6":
						--p.count065IT6;
						if (p.count065IT6 == 0) {p.time065IT6 = 0} else {p.time074IT6 = SOptions.I074.time.T6;}
						break;
						case "T7":
						--p.count065IT7;
						if (p.count065IT7 == 0) {p.time065IT7 = 0} else {p.time065IT7 = SOptions.I074.time.T7;}
						break;
						case "T8":
						--p.count065IT8;
						if (p.count065IT8 == 0) {p.time065IT8 = 0} else {p.time065IT8 = SOptions.I074.time.T8;}
						break;
						case "T9":
						--p.count065IT9;
						if (p.count065IT9 == 0) {p.time065IT9 = 0} else {p.time065IT9 = SOptions.I074.time.T9;}
						break;
						case "T10":
						--p.count074IT10;
						if (p.count074IT10 == 0) {p.time074IT10 = 0} else {p.time074IT10 = SOptions.I074.time.T10;}
						break;
						case "T11":
						--p.count074IT11;
						if (p.count074IT11 == 0) {p.time074IT11 = 0} else {p.time074IT11 = SOptions.I074.time.T11;}
						break;
					}
		    		p.count074I = p.count074IT1+p.count074IT2+p.count074IT3+p.count074IT4+p.count074IT5+p.count074IT6+p.count074IT7+p.count074IT8+p.count074IT9+p.count074IT10+p.count074IT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time074I = p.time074IT1+p.time074IT2+p.time074IT3+p.time074IT4+p.time074IT5+p.time074IT6+p.time074IT7+p.time074IT8+p.time074IT9+p.time074IT10+p.time074IT11;
			    	break;
		    		case "074fc20_F":	    
	    			switch (v.TopicID){
						case "T1":
						--p.count074FT1;
						if (p.count074FT1 == 0) {p.time074FT1 = 0} else {p.time074FT1 = SOptions.F074.time.T1;}
						break;
						case "T2":
						--p.count074FT2;
						if (p.count074FT2 == 0) {p.time074FT2 = 0} else {p.time074FT2 = SOptions.F074.time.T2;}
						break;
						case "T3":
						--p.count074FT3;
						if (p.count074FT3 == 0) {p.time074FT3 = 0} else {p.time074FT3 = SOptions.F074.time.T3;}
						break;
						case "T4":
						--p.count074FT4;
						if (p.count074FT4 == 0) {p.time074FT4 = 0} else {p.time074FT4 = SOptions.F074.time.T4;}
						break;
						case "T5":
						--p.count074FT5;
						if (p.count074FT5 == 0) {p.time074FT5 = 0} else {p.time074FT5 = SOptions.F074.time.T5;}
						break;
						case "T6":
						--p.count074FT6;
						if (p.count074FT6 == 0) {p.time074FT6 = 0} else {p.time074FT6 = SOptions.F074.time.T6;}
						break;
						case "T7":
						--p.count074FT7;
						if (p.count074FT7 == 0) {p.time074FT7 = 0} else {p.time074FT7 = SOptions.F074.time.T7;}
						break;
						case "T8":
						--p.count074FT8;
						if (p.count074FT8 == 0) {p.time074FT8 = 0} else {p.time074FT8 = SOptions.F074.time.T8;}
						break;
						case "T9":
						--p.count074FT9;
						if (p.count074FT9 == 0) {p.time074FT9 = 0} else {p.time074FT9 = SOptions.F074.time.T9;}
						break;
						case "T10":
						--p.count074FT10;
						if (p.count074FT10 == 0) {p.time074FT10 = 0} else {p.time074FT10 = SOptions.F074.time.T10;}
						break;
						case "T11":
						--p.count074FT11;
						if (p.count074FT11 == 0) {p.time074FT11 = 0} else {p.time074FT11 = SOptions.F074.time.T11;}
						break;
					}
		    		p.count074F = p.count074FT1+p.count074FT2+p.count074FT3+p.count074FT4+p.count074FT5+p.count074FT6+p.count074FT7+p.count074FT8+p.count074FT9+p.count074FT10+p.count074FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time074F = p.time074FT1+p.time074FT2+p.time074FT3+p.time074FT4+p.time074FT5+p.time074FT6+p.time074FT7+p.time074FT8+p.time074FT9+p.time074FT10+p.time074FT11;
			    	break;
			    	case "077fc20_I":
	    			switch (v.TopicID){
						case "T1":
						--p.count077IT1;
						if (p.count077IT1 == 0) {p.time077IT1 = 0} else {p.time077IT1 = SOptions.I077.time.T1;}
						break;
						case "T2":
						--p.count077IT2;
						if (p.count077IT2 == 0) {p.time077IT2 = 0} else {p.time077IT2 = SOptions.I077.time.T2;}
						break;
						case "T3":
						--p.count077IT3;
						if (p.count077IT3 == 0) {p.time077IT3 = 0} else {p.time077IT3 = SOptions.I077.time.T3;}
						break;
						case "T4":
						--p.count077IT4;
						if (p.count077IT4 == 0) {p.time077IT4 = 0} else {p.time077IT4 = SOptions.I077.time.T4;}
						break;
						case "T5":
						--p.count077IT5;
						if (p.count077IT5 == 0) {p.time077IT5 = 0} else {p.time077IT5 = SOptions.I077.time.T5;}
						break;
						case "T6":
						--p.count077IT6;
						if (p.count077IT6 == 0) {p.time077IT6 = 0} else {p.time077IT6 = SOptions.I077.time.T6;}
						break;
						case "T7":
						--p.count077IT7;
						if (p.count077IT7 == 0) {p.time077IT7 = 0} else {p.time077IT7 = SOptions.I077.time.T7;}
						break;
						case "T8":
						--p.count077IT8;
						if (p.count077IT8 == 0) {p.time077IT8 = 0} else {p.time077IT8 = SOptions.I077.time.T8;}
						break;
						case "T9":
						--p.count077IT9;
						if (p.count077IT9 == 0) {p.time077IT9 = 0} else {p.time077IT9 = SOptions.I077.time.T9;}
						break;
						case "T10":
						--p.count077IT10;
						if (p.count077IT10 == 0) {p.time077IT10 = 0} else {p.time077IT10 = SOptions.I077.time.T10;}
						break;
						case "T11":
						--p.count077IT11;
						if (p.count077IT11 == 0) {p.time077IT11 = 0} else {p.time077IT11 = SOptions.I077.time.T11;}
						break;
					}
		    		p.count077I = p.count077IT1+p.count077IT2+p.count077IT3+p.count077IT4+p.count077IT5+p.count077IT6+p.count077IT7+p.count077IT8+p.count077IT9+p.count077IT10+p.count077IT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time077I = p.time077IT1+p.time077IT2+p.time077IT3+p.time077IT4+p.time077IT5+p.time077IT6+p.time077IT7+p.time077IT8+p.time077IT9+p.time077IT10+p.time077IT11;
			    	break;
		    		case "077fc20_F":	    
		    		switch (v.TopicID){
						case "T1":
						--p.count077FT1;
						if (p.count077FT1 == 0) {p.time077FT1 = 0} else {p.time077FT1 = SOptions.F077.time.T1;}
						break;
						case "T2":
						--p.countT2;
						if (p.count077FT2 == 0) {p.time077FT2 = 0} else {p.time077FT2 = SOptions.F077.time.T2;}
						break;
						case "T3":
						--p.countT3;
						if (p.count077FT3 == 0) {p.time077FT3 = 0} else {p.time077FT3 = SOptions.F077.time.T3;}
						break;
						case "T4":
						--p.count077FT4;
						if (p.count077FT4 == 0) {p.time077FT4 = 0} else {p.time077FT4 = SOptions.F077.time.T4;}
						break;
						case "T5":
						--p.count077FT5;
						if (p.count077FT5 == 0) {p.time077FT5 = 0} else {p.time077FT5 = SOptions.F077.time.T5;}
						break;
						case "T6":
						--p.count077FT6;
						if (p.count077FT6 == 0) {p.time077FT6 = 0} else {p.time077FT6 = SOptions.F077.time.T6;}
						break;
						case "T7":
						--p.count077FT7;
						if (p.count077FT7 == 0) {p.time077FT7 = 0} else {p.time077FT7 = SOptions.F077.time.T7;}
						break;
						case "T8":
						--p.countT8;
						if (p.count077FT8 == 0) {p.time077FT8 = 0} else {p.time077FT8 = SOptions.F077.time.T8;}
						break;
						case "T9":
						--p.count077FT9;
						if (p.count077FT9 == 0) {p.time077FT9 = 0} else {p.time077FT9 = SOptions.F077.time.T9;}
						break;
						case "T10":
						--p.count077FT10;
						if (p.count077FT10 == 0) {p.time077FT10 = 0} else {p.time077FT10 = SOptions.F077.time.T10;}
						break;
						case "T11":
						--p.count077FT11;
						if (p.count077FT11 == 0) {p.time077FT11 = 0} else {p.time077FT11 = SOptions.F013.time.T11;}
						break;
					}
		    		p.count077F = p.count077FT1+p.count077FT2+p.count077FT3+p.count077FT4+p.count077FT5+p.count077FT6+p.count077FT7+p.count077FT8+p.count077FT9+p.count077FT10+p.count077FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time077F = p.time077FT1+p.time077FT2+p.time077FT3+p.time077FT4+p.time077FT5+p.time077FT6+p.time077FT7+p.time077FT8+p.time077FT9+p.time077FT10+p.time077FT11;
			    	break;
			    	case "108fv19_I":
	    			switch (v.TopicID){
						case "T1":
						--p.count108IT1;
						if (p.count108IT1 == 0) {p.time108IT1 = 0} else {p.time108IT1 = SOptions.I108.time.T1;}
						break;
						case "T2":
						--p.count108IT2;
						if (p.count108IT2 == 0) {p.time108IT2 = 0} else {p.time108IT2 = SOptions.I108.time.T2;}
						break;
						case "T3":
						--p.count108IT3;
						if (p.count108IT3 == 0) {p.time108IT3 = 0} else {p.time108IT3 = SOptions.I108.time.T3;}
						break;
						case "T4":
						--p.count108IT4;
						if (p.count108IT4 == 0) {p.time108IT4 = 0} else {p.time108IT4 = SOptions.I108.time.T4;}
						break;
						case "T5":
						--p.count108IT5;
						if (p.count108IT5 == 0) {p.time108IT5 = 0} else {p.time108IT5 = SOptions.I108.time.T5;}
						break;
						case "T6":
						--p.count108IT6;
						if (p.count108IT6 == 0) {p.time108IT6 = 0} else {p.time108IT6 = SOptions.I108.time.T6;}
						break;
						case "T7":
						--p.count108IT7;
						if (p.count108IT7 == 0) {p.time108IT7 = 0} else {p.time108IT7 = SOptions.I108.time.T7;}
						break;
						case "T8":
						--p.count108IT8;
						if (p.count108IT8 == 0) {p.time108IT8 = 0} else {p.time108IT8 = SOptions.I108.time.T8;}
						break;
						case "T9":
						--p.count108IT9;
						if (p.count108IT9 == 0) {p.time108IT9 = 0} else {p.time108IT9 = SOptions.I108.time.T9;}
						break;
						case "T10":
						--p.count108IT10;
						if (p.count108IT10 == 0) {p.time108IT10 = 0} else {p.time108IT10 = SOptions.I108.time.T10;}
						break;
						case "T11":
						--p.count108IT11;
						if (p.count108IT11 == 0) {p.time108IT11 = 0} else {p.time108IT11 = SOptions.I108.time.T11;}
						break;
					}
		    		p.count108I = p.count108IT1+p.count108IT2+p.count108IT3+p.count108IT4+p.count108IT5+p.count108IT6+p.count108IT7+p.count108IT8+p.count108IT9+p.count108IT10+p.count108IT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
			    	p.time108I = p.time108IT1+p.time108IT2+p.time108IT3+p.time108IT4+p.time108IT5+p.time108IT6+p.time108IT7+p.time108IT8+p.time108IT9+p.time108IT10+p.time108IT11;
			    	break;
		    		case "108fv19_F":	    
		    		switch (v.TopicID){
						case "T1":
						--p.count108FT1;
						if (p.count108FT1 == 0) {p.time108FT1 = 0} else {p.time108FT1 = SOptions.F108.time.T1;}
						break;
						case "T2":
						--p.count108FT2;
						if (p.count108FT2 == 0) {p.time108FT2 = 0} else {p.time108FT2 = SOptions.F108.time.T2;}
						break;
						case "T3":
						--p.count108FT3;
						if (p.count108FT3 == 0) {p.time108FT3 = 0} else {p.time108FT3 = SOptions.F108.time.T3;}
						break;
						case "T4":
						--p.count108FT4;
						if (p.count108FT4 == 0) {p.time108FT4 = 0} else {p.time108FT4 = SOptions.F108.time.T4;}
						break;
						case "T5":
						--p.count108FT5;
						if (p.count108FT5 == 0) {p.time108FT5 = 0} else {p.time108FT5 = SOptions.F108.time.T5;}
						break;
						case "T6":
						--p.count108FT6;
						if (p.count108FT6 == 0) {p.time108FT6 = 0} else {p.time108FT6 = SOptions.F108.time.T6;}
						break;
						case "T7":
						--p.count108FT7;
						if (p.count108FT7 == 0) {p.time108FT7 = 0} else {p.time108FT7 = SOptions.F108.time.T7;}
						break;
						case "T8":
						--p.count108FT8;
						if (p.count108FT8 == 0) {p.time108FT8 = 0} else {p.time108FT8 = SOptions.F108.time.T8;}
						break;
						case "T9":
						--p.count108FT9;
						if (p.count108FT9 == 0) {p.time108FT9 = 0} else {p.time108FT9 = SOptions.F108.time.T9;}
						break;
						case "T10":
						--p.count108FT10;
						if (p.count108FT10 == 0) {p.time108FT10 = 0} else {p.time108FT10 = SOptions.F108.time.T10;}
						break;
						case "T11":
						--p.count108FT11;
						if (p.count108FT11 == 0) {p.time108FT11 = 0} else {p.time108FT11 = SOptions.F108.time.T11;}
						break;
					}
		    		p.count108F = p.count108FT1+p.count108FT2+p.count108FT3+p.count108FT4+p.count108FT5+p.count108FT6+p.count108FT7+p.count108FT8+p.count108FT9+p.count108FT10+p.count108FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time108FT1+" : "+p.time108FT2+" : "+p.time108FT3+" : "+p.time108FT4+" : "+p.time108FT5+" : "+p.time108FT6+" : "+p.time108FT7+" : "+p.time108FT8+" : "+p.time108FT9+" : "+p.time108FT10+" : "+p.time108FT11+"\n");
			    	p.time108F = p.time108FT1+p.time108FT2+p.time108FT3+p.time108FT4+p.time108FT5+p.time108FT6+p.time108FT7+p.time108FT8+p.time108FT9+p.time108FT10+p.time108FT11;
			    	break;
				}
				p.count = p.count040I+p.count040F+p.count061I+p.count061F+p.count074I+p.count074F+p.count077I+p.count077F+p.count108I+p.count108F; 
				time = p.time040I+p.time040F+p.time061I+p.time061F+p.time074I+p.time074F+p.time077I+p.time077F+p.time108I+p.time108F; //console.log(p.count061F +" : "+ p.time061F +"\n");
				if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
				//console.log(p.count+" : "+time);
			break;
		}//switch gen
		return p;	
	}  

	function reduceSubjAdd(p, v) {
		 
	    switch (v.SubjectID){	   
			case "013mv22_I":
				switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I013.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I013.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I013.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I013.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I013.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I013.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I013.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I013.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I013.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I013.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I013.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.countT1+"\n");
	    	break;
			case "013mv22_F":
				switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F013.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F013.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F013.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F013.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F013.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F013.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F013.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F013.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F013.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F013.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F013.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
    		case "040fv24_I": 
	    		switch (v.TopicID){
					case "T1":
					++p.countT1; 
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I040.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I040.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I040.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I040.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I040.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I040.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I040.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I040.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I040.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I040.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I040.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
    		case "040fv24_F":	
    			//console.log(v.TopicID);    
    			switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F040.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F040.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F040.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F040.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F040.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F040.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F040.time.T7;};
					console.log(p.timeT7+" s\n");
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F040.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F040.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F040.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F040.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	//console.log(p.countT7+" : "+p.count); 
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
    		case "061fv19_I":
    			switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I061.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I061.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I061.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I061.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I061.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I061.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I061.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I061.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I061.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I061.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I061.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break; 
    		case "061fv19_F":	    
    			switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F061.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F061.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F061.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F061.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F061.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F061.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F061.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F061.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F061.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F061.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F061.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
    		case "065mc21_I": 
    		switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I065.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I065.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I065.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I065.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I065.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I065.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I065.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I065.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I065.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I065.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I065.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
    		case "065mc21_F":	    
    			switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F065.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F065.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F065.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F065.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F065.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F065.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F065.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F065.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F065.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F065.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F065.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
    		case "074fc20_I": 
    			switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I074.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I074.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I074.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I074.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I074.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I074.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I074.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I074.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I074.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I074.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I074.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
    		case "074fc20_F":	    
    			switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F074.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F074.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F074.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F074.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F074.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F074.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F074.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F074.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F074.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F074.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F074.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
    		case "077fc20_I":
    			switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I077.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I077.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I077.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I077.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I077.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I077.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I077.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I077.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I077.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I077.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I077.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
    		case "077fc20_F":	    
	    		switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F077.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F077.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F077.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F077.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F077.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F077.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F077.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F077.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F077.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F077.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F013.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
    		case "079mc20_I":
    			switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I079.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I079.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I079.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I079.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I079.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I079.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I079.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I079.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I079.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I079.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I079.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
    		case "079mc20_F":	    
    			switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F079.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F079.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F079.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F079.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F079.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F079.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F079.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F079.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F079.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F079.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F079.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
    		case "090mc20_I":
    			switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I090.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I090.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I090.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I090.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I090.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I090.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I090.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I090.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I090.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I090.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I090.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
    		case "090mc20_F":	    
	    		switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F090.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F090.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F090.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F090.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F090.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F090.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F090.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F090.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F090.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F090.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F090.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
    		case "108fv19_I":
    			switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I108.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I108.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I108.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I108.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I108.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I108.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I108.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I108.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I108.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I108.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I108.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
    		case "108fv19_F":	    
	    		switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F108.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F108.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F108.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F108.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F108.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F108.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F108.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F108.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F108.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F108.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F108.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
    		case "121mv23_I":
    			switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I121.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I121.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I121.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I121.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I121.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I121.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I121.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I121.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I121.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I121.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I121.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
    		case "121mv23_F":	    
	    		switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F121.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F121.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F121.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F121.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F121.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F121.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F121.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F121.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F121.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F121.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F121.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time013F+":013 "+p.time013I+" "+p.time040F+":040 "+p.time074I+" "+p.time061F+":061 "+p.time061I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time121F+":121 "+p.time121I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
	    }
	 	return p;	
	}
	
	function reduceSubjRemove(p, v) {		
		    switch (v.SubjectID){	   
				case "013mv22_I":
				switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I013.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I013.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I013.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I013.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I013.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I013.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I013.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I013.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I013.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I013.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I013.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
				case "013mv22_F":
				switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F013.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F013.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F013.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F013.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F013.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F013.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F013.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F013.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F013.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F013.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F013.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
	    		case "040fv24_I":
	    			switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I040.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I040.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I040.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I040.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I040.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I040.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I040.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I040.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I040.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I040.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I040.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break; 
	    		case "040fv24_F":	    
		    		switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F040.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F040.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F040.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F040.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F040.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F040.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F040.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F040.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F040.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F040.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F040.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
	    		case "061fv19_I": 
	    			switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I061.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I061.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I061.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I061.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I061.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I061.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I061.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I061.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I061.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I061.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I061.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
	    		case "061fv19_F":	    
		    		switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F061.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F061.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F061.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F061.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F061.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F061.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F061.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F061.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F061.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F061.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F061.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
	    		case "065mc21_I": 
	    			switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I065.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I065.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I065.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I065.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I065.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I065.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I065.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I065.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I065.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I065.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I065.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
	    		case "065mc21_F":	    
		    		switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F065.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F065.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F065.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F065.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F065.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F065.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F065.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F065.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F065.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F065.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F065.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
	    		case "074fc20_I":
	    			switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I074.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I074.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I074.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I074.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I074.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I074.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I074.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I074.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I074.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I074.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I074.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break; 
	    		case "074fc20_F":	    
		    		switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F074.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F074.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F074.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F074.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F074.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F074.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F074.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F074.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F074.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F074.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F074.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
	    		case "077fc20_I":
	    			switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I077.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I077.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I077.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I077.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I077.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I077.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I077.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I077.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I077.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I077.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I077.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
	    		case "077fc20_F":	    
		    		switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F077.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F077.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F077.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F077.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F077.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F077.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F077.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F077.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F077.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F077.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F077.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
	    		case "079mc20_I":
	    			switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I079.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I079.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I079.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I079.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I079.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I079.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I079.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I079.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I079.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I079.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I079.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
	    		case "079mc20_F":	    
		    		switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F079.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F079.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F079.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F079.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F079.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F079.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F079.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F079.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F079.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F079.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F079.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
	    		case "090mc20_I":
	    			switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I090.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I090.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I090.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I090.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I090.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I090.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I090.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I090.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I090.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I090.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I090.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
	    		case "090mc20_F":	    
		    		switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F090.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F090.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F090.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F090.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F090.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F090.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F090.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F090.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F090.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F090.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F090.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
	    		case "108fv19_I":
	    			switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I108.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I108.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I108.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I108.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I108.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I108.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I108.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I108.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I108.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I108.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I108.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
	    		case "108fv19_F":	    
		    		switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F108.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F108.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F108.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F108.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F108.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F108.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F108.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F108.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F108.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F108.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F108.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
	    		case "121mv23_I":
	    			switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I121.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I121.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I121.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I121.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I121.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I121.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I121.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I121.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I121.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I121.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I121.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
	    		case "121mv23_F":	    
		    		switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F121.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F121.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F121.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F121.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F121.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F121.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F121.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F121.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F121.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F121.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F121.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
	    	}
	    return p;	
	}

	//remove empty bin function
	function remove_empty_bins(source_group) {
    return {
        all:function () {
            return source_group.all().filter(function(d) {
                return Math.abs(d.value) > 0.00001; // if using floating-point numbers
                //return d.value !== 0; // if integers only
            });
        }
    };
	}
		
  var topicTDim = ndx.dimension(function(d){return d.TopicID});
  var timeDim = topicTDim.group().reduce(reduceAdd, reduceRemove, reduceInitial);

  
  timeChart
    .height(300)
    .elasticX(true)
    .dimension(topicTDim)
    .group(timeDim)
    .valueAccessor(function (p) {
	    return p.value.freq;})
    .xAxis().ticks(5);



  var genDim = ndx.dimension(function(d){return d.gender});
  var genGroup = genDim.group().reduce(reduceGenAdd, reduceGenRemove, reduceGenInitial);

  //var filteredGenGroup = remove_empty_bins(genGroup);

  genChart
    .width(100)
    .height(100)
    .innerRadius(20)
    .minAngleForLabel(0.1)
    .dimension(genDim)
    .group(genGroup)
    .valueAccessor(function (p) {
	    return p.value.freq;})
    .legend(dc.legend());
    // workaround for #703: not enough data is accessible through .label() to display percentages

    var subjDim = ndx.dimension(function(d){return d.SubjectID});
  	var subjGroup = subjDim.group().reduce(reduceSubjAdd, reduceSubjRemove, reduceSubjInitial);

  subjChart
    .height(subjCH)
    .dimension(subjDim)
    .group(subjGroup)
    .valueAccessor(function (p) {
	   return p.value.freq;})
    .xAxis().ticks(5);
					
	//create topic dimension
	var topicDim = ndx.dimension(function(d){return d.TopicID});
	var allTopics = topicDim.group();	

	
	var tierDim = ndx.dimension(function(d){ return d.TierID});
	var allTiers = tierDim.group();
	
	//annotation dimention
	var annotationDim = ndx.dimension(function(d){return d.AnnV}); 
	var allAnnotations = annotationDim.group();
	
	
	//set up topic chart	
  topicChart
  	.height(300)
  	.dimension(topicDim)
  	.elasticX(true)
  	.group(allTopics)
  	.xAxis().ticks(5);

  	
	//set up tier chart	
  tierChart
  	.height(tierCH)
  	.dimension(tierDim)
  	.elasticX(true)
  	.group(allTiers)
  	.xAxis().ticks(5);

  	
	//set up annotation chart
	annotationChart
	.height(SOptions[SIndex].annCH)
	.dimension(annotationDim)
  	.elasticX(true)
  	.group(allAnnotations)
  	.xAxis().ticks(5);

               
  dc.renderAll();

});

}	



/*
	//print filter to console -function
	function print_filter(filter){
		var f=eval(filter);
		if (typeof(f.length) != "undefined") {}else{}
		if (typeof(f.top) != "undefined") {f=f.top(Infinity);}else{}
		if (typeof(f.dimension) != "undefined") {f=f.dimension(function(d) { return "";}).top(Infinity);}else{}
		console.log(filter+"("+f.length+") = "+JSON.stringify(f).replace("[","[\n\t").replace(/}\,/g,"},\n\t").replace("]","\n]"));
	} 

	print_filter("allEntriesByTopic");
*/	
	
																	
