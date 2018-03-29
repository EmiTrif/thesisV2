function displayDashCharts(SIndex){
	//console.log(SIndex);
window.topicChart = dc.rowChart("#topicChart");
window.tierChart = dc.rowChart("#tierChart");	
window.annotationChart = dc.rowChart("#annotationChart");
window.timeChart = dc.rowChart("#timeChart");

window.genChart = dc.pieChart("#genChart");
window.genChart2 = dc.pieChart("#genChart2");
window.subjChart = dc.rowChart("#subjChart");


//fetch data 
//var topicTimeF = [747.711, 181.367, 250.292, 470.772, 193.292, 621.427, 258.842, 290.633, 436.731, 196.242, 376.136];
//var genTimeF = [1976.371, 2047.074];
//var subjTimeF = [405.116, 452.642, 421.868, 375.114, 379.254, 325.330, 460.166, 356.932, 397.277, 449.746];

//var topicTimeI = [1417.081, 1080.877, 583.574, 1460.015, 1673.617, 994.232, 1488.086];
//var genTimeI = [4690.176, 4159.360];
//var subjTimeI = [832.177, 989.360, 1005.151, 815.446, 1066.229, 864.039, 831.456, 967.644, 765.397, 712.637];

var tierHightDef = 80;
var tierHight2 = 300;

var subjHightDef = 300;
var subjHight2 = 80;


var tierCH = tierHightDef;
var subjCH = subjHightDef;


var SOptions = {
	FGaze : {
		col : "https://thesisv2.herokuapp.com/GazeF",
		annCH : 350},	
	IGaze : {
		col : "https://thesisv2.herokuapp.com/GazeI",
		annCH : 400},
	FHead : {
		col : "https://thesisv2.herokuapp.com/HeadF",
		annCH : 550 },
	IHead : {
		col : "https://thesisv2.herokuapp.com/HeadI",
		annCH : 700 },
	FHand : {
		col : "https://thesisv2.herokuapp.com/HandF",
		annCH : 800 },
	IHand : {
		col : "https://thesisv2.herokuapp.com/HandI", 
		annCH : 1500 },	
	FTouch : {
		col : "https://thesisv2.herokuapp.com/TouchF",
		annCH : 700 },
	ITouch : {
		col : "https://thesisv2.herokuapp.com/TouchI",
		annCH : 900 },
	FPosture : {
		col : "https://thesisv2.herokuapp.com/PostureF",
		annCH : 300 },
	IPosture : {
		col : "https://thesisv2.herokuapp.com/PostureI",
		annCH : 350 },
	FEmotions : {
		col : "https://thesisv2.herokuapp.com/EmotionsF",
		annCH : 300 },
	IEmotions : {
		col : "https://thesisv2.herokuapp.com/EmotionsI",
		annCH : 350 },
	FEmblems : {
		col : "https://thesisv2.herokuapp.com/EmblemF",
		annCH : 300 },
	IEmblems : {
		col : "https://thesisv2.herokuapp.com/EmblemI",
		annCH : 350 },		
	FF0Mov : {
		col : "https://thesisv2.herokuapp.com/F0MovF",
		annCH : 300 },
	IF0Mov : {
		col : "https://thesisv2.herokuapp.com/F0MovI",
		annCH : 350 },
	FF0Lvl : {
		col : "https://thesisv2.herokuapp.com/F0LvlF",
		annCH : 300 },
	IF0Lvl : {
		col : "https://thesisv2.herokuapp.com/F0LvlI",
		annCH : 350 },	
	FF0Val : {
		col : "https://thesisv2.herokuapp.com/F0ValF",
		annCH : 300 },
	IF0Val : {
		col : "https://thesisv2.herokuapp.com/F0ValI",
		annCH : 350 },
	FDeictic : {
		col : "https://thesisv2.herokuapp.com/DeicticF",
		annCH : 300 },
	IDeictic : {
		col : "https://thesisv2.herokuapp.com/DeicticI",
		annCH : 350 },
	FEmblems : {
		col : "https://thesisv2.herokuapp.com/EmblemF",
		annCH : 300 },
	IEmblems : {
		col : "https://thesisv2.herokuapp.com/EmblemI",
		annCH : 350 },								
	FDeictic : {
		col : "https://thesisv2.herokuapp.com/DeicticF",
		annCH : 300 },
	IDeictic : {
		col : "https://thesisv2.herokuapp.com/DeicticI",
		annCH : 350 },
	FF0Mov : {
		col : "https://thesisv2.herokuapp.com/F0MovF",
		annCH : 400 },
	IF0Mov : {
		col : "https://thesisv2.herokuapp.com/F0MovI",
		annCH : 450 },								
	FF0Lvl : {
		col : "https://thesisv2.herokuapp.com/F0LvlF",
		annCH : 600 },
	IF0Lvl : {
		col : "https://thesisv2.herokuapp.com/F0LvlI",
		annCH : 650 },	

	F015:	{
		col: "https://thesisv2.herokuapp.com/S015F",
		annCH : 1400,
		time : {
			T1 : 84.264,
			T2 : 25.992,
			T3 : 46.800,
			T4 : 96.054,
			T5 : 19.476,
			T6 : 115.720,
			T7 : 46.216,
			T8 : 38.639,
			T9 : 59.023,
			T10 : 69.605,
			T11 : 139.421
		}
	},
	I015:	{
		col: "https://thesisv2.herokuapp.com/S015I",
		annCH : 1200,
		time : {
			T1 : 146.657,
			T2 : 60.197,
			T3 : 85.599,
			T4 : 180.863,
			T5 : 193.385,
			T6 : 141.575,
			T7 : 239.068
		}
	},
	F019:	{
		col: "https://thesisv2.herokuapp.com/S019F",
		annCH : 900,
		time : {
			T1 : 64.749,
			T2 : 22.832,
			T3 : 11.157,
			T4 : 111.421,
			T5 : 31.793,
			T6 : 63.481,
			T7 : 29.596,
			T8 : 21.822,
			T9 : 40.646,
			T10 : 8.949,
			T11 : 29.888
		}
	},
	I019:	{
		col: "https://thesisv2.herokuapp.com/S019I",
		annCH : 1200,
		time : {
			T1 : 85.968,
			T2 : 35.047,
			T3 : 56.752,
			T4 : 125.752,
			T5 : 36.923,
			T6 : 101.047,
			T7 : 68.876
		}
	},
	F020:	{
		col: "https://thesisv2.herokuapp.com/S020F",
		annCH : 1000,
		time: {
			T1 : 116.948,
			T2 : 15.116,
			T3 : 28.724,
			T4 : 114.958,
			T5 : 16.632,
			T6 : 101.190,
			T7 : 33.851,
			T8 : 42.923,
			T9 : 33.738,
			T10 : 7.957,
			T11 : 34.024
		}
	},
	I020:	{
		col: "https://thesisv2.herokuapp.com/S020I",
		annCH : 1800,
		time : {
			T1 : 86.267,
			T2 : 60.345,
			T3 : 112.740,
			T4 : 173.061,
			T5 : 158.498,
			T6 : 52.674,
			T7 : 405.414
		}
	},
	F065:	{
		col: "https://thesisv2.herokuapp.com/S065F",
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
		col: "https://thesisv2.herokuapp.com/S065I",
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
		col: "https://thesisv2.herokuapp.com/S074F",
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
		col: "https://thesisv2.herokuapp.com/S074I",
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
		col: "https://thesisv2.herokuapp.com/S077F",
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
		col: "https://thesisv2.herokuapp.com/S077I",
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
		col: "https://thesisv2.herokuapp.com/S079F",
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
		col: "https://thesisv2.herokuapp.com/S079I",
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
		col: "https://thesisv2.herokuapp.com/S090F",
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
		col: "https://thesisv2.herokuapp.com/S090I",
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
		col: "https://thesisv2.herokuapp.com/S108F",
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
		col: "https://thesisv2.herokuapp.com/S108I",
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
	F043:	{
		col: "https://thesisv2.herokuapp.com/S043F",
		annCH : 1200,
		time : {
			T1 : 63.904,
			T2 : 29.255,
			T3 : 11.620,
			T4 : 43.101,
			T5 : 11.833,
			T6 : 55.522,
			T7 : 24.092,
			T8 : 21.487,
			T9 : 47.907,
			T10 : 6.521,
			T11 : 38.567
		}
	},
	I043:	{
		col: "https://thesisv2.herokuapp.com/S043I",
		annCH : 1400,
		time : {
			T1 : 91.798,
			T2 : 160.623,
			T3 : 106.246,
			T4 : 127.984,
			T5 : 81.434,
			T6 : 195.498,
			T7 : 450.847
		}
	}
};

//placeholders:
/*switch (SIndex.substring(0, 1)){
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
} */
if (!isNaN(SIndex.substring(1,2))){ //console.log(SIndex.substring(1,2));
	tierCH = tierHight2;
	subjCH = subjHight2;
}
//console.log(subjectTimePlaceHolder);

//funtion parts
function detTimeAdd(p, v){	
//console.log(v.TopicID);		
	switch (v.TopicID){
		case "T1":
		if (v.Formal == "F"){
		++p.countT1;
		if (p.countT1 == 0){p.timeT1 = 0} else {p.timeT1 = SOptions.F015.time.T1 + SOptions.F020.time.T1 + SOptions.F065.time.T1 + SOptions.F079.time.T1 + SOptions.F090.time.T1 + SOptions.F019.time.T1 + SOptions.F043.time.T1 + SOptions.F074.time.T1 + SOptions.F077.time.T1 +  SOptions.F108.time.T1;}
		} else if (v.Formal == "I"){
			++p.countT1;
			if (p.countT1 == 0){p.timeT1 = 0} else {p.timeT1 = SOptions.I015.time.T1 + SOptions.I019.time.T1 + SOptions.I020.time.T1 + SOptions.I043.time.T1 + SOptions.I065.time.T1 + SOptions.I074.time.T1 + SOptions.I077.time.T1 + SOptions.I079.time.T1 + SOptions.I090.time.T1 + SOptions.I108.time.T1;}
		} 
		break;
		case "T2":
		if (v.Formal == "F"){
		++p.countT2;
		if (p.countT2 == 0){p.timeT2 = 0} else {p.timeT2 = SOptions.F015.time.T2 + SOptions.F020.time.T2 + SOptions.F065.time.T2 + SOptions.F079.time.T2 + SOptions.F090.time.T2 + SOptions.F019.time.T2 + SOptions.F043.time.T2 + SOptions.F074.time.T2 + SOptions.F077.time.T2 +  SOptions.F108.time.T2;}
		} else if (v.Formal == "I"){
			++p.countT2;
			if (p.countT2 == 0){p.timeT2 = 0} else {p.timeT2 = SOptions.I015.time.T2 + SOptions.I019.time.T2 + SOptions.I020.time.T2 + SOptions.I043.time.T2 + SOptions.I065.time.T2 + SOptions.I074.time.T2 + SOptions.I077.time.T2 + SOptions.I079.time.T2 + SOptions.I090.time.T2 + SOptions.I108.time.T2;}		
		}
		break;
		case "T3":
		if (v.Formal == "F"){
		++p.countT3;
		if (p.countT3 == 0){p.timeT3 = 0} else {p.timeT3 = SOptions.F015.time.T3 + SOptions.F020.time.T3 + SOptions.F065.time.T3 + SOptions.F079.time.T3 + SOptions.F090.time.T3 + SOptions.F019.time.T3 + SOptions.F043.time.T3 + SOptions.F074.time.T3 + SOptions.F077.time.T3 +  SOptions.F108.time.T3;}
		} else if (v.Formal == "I"){
			++p.countT3;
			if (p.countT3 == 0){p.timeT3 = 0} else {p.timeT3 = SOptions.I015.time.T3 + SOptions.I019.time.T3 + SOptions.I020.time.T3 + SOptions.I043.time.T3 + SOptions.I065.time.T3 + SOptions.I074.time.T3 + SOptions.I077.time.T3 + SOptions.I079.time.T3 + SOptions.I090.time.T3 + SOptions.I108.time.T3;}
		} 
		break;
		case "T4":
		if (v.Formal == "F"){
		++p.countT4;
		if (p.countT4 == 0){p.timeT4 = 0} else {p.timeT4 = SOptions.F015.time.T4 + SOptions.F020.time.T4 + SOptions.F065.time.T4 + SOptions.F079.time.T4 + SOptions.F090.time.T4 + SOptions.F019.time.T4 + SOptions.F043.time.T4 + SOptions.F074.time.T4 + SOptions.F077.time.T4 +  SOptions.F108.time.T4;}
		} else if (v.Formal == "I"){
			++p.countT4;
			if (p.countT4 == 0){p.timeT4 = 0} else {p.timeT4 = SOptions.I015.time.T4 + SOptions.I019.time.T4 + SOptions.I020.time.T4 + SOptions.I043.time.T4 + SOptions.I065.time.T4 + SOptions.I074.time.T4 + SOptions.I077.time.T4 + SOptions.I079.time.T4 + SOptions.I090.time.T4 + SOptions.I108.time.T4;}		
		}  
		break;
		case "T5":
		if (v.Formal == "F"){
		++p.countT5;
		if (p.countT5 == 0){p.timeT5 = 0} else {p.timeT5 = SOptions.F015.time.T5 + SOptions.F020.time.T5 + SOptions.F065.time.T5  + SOptions.F079.time.T5 + SOptions.F090.time.T5 + SOptions.F019.time.T5 + SOptions.F043.time.T5 + SOptions.F074.time.T5 + SOptions.F077.time.T5 +  SOptions.F108.time.T5;}
		//console.log(p.countT5 + ":" + p.timeT5 );
		} else if (v.Formal == "I"){
			++p.countT5;
			if (p.countT5 == 0){p.timeT5 = 0} else {p.timeT5 = SOptions.I015.time.T5 + SOptions.I019.time.T5 + SOptions.I020.time.T5 + SOptions.I043.time.T5 + SOptions.I065.time.T5 + SOptions.I074.time.T5 + SOptions.I077.time.T5 + SOptions.I079.time.T5 + SOptions.I090.time.T5 + SOptions.I108.time.T5;}		
		} 
		break;
		case "T6":
		if (v.Formal == "F"){
		++p.countT6;
		if (p.countT6 == 0){p.timeT6 = 0} else {p.timeT6 = SOptions.F015.time.T6 + SOptions.F020.time.T6 + SOptions.F065.time.T6  + SOptions.F079.time.T6 + SOptions.F090.time.T6 + SOptions.F019.time.T6 + SOptions.F043.time.T6 + SOptions.F074.time.T6 + SOptions.F077.time.T6 +  SOptions.F108.time.T6;}
		} else if (v.Formal == "I"){
			++p.countT6;
			if (p.countT6 == 0){p.timeT6 = 0} else {p.timeT6 = SOptions.I015.time.T6 + SOptions.I019.time.T6 + SOptions.I020.time.T6 + SOptions.I043.time.T6 + SOptions.I065.time.T6 + SOptions.I074.time.T6 + SOptions.I077.time.T6 + SOptions.I079.time.T6 + SOptions.I090.time.T6 + SOptions.I108.time.T6;}		
		} 
		break;
		case "T7":
		if (v.Formal == "F"){
		++p.countT7;
		if (p.countT7 == 0){p.timeT7 = 0} else {p.timeT7 = SOptions.F015.time.T7 + SOptions.F020.time.T7 + SOptions.F065.time.T7  + SOptions.F079.time.T7 + SOptions.F090.time.T7 + SOptions.F019.time.T7 + SOptions.F043.time.T7 + SOptions.F074.time.T7 + SOptions.F077.time.T7 +  SOptions.F108.time.T7;}
		} else if (v.Formal == "I"){
			++p.countT7;
			if (p.countT7 == 0){p.timeT7 = 0} else {p.timeT7 = SOptions.I015.time.T7 + SOptions.I019.time.T7 + SOptions.I020.time.T7 + SOptions.I043.time.T7 + SOptions.I065.time.T7 + SOptions.I074.time.T7 + SOptions.I077.time.T7 + SOptions.I079.time.T7 + SOptions.I090.time.T7 + SOptions.I108.time.T7;}		
		} 
		break;
		case "T8":
		++p.countT8;
		if (p.countT8 == 0){p.timeT8 = 0} else {p.timeT8 = SOptions.F015.time.T8 + SOptions.F020.time.T8 + SOptions.F065.time.T8  + SOptions.F079.time.T8 + SOptions.F090.time.T8 + SOptions.F019.time.T8 + SOptions.F043.time.T8 + SOptions.F074.time.T8 + SOptions.F077.time.T8 +  SOptions.F108.time.T8;}
		break;
		case "T9":
		++p.countT9;
		if (p.countT9 == 0){p.timeT9 = 0} else {p.timeT9 = SOptions.F015.time.T9 + SOptions.F020.time.T9 + SOptions.F065.time.T9  + SOptions.F079.time.T9 + SOptions.F090.time.T9 + SOptions.F019.time.T9 + SOptions.F043.time.T9 + SOptions.F074.time.T9 + SOptions.F077.time.T9 +  SOptions.F108.time.T9;} 
		break;
		case "T10":
		++p.countT10;
		if (p.countT10 == 0){p.timeT10 = 0} else {p.timeT10 = SOptions.F015.time.T10 + SOptions.F020.time.T10 + SOptions.F065.time.T10 + SOptions.F079.time.T10 + SOptions.F090.time.T10 + SOptions.F019.time.T10 + SOptions.F043.time.T10 + SOptions.F074.time.T10 + SOptions.F077.time.T10 +  SOptions.F108.time.T10;}
		break;
		case "T11":
		++p.countT11;
		if (p.counT11 == 0){p.timeT11 = 0} else {p.timeT11 = SOptions.F015.time.T11 + SOptions.F020.time.T11 + SOptions.F065.time.T11 + SOptions.F079.time.T11 + SOptions.F090.time.T11 + SOptions.F019.time.T11 + SOptions.F043.time.T11 + SOptions.F074.time.T11 + SOptions.F077.time.T11 +  SOptions.F108.time.T11;}
		break;
	}
	p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; 
	p.time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	//console.log(p.timeT1 + " "+p.timeT2+" "+p.timeT3+" "+p.timeT4+" "+p.timeT5+" "+p.timeT6+" "+p.timeT7+" "+p.timeT8+" "+p.timeT9+" "+p.timeT10+" "+p.timeT11);
	if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);}; //console.log(p.count + " : "+ p.time);
}

function detTimeRemove(p, v){			
		switch (v.TopicID){
		case "T1":
		if (v.Formal == "F"){
		--p.countT1;
		if (p.countT1 == 0){p.timeT1 = 0} else {p.timeT1 = SOptions.F015.time.T1 + SOptions.F020.time.T1 + SOptions.F065.time.T1 + SOptions.F079.time.T1 + SOptions.F090.time.T1 + SOptions.F019.time.T1 + SOptions.F043.time.T1 + SOptions.F074.time.T1 + SOptions.F077.time.T1 +  SOptions.F108.time.T1;}
		} else if (v.Formal == "I"){
			--p.countT1;
			if (p.countT1 == 0){p.timeT1 = 0} else {p.timeT1 = SOptions.I015.time.T1 + SOptions.I019.time.T1 + SOptions.I020.time.T1 + SOptions.I043.time.T1 + SOptions.I065.time.T1 + SOptions.I074.time.T1 + SOptions.I077.time.T1 + SOptions.I079.time.T1 + SOptions.I090.time.T1 + SOptions.I108.time.T1;}
		} 
		break;
		case "T2":
		if (v.Formal == "F"){
		--p.countT2;
		if (p.countT2 == 0){p.timeT2 = 0} else {p.timeT2 = SOptions.F015.time.T2 + SOptions.F020.time.T2 + SOptions.F065.time.T2 + SOptions.F079.time.T2 + SOptions.F090.time.T2 + SOptions.F019.time.T2 + SOptions.F043.time.T2 + SOptions.F074.time.T2 + SOptions.F077.time.T2 +  SOptions.F108.time.T2;}
		} else if (v.Formal == "I"){
			--p.countT2;
			if (p.countT2 == 0){p.timeT2 = 0} else {p.timeT2 = SOptions.I015.time.T2 + SOptions.I019.time.T2 + SOptions.I020.time.T2 + SOptions.I043.time.T2 + SOptions.I065.time.T2 + SOptions.I074.time.T2 + SOptions.I077.time.T2 + SOptions.I079.time.T2 + SOptions.I090.time.T2 + SOptions.I108.time.T2;}		
		}
		break;
		case "T3":
		if (v.Formal == "F"){
		--p.countT3;
		if (p.countT3 == 0){p.timeT3 = 0} else {p.timeT3 = SOptions.F015.time.T3 + SOptions.F020.time.T3 + SOptions.F065.time.T3 + SOptions.F079.time.T3 + SOptions.F090.time.T3 + SOptions.F019.time.T3 + SOptions.F043.time.T3 + SOptions.F074.time.T3 + SOptions.F077.time.T3 +  SOptions.F108.time.T3;}
		} else if (v.Formal == "I"){
			--p.countT3;
			if (p.countT3 == 0){p.timeT3 = 0} else {p.timeT3 = SOptions.I015.time.T3 + SOptions.I019.time.T3 + SOptions.I020.time.T3 + SOptions.I043.time.T3 + SOptions.I065.time.T3 + SOptions.I074.time.T3 + SOptions.I077.time.T3 + SOptions.I079.time.T3 + SOptions.I090.time.T3 + SOptions.I108.time.T3;}
		} 
		break;
		case "T4":
		if (v.Formal == "F"){
		--p.countT4;
		if (p.countT4 == 0){p.timeT4 = 0} else {p.timeT4 = SOptions.F015.time.T4 + SOptions.F020.time.T4 + SOptions.F065.time.T4 + SOptions.F079.time.T4 + SOptions.F090.time.T4 + SOptions.F019.time.T4 + SOptions.F043.time.T4 + SOptions.F074.time.T4 + SOptions.F077.time.T4 +  SOptions.F108.time.T4;}
		} else if (v.Formal == "I"){
			--p.countT4;
			if (p.countT4 == 0){p.timeT4 = 0} else {p.timeT4 = SOptions.I015.time.T4 + SOptions.I019.time.T4 + SOptions.I020.time.T4 + SOptions.I043.time.T4 + SOptions.I065.time.T4 + SOptions.I074.time.T4 + SOptions.I077.time.T4 + SOptions.I079.time.T4 + SOptions.I090.time.T4 + SOptions.I108.time.T4;}		
		}	
		break;
		case "T5":
		if (v.Formal == "F"){
		--p.countT5;
		if (p.countT5 == 0){p.timeT5 = 0} else {p.timeT5 = SOptions.F015.time.T5 + SOptions.F020.time.T5 + SOptions.F065.time.T5  + SOptions.F079.time.T5 + SOptions.F090.time.T5 + SOptions.F019.time.T5 + SOptions.F043.time.T5 + SOptions.F074.time.T5 + SOptions.F077.time.T5 +  SOptions.F108.time.T5;}
		//console.log(p.countT5 + ":" + p.timeT5 );
		} else if (v.Formal == "I"){
			--p.countT5;
			if (p.countT5 == 0){p.timeT5 = 0} else {p.timeT5 = SOptions.I015.time.T5 + SOptions.I019.time.T5 + SOptions.I020.time.T5 + SOptions.I043.time.T5 + SOptions.I065.time.T5 + SOptions.I074.time.T5 + SOptions.I077.time.T5 + SOptions.I079.time.T5 + SOptions.I090.time.T5 + SOptions.I108.time.T5;}		
		} 
		break;
		case "T6":
		if (v.Formal == "F"){
		--p.countT6;
		if (p.countT6 == 0){p.timeT6 = 0} else {p.timeT6 = SOptions.F015.time.T6 + SOptions.F020.time.T6 + SOptions.F065.time.T6  + SOptions.F079.time.T6 + SOptions.F090.time.T6 + SOptions.F019.time.T6 + SOptions.F043.time.T6 + SOptions.F074.time.T6 + SOptions.F077.time.T6 +  SOptions.F108.time.T6;}
		} else if (v.Formal == "I"){
			--p.countT6;
			if (p.countT6 == 0){p.timeT6 = 0} else {p.timeT6 = SOptions.I015.time.T6 + SOptions.I019.time.T6 + SOptions.I020.time.T6 + SOptions.I043.time.T6 + SOptions.I065.time.T6 + SOptions.I074.time.T6 + SOptions.I077.time.T6 + SOptions.I079.time.T6 + SOptions.I090.time.T6 + SOptions.I108.time.T6;}		
		} 
		break;
		case "T7":
		if (v.Formal == "F"){
		--p.countT7;
		if (p.countT7 == 0){p.timeT7 = 0} else {p.timeT7 = SOptions.F015.time.T7 + SOptions.F020.time.T7 + SOptions.F065.time.T7  + SOptions.F079.time.T7 + SOptions.F090.time.T7 + SOptions.F019.time.T7 + SOptions.F043.time.T7 + SOptions.F074.time.T7 + SOptions.F077.time.T7 +  SOptions.F108.time.T7;}
		} else if (v.Formal == "I"){
			--p.countT7;
			if (p.countT7 == 0){p.timeT7 = 0} else {p.timeT7 = SOptions.I015.time.T7 + SOptions.I019.time.T7 + SOptions.I020.time.T7 + SOptions.I043.time.T7 + SOptions.I065.time.T7 + SOptions.I074.time.T7 + SOptions.I077.time.T7 + SOptions.I079.time.T7 + SOptions.I090.time.T7 + SOptions.I108.time.T7;}		
		} 
		break;
		case "T8":
		--p.countT8;
		if (p.countT8 == 0){p.timeT8 = 0} else {p.timeT8 = SOptions.F015.time.T8 + SOptions.F020.time.T8 + SOptions.F065.time.T8  + SOptions.F079.time.T8 + SOptions.F090.time.T8 + SOptions.F019.time.T8 + SOptions.F043.time.T8 + SOptions.F074.time.T8 + SOptions.F077.time.T8 +  SOptions.F108.time.T8;}
		break;
		case "T9":
		--p.countT9;
		if (p.countT9 == 0){p.timeT9 = 0} else {p.timeT9 = SOptions.F015.time.T9 + SOptions.F020.time.T9 + SOptions.F065.time.T9  + SOptions.F079.time.T9 + SOptions.F090.time.T9 + SOptions.F019.time.T9 + SOptions.F043.time.T9 + SOptions.F074.time.T9 + SOptions.F077.time.T9 +  SOptions.F108.time.T9;} 
		break;
		case "T10":
		--p.countT10;
		if (p.countT10 == 0){p.timeT10 = 0} else {p.timeT10 = SOptions.F015.time.T10 + SOptions.F020.time.T10 + SOptions.F065.time.T10 + SOptions.F079.time.T10 + SOptions.F090.time.T10 + SOptions.F019.time.T10 + SOptions.F043.time.T10 + SOptions.F074.time.T10 + SOptions.F077.time.T10 +  SOptions.F108.time.T10;}
		break;
		case "T11":
		--p.countT11;
		if (p.countT11 == 0){p.timeT11 = 0} else {p.timeT11 = SOptions.F015.time.T11 + SOptions.F020.time.T11 + SOptions.F065.time.T11 + SOptions.F079.time.T11 + SOptions.F090.time.T11 + SOptions.F019.time.T11 + SOptions.F043.time.T11 + SOptions.F074.time.T11 + SOptions.F077.time.T11 +  SOptions.F108.time.T11;}
		break;
	}
	p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; 
	p.time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	//console.log(p.timeT1 + " "+p.timeT2+" "+p.timeT3+" "+p.timeT4+" "+p.timeT5+" "+p.timeT6+" "+p.timeT7+" "+p.timeT8+" "+p.timeT9+" "+p.timeT10+" "+p.timeT11);
	if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);}; //console.log(p.countT11 + " : "+ p.time);
}

//fetch data
d3.json(SOptions[SIndex].col, function(data) {
	//console.log(typeof(data));
	
	var ndx = crossfilter(data);

	function reduceTierAdd(p, v){
		switch(v.TierID){
			case "V_gaze":
				detTimeAdd(p, v);
			break;
			case "V_headshift":
				detTimeAdd(p, v);
			break;
			case "V_handshape":
				detTimeAdd(p, v);
			break;
			case "V_touchmotion":
				detTimeAdd(p, v);
			break;
			case "V_posture":
				detTimeAdd(p, v);
			break;
			case "V_emotions":
				detTimeAdd(p, v);
			break;
			case "V_deictic":
				detTimeAdd(p, v);
			break;
			case "V_emblemes":
				detTimeAdd(p, v);
			break;
			case "P_speaker_F0Mov":
				detTimeAdd(p, v);
			break;
			case "P_speaker_F0Level":
				detTime(p, v);
			break;
		}
		return p;
	}

	function reduceTierRemove(p, v){
		switch(v.TierID){
			case "V_gaze":
				detTimeRemove(p, v);
			break;
			case "V_headshift":
				detTimeRemove(p, v);
			break;
			case "V_handshape":
				detTimeRemove(p, v);
			break;
			case "V_touchmotion":
				detTimeRemove(p, v);
			break;
			case "V_posture":
				detTimeRemove(p, v);
			break;
			case "V_emotions":
				detTimeRemove(p, v);
			break;
			case "V_deictic":
				detTimeRemove(p, v);
			break;
			case "V_emblemes":
				detTimeRemove(p, v);
			break;
			case "P_speaker_F0Mov":
				detTimeRemove(p, v);
			break;
			case "P_speaker_F0Level":
				detTimeRemove(p, v);
			break;
		}
		return p;
	}

	function reduceTierInitial(){
		return{
			countT1:0, countT2:0, countT3:0, countT4:0, countT5:0, countT6:0, countT7:0, countT8:0, countT9:0, countT10:0, countT11:0,
			timeT1:0, timeT2:0, timeT3:0, timeT4:0, timeT5:0, timeT6:0, timeT7:0, timeT8:0, timeT9:0, timeT10:0, timeT11:0,
			count:0,
			time:0,
			freq:0
		};
	}
	
	function reduceAdd(p, v) {	
		//console.log(p);
		switch (v.TopicID){
			case "T1":
			if (v.Formal == "F"){
			++p.count;
			if (p.count == 0){p.time = 0} else {p.time = SOptions.F015.time.T1 + SOptions.F020.time.T1 + SOptions.F065.time.T1 + SOptions.F079.time.T1 + SOptions.F090.time.T1 + SOptions.F019.time.T1 + SOptions.F043.time.T1 + SOptions.F074.time.T1 + SOptions.F077.time.T1 +  SOptions.F108.time.T1;}
			if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			} else if (v.Formal == "I"){
				++p.count;
				if (p.count == 0){p.time = 0} else {p.time = SOptions.I015.time.T1 + SOptions.I019.time.T1 +SOptions.I020.time.T1 + SOptions.I043.time.T1 + SOptions.I065.time.T1 + SOptions.I074.time.T1 + SOptions.I077.time.T1 + SOptions.I079.time.T1 + SOptions.I090.time.T1 + SOptions.I108.time.T1;}
				if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
			} 
			break;
			case "T2":
			if (v.Formal == "F"){
			++p.count;
			if (p.count == 0){p.time = 0} else {p.time = SOptions.F015.time.T2 + SOptions.F020.time.T2 + SOptions.F065.time.T2 + SOptions.F079.time.T2 + SOptions.F090.time.T2 + SOptions.F019.time.T2 + SOptions.F043.time.T2 + SOptions.F074.time.T2 + SOptions.F077.time.T2 +  SOptions.F108.time.T2;}
			if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			} else if (v.Formal == "I"){
				++p.count;
				if (p.count == 0){p.time = 0} else {p.time =  SOptions.I015.time.T2 + SOptions.I019.time.T2 +SOptions.I020.time.T2 + SOptions.I043.time.T2 + SOptions.I065.time.T2 + SOptions.I074.time.T2 + SOptions.I077.time.T2 + SOptions.I079.time.T2 + SOptions.I090.time.T2 + SOptions.I108.time.T2;}
				if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			} 
			break;
			case "T3":
			if (v.Formal == "F"){
			++p.count;
			if (p.count == 0){p.time = 0} else {p.time = SOptions.F015.time.T3 + SOptions.F020.time.T3 + SOptions.F065.time.T3  + SOptions.F079.time.T3 + SOptions.F090.time.T3 + SOptions.F019.time.T3 + SOptions.F043.time.T3 + SOptions.F074.time.T3 + SOptions.F077.time.T3 +  SOptions.F108.time.T3;}
			if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			} else if (v.Formal == "I"){
				++p.count;
				if (p.count == 0){p.time = 0} else {p.time =  SOptions.I015.time.T3 + SOptions.I019.time.T3 +SOptions.I020.time.T3 + SOptions.I043.time.T3 + SOptions.I065.time.T3 + SOptions.I074.time.T3 + SOptions.I077.time.T3 + SOptions.I079.time.T3 + SOptions.I090.time.T3 + SOptions.I108.time.T3;}
				if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			} 
			break;
			case "T4":
			if (v.Formal == "F"){
			++p.count;
			if (p.count == 0){p.time = 0} else {p.time = SOptions.F015.time.T4 + SOptions.F020.time.T4 + SOptions.F065.time.T4  + SOptions.F079.time.T4 + SOptions.F090.time.T4 + SOptions.F019.time.T4 + SOptions.F043.time.T4 + SOptions.F074.time.T4 + SOptions.F077.time.T4 +  SOptions.F108.time.T4;}
			if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);}; //console.log(p.time);
			} else if (v.Formal == "I"){
				++p.count;
				if (p.count == 0){p.time = 0} else {p.time =  SOptions.I015.time.T4 + SOptions.I019.time.T4 +SOptions.I020.time.T4 + SOptions.I043.time.T4 + SOptions.I065.time.T4 + SOptions.I074.time.T4 + SOptions.I077.time.T4 + SOptions.I079.time.T4 + SOptions.I090.time.T4 + SOptions.I108.time.T4;}
				if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);}; 
			} 
			break;
			case "T5":
			if (v.Formal == "F"){
			++p.count;
			if (p.count == 0){p.time = 0} else {p.time = SOptions.F015.time.T5 + SOptions.F020.time.T5 + SOptions.F065.time.T5  + SOptions.F079.time.T5 + SOptions.F090.time.T5 + SOptions.F019.time.T5 + SOptions.F043.time.T5 + SOptions.F074.time.T5 + SOptions.F077.time.T5 +  SOptions.F108.time.T5;}
			if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};	//console.log("2::"+ p.count+" "+p.time);	
			} else if (v.Formal == "I"){
				++p.count;
				if (p.count == 0){p.time = 0} else {p.time =  SOptions.I015.time.T5 + SOptions.I019.time.T5 +SOptions.I020.time.T5 + SOptions.I043.time.T5 + SOptions.I065.time.T5 + SOptions.I074.time.T5 + SOptions.I077.time.T5 + SOptions.I079.time.T5 + SOptions.I090.time.T5 + SOptions.I108.time.T5;}
				if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			}	
			break;
	  		case "T6":
			if (v.Formal == "F"){
			++p.count;
			if (p.count == 0){p.time = 0} else {p.time = SOptions.F015.time.T6 + SOptions.F020.time.T6 + SOptions.F065.time.T6  + SOptions.F079.time.T6 + SOptions.F090.time.T6 + SOptions.F019.time.T6 + SOptions.F043.time.T6 + SOptions.F074.time.T6 + SOptions.F077.time.T6 +  SOptions.F108.time.T6;}
			if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			} else if (v.Formal == "I"){
				++p.count;
				if (p.count == 0){p.time = 0} else {p.time = SOptions.I015.time.T6 + SOptions.I019.time.T6 +SOptions.I020.time.T6 + SOptions.I043.time.T6 + SOptions.I065.time.T6 + SOptions.I074.time.T6 + SOptions.I077.time.T6 + SOptions.I079.time.T6 + SOptions.I090.time.T6 + SOptions.I108.time.T6;}
				if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			} 
			break;
			case "T7":
			if (v.Formal == "F"){
			++p.count;
			if (p.count == 0){p.time = 0} else {p.time = SOptions.F015.time.T7 + SOptions.F020.time.T7 + SOptions.F065.time.T7  + SOptions.F079.time.T7 + SOptions.F090.time.T7 + SOptions.F019.time.T7 + SOptions.F043.time.T7 + SOptions.F074.time.T7 + SOptions.F077.time.T7 +  SOptions.F108.time.T7;}
			if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			} else if (v.Formal == "I"){
				++p.count;
				if (p.count == 0){p.time = 0} else {p.time = SOptions.I015.time.T7 + SOptions.I019.time.T7 + SOptions.I020.time.T7 + SOptions.I043.time.T7 + SOptions.I065.time.T7 + SOptions.I074.time.T7 + SOptions.I077.time.T7 + SOptions.I079.time.T7 + SOptions.I090.time.T7 + SOptions.I108.time.T7;}
				if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			} 
			break;
			case "T8":
			++p.count;
			if (p.count == 0){p.time = 0} else {p.time = SOptions.F015.time.T8 + SOptions.F020.time.T8 + SOptions.F065.time.T8  + SOptions.F079.time.T8 + SOptions.F090.time.T8 + SOptions.F019.time.T8 + SOptions.F043.time.T8 + SOptions.F074.time.T8 + SOptions.F077.time.T8 +  SOptions.F108.time.T8;}
			if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			break;
			case "T9":
			++p.count;
			if (p.count == 0){p.time = 0} else {p.time = SOptions.F015.time.T9 + SOptions.F020.time.T9 + SOptions.F065.time.T9  + SOptions.F079.time.T9 + SOptions.F090.time.T9 + SOptions.F019.time.T9 + SOptions.F043.time.T9 + SOptions.F074.time.T9 + SOptions.F077.time.T9 +  SOptions.F108.time.T9;} 
			if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			break;
			case "T10":
			++p.count;
			if (p.count == 0){p.time = 0} else {p.time = SOptions.F015.time.T10 + SOptions.F020.time.T10 + SOptions.F065.time.T10 + SOptions.F079.time.T10 + SOptions.F090.time.T10 + SOptions.F019.time.T10 + SOptions.F043.time.T10 + SOptions.F074.time.T10 + SOptions.F077.time.T10 +  SOptions.F108.time.T10;}
			if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			break;
			case "T11":
			++p.count;
			if (p.count == 0){p.time = 0} else {p.time = SOptions.F015.time.T11 + SOptions.F020.time.T11 + SOptions.F065.time.T11 + SOptions.F079.time.T11 + SOptions.F090.time.T11 + SOptions.F019.time.T11 + SOptions.F043.time.T11 + SOptions.F074.time.T11 + SOptions.F077.time.T11 +  SOptions.F108.time.T11;}
			if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			break;
			}
		return p;
	}

	function reduceRemove(p, v){
		switch (v.TopicID){
			case "T1":
			if (v.Formal == "F"){
			--p.count;
			if (p.count == 0){p.time = 0} else {p.time = SOptions.F015.time.T1 + SOptions.F020.time.T1 + SOptions.F065.time.T1 + SOptions.F079.time.T1 + SOptions.F090.time.T1 + SOptions.F019.time.T1 + SOptions.F043.time.T1 + SOptions.F074.time.T1 + SOptions.F077.time.T1 +  SOptions.F108.time.T1;}
			if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			} else if (v.Formal == "I"){
				--p.count;
				if (p.count == 0){p.time = 0} else {p.time = SOptions.I015.time.T1 + SOptions.I019.time.T1 +SOptions.I020.time.T1 + SOptions.I043.time.T1 + SOptions.I065.time.T1 + SOptions.I074.time.T1 + SOptions.I077.time.T1 + SOptions.I079.time.T1 + SOptions.I090.time.T1 + SOptions.I108.time.T1;}
				if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
			} 
			break;
			case "T2":
			if (v.Formal == "F"){
			--p.count;
			if (p.count == 0){p.time = 0} else {p.time = SOptions.F015.time.T2 + SOptions.F020.time.T2 + SOptions.F065.time.T2 + SOptions.F079.time.T2 + SOptions.F090.time.T2 + SOptions.F019.time.T2 + SOptions.F043.time.T2 + SOptions.F074.time.T2 + SOptions.F077.time.T2 +  SOptions.F108.time.T2;}
			if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			} else if (v.Formal == "I"){
				--p.count;
				if (p.count == 0){p.time = 0} else {p.time =  SOptions.I015.time.T1 + SOptions.I019.time.T2 +SOptions.I020.time.T2 + SOptions.I043.time.T2 + SOptions.I065.time.T2 + SOptions.I074.time.T2 + SOptions.I077.time.T2 + SOptions.I079.time.T2 + SOptions.I090.time.T2 + SOptions.I108.time.T2;}
				if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			} 
			break;
			case "T3":
			if (v.Formal == "F"){
			--p.count;
			if (p.count == 0){p.time = 0} else {p.time = SOptions.F015.time.T3 + SOptions.F020.time.T3 + SOptions.F065.time.T3  + SOptions.F079.time.T3 + SOptions.F090.time.T3 + SOptions.F019.time.T3 + SOptions.F043.time.T3 + SOptions.F074.time.T3 + SOptions.F077.time.T3 +  SOptions.F108.time.T3;}
			if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			} else if (v.Formal == "I"){
				--p.count;
				if (p.count == 0){p.time = 0} else {p.time =  SOptions.I015.time.T3 + SOptions.I019.time.T3 +SOptions.I020.time.T3 + SOptions.I043.time.T3 + SOptions.I065.time.T3 + SOptions.I074.time.T3 + SOptions.I077.time.T3 + SOptions.I079.time.T3 + SOptions.I090.time.T3 + SOptions.I108.time.T3;}
				if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			} 
			break;
			case "T4":
			if (v.Formal == "F"){
			--p.count;
			if (p.count == 0){p.time = 0} else {p.time = SOptions.F015.time.T4 + SOptions.F020.time.T4 + SOptions.F065.time.T4  + SOptions.F079.time.T4 + SOptions.F090.time.T4 + SOptions.F019.time.T4 + SOptions.F043.time.T4 + SOptions.F074.time.T4 + SOptions.F077.time.T4 +  SOptions.F108.time.T4;}
			if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);}; //console.log(p.time);
			} else if (v.Formal == "I"){
				--p.count;
				if (p.count == 0){p.time = 0} else {p.time =  SOptions.I015.time.T4 + SOptions.I019.time.T4 +SOptions.I020.time.T4 + SOptions.I043.time.T4 + SOptions.I065.time.T4 + SOptions.I074.time.T4 + SOptions.I077.time.T4 + SOptions.I079.time.T4 + SOptions.I090.time.T4 + SOptions.I108.time.T4;}
				if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);}; 
			} 
			break;
			case "T5":
			if (v.Formal == "F"){
			--p.count;
			if (p.count == 0){p.time = 0} else {p.time = SOptions.F015.time.T5 + SOptions.F020.time.T5 + SOptions.F065.time.T5  + SOptions.F079.time.T5 + SOptions.F090.time.T5 + SOptions.F019.time.T5 + SOptions.F043.time.T5 + SOptions.F074.time.T5 + SOptions.F077.time.T5 +  SOptions.F108.time.T5;}
			if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};	//console.log("2::"+ p.count+" "+p.time);	
			} else if (v.Formal == "I"){
				--p.count;
				if (p.count == 0){p.time = 0} else {p.time =  SOptions.I015.time.T5 + SOptions.I019.time.T5 +SOptions.I020.time.T5 + SOptions.I043.time.T5 + SOptions.I065.time.T5 + SOptions.I074.time.T5 + SOptions.I077.time.T5 + SOptions.I079.time.T5 + SOptions.I090.time.T5 + SOptions.I108.time.T5;}
				if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			}	
			break;
	  		case "T6":
			if (v.Formal == "F"){
			--p.count;
			if (p.count == 0){p.time = 0} else {p.time = SOptions.F015.time.T6 + SOptions.F020.time.T6 + SOptions.F065.time.T6  + SOptions.F079.time.T6 + SOptions.F090.time.T6 + SOptions.F019.time.T6 + SOptions.F043.time.T6 + SOptions.F074.time.T6 + SOptions.F077.time.T6 +  SOptions.F108.time.T6;}
			if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			} else if (v.Formal == "I"){
				--p.count;
				if (p.count == 0){p.time = 0} else {p.time = SOptions.I015.time.T6 + SOptions.I019.time.T6 +SOptions.I020.time.T6 + SOptions.I043.time.T6 + SOptions.I065.time.T6 + SOptions.I074.time.T6 + SOptions.I077.time.T6 + SOptions.I079.time.T6 + SOptions.I090.time.T6 + SOptions.I108.time.T6;}
				if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			} 
			break;
			case "T7":
			if (v.Formal == "F"){
			--p.count;
			if (p.count == 0){p.time = 0} else {p.time = SOptions.F015.time.T7 + SOptions.F020.time.T7 + SOptions.F065.time.T7  + SOptions.F079.time.T7 + SOptions.F090.time.T7 + SOptions.F019.time.T7 + SOptions.F043.time.T7 + SOptions.F074.time.T7 + SOptions.F077.time.T7 +  SOptions.F108.time.T7;}
			if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			} else if (v.Formal == "I"){
				--p.count;
				if (p.count == 0){p.time = 0} else {p.time = SOptions.I015.time.T7 + SOptions.I019.time.T7 +SOptions.I020.time.T7 + SOptions.I043.time.T7 + SOptions.I065.time.T7 + SOptions.I074.time.T7 + SOptions.I077.time.T7 + SOptions.I079.time.T7 + SOptions.I090.time.T7 + SOptions.I108.time.T7;}
				if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			} 
			break;
			case "T8":
			--p.count;
			if (p.count == 0){p.time = 0} else {p.time = SOptions.F015.time.T8 + SOptions.F020.time.T8 + SOptions.F065.time.T8  + SOptions.F079.time.T8 + SOptions.F090.time.T8 + SOptions.F019.time.T8 + SOptions.F043.time.T8 + SOptions.F074.time.T8 + SOptions.F077.time.T8 +  SOptions.F108.time.T8;}
			if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			break;
			case "T9":
			--p.count;
			if (p.count == 0){p.time = 0} else {p.time = SOptions.F015.time.T9 + SOptions.F020.time.T9 + SOptions.F065.time.T9  + SOptions.F079.time.T9 + SOptions.F090.time.T9 + SOptions.F019.time.T9 + SOptions.F043.time.T9 + SOptions.F074.time.T9 + SOptions.F077.time.T9 +  SOptions.F108.time.T9;} 
			if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			break;
			case "T10":
			--p.count;
			if (p.count == 0){p.time = 0} else {p.time = SOptions.F015.time.T10 + SOptions.F020.time.T10 + SOptions.F065.time.T10 + SOptions.F079.time.T10 + SOptions.F090.time.T10 + SOptions.F019.time.T10 + SOptions.F043.time.T10 + SOptions.F074.time.T10 + SOptions.F077.time.T10 +  SOptions.F108.time.T10;}
			if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			break;
			case "T11":
			--p.count;
			if (p.count == 0){p.time = 0} else {p.time = SOptions.F015.time.T11 + SOptions.F020.time.T11 + SOptions.F065.time.T11 + SOptions.F079.time.T11 + SOptions.F090.time.T11 + SOptions.F019.time.T11 + SOptions.F043.time.T11 + SOptions.F074.time.T11 + SOptions.F077.time.T11 +  SOptions.F108.time.T11;}
			if (p.time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/p.time), 8);};
			break;
			}
		return p;
	}

	function reduceInitial(){
		return{
			count : 0,
			time : 0,
			freq: 0 
		};
	}

	function reduceAdd2(p, v) {	
		//console.log(p);
	    switch (v.TopicID){	   
				case "T1": 	    
				//console.log(v.SubjectID);
	    		switch (v.SubjectID) {  
	    			case "015mv26_F":
	    			++p.count015F;
	    			if (p.count015F == 0) {p.time015F = 0} else {p.time015F = SOptions.F015.time.T1;}    	
	    			break;
	    			case "015mv26_I":
	    			++p.count015I;				
	    			if (p.count015I == 0) {p.time015I = 0} else {p.time015I = SOptions.I015.time.T1;}    	
	    			break;
	    			case "019fc20_F":
	    			++p.count019F;
	    			if (p.count019F == 0) {p.time019F = 0} else {p.time019F = SOptions.F019.time.T1;}    	
	    			break;
	    			case "019fc20_I":
	    			++p.count019I;
	    			if (p.count019I == 0) {p.time019I = 0} else {p.time019I = SOptions.I019.time.T1;}  
	    			//console.log(p.count019I+" : "+p.time019I);  
	    			break;
	    			case "020mc25_F":
	    			++p.count020F;
	    			if (p.count020F == 0) {p.time020F = 0} else {p.time020F = SOptions.F020.time.T1;}    	
	    			break;
	    			case "020mc25_I":
	    			++p.count020I;
	    			if (p.count020I == 0) {p.time020I = 0} else {p.time020I = SOptions.I020.time.T1;}    	
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
	    			case "043fc21_F":
	    			++p.count043F;
	    			if (p.count043F == 0) {p.time043F = 0} else {p.time043F = SOptions.F043.time.T1;}    	
	    			break;
	    			case "043fc21_I":
	    			++p.count043I;
	    			if (p.count043I == 0) {p.time043I = 0} else {p.time043I = SOptions.I043.time.T1;}    	
	    			break;
	    		}
				p.count = p.count015F+p.count015I+p.count019F+p.count019I+p.count020F+p.count020I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count043F+p.count043I; //console.log(p.count+ ": count \n");
				//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    		time = p.time015F+p.time015I+p.time019F+p.time019I+p.time020F+p.time020I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time043F+p.time043I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T2": 	    
	    		switch (v.SubjectID) {  
	    			case "015mv26_F":
	    			++p.count015F;
	    			if (p.count015F == 0) {p.time015F = 0} else {p.time015F = SOptions.F015.time.T2;}    	
	    			break;
	    			case "015mv26_I":
	    			++p.count015I;				
	    			if (p.count015I == 0) {p.time015I = 0} else {p.time015I = SOptions.I015.time.T2;}    	
	    			break;
	    			case "019fc20_F":
	    			++p.count019F;
	    			if (p.count019F == 0) {p.time019F = 0} else {p.time019F = SOptions.F019.time.T2;}    	
	    			break;
	    			case "019fc20_I":
	    			++p.count019I;
	    			if (p.count019I == 0) {p.time019I = 0} else {p.time019I = SOptions.I019.time.T2;}    	
	    			break;
	    			case "020mc25_F":
	    			++p.count020F;
	    			if (p.count020F == 0) {p.time020F = 0} else {p.time020F = SOptions.F020.time.T2;}    	
	    			break;
	    			case "020mc25_I":
	    			++p.count020I;
	    			if (p.count020I == 0) {p.time020I = 0} else {p.time020I = SOptions.I020.time.T2;}    	
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
	    			case "043fc21_F":
	    			++p.count043F;
	    			if (p.count043F == 0) {p.time043F = 0} else {p.time043F = SOptions.F043.time.T2;}    	
	    			break;
	    			case "043fc21_I":
	    			++p.count043I;
	    			if (p.count043I == 0) {p.time043I = 0} else {p.time043I = SOptions.I043.time.T2;}    	
	    			break;
	    		}
	    		p.count = p.count015F+p.count015I+p.count019F+p.count019I+p.count020F+p.count020I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count043F+p.count043I; //console.log(p.count+ ": count \n");
				//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    		time = p.time015F+p.time015I+p.time019F+p.time019I+p.time020F+p.time020I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time043F+p.time043I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T3": 	    
	    		switch (v.SubjectID) {  
	    			case "015mv26_F":
	    			++p.count015F;
	    			if (p.count015F == 0) {p.time015F = 0} else {p.time015F = SOptions.F015.time.T3;}    	
	    			break;
	    			case "015mv26_I":
	    			++p.count015I;				
	    			if (p.count015I == 0) {p.time015I = 0} else {p.time015I = SOptions.I015.time.T3;}    	
	    			break;
	    			case "019fc20_F":
	    			++p.count019F;
	    			if (p.count019F == 0) {p.time019F = 0} else {p.time019F = SOptions.F019.time.T3;}    	
	    			break;
	    			case "019fc20_I":
	    			++p.count019I;
	    			if (p.count019I == 0) {p.time019I = 0} else {p.time019I = SOptions.I019.time.T3;}    	
	    			break;
	    			case "020mc25_F":
	    			++p.count020F;
	    			if (p.count020F == 0) {p.time020F = 0} else {p.time020F = SOptions.F020.time.T3;}    	
	    			break;
	    			case "020mc25_I":
	    			++p.count020I;
	    			if (p.count020I == 0) {p.time020I = 0} else {p.time020I = SOptions.I020.time.T3;}    	
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
	    			case "043fc21_F":
	    			++p.count043F;
	    			if (p.count043F == 0) {p.time043F = 0} else {p.time043F = SOptions.F043.time.T3;}    	
	    			break;
	    			case "043fc21_I":
	    			++p.count043I;
	    			if (p.count043I == 0) {p.time043I = 0} else {p.time043I = SOptions.I043.time.T3;}    	
	    			break;
	    		}
	    		p.count = p.count015F+p.count015I+p.count019F+p.count019I+p.count020F+p.count020I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count043F+p.count043I; //console.log(p.count+ ": count \n");
				//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    		time = p.time015F+p.time015I+p.time019F+p.time019I+p.time020F+p.time020I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time043F+p.time043I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T4": 	    
	    		switch (v.SubjectID) {  
	    			case "015mv26_F":
	    			++p.count015F;
	    			if (p.count015F == 0) {p.time015F = 0} else {p.time015F = SOptions.F015.time.T4;}    	
	    			break;
	    			case "015mv26_I":
	    			++p.count015I;				
	    			if (p.count015I == 0) {p.time015I = 0} else {p.time015I = SOptions.I015.time.T4;}    	
	    			break;
	    			case "019fc20_F":
	    			++p.count019F;
	    			if (p.count019F == 0) {p.time019F = 0} else {p.time019F = SOptions.F019.time.T4;}    	
	    			break;
	    			case "019fc20_I":
	    			++p.count019I;
	    			if (p.count019I == 0) {p.time019I = 0} else {p.time019I = SOptions.I019.time.T4;}    	
	    			break;
	    			case "020mc25_F":
	    			++p.count020F;
	    			if (p.count020F == 0) {p.time020F = 0} else {p.time020F = SOptions.F020.time.T4;}    	
	    			break;
	    			case "020mc25_I":
	    			++p.count020I;
	    			if (p.count020I == 0) {p.time020I = 0} else {p.time020I = SOptions.I020.time.T4;}    	
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
	    			case "043fc21_F":
	    			++p.count043F;
	    			if (p.count043F == 0) {p.time043F = 0} else {p.time043F = SOptions.F043.time.T4;}    	
	    			break;
	    			case "043fc21_I":
	    			++p.count043I;
	    			if (p.count043I == 0) {p.time043I = 0} else {p.time043I = SOptions.I043.time.T4;}    	
	    			break;
	    		}
	    		p.count = p.count015F+p.count015I+p.count019F+p.count019I+p.count020F+p.count020I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count043F+p.count043I; //console.log(p.count+ ": count \n");
				//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    		time = p.time015F+p.time015I+p.time019F+p.time019I+p.time020F+p.time020I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time043F+p.time043I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T5": 	    
	    		switch (v.SubjectID) {  
	    			case "015mv26_F":
	    			++p.count015F;
	    			if (p.count015F == 0) {p.time015F = 0} else {p.time015F = SOptions.F015.time.T5;}    	
	    			break;
	    			case "015mv26_I":
	    			++p.count015I;				
	    			if (p.count015I == 0) {p.time015I = 0} else {p.time015I = SOptions.I015.time.T5;}    	
	    			break;
	    			case "019fc20_F":
	    			++p.count019F;
	    			if (p.count019F == 0) {p.time019F = 0} else {p.time019F = SOptions.F019.time.T5;}    	
	    			break;
	    			case "019fc20_I":
	    			++p.count019I;
	    			if (p.count019I == 0) {p.time019I = 0} else {p.time019I = SOptions.I019.time.T5;}    	
	    			break;
	    			case "020mc25_F":
	    			++p.count020F;
	    			if (p.count020F == 0) {p.time020F = 0} else {p.time020F = SOptions.F020.time.T5;}    	
	    			break;
	    			case "020mc25_I":
	    			++p.count020I;
	    			if (p.count020I == 0) {p.time020I = 0} else {p.time020I = SOptions.I020.time.T5;}    	
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
	    			case "043fc21_F":
	    			++p.count043F;
	    			if (p.count043F == 0) {p.time043F = 0} else {p.time043F = SOptions.F043.time.T5;}    	
	    			break;
	    			case "043fc21_I":
	    			++p.count043I;
	    			if (p.count043I == 0) {p.time043I = 0} else {p.time043I = SOptions.I043.time.T5;}    	
	    			break;
	    		}
	    		p.count = p.count015F+p.count015I+p.count019F+p.count019I+p.count020F+p.count020I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count043F+p.count043I; //console.log(p.count+ ": count \n");
				//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    		time = p.time015F+p.time015I+p.time019F+p.time019I+p.time020F+p.time020I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time043F+p.time043I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T6": 	    
	    		switch (v.SubjectID) {  
	    			case "015mv26_F":
	    			++p.count015F;
	    			if (p.count015F == 0) {p.time015F = 0} else {p.time015F = SOptions.F015.time.T6;}    	
	    			break;
	    			case "015mv26_I":
	    			++p.count015I;				
	    			if (p.count015I == 0) {p.time015I = 0} else {p.time015I = SOptions.I015.time.T6;}    	
	    			break;
	    			case "019fc20_F":
	    			++p.count019F;
	    			if (p.count019F == 0) {p.time019F = 0} else {p.time019F = SOptions.F019.time.T6;}    	
	    			break;
	    			case "019fc20_I":
	    			++p.count019I;
	    			if (p.count019I == 0) {p.time019I = 0} else {p.time019I = SOptions.I019.time.T6;}    	
	    			break;
	    			case "020mc25_F":
	    			++p.count020F;
	    			if (p.count020F == 0) {p.time020F = 0} else {p.time020F = SOptions.F020.time.T6;}    	
	    			break;
	    			case "020mc25_I":
	    			++p.count020I;
	    			if (p.count020I == 0) {p.time020I = 0} else {p.time020I = SOptions.I020.time.T6;}    	
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
	    			case "043fc21_F":
	    			++p.count043F;
	    			if (p.count043F == 0) {p.time043F = 0} else {p.time043F = SOptions.F043.time.T6;}    	
	    			break;
	    			case "043fc21_I":
	    			++p.count043I;
	    			if (p.count043I == 0) {p.time043I = 0} else {p.time043I = SOptions.I043.time.T6;}    	
	    			break;
	    		}
	    		p.count = p.count015F+p.count015I+p.count019F+p.count019I+p.count020F+p.count020I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count043F+p.count043I; //console.log(p.count+ ": count \n");
				//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    		time = p.time015F+p.time015I+p.time019F+p.time019I+p.time020F+p.time020I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time043F+p.time043I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n"); 
	    		break;
	    		case "T7":
	    		switch (v.SubjectID) {  
	    			case "015mv26_F":
	    			++p.count015F;
	    			if (p.count015F == 0) {p.time015F = 0} else {p.time015F = SOptions.F015.time.T7;}   	
	    			break;
	    			case "015mv26_I":
	    			++p.count015I;				
	    			if (p.count015I == 0) {p.time015I = 0} else {p.time015I = SOptions.I015.time.T7;} 
	    			break;
	    			case "019fc20_F":
	    			++p.count019F;
	    			if (p.count019F == 0) {p.time019F = 0} else {p.time019F = SOptions.F019.time.T7;}  
	    			break;
	    			case "019fc20_I":
	    			++p.count019I;
	    			if (p.count019I == 0) {p.time019I = 0} else {p.time019I = SOptions.I019.time.T7;}    	
	    			break;
	    			case "020mc25_F":
	    			++p.count020F;
	    			if (p.count020F == 0) {p.time020F = 0} else {p.time020F = SOptions.F020.time.T7;}    	
	    			break;
	    			case "020mc25_I":
	    			++p.count020I;
	    			if (p.count020I == 0) {p.time020I = 0} else {p.time020I = SOptions.I020.time.T7;}    	
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
	    			case "043fc21_F":
	    			++p.count043F;
	    			if (p.count043F == 0) {p.time043F = 0} else {p.time043F = SOptions.F043.time.T7;}    	
	    			break;
	    			case "043fc21_I":
	    			++p.count043I;
	    			if (p.count043I == 0) {p.time043I = 0} else {p.time043I = SOptions.I043.time.T7;}    	
	    			break;
	    		}
	    		p.count = p.count015F+p.count015I+p.count019F+p.count019I+p.count020F+p.count020I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count043F+p.count043I; //console.log(p.count+ ": count \n");
				//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    		time = p.time015F+p.time015I+p.time019F+p.time019I+p.time020F+p.time020I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time043F+p.time043I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n"); 
	    		break;
	    		case "T8":
	    		switch (v.SubjectID) {  
	    			case "015mv26_F":
	    			++p.count015F;
	    			if (p.count015F == 0) {p.time015F = 0} else {p.time015F = SOptions.F015.time.T8;}    	
	    			break;
	    			case "015mv26_I":
	    			++p.count015I;				
	    			if (p.count015I == 0) {p.time015I = 0} else {p.time015I = SOptions.I015.time.T8;}    	
	    			break;
	    			case "019fc20_F":
	    			++p.count019F;
	    			if (p.count019F == 0) {p.time019F = 0} else {p.time019F = SOptions.F019.time.T8;}    	
	    			break;
	    			case "019fc20_I":
	    			++p.count019I;
	    			if (p.count019I == 0) {p.time019I = 0} else {p.time019I = SOptions.I019.time.T8;}    	
	    			break;
	    			case "020mc25_F":
	    			++p.count020F;
	    			if (p.count020F == 0) {p.time020F = 0} else {p.time020F = SOptions.F020.time.T8;}    	
	    			break;
	    			case "020mc25_I":
	    			++p.count020I;
	    			if (p.count020I == 0) {p.time020I = 0} else {p.time020I = SOptions.I020.time.T8;}    	
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
	    			case "043fc21_F":
	    			++p.count043F;
	    			if (p.count043F == 0) {p.time043F = 0} else {p.time043F = SOptions.F043.time.T8;}    	
	    			break;
	    			case "043fc21_I":
	    			++p.count043I;
	    			if (p.count043I == 0) {p.time043I = 0} else {p.time043I = SOptions.I043.time.T8;}    	
	    			break;
	    		}
	    		p.count = p.count015F+p.count015I+p.count019F+p.count019I+p.count020F+p.count020I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count043F+p.count043I; //console.log(p.count+ ": count \n");
				//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    		time = p.time015F+p.time015I+p.time019F+p.time019I+p.time020F+p.time020I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time043F+p.time043I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T9":
	    		switch (v.SubjectID) {  
	    			case "015mv26_F":
	    			++p.count015F;
	    			if (p.count015F == 0) {p.time015F = 0} else {p.time015F = SOptions.F015.time.T9;}    	
	    			break;
	    			case "015mv26_I":
	    			++p.count015I;				
	    			if (p.count015I == 0) {p.time015I = 0} else {p.time015I = SOptions.I015.time.T9;}    	
	    			break;
	    			case "019fc20_F":
	    			++p.count019F;
	    			if (p.count019F == 0) {p.time019F = 0} else {p.time019F = SOptions.F019.time.T9;}    	
	    			break;
	    			case "019fc20_I":
	    			++p.count019I;
	    			if (p.count019I == 0) {p.time019I = 0} else {p.time019I = SOptions.I019.time.T9;}    	
	    			break;
	    			case "020mc25_F":
	    			++p.count020F;
	    			if (p.count020F == 0) {p.time020F = 0} else {p.time020F = SOptions.F020.time.T9;}    	
	    			break;
	    			case "020mc25_I":
	    			++p.count020I;
	    			if (p.count020I == 0) {p.time020I = 0} else {p.time020I = SOptions.I020.time.T9;}    	
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
	    			case "043fc21_F":
	    			++p.count043F;
	    			if (p.count043F == 0) {p.time043F = 0} else {p.time043F = SOptions.F043.time.T9;}    	
	    			break;
	    			case "043fc21_I":
	    			++p.count043I;
	    			if (p.count043I == 0) {p.time043I = 0} else {p.time043I = SOptions.I043.time.T9;}    	
	    			break;
	    		}
	    		p.count = p.count015F+p.count015I+p.count019F+p.count019I+p.count020F+p.count020I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count043F+p.count043I; //console.log(p.count+ ": count \n");
				//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    		time = p.time015F+p.time015I+p.time019F+p.time019I+p.time020F+p.time020I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time043F+p.time043I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T10": 
	    		switch (v.SubjectID) {  
	    			case "015mv26_F":
	    			++p.count015F;
	    			if (p.count015F == 0) {p.time015F = 0} else {p.time015F = SOptions.F015.time.T10;}    	
	    			break;
	    			case "015mv26_I":
	    			++p.count015I;				
	    			if (p.count015I == 0) {p.time015I = 0} else {p.time015I = SOptions.I015.time.T10;}    	
	    			break;
	    			case "019fc20_F":
	    			++p.count019F;
	    			if (p.count019F == 0) {p.time019F = 0} else {p.time019F = SOptions.F019.time.T10;}    	
	    			break;
	    			case "019fc20_I":
	    			++p.count019I;
	    			if (p.count019I == 0) {p.time019I = 0} else {p.time019I = SOptions.I019.time.T10;}    	
	    			break;
	    			case "020mc25_F":
	    			++p.count020F;
	    			if (p.count020F == 0) {p.time020F = 0} else {p.time020F = SOptions.F020.time.T10;}    	
	    			break;
	    			case "020mc25_I":
	    			++p.count020I;
	    			if (p.count020I == 0) {p.time020I = 0} else {p.time020I = SOptions.I020.time.T10;}    	
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
	    			case "043fc21_F":
	    			++p.count043F;
	    			if (p.count043F == 0) {p.time043F = 0} else {p.time043F = SOptions.F043.time.T10;}    	
	    			break;
	    			case "043fc21_I":
	    			++p.count043I;
	    			if (p.count043I == 0) {p.time043I = 0} else {p.time043I = SOptions.I043.time.T10;}    	
	    			break;
	    		}
	    		p.count = p.count015F+p.count015I+p.count019F+p.count019I+p.count020F+p.count020I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count043F+p.count043I; //console.log(p.count+ ": count \n");
				//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    		time = p.time015F+p.time015I+p.time019F+p.time019I+p.time020F+p.time020I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time043F+p.time043I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T11":
	    		switch (v.SubjectID) {  
	    			case "015mv26_F":
	    			++p.count015F;
	    			if (p.count015F == 0) {p.time015F = 0} else {p.time015F = SOptions.F015.time.T11;}    	
	    			break;
	    			case "015mv26_I":
	    			++p.count015I;				
	    			if (p.count015I == 0) {p.time015I = 0} else {p.time015I = SOptions.I015.time.T11;}    	
	    			break;
	    			case "019fc20_F":
	    			++p.count019F;
	    			if (p.count019F == 0) {p.time019F = 0} else {p.time019F = SOptions.F019.time.T11;}    	
	    			break;
	    			case "019fc20_I":
	    			++p.count019I;
	    			if (p.count019I == 0) {p.time019I = 0} else {p.time019I = SOptions.I019.time.T11;}    	
	    			break;
	    			case "020mc25_F":
	    			++p.count020F;
	    			if (p.count020F == 0) {p.time020F = 0} else {p.time020F = SOptions.F020.time.T11;}    	
	    			break;
	    			case "020mc25_I":
	    			++p.count020I;
	    			if (p.count020I == 0) {p.time020I = 0} else {p.time020I = SOptions.I020.time.T11;}    	
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
	    			case "043fc21_F":
	    			++p.count043F;
	    			if (p.count043F == 0) {p.time043F = 0} else {p.time043F = SOptions.F043.time.T11;}    	
	    			break;
	    			case "043fc21_I":
	    			++p.count043I;
	    			if (p.count043I == 0) {p.time043I = 0} else {p.time043I = SOptions.I043.time.T11;}    	
	    			break;
	    		}
	    		p.count = p.count015F+p.count015I+p.count019F+p.count019I+p.count020F+p.count020I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count043F+p.count043I; //console.log(p.count+ ": count \n");
				//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    		time = p.time015F+p.time015I+p.time019F+p.time019I+p.time020F+p.time020I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time043F+p.time043I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    	}	
	    return p;
	}

	function reduceRemove2(p, v) {
		 switch (v.TopicID){
				case "T1": 	    
	    		switch (v.SubjectID) {  
	    			case "015mv26_F":
	    			--p.count015F;
	    			if (p.count015F == 0) {p.time015F = 0} else {p.time015F = SOptions.F015.time.T1;}    	
	    			break;
	    			case "015mv26_I":
	    			--p.count015I;				
	    			if (p.count015I == 0) {p.time015I = 0} else {p.time015I = SOptions.I015.time.T1;}    	
	    			break;
	    			case "019fc20_F":
	    			--p.count019F;
	    			if (p.count019F == 0) {p.time019F = 0} else {p.time019F = SOptions.F019.time.T1;}    	
	    			break;
	    			case "019fc20_I":
	    			--p.count019I;
	    			if (p.count019I == 0) {p.time019I = 0} else {p.time019I = SOptions.I019.time.T1;}   //console.log(p.count019I+" : "+p.time019I+"\n"); 	
	    			break;
	    			case "020mc25_F":
	    			--p.count020F;
	    			if (p.count020F == 0) {p.time020F = 0} else {p.time020F = SOptions.F020.time.T1;}    	
	    			break;
	    			case "020mc25_I":
	    			--p.count020I;
	    			if (p.count020I == 0) {p.time020I = 0} else {p.time020I = SOptions.I020.time.T1;}    	
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
	    			case "043fc21_F":
	    			--p.count043F;
	    			if (p.count043F == 0) {p.time043F = 0} else {p.time043F = SOptions.F043.time.T1;}    	
	    			break;
	    			case "043fc21_I":
	    			--p.count043I;
	    			if (p.count043I == 0) {p.time043I = 0} else {p.time043I = SOptions.I043.time.T1;}    	
	    			break;
	    		}
	    		p.count = p.count015F+p.count015I+p.count019F+p.count019I+p.count020F+p.count020I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count043F+p.count043I; //console.log(p.count+ ": count \n");
				//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    		time = p.time015F+p.time015I+p.time019F+p.time019I+p.time020F+p.time020I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time043F+p.time043I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log("time:" +time+" : "+p.count+"\n");
	    		break;
	    		case "T2": 	 
		    		switch (v.SubjectID) {     
		    			case "015mv26_F":
		    			--p.count015F;
		    			if (p.count015F == 0) {p.time015F = 0} else {p.time015F = SOptions.F015.time.T2;}    	
		    			break;
		    			case "015mv26_I":
		    			--p.count015I;				
		    			if (p.count015I == 0) {p.time015I = 0} else {p.time015I = SOptions.I015.time.T2;}    	
		    			break;
		    			case "019fc20_F":
		    			--p.count019F;
		    			if (p.count019F == 0) {p.time019F = 0} else {p.time019F = SOptions.F019.time.T2;}    	
		    			break;
		    			case "019fc20_I":
		    			--p.count019I;
		    			if (p.count019I == 0) {p.time019I = 0} else {p.time019I = SOptions.I019.time.T2;}    	
		    			break;
		    			case "020mc25_F":
		    			--p.count020F;
		    			if (p.count020F == 0) {p.time020F = 0} else {p.time020F = SOptions.F020.time.T2;}    	
		    			break;
		    			case "020mc25_I":
		    			--p.count020I;
		    			if (p.count020I == 0) {p.time020I = 0} else {p.time020I = SOptions.I020.time.T2;}    	
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
		    			case "043fc21_F":
		    			--p.count043F;
		    			if (p.count043F == 0) {p.time043F = 0} else {p.time043F = SOptions.F043.time.T2;}    	
		    			break;
		    			case "043fc21_I":
		    			--p.count043I;
		    			if (p.count043I == 0) {p.time043I = 0} else {p.time043I = SOptions.I043.time.T2;}    	
		    			break;
		    		}
	    		p.count = p.count015F+p.count015I+p.count019F+p.count019I+p.count020F+p.count020I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count043F+p.count043I; //console.log(p.count+ ": count \n");
				//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    		time = p.time015F+p.time015I+p.time019F+p.time019I+p.time020F+p.time020I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time043F+p.time043I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T3": 
		    		switch (v.SubjectID) {  	    
		    			case "015mv26_F":
		    			--p.count015F;
		    			if (p.count015F == 0) {p.time015F = 0} else {p.time015F = SOptions.F015.time.T3;}    	
		    			break;
		    			case "015mv26_I":
		    			--p.count015I;				
		    			if (p.count015I == 0) {p.time015I = 0} else {p.time015I = SOptions.I015.time.T3;}    	
		    			break;
		    			case "019fc20_F":
		    			--p.count019F;
		    			if (p.count019F == 0) {p.time019F = 0} else {p.time019F = SOptions.F019.time.T3;}    	
		    			break;
		    			case "019fc20_I":
		    			--p.count019I;
		    			if (p.count019I == 0) {p.time019I = 0} else {p.time019I = SOptions.I019.time.T3;}    	
		    			break;
		    			case "020mc25_F":
		    			--p.count020F;
		    			if (p.count020F == 0) {p.time020F = 0} else {p.time020F = SOptions.F020.time.T3;}    	
		    			break;
		    			case "020mc25_I":
		    			--p.count020I;
		    			if (p.count020I == 0) {p.time020I = 0} else {p.time020I = SOptions.I020.time.T3;}    	
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
		    			case "043fc21_F":
		    			--p.count043F;
		    			if (p.count043F == 0) {p.time043F = 0} else {p.time043F = SOptions.F043.time.T3;}    	
		    			break;
		    			case "043fc21_I":
		    			--p.count043I;
		    			if (p.count043I == 0) {p.time043I = 0} else {p.time043I = SOptions.I043.time.T3;}    	
		    			break;
		    		}
	    		p.count = p.count015F+p.count015I+p.count019F+p.count019I+p.count020F+p.count020I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count043F+p.count043I; //console.log(p.count+ ": count \n");
				//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    		time = p.time015F+p.time015I+p.time019F+p.time019I+p.time020F+p.time020I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time043F+p.time043I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T4":
		    		switch (v.SubjectID) {   	    
		    			case "015mv26_F":
		    			--p.count015F;
		    			if (p.count015F == 0) {p.time015F = 0} else {p.time015F = SOptions.F015.time.T3;}    	
		    			break;
		    			case "015mv26_I":
		    			--p.count015I;				
		    			if (p.count015I == 0) {p.time015I = 0} else {p.time015I = SOptions.I015.time.T3;}    	
		    			break;
		    			case "019fc20_F":
		    			--p.count019F;
		    			if (p.count019F == 0) {p.time019F = 0} else {p.time019F = SOptions.F019.time.T3;}    	
		    			break;
		    			case "019fc20_I":
		    			--p.count019I;
		    			if (p.count019I == 0) {p.time019I = 0} else {p.time019I = SOptions.I019.time.T3;}    	
		    			break;
		    			case "020mc25_F":
		    			--p.count020F;
		    			if (p.count020F == 0) {p.time020F = 0} else {p.time020F = SOptions.F020.time.T3;}    	
		    			break;
		    			case "020mc25_I":
		    			--p.count020I;
		    			if (p.count020I == 0) {p.time020I = 0} else {p.time020I = SOptions.I020.time.T3;}    	
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
		    			case "043fc21_F":
		    			--p.count043F;
		    			if (p.count043F == 0) {p.time043F = 0} else {p.time043F = SOptions.F043.time.T4;}    	
		    			break;
		    			case "043fc21_I":
		    			--p.count043I;
		    			if (p.count043I == 0) {p.time043I = 0} else {p.time043I = SOptions.I043.time.T4;}    	
		    			break;
		    		}
	    		p.count = p.count015F+p.count015I+p.count019F+p.count019I+p.count020F+p.count020I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count043F+p.count043I; //console.log(p.count+ ": count \n");
				//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    		time = p.time015F+p.time015I+p.time019F+p.time019I+p.time020F+p.time020I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time043F+p.time043I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T5": 
		    		switch (v.SubjectID) {  	    
		    			case "015mv26_F":
		    			--p.count015F;
		    			if (p.count015F == 0) {p.time015F = 0} else {p.time015F = SOptions.F015.time.T5;}    	
		    			break;
		    			case "015mv26_I":
		    			--p.count015I;				
		    			if (p.count015I == 0) {p.time015I = 0} else {p.time015I = SOptions.I015.time.T5;}    	
		    			break;
		    			case "019fc20_F":
		    			--p.count019F;
		    			if (p.count019F == 0) {p.time019F = 0} else {p.time019F = SOptions.F019.time.T5;}    	
		    			break;
		    			case "019fc20_I":
		    			--p.count019I;
		    			if (p.count019I == 0) {p.time019I = 0} else {p.time019I = SOptions.I019.time.T5;}    	
		    			break;
		    			case "020mc25_F":
		    			--p.count020F;
		    			if (p.count020F == 0) {p.time020F = 0} else {p.time020F = SOptions.F020.time.T5;}    	
		    			break;
		    			case "020mc25_I":
		    			--p.count020I;
		    			if (p.count020I == 0) {p.time020I = 0} else {p.time020I = SOptions.I020.time.T5;}    	
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
		    			case "043fc21_F":
		    			--p.count043F;
		    			if (p.count043F == 0) {p.time043F = 0} else {p.time043F = SOptions.F043.time.T5;}    	
		    			break;
		    			case "043fc21_I":
		    			--p.count043I;
		    			if (p.count043I == 0) {p.time043I = 0} else {p.time043I = SOptions.I043.time.T5;}    	
		    			break;
		    		}
	    		p.count = p.count015F+p.count015I+p.count019F+p.count019I+p.count020F+p.count020I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count043F+p.count043I; //console.log(p.count+ ": count \n");
				//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    		time = p.time015F+p.time015I+p.time019F+p.time019I+p.time020F+p.time020I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time043F+p.time043I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T6":
		    		switch (v.SubjectID) {  	    
		    			case "015mv26_F":
		    			--p.count015F;
		    			if (p.count015F == 0) {p.time015F = 0} else {p.time015F = SOptions.F015.time.T6;}    	
		    			break;
		    			case "015mv26_I":
		    			--p.count015I;				
		    			if (p.count015I == 0) {p.time015I = 0} else {p.time015I = SOptions.I015.time.T6;}    	
		    			break;
		    			case "019fc20_F":
		    			--p.count019F;
		    			if (p.count019F == 0) {p.time019F = 0} else {p.time019F = SOptions.F019.time.T6;}    	
		    			break;
		    			case "019fc20_I":
		    			--p.count019I;
		    			if (p.count019I == 0) {p.time019I = 0} else {p.time019I = SOptions.I019.time.T6;}    	
		    			break;
		    			case "020mc25_F":
		    			--p.count020F;
		    			if (p.count020F == 0) {p.time020F = 0} else {p.time020F = SOptions.F020.time.T6;}    	
		    			break;
		    			case "020mc25_I":
		    			--p.count020I;
		    			if (p.count020I == 0) {p.time020I = 0} else {p.time020I = SOptions.I020.time.T6;}    	
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
		    			case "043fc21_F":
		    			--p.count043F;
		    			if (p.count043F == 0) {p.time043F = 0} else {p.time043F = SOptions.F043.time.T5;}    	
		    			break;
		    			case "043fc21_I":
		    			--p.count043I;
		    			if (p.count043I == 0) {p.time043I = 0} else {p.time043I = SOptions.I043.time.T5;}    	
		    			break;
		    		}
	    		p.count = p.count015F+p.count015I+p.count019F+p.count019I+p.count020F+p.count020I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count043F+p.count043I; //console.log(p.count+ ": count \n");
				//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    		time = p.time015F+p.time015I+p.time019F+p.time019I+p.time020F+p.time020I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time043F+p.time043I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");    		
	    		break;
	    		case "T7":
		    		switch (v.SubjectID) {  	    
		    			case "015mv26_F":
		    			--p.count015F;
		    			if (p.count015F == 0) {p.time015F = 0} else {p.time015F = SOptions.F015.time.T7;}    	
		    			break;
		    			case "015mv26_I":
		    			--p.count015I;				
		    			if (p.count015I == 0) {p.time015I = 0} else {p.time015I = SOptions.I015.time.T7;}    	
		    			break;
		    			case "019fc20_F":
		    			--p.count019F;
		    			if (p.count019F == 0) {p.time019F = 0} else {p.time019F = SOptions.F019.time.T7;}    	
		    			break;
		    			case "019fc20_I":
		    			--p.count019I;
		    			if (p.count019I == 0) {p.time019I = 0} else {p.time019I = SOptions.I019.time.T7;}    	
		    			break;
		    			case "020mc25_F":
		    			--p.count020F;
		    			if (p.count020F == 0) {p.time020F = 0} else {p.time020F = SOptions.F020.time.T7;}    	
		    			break;
		    			case "020mc25_I":
		    			--p.count020I;
		    			if (p.count020I == 0) {p.time020I = 0} else {p.time020I = SOptions.I020.time.T7;}    	
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
		    			case "043fc21_F":
		    			--p.count043F;
		    			if (p.count043F == 0) {p.time043F = 0} else {p.time043F = SOptions.F043.time.T7;}    	
		    			break;
		    			case "043fc21_I":
		    			--p.count043I;
		    			if (p.count043I == 0) {p.time043I = 0} else {p.time043I = SOptions.I043.time.T7;}    	
		    			break;
		    		}
	    		p.count = p.count015F+p.count015I+p.count019F+p.count019I+p.count020F+p.count020I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count043F+p.count043I; //console.log(p.count+ ": count \n");
				//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    		time = p.time015F+p.time015I+p.time019F+p.time019I+p.time020F+p.time020I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time043F+p.time043I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T8":
		    		switch (v.SubjectID) {  	    
		    			case "015mv26_F":
		    			--p.count015F;
		    			if (p.count015F == 0) {p.time015F = 0} else {p.time015F = SOptions.F015.time.T5;}    	
		    			break;
		    			case "015mv26_I":
		    			--p.count015I;				
		    			if (p.count015I == 0) {p.time015I = 0} else {p.time015I = SOptions.I015.time.T8;}    	
		    			break;
		    			case "019fc20_F":
		    			--p.count019F;
		    			if (p.count019F == 0) {p.time019F = 0} else {p.time019F = SOptions.F019.time.T8;}    	
		    			break;
		    			case "019fc20_I":
		    			--p.count019I;
		    			if (p.count019I == 0) {p.time019I = 0} else {p.time019I = SOptions.I019.time.T8;}    	
		    			break;
		    			case "020mc25_F":
		    			--p.count020F;
		    			if (p.count020F == 0) {p.time020F = 0} else {p.time020F = SOptions.F020.time.T8;}    	
		    			break;
		    			case "020mc25_I":
		    			--p.count020I;
		    			if (p.count020I == 0) {p.time020I = 0} else {p.time020I = SOptions.I020.time.T8;}    	
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
		    			case "043fc21_F":
		    			--p.count043F;
		    			if (p.count043F == 0) {p.time043F = 0} else {p.time043F = SOptions.F043.time.T8;}    	
		    			break;
		    			case "043fc21_I":
		    			--p.count043I;
		    			if (p.count043I == 0) {p.time043I = 0} else {p.time043I = SOptions.I043.time.T8;}    	
		    			break;
		    		}
	    		p.count = p.count015F+p.count015I+p.count019F+p.count019I+p.count020F+p.count020I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count043F+p.count043I; //console.log(p.count+ ": count \n");
				//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    		time = p.time015F+p.time015I+p.time019F+p.time019I+p.time020F+p.time020I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time043F+p.time043I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T9":
		    		switch (v.SubjectID) {  	    
		    			case "015mv26_F":
		    			--p.count015F;
		    			if (p.count015F == 0) {p.time015F = 0} else {p.time015F = SOptions.F015.time.T9;}    	
		    			break;
		    			case "015mv26_I":
		    			--p.count015I;				
		    			if (p.count015I == 0) {p.time015I = 0} else {p.time015I = SOptions.I015.time.T9;}    	
		    			break;
		    			case "019fc20_F":
		    			--p.count019F;
		    			if (p.count019F == 0) {p.time019F = 0} else {p.time019F = SOptions.F019.time.T9;}    	
		    			break;
		    			case "019fc20_I":
		    			--p.count019I;
		    			if (p.count019I == 0) {p.time019I = 0} else {p.time019I = SOptions.I019.time.T9;}    	
		    			break;
		    			case "020mc25_F":
		    			--p.count020F;
		    			if (p.count020F == 0) {p.time020F = 0} else {p.time020F = SOptions.F020.time.T9;}    	
		    			break;
		    			case "020mc25_I":
		    			--p.count020I;
		    			if (p.count020I == 0) {p.time020I = 0} else {p.time020I = SOptions.I020.time.T9;}    	
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
		    			case "043fc21_F":
		    			--p.count043F;
		    			if (p.count043F == 0) {p.time043F = 0} else {p.time043F = SOptions.F043.time.T9;}    	
		    			break;
		    			case "043fc21_I":
		    			--p.count043I;
		    			if (p.count043I == 0) {p.time043I = 0} else {p.time043I = SOptions.I043.time.T9;}    	
		    			break;
		    		}
	    		p.count = p.count015F+p.count015I+p.count019F+p.count019I+p.count020F+p.count020I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count043F+p.count043I; //console.log(p.count+ ": count \n");
				//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    		time = p.time015F+p.time015I+p.time019F+p.time019I+p.time020F+p.time020I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time043F+p.time043I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T10": 
		    		switch (v.SubjectID) {  	    
		    			case "015mv26_F":
		    			--p.count015F;
		    			if (p.count015F == 0) {p.time015F = 0} else {p.time015F = SOptions.F015.time.T10;}    	
		    			break;
		    			case "015mv26_I":
		    			--p.count015I;				
		    			if (p.count015I == 0) {p.time015I = 0} else {p.time015I = SOptions.I015.time.T10;}    	
		    			break;
		    			case "019fc20_F":
		    			--p.count019F;
		    			if (p.count019F == 0) {p.time019F = 0} else {p.time019F = SOptions.F019.time.T10;}    	
		    			break;
		    			case "019fc20_I":
		    			--p.count019I;
		    			if (p.count019I == 0) {p.time019I = 0} else {p.time019I = SOptions.I019.time.T10;}    	
		    			break;
		    			case "020mc25_F":
		    			--p.count020F;
		    			if (p.count020F == 0) {p.time020F = 0} else {p.time020F = SOptions.F020.time.T10;}    	
		    			break;
		    			case "020mc25_I":
		    			--p.count020I;
		    			if (p.count020I == 0) {p.time020I = 0} else {p.time020I = SOptions.I020.time.T10;}    	
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
		    			case "043fc21_F":
		    			--p.count043F;
		    			if (p.count043F == 0) {p.time043F = 0} else {p.time043F = SOptions.F043.time.T10;}    	
		    			break;
		    			case "043fc21_I":
		    			--p.count043I;
		    			if (p.count043I == 0) {p.time043I = 0} else {p.time043I = SOptions.I043.time.T10;}    	
		    			break;
		    		}
	    		p.count = p.count015F+p.count015I+p.count019F+p.count019I+p.count020F+p.count020I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count043F+p.count043I; //console.log(p.count+ ": count \n");
				//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    		time = p.time015F+p.time015I+p.time019F+p.time019I+p.time020F+p.time020I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time043F+p.time043I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    		case "T11":
		    		switch (v.SubjectID) {  	    
		    			case "015mv26_F":
		    			--p.count015F;
		    			if (p.count015F == 0) {p.time015F = 0} else {p.time015F = SOptions.F015.time.T11;}    	
		    			break;
		    			case "015mv26_I":
		    			--p.count015I;				
		    			if (p.count015I == 0) {p.time015I = 0} else {p.time015I = SOptions.I015.time.T11;}    	
		    			break;
		    			case "019fc20_F":
		    			--p.count019F;
		    			if (p.count019F == 0) {p.time019F = 0} else {p.time019F = SOptions.F019.time.T11;}    	
		    			break;
		    			case "019fc20_I":
		    			--p.count019I;
		    			if (p.count019I == 0) {p.time019I = 0} else {p.time019I = SOptions.I019.time.T11;}    	
		    			break;
		    			case "020mc25_F":
		    			--p.count020F;
		    			if (p.count020F == 0) {p.time020F = 0} else {p.time020F = SOptions.F020.time.T11;}    	
		    			break;
		    			case "020mc25_I":
		    			--p.count020I;
		    			if (p.count020I == 0) {p.time020I = 0} else {p.time020I = SOptions.I020.time.T11;}    	
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
		    			case "043fc21_F":
		    			--p.count043F;
		    			if (p.count043F == 0) {p.time043F = 0} else {p.time043F = SOptions.F043.time.T11;}    	
		    			break;
		    			case "043fc21_I":
		    			--p.count043I;
		    			if (p.count043I == 0) {p.time043I = 0} else {p.time043I = SOptions.I043.time.T11;}    	
		    			break;
		    		}
	    		p.count = p.count015F+p.count015I+p.count019F+p.count019I+p.count020F+p.count020I+p.count065F+p.count065I+p.count074F+p.count074I+p.count077F+p.count077I+p.count079F+p.count079I+p.count090F+p.count090I+p.count108F+p.count108I+p.count043F+p.count043I; //console.log(p.count+ ": count \n");
				//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    		time = p.time015F+p.time015I+p.time019F+p.time019I+p.time020F+p.time020I+p.time065F+p.time065I+p.time074F+p.time074I+p.time077F+p.time077I+p.time079F+p.time079I+p.time090F+p.time090I+p.time108F+p.time108I+p.time043F+p.time043I;
	    		if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    		break;
	    	}	
	    return p;
	}

	function reduceInitial2() {	
	    return {
	        time015F: 0, time019F: 0, time020F: 0, time065F: 0, time074F: 0, time077F: 0, time079F: 0, time090F: 0, time108F: 0, time043F: 0, time015I: 0, time019I: 0, time020I: 0, time065I: 0, time074I: 0, time077I: 0, time079I: 0, time090I: 0, time108I: 0, time043I: 0, count015F: 0, count019F: 0, count020F: 0, count065F: 0, count074F: 0, count077F: 0, count079F: 0, count090F: 0, count108F: 0, count043F: 0, count015I: 0, count019I: 0, count020I: 0, count065I: 0, count074I: 0, count077I: 0, count079I: 0, count090I: 0, count108I: 0, count043I: 0, 
	        count:0, 
	        freq: 0
	    };
	}

	function reduceGenInitial() {
	    return {
	    	countT1F: 0, countT2F: 0, countT3F: 0, countT4F: 0, countT5F: 0, countT6F: 0, countT7F: 0,	countT8F: 0, countT9F: 0,	countT10F: 0, countT11F: 0, timeT1F: 0, timeT2F: 0, timeT3F: 0, timeT4F: 0, timeT5F: 0, timeT6F: 0, timeT7F: 0, timeT8F: 0, timeT9F: 0, timeT10F: 0, timeT11F: 0,
	    	countT1I: 0, countT2I: 0, countT3I: 0, countT4I: 0, countT5I: 0, countT6I: 0, countT7I: 0, timeT1I: 0, timeT2I: 0, timeT3I: 0, timeT4I: 0, timeT5I: 0, timeT6I: 0, timeT7I: 0,
	    	timeF: 0,
	    	timeI: 0, 
	        count: 0,
	        countF: 0,
	        countI: 0,
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
		//console.log("init \n");
		switch (v.gender){
			case "m":	
				switch (v.Formal){
					case "I":					
					switch (v.TopicID){
						case "T1":
						++p.countT1I;
						p.timeT1I = SOptions.I015.time.T1 + SOptions.I020.time.T1 + SOptions.I065.time.T1 + SOptions.I079.time.T1 + SOptions.I090.time.T1;
						break;
						case "T2":
						++p.countT2I;
						p.timeT2I = SOptions.I015.time.T2 + SOptions.I020.time.T2 + SOptions.I065.time.T2 + SOptions.I079.time.T2 + SOptions.I090.time.T2;
						break;
						case "T3":
						++p.countT3I;
						p.timeT3I = SOptions.I015.time.T3 + SOptions.I020.time.T3 + SOptions.I065.time.T3 + SOptions.I079.time.T3 + SOptions.I090.time.T3;
						break;
						case "T4":
						++p.countT4I;
						p.timeT4I = SOptions.I015.time.T4 + SOptions.I020.time.T4 + SOptions.I065.time.T4 + SOptions.I079.time.T4 + SOptions.I090.time.T4;
						break;
						case "T5":
						++p.countT5I;
						p.timeT5I = SOptions.I015.time.T5 + SOptions.I020.time.T5 + SOptions.I065.time.T5 + SOptions.I079.time.T5 + SOptions.I090.time.T5;
						break;
						case "T6":
						++p.countT6I
						p.timeT6I = SOptions.I015.time.T6 + SOptions.I020.time.T6 + SOptions.I065.time.T6 + SOptions.I079.time.T6 + SOptions.I090.time.T6;
						break;
						case "T7":
						++p.countT7I;
						p.timeT7I = SOptions.I015.time.T7 + SOptions.I020.time.T7 + SOptions.I065.time.T7 + SOptions.I079.time.T7 + SOptions.I090.time.T7;
						break;
					}
	    			p.countI = p.countT1I+p.countT2I+p.countT3I+p.countT4I+p.countT5I+p.countT6I+p.countT7I;
	    			//console.log(p.timeT1I+":t1 "+p.timeT2I+":t2 "+p.timeT3I+":t3 "+p.timeT4I+":t4 "+p.timeT5I+":t5 "+p.timeT6I+":t6 "+p.timeT7I+":t7 "+p.timeT8I+":t8 "+p.timeT9I+":t9 "+p.timeT10I+":t10 "+p.timeT11I+":t11 "+"\n");
		    		//console.log(p.time015I+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
		    		//console.log(p.countT1I+":t1 "+p.countT2I+":t2 "+p.countT3I+":t3 "+p.countT4I+":t4 "+p.countT5I+":t5 "+p.countT6I+":t6 "+p.countT7I+":t7 "+p.countT8I+":t8 "+p.countT9I+":t9 "+p.countT10I+":t10 "+p.countT11I+":t11 "+"\n");
		    		p.timeI = p.timeT1I+p.timeT2I+p.timeT3I+p.timeT4I+p.timeT5I+p.timeT6I+p.timeT7I; 
		    		break;
		    		case "F":
					switch (v.TopicID){
						case "T1":
						++p.countT1F;
						p.timeT1F = SOptions.F015.time.T1 + SOptions.F020.time.T1 + SOptions.F065.time.T1 + SOptions.F079.time.T1 + SOptions.F090.time.T1;
						break;
						case "T2":
						++p.countT2F;
						p.timeT2F = SOptions.F015.time.T2 + SOptions.F020.time.T2 + SOptions.F065.time.T2 + SOptions.F079.time.T2 + SOptions.F090.time.T2;
						break;
						case "T3":
						++p.countT3F;
						p.timeT3F = SOptions.F015.time.T3 + SOptions.F020.time.T3 + SOptions.F065.time.T3  + SOptions.F079.time.T3 + SOptions.F090.time.T3;
						break;
						case "T4":
						++p.countT4F;
						p.timeT4F = SOptions.F015.time.T4 + SOptions.F020.time.T4 + SOptions.F065.time.T4  + SOptions.F079.time.T4 + SOptions.F090.time.T4;
						break;
						case "T5":
						++p.countT5F;
						p.timeT5F = SOptions.F015.time.T5 + SOptions.F020.time.T5 + SOptions.F065.time.T5  + SOptions.F079.time.T5 + SOptions.F090.time.T5;
						break;
						case "T6":
						++p.countT6F;
						p.timeT6F = SOptions.F015.time.T6 + SOptions.F020.time.T6 + SOptions.F065.time.T6  + SOptions.F079.time.T6 + SOptions.F090.time.T6;
						break;
						case "T7":
						++p.countT7F;
						p.timeT7F = SOptions.F015.time.T7 + SOptions.F020.time.T7 + SOptions.F065.time.T7  + SOptions.F079.time.T7 + SOptions.F090.time.T7;
						break;
						case "T8":
						++p.countT8F;
						p.timeT8F = SOptions.F015.time.T8 + SOptions.F020.time.T8 + SOptions.F065.time.T8  + SOptions.F079.time.T8 + SOptions.F090.time.T8;
						break;
						case "T9":
						++p.countT9F;
						p.timeT9F = SOptions.F015.time.T9 + SOptions.F020.time.T9 + SOptions.F065.time.T9  + SOptions.F079.time.T9 + SOptions.F090.time.T9;
						break;
						case "T10":
						++p.countT10F;
						p.timeT10F = SOptions.F015.time.T10 + SOptions.F020.time.T10 + SOptions.F065.time.T10 + SOptions.F079.time.T10 + SOptions.F090.time.T10;
						break;
						case "T11":
						++p.countT11F;
						p.timeT11F = SOptions.F015.time.T11 + SOptions.F020.time.T11 + SOptions.F065.time.T11 + SOptions.F079.time.T11 + SOptions.F090.time.T11;
						break;
					}
	    			p.countF = p.countT1F+p.countT2F+p.countT3F+p.countT4F+p.countT5F+p.countT6F+p.countT7F+p.countT8F+p.countT9F+p.countT10F+p.countT11F;
		    		//console.log(p.countT1F+":t1 "+p.countT2F+":t2 "+p.countT3F+":t3 "+p.countT4F+":t4 "+p.countT5F+":t5 "+p.countT6F+":t6 "+p.countT7F+":t7 "+p.countT8F+":t8 "+p.countT9F+":t9 "+p.countT10F+":t10 "+p.countT11F+":t11 "+"\n");
		    		p.timeF = p.timeT1F+p.timeT2F+p.timeT3F+p.timeT4F+p.timeT5F+p.timeT6F+p.timeT7F+p.timeT8F+p.timeT9F+p.timeT10F+p.timeT11F
		    		break;
				}//switch v.Formal
				p.count = p.countF+p.countI; //console.log(p.countF);
				time = p.timeF+p.timeI; //console.log(time+" : "+p.count);

				if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; 
				//console.log(p.freq+"\n"); 
			break;
			case "f":
				switch (v.Formal){
					case "I":					
					switch (v.TopicID){
						case "T1":
						++p.countT1I;
						p.timeT1I = SOptions.I019.time.T1 + SOptions.I043.time.T1 + SOptions.I074.time.T1 + SOptions.I077.time.T1 + SOptions.I108.time.T1;
						break;
						case "T2":
						++p.countT2I;
						p.timeT2I = SOptions.I019.time.T2 + SOptions.I043.time.T2 + SOptions.I074.time.T2 + SOptions.I077.time.T2 + SOptions.I108.time.T2;
						break;
						case "T3":
						++p.countT3I;
						p.timeT3I = SOptions.I019.time.T3 + SOptions.I043.time.T3 + SOptions.I074.time.T3 + SOptions.I077.time.T3 + SOptions.I108.time.T3;
						break;
						case "T4":
						++p.countT4I;
						p.timeT4I = SOptions.I019.time.T4 + SOptions.I043.time.T4 + SOptions.I074.time.T4 + SOptions.I077.time.T4 + SOptions.I108.time.T4;
						break;
						case "T5":
						++p.countT5I;
						p.timeT5I = SOptions.I019.time.T5 + SOptions.I043.time.T5 + SOptions.I074.time.T5 + SOptions.I077.time.T5 + SOptions.I108.time.T5;
						break;
						case "T6":
						++p.countT6I;
						p.timeT6I = SOptions.I019.time.T6 + SOptions.I043.time.T6 + SOptions.I074.time.T6 + SOptions.I077.time.T6 + SOptions.I108.time.T6;
						break;
						case "T7":
						++p.countT7I;
						p.timeT7I = SOptions.I019.time.T7 + SOptions.I043.time.T7 + SOptions.I074.time.T7 + SOptions.I077.time.T7 + SOptions.I108.time.T7;
						break;
					}
	    			p.countI = p.countT1I+p.countT2I+p.countT3I+p.countT4I+p.countT5I+p.countT6I+p.countT7I;
		    		//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
		    		p.timeI = p.timeT1I+p.timeT2I+p.timeT3I+p.timeT4I+p.timeT5I+p.timeT6I+p.timeT7I;
		    		break;
		    		case "F":
					switch (v.TopicID){
						case "T1":
						++p.countT1F;
						p.timeT1F = SOptions.F019.time.T1 + SOptions.F043.time.T1 + SOptions.F074.time.T1 + SOptions.F077.time.T1 + SOptions.F108.time.T1;
						break;
						case "T2":
						++p.countT2F;
						p.timeT2F = SOptions.F019.time.T2 + SOptions.F043.time.T2 + SOptions.F074.time.T2 + SOptions.F077.time.T2 + SOptions.F108.time.T2;
						break;
						case "T3":
						++p.countT3F;
						p.timeT3F = SOptions.F019.time.T3 + SOptions.F043.time.T3 + SOptions.F074.time.T3 + SOptions.F077.time.T3 + SOptions.F108.time.T3;
						break;
						case "T4":
						++p.countT4F;
						p.timeT4F = SOptions.F019.time.T4 + SOptions.F043.time.T4 + SOptions.F074.time.T4 + SOptions.F077.time.T4 + SOptions.F108.time.T4;
						break;
						case "T5":
						++p.countT5F;
						p.timeT5F = SOptions.F019.time.T5 + SOptions.F043.time.T5 + SOptions.F074.time.T5 + SOptions.F077.time.T5 + SOptions.F108.time.T5;
						break;
						case "T6":
						++p.countT6F;
						p.timeT6F = SOptions.F019.time.T6 + SOptions.F043.time.T6 + SOptions.F074.time.T6 + SOptions.F077.time.T6 + SOptions.F108.time.T6;
						break;
						case "T7":
						++p.countT7F;
						p.timeT7F = SOptions.F019.time.T7 + SOptions.F043.time.T7 + SOptions.F074.time.T7 + SOptions.F077.time.T7 + SOptions.F108.time.T7;
						break;
						case "T8":
						++p.countT8F;
						p.timeT8F = SOptions.F019.time.T8 + SOptions.F043.time.T8 + SOptions.F074.time.T8 + SOptions.F077.time.T8 + SOptions.F108.time.T8;
						break;
						case "T9":
						++p.countT9F;
						p.timeT9F = SOptions.F019.time.T9 + SOptions.F043.time.T9 + SOptions.F074.time.T9 + SOptions.F077.time.T9 + SOptions.F108.time.T9;
						break;
						case "T10":
						++p.countT10F;
						p.timeT10F = SOptions.F019.time.T10 + SOptions.F043.time.T10 + SOptions.F074.time.T10 + SOptions.F077.time.T10 + SOptions.F108.time.T10;
						break;
						case "T11":
						++p.countT11F;
						p.timeT11F = SOptions.F019.time.T11 + SOptions.F043.time.T11 + SOptions.F074.time.T11 + SOptions.F077.time.T11 + SOptions.F108.time.T11;
						break;
					}
	    			p.countF = p.countT1F+p.countT2F+p.countT3F+p.countT4F+p.countT5F+p.countT6F+p.countT7F+p.countT8F+p.countT9F+p.countT10F+p.countT11F;
		    		//console.log(p.timeT1F+":t1 "+p.timeT2F+":t2 "+p.timeT3F+":t3 "+p.timeT4F+":t4 "+p.timeT5F+":t5 "+p.timeT6F+":t6 "+p.timeT7F+":t7 "+p.timeT8F+":t8 "+p.timeT9F+":t9 "+p.timeT10F+":t10 "+p.timeT11F+":t11 "+"\n");
		    		p.timeF = p.timeT1F+p.timeT2F+p.timeT3F+p.timeT4F+p.timeT5F+p.timeT6F+p.timeT7F+p.timeT8F+p.timeT9F+p.timeT10F+p.timeT11F;
		    		//console.log(p.timeF);
		    		break;
				}//switch v.Formal
				p.count = p.countF+p.countI; 
				time = p.timeF+p.timeI; //console.log(time+" : "+p.count);

				if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; 
				//console.log(p.freq+"\n"); 
			break;	
		}//switch gen
		return p;
	}

	function reduceGenRemove(p, v) {		
		switch (v.gender){
			case "m":	
				switch (v.Formal){
					case "I":					
					switch (v.TopicID){
						case "T1":
						--p.countT1I;
						if (p.countT1I == 0){p.timeT1I = 0} else {p.timeT1I = SOptions.I015.time.T1 + SOptions.I020.time.T1 + SOptions.I065.time.T1 + SOptions.I079.time.T1 + SOptions.I090.time.T1;}
						break;
						case "T2":
						--p.countT2I;
						if (p.countT2I == 0){p.timeT2I = 0} else {p.timeT2I = SOptions.I015.time.T2 + SOptions.I020.time.T2 + SOptions.I065.time.T2 + SOptions.I079.time.T2 + SOptions.I090.time.T2;}
						break;
						case "T3":
						--p.countT3I;
						if (p.countT3I == 0){p.timeT3I = 0} else {p.timeT3I = SOptions.I015.time.T3 + SOptions.I020.time.T3 + SOptions.I065.time.T3 + SOptions.I079.time.T3 + SOptions.I090.time.T3;}
						break;
						case "T4":
						--p.countT4I;
						if (p.countT4I == 0){p.timeT4I = 0} else {p.timeT4I = SOptions.I015.time.T4 + SOptions.I020.time.T4 + SOptions.I065.time.T4 + SOptions.I079.time.T4 + SOptions.I090.time.T4;}
						break;
						case "T5":
						--p.countT5I;
						if (p.countT5I == 0){p.timeT5I = 0} else {p.timeT5I = SOptions.I015.time.T5 + SOptions.I020.time.T5 + SOptions.I065.time.T5 + SOptions.I079.time.T5 + SOptions.I090.time.T5;}
						break;
						case "T6":
						--p.countT6I;
						if (p.countT6I == 0){p.timeT6I = 0} else {p.timeT6I = SOptions.I015.time.T6 + SOptions.I020.time.T6 + SOptions.I065.time.T6 + SOptions.I079.time.T6 + SOptions.I090.time.T6;}
						break;
						case "T7":
						--p.countT7I;
						if (p.countT7I == 0){p.timeT7I = 0} else {p.timeT7I = SOptions.I015.time.T7 + SOptions.I020.time.T7 + SOptions.I065.time.T7 + SOptions.I079.time.T7 + SOptions.I090.time.T7;}
						break;
					}
	    			p.countI = p.countT1I+p.countT2I+p.countT3I+p.countT4I+p.countT5I+p.countT6I+p.countT7I;
		    		//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
		    		//console.log(p.timeT1I+":t1 "+p.timeT2I+":t2 "+p.timeT3I+":t3 "+p.timeT4I+":t4 "+p.timeT5I+":t5 "+p.timeT6I+":t6 "+p.timeT7I+":t7 "+p.timeT8I+":t8 "+p.timeT9I+":t9 "+p.timeT10I+":t10 "+p.timeT11I+":t11 "+"\n");
		    		p.timeI = p.timeT1I+p.timeT2I+p.timeT3I+p.timeT4I+p.timeT5I+p.timeT6I+p.timeT7I;
		    		break;
		    		case "F":
					switch (v.TopicID){
						case "T1":
						--p.countT1F;
						if (p.countT1F == 0){p.timeT1F = 0} else {p.timeT1F = (SOptions.F015.time.T1 + SOptions.F020.time.T1 + SOptions.F065.time.T1 + SOptions.F079.time.T1 + SOptions.F090.time.T1);}
						break;
						case "T2":
						--p.countT2F;
						if (p.countT2F == 0){p.timeT2F = 0} else {p.timeT2F = SOptions.F015.time.T2 + SOptions.F020.time.T2 + SOptions.F065.time.T2 + SOptions.F079.time.T2 + SOptions.F090.time.T2;}
						break;
						case "T3":
						--p.countT3F;
						if (p.countT3F == 0){p.timeT3F = 0} else {p.timeT3F = SOptions.F015.time.T3 + SOptions.F020.time.T3 + SOptions.F065.time.T3  + SOptions.F079.time.T3 + SOptions.F090.time.T3;}
						break;
						case "T4":
						--p.countT4F;
						if (p.countT4F == 0){p.timeT4F = 0} else {p.timeT4F = SOptions.F015.time.T4 + SOptions.F020.time.T4 + SOptions.F065.time.T4  + SOptions.F079.time.T4 + SOptions.F090.time.T4;}
						break;
						case "T5":
						--p.countT5F;
						if (p.countT5F == 0){p.timeT5F = 0} else {p.timeT5F = SOptions.F015.time.T5 + SOptions.F020.time.T5 + SOptions.F065.time.T5  + SOptions.F079.time.T5 + SOptions.F090.time.T5;}
						break;
						case "T6":
						--p.countT6F;
						if (p.countT6F == 0){p.timeT6F = 0} else {p.timeT6F = SOptions.F015.time.T6 + SOptions.F020.time.T6 + SOptions.F065.time.T6  + SOptions.F079.time.T6 + SOptions.F090.time.T6;}
						break;
						case "T7":
						--p.countT7F;
						if (p.countT7F == 0){p.timeT7F = 0} else {p.timeT7F = SOptions.F015.time.T7 + SOptions.F020.time.T7 + SOptions.F065.time.T7  + SOptions.F079.time.T7 + SOptions.F090.time.T7;}
						break;
						case "T8":
						--p.countT8F;
						if (p.countT8F == 0){p.timeT8F = 0} else {p.timeT8F = SOptions.F015.time.T8 + SOptions.F020.time.T8 + SOptions.F065.time.T8  + SOptions.F079.time.T8 + SOptions.F090.time.T8;}
						break;
						case "T9":
						--p.countT9F;
						if (p.countT9F == 0){p.timeT9F = 0} else {p.timeT9F = SOptions.F015.time.T9 + SOptions.F020.time.T9 + SOptions.F065.time.T9  + SOptions.F079.time.T9 + SOptions.F090.time.T9;}
						break;
						case "T10":
						--p.countT10F;
						if (p.countT10F == 0){p.timeT10F = 0} else {p.timeT10F = SOptions.F015.time.T10 + SOptions.F020.time.T10 + SOptions.F065.time.T10 + SOptions.F079.time.T10 + SOptions.F090.time.T10;}
						break;
						case "T11":
						--p.countT11F;
						if (p.countT11F == 0){p.timeT11F = 0} else {p.timeT11F = SOptions.F015.time.T11 + SOptions.F020.time.T11 + SOptions.F065.time.T11 + SOptions.F079.time.T11 + SOptions.F090.time.T11;}
						break;
					}
	    			p.countF = p.countT1F+p.countT2F+p.countT3F+p.countT4F+p.countT5F+p.countT6F+p.countT7F+p.countT8F+p.countT9F+p.countT10F+p.countT11F;
		    		//console.log(p.timeT1F+":t1 "+p.timeT2F+":t2 "+p.timeT3F+":t3 "+p.timeT4F+":t4 "+p.timeT5F+":t5 "+p.timeT6F+":t6 "+p.timeT7F+":t7 "+p.timeT8F+":t8 "+p.timeT9F+":t9 "+p.timeT10F+":t10 "+p.timeT11F+":t11 "+"\n");
		    		p.timeF = p.timeT1F+p.timeT2F+p.timeT3F+p.timeT4F+p.timeT5F+p.timeT6F+p.timeT7F+p.timeT8F+p.timeT9F+p.timeT10F+p.timeT11F
		    		break;
				}//switch v.Formal
				p.count = p.countF+p.countI; //console.log(p.countF);
				time = p.timeF+p.timeI;

				if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; 
				//console.log(p.freq+"\n"); 
			break;
			case "f":
				switch (v.Formal){
					case "I":					
					switch (v.TopicID){
						case "T1":
						--p.countT1I;
						if (p.countT1I == 0){p.timeT1I = 0} else {p.timeT1I = SOptions.I019.time.T1 + SOptions.I043.time.T1 + SOptions.I074.time.T1 + SOptions.I077.time.T1 + SOptions.I108.time.T1;}
						//console.log(SOptions.I015.time.T1 +" : "+ SOptions.I020.time.T1 +" : "+ SOptions.I043.time.T1 +" : "+ SOptions.I065.time.T1 +" : "+ SOptions.I074.time.T1 + SOptions.I077.time.T1 + SOptions.I079.time.T1 + SOptions.I090.time.T1 + SOptions.I108.time.T1
						break;
						case "T2":
						--p.countT2I;
						if (p.countT2I == 0){p.timeT2I= 0} else {p.timeT2I = SOptions.I019.time.T2 + SOptions.I043.time.T2 + SOptions.I074.time.T2 + SOptions.I077.time.T2 + SOptions.I108.time.T2;}
						break;
						case "T3":
						--p.countT3I;
						if (p.countT3I == 0){p.timeT3I = 0} else {p.timeT3I = SOptions.I019.time.T3 + SOptions.I043.time.T3 + SOptions.I074.time.T3 + SOptions.I077.time.T3 + SOptions.I108.time.T3;}
						break;
						case "T4":
						--p.countT4I;
						if (p.countT4I == 0){p.timeT4I = 0} else {p.timeT4I = SOptions.I019.time.T4 + SOptions.I043.time.T4 + SOptions.I074.time.T4 + SOptions.I077.time.T4 + SOptions.I108.time.T4;}
						break;
						case "T5":
						--p.countT5I;
						if (p.countT5I == 0){p.timeT5I = 0} else {p.timeT5I = SOptions.I019.time.T5 + SOptions.I043.time.T5 + SOptions.I074.time.T5 + SOptions.I077.time.T5 + SOptions.I108.time.T5;}
						break;
						case "T6":
						--p.countT6I;
						if (p.countT6I == 0){p.timeT6I = 0} else {p.timeT6I = SOptions.I019.time.T6 + SOptions.I043.time.T6 + SOptions.I074.time.T6 + SOptions.I077.time.T6 + SOptions.I108.time.T6;}
						break;
						case "T7":
						--p.countT7I;
						if (p.countT7I == 0){p.timeT7I = 0} else {p.timeT7I = SOptions.I019.time.T7 + SOptions.I043.time.T7 + SOptions.I074.time.T7 + SOptions.I077.time.T7 + SOptions.I108.time.T7;}
						break;
					}
	    			p.countI = p.countT1I+p.countT2I+p.countT3I+p.countT4I+p.countT5I+p.countT6I+p.countT7I;
	    			//console.log(p.countT1I+":t1 "+p.countT2I+":t2 "+p.countT3I+":t3 "+p.countT4I+":t4 "+p.countT5I+":t5 "+p.countT6I+":t6 "+p.countT7I+":t7 "+p.countT8I+":t8 "+p.countT9I+":t9 "+p.countT10I+":t10 "+p.countT11I+":t11 "+"\n");
		    		//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
		    		p.timeI = p.timeT1I+p.timeT2I+p.timeT3I+p.timeT4I+p.timeT5I+p.timeT6I+p.timeT7I;
		    		break;
		    		case "F":

					switch (v.TopicID){
						case "T1":
						--p.countT1F;
						if (p.countT1F == 0){p.timeT1F = 0} else {p.timeT1F = SOptions.F019.time.T1 + SOptions.F043.time.T1 + SOptions.F074.time.T1 + SOptions.F077.time.T1 +  SOptions.F108.time.T1;}
						break;
						case "T2":
						--p.countT2F;
						if (p.countT2F == 0){p.timeT2F = 0} else {p.timeT2F = SOptions.F019.time.T2 + SOptions.F043.time.T2 + SOptions.F074.time.T2 + SOptions.F077.time.T2 +  SOptions.F108.time.T2;}
						//console.log(p.timeT1F);
						break;
						case "T3":
						--p.countT3F;
						if (p.countT3F == 0){p.timeT3F = 0} else {p.timeT3F = SOptions.F019.time.T3 + SOptions.F043.time.T3 + SOptions.F074.time.T3 + SOptions.F077.time.T3 +  SOptions.F108.time.T3;}
						break;
						case "T4":
						--p.countT4F;
						if (p.countT4F == 0){p.timeT4F = 0} else {p.timeT4F = SOptions.F019.time.T4 + SOptions.F043.time.T4 + SOptions.F074.time.T4 + SOptions.F077.time.T4 +  SOptions.F108.time.T4;}
						break;
						case "T5":
						--p.countT5F;
						if (p.countT5F == 0){p.timeT5F = 0} else {p.timeT5F = SOptions.F019.time.T5 + SOptions.F043.time.T5 + SOptions.F074.time.T5 + SOptions.F077.time.T5 +  SOptions.F108.time.T5;}
						break;
						case "T6":
						--p.countT6F;
						if (p.countT6F == 0){p.timeT6F = 0} else {p.timeT6F = SOptions.F019.time.T6 + SOptions.F043.time.T6 + SOptions.F074.time.T6 + SOptions.F077.time.T6 +  SOptions.F108.time.T6;}
						break;
						case "T7":
						--p.countT7F;
						if (p.countT7F == 0){p.timeT7F = 0} else {p.timeT7F = SOptions.F019.time.T7 + SOptions.F043.time.T7 + SOptions.F074.time.T7 + SOptions.F077.time.T7 +  SOptions.F108.time.T7;}
						break;
						case "T8":
						--p.countT8F;
						if (p.countT8F == 0){p.timeT8F = 0} else {p.timeT8F = SOptions.F019.time.T8 + SOptions.F043.time.T8 + SOptions.F074.time.T8 + SOptions.F077.time.T8 +  SOptions.F108.time.T8;}
						break;
						case "T9":
						--p.countT9F;
						if (p.countT9F == 0){p.timeT9F = 0} else {p.timeT9F = SOptions.F019.time.T9 + SOptions.F043.time.T9 + SOptions.F074.time.T9 + SOptions.F077.time.T9 +  SOptions.F108.time.T9;}
						break;
						case "T10":
						--p.countT10F;
						if (p.countT10F == 0){p.timeT10F = 0} else {p.timeT10F = SOptions.F019.time.T10 + SOptions.F043.time.T10 + SOptions.F074.time.T10 + SOptions.F077.time.T10 + SOptions.F108.time.T10;}
						break;
						case "T11":
						--p.countT11F;
						if (p.countT11F == 0){p.timeT11F = 0} else {p.timeT11F = SOptions.F019.time.T11 + SOptions.F043.time.T11 + SOptions.F074.time.T11 + SOptions.F077.time.T11 + SOptions.F108.time.T11;}
						break;
					}
	    			p.countF = p.countT1F+p.countT2F+p.countT3F+p.countT4F+p.countT5F+p.countT6F+p.countT7F+p.countT8F+p.countT9F+p.countT10F+p.countT11F;
		    		//console.log(p.timeT1F+":t1 "+p.timeT2F+":t2 "+p.timeT3F+":t3 "+p.timeT4F+":t4 "+p.timeT5F+":t5 "+p.timeT6F+":t6 "+p.timeT7F+":t7 "+p.timeT8F+":t8 "+p.timeT9F+":t9 "+p.timeT10F+":t10 "+p.timeT11F+":t11 "+"\n");
		    		p.timeF = p.timeT1F+p.timeT2F+p.timeT3F+p.timeT4F+p.timeT5F+p.timeT6F+p.timeT7F+p.timeT8F+p.timeT9F+p.timeT10F+p.timeT11F;
		    		//console.log(p.timeF);
		    		break;
				}//switch v.Formal
				p.count = p.countF+p.countI; 
				time = p.timeF+p.timeI;

				if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};  //console.log(p.count+" :"+time);
			break;				
		}//switch gen
		return p;
	}	  

	function reduceGen2Initial() {
	    return {
	    	time015F: 0, time019F: 0, time020F: 0, time065F: 0, time074F: 0, time077F: 0, time079F: 0, time090F: 0, time108F: 0, time043F: 0, time015I: 0, time019I: 0, time020I: 0, time065I: 0, time074I: 0, time077I: 0, time079I: 0, time090I: 0, time108I: 0, time043I: 0,
	    	time015FT1: 0, time015FT2: 0, time015FT3: 0, time015FT4: 0, time015FT5: 0, time015FT6: 0, time015FT7: 0, time015FT8: 0, time015FT9: 0, time015FT10: 0, time015FT11: 0,
	    	time019FT1: 0, time019FT2: 0, time019FT3: 0, time019FT4: 0, time019FT5: 0, time019FT6: 0, time019FT7: 0, time019FT8: 0, time019FT9: 0, time019FT10: 0, time019FT11: 0,
	    	time020FT1: 0, time020FT2: 0, time020FT3: 0, time020FT4: 0, time020FT5: 0, time020FT6: 0, time020FT7: 0, time020FT8: 0, time020FT9: 0, time020FT10: 0, time020FT11: 0,
	    	time065FT1: 0, time065FT2: 0, time065FT3: 0, time065FT4: 0, time065FT5: 0, time065FT6: 0, time065FT7: 0, time065FT8: 0, time065FT9: 0, time065FT10: 0, time065FT11: 0,
	    	time074FT1: 0, time074FT2: 0, time074FT3: 0, time074FT4: 0, time074FT5: 0, time074FT6: 0, time074FT7: 0, time074FT8: 0, time074FT9: 0, time074FT10: 0, time074FT11: 0,
	    	time077FT1: 0, time077FT2: 0, time077FT3: 0, time077FT4: 0, time077FT5: 0, time077FT6: 0, time077FT7: 0, time077FT8: 0, time077FT9: 0, time077FT10: 0, time077FT11: 0,
	    	time079FT1: 0, time079FT2: 0, time079FT3: 0, time079FT4: 0, time079FT5: 0, time079FT6: 0, time079FT7: 0, time079FT8: 0, time079FT9: 0, time079FT10: 0, time079FT11: 0,
	    	time090FT1: 0, time090FT2: 0, time090FT3: 0, time090FT4: 0, time090FT5: 0, time090FT6: 0, time090FT7: 0, time090FT8: 0, time090FT9: 0, time090FT10: 0, time090FT11: 0,
	    	time108FT1: 0, time108FT2: 0, time108FT3: 0, time108FT4: 0, time108FT5: 0, time108FT6: 0, time108FT7: 0, time108FT8: 0, time108FT9: 0, time108FT10: 0, time108FT11: 0,
	    	time043FT1: 0, time043FT2: 0, time043FT3: 0, time043FT4: 0, time043FT5: 0, time043FT6: 0, time043FT7: 0, time043FT8: 0, time043FT9: 0, time043FT10: 0, time043FT11: 0,
	    	time015IT1: 0, time015IT2: 0, time015IT3: 0, time015IT4: 0, time015IT5: 0, time015IT6: 0, time015IT7: 0, time015IT8: 0, time015IT9: 0, time015IT10: 0, time015IT11: 0,
	    	time019IT1: 0, time019IT2: 0, time019IT3: 0, time019IT4: 0, time019IT5: 0, time019IT6: 0, time019IT7: 0, time019IT8: 0, time019IT9: 0, time019IT10: 0, time019IT11: 0,
	    	time020IT1: 0, time020IT2: 0, time020IT3: 0, time020IT4: 0, time020IT5: 0, time020IT6: 0, time020IT7: 0, time020IT8: 0, time020IT9: 0, time020IT10: 0, time020IT11: 0,
	    	time065IT1: 0, time065IT2: 0, time065IT3: 0, time065IT4: 0, time065IT5: 0, time065IT6: 0, time065IT7: 0, time065IT8: 0, time065IT9: 0, time065IT10: 0, time065IT11: 0,
	    	time074IT1: 0, time074IT2: 0, time074IT3: 0, time074IT4: 0, time074IT5: 0, time074IT6: 0, time074IT7: 0, time074IT8: 0, time074IT9: 0, time074IT10: 0, time074IT11: 0,
	    	time077IT1: 0, time077IT2: 0, time077IT3: 0, time077IT4: 0, time077IT5: 0, time077IT6: 0, time077IT7: 0, time077IT8: 0, time077IT9: 0, time077IT10: 0, time077IT11: 0,
	    	time079IT1: 0, time079IT2: 0, time079IT3: 0, time079IT4: 0, time079IT5: 0, time079IT6: 0, time079IT7: 0, time079IT8: 0, time079IT9: 0, time079IT10: 0, time079IT11: 0,
	    	time090IT1: 0, time090IT2: 0, time090IT3: 0, time090IT4: 0, time090IT5: 0, time090IT6: 0, time090IT7: 0, time090IT8: 0, time090IT9: 0, time090IT10: 0, time090IT11: 0,
	    	time108IT1: 0, time108IT2: 0, time108IT3: 0, time108IT4: 0, time108IT5: 0, time108IT6: 0, time108IT7: 0, time108IT8: 0, time108IT9: 0, time108IT10: 0, time108IT11: 0,
	    	time043IT1: 0, time043IT2: 0, time043IT3: 0, time043IT4: 0, time043IT5: 0, time043IT6: 0, time043IT7: 0, time043IT8: 0, time043IT9: 0, time043IT10: 0, time043IT11: 0,
	    	
	    	count015F: 0, count019F: 0, count020F: 0, count065F: 0, count074F: 0, count077F: 0, count079F: 0, count090F: 0, count108F: 0, count043F: 0, count015I: 0, count019I: 0, count020I: 0, count065I: 0, count074I: 0, count077I: 0, count079I: 0, count090I: 0, count108I: 0, count043I: 0, 
	    	count015FT1: 0, count015FT2: 0, count015FT3: 0, count015FT4: 0, count015FT5: 0, count015FT6: 0, count015FT7: 0,	count015FT8: 0,	count015FT9: 0,	count015FT10: 0, count015FT11: 0,  
	    	count019FT1: 0, count019FT2: 0, count019FT3: 0, count019FT4: 0, count019FT5: 0, count019FT6: 0, count019FT7: 0,	count019FT8: 0,	count019FT9: 0,	count019FT10: 0, count019FT11: 0, 	        
	    	count020FT1: 0, count020FT2: 0, count020FT3: 0, count020FT4: 0, count020FT5: 0, count020FT6: 0, count020FT7: 0,	count020FT8: 0,	count020FT9: 0,	count020FT10: 0, count020FT11: 0, 
	    	count065FT1: 0, count065FT2: 0, count065FT3: 0, count065FT4: 0, count065FT5: 0, count065FT6: 0, count065FT7: 0,	count065FT8: 0,	count065FT9: 0,	count065FT10: 0, count065FT11: 0, 
	    	count074FT1: 0, count074FT2: 0, count074FT3: 0, count074FT4: 0, count074FT5: 0, count074FT6: 0, count074FT7: 0,	count074FT8: 0,	count074FT9: 0,	count074FT10: 0, count074FT11: 0, 
	    	count077FT1: 0, count077FT2: 0, count077FT3: 0, count077FT4: 0, count077FT5: 0, count077FT6: 0, count077FT7: 0,	count077FT8: 0,	count077FT9: 0,	count077FT10: 0, count077FT11: 0,
	    	count079FT1: 0, count079FT2: 0, count079FT3: 0, count079FT4: 0, count079FT5: 0, count079FT6: 0, count079FT7: 0,	count079FT8: 0,	count079FT9: 0,	count079FT10: 0, count079FT11: 0, 
	    	count090FT1: 0, count090FT2: 0, count090FT3: 0, count090FT4: 0, count090FT5: 0, count090FT6: 0, count090FT7: 0,	count090FT8: 0,	count090FT9: 0,	count090FT10: 0, count090FT11: 0, 	
	    	count108FT1: 0, count108FT2: 0, count108FT3: 0, count108FT4: 0, count108FT5: 0, count108FT6: 0, count108FT7: 0,	count108FT8: 0,	count108FT9: 0,	count108FT10: 0, count108FT11: 0, 
	    	count043FT1: 0, count043FT2: 0, count043FT3: 0, count043FT4: 0, count043FT5: 0, count043FT6: 0, count043FT7: 0,	count043FT8: 0,	count043FT9: 0,	count043FT10: 0, count043FT11: 0, 
	       	count015IT1: 0, count015IT2: 0, count015IT3: 0, count015IT4: 0, count015IT5: 0, count015IT6: 0, count015IT7: 0,	count015IT8: 0,	count015IT9: 0,	count015IT10: 0, count015IT11: 0,  
	    	count019IT1: 0, count019IT2: 0, count019IT3: 0, count019IT4: 0, count019IT5: 0, count019IT6: 0, count019IT7: 0,	count019IT8: 0,	count019IT9: 0,	count019IT10: 0, count019IT11: 0, 	        
	    	count020IT1: 0, count020IT2: 0, count020IT3: 0, count020IT4: 0, count020IT5: 0, count020IT6: 0, count020IT7: 0,	count020IT8: 0,	count020IT9: 0,	count020IT10: 0, count020IT11: 0, 
	    	count065IT1: 0, count065IT2: 0, count065IT3: 0, count065IT4: 0, count065IT5: 0, count065IT6: 0, count065IT7: 0,	count065IT8: 0,	count065IT9: 0,	count065IT10: 0, count065IT11: 0, 
	    	count074IT1: 0, count074IT2: 0, count074IT3: 0, count074IT4: 0, count074IT5: 0, count074IT6: 0, count074IT7: 0,	count074IT8: 0,	count074IT9: 0,	count074IT10: 0, count074IT11: 0, 
	    	count077IT1: 0, count077IT2: 0, count077IT3: 0, count077IT4: 0, count077IT5: 0, count077IT6: 0, count077IT7: 0,	count077IT8: 0,	count077IT9: 0,	count077IT10: 0, count077IT11: 0,
	    	count079IT1: 0, count079IT2: 0, count079IT3: 0, count079IT4: 0, count079IT5: 0, count079IT6: 0, count079IT7: 0,	count079IT8: 0,	count079IT9: 0,	count079IT10: 0, count079IT11: 0, 
	    	count090IT1: 0, count090IT2: 0, count090IT3: 0, count090IT4: 0, count090IT5: 0, count090IT6: 0, count090IT7: 0,	count090IT8: 0,	count090IT9: 0,	count090IT10: 0, count090IT11: 0, 	
	    	count108IT1: 0, count108IT2: 0, count108IT3: 0, count108IT4: 0, count108IT5: 0, count108IT6: 0, count108IT7: 0,	count108IT8: 0,	count108IT9: 0,	count108IT10: 0, count108IT11: 0, 
	    	count043IT1: 0, count043IT2: 0, count043IT3: 0, count043IT4: 0, count043IT5: 0, count043IT6: 0, count043IT7: 0,	count043IT8: 0,	count043IT9: 0,	count043IT10: 0, count043IT11: 0, 

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

	function reduceGen2Add(p, v) {
		switch (v.gender){
			case "m":				
				switch (v.SubjectID){
					case "015mv26_I":					
					switch (v.TopicID){
						case "T1":
						++p.count015IT1;
						if (p.count015IT1 == 0) {p.time015IT1 = 0} else {p.time015IT1 = SOptions.I015.time.T1;}
						break;
						case "T2":
						++p.count015IT2;
						if (p.count015IT2 == 0) {p.time015IT2 = 0} else {p.time015IT2 = SOptions.I015.time.T2;}
						break;
						case "T3":
						++p.count015IT3;
						if (p.count015IT3 == 0) {p.time015IT3 = 0} else {p.time015IT3 = SOptions.I015.time.T3;}
						break;
						case "T4":
						++p.count015IT4;
						if (p.count015IT4 == 0) {p.time015IT4 = 0} else {p.time015IT4 = SOptions.I015.time.T4;}
						break;
						case "T5":
						++p.count015IT5;
						if (p.count015IT5 == 0) {p.time015IT5 = 0} else {p.time015IT5 = SOptions.I015.time.T5;}
						break;
						case "T6":
						++p.count015IT6;
						if (p.count015IT6 == 0) {p.time015IT6 = 0} else {p.time015IT6 = SOptions.I015.time.T6;}
						break;
						case "T7":
						++p.count015IT7;
						if (p.count015IT7 == 0) {p.time015IT7 = 0} else {p.time015IT7 = SOptions.I015.time.T7;}
						break;
						case "T8":
						++p.count015IT8;
						if (p.count015IT8 == 0) {p.time015IT8 = 0} else {p.time015IT8 = SOptions.I015.time.T8;}
						break;
						case "T9":
						++p.count015IT9;
						if (p.count015IT9 == 0) {p.time015IT9 = 0} else {p.time015IT9 = SOptions.I015.time.T9;}
						break;
						case "T10":
						++p.count015IT10;
						if (p.count015IT10 == 0) {p.time015IT10 = 0} else {p.time015IT10 = SOptions.I015.time.T10;}
						break;
						case "T11":
						++p.count015IT11;
						if (p.count015IT11 == 0) {p.time015IT11 = 0} else {p.time015IT11 = SOptions.I015.time.T11;}
						break;
					}
	    			p.count015I = p.count015IT1+p.count015IT2+p.count015IT3+p.count015IT4+p.count015IT5+p.count015IT6+p.count015IT7+p.count015IT8+p.count015IT9+p.count015IT10+p.count015IT11; //console.log(p.count+ ": count \n");
		    		//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
		    		p.time015I = p.time015IT1+p.time015IT2+p.time015IT3+p.time015IT4+p.time015IT5+p.time015IT6+p.time015IT7+p.time015IT8+p.time015IT9+p.time015IT10+p.time015IT11;
		    		break;
		    		case "015mv26_F":
					switch (v.TopicID){
						case "T1":
						++p.count015FT1;
						if (p.count015FT1 == 0) {p.time015FT1 = 0} else {p.time015FT1 = SOptions.F015.time.T1;}
						break;
						case "T2":
						++p.count015FT2;
						if (p.count015FT2 == 0) {p.time015FT2 = 0} else {p.time015FT2 = SOptions.F015.time.T2;}
						break;
						case "T3":
						++p.count015FT3;
						if (p.count015FT3 == 0) {p.time015FT3 = 0} else {p.time015FT3 = SOptions.F015.time.T3;}
						break;
						case "T4":
						++p.count015FT4;
						if (p.count015FT4 == 0) {p.time015FT4 = 0} else {p.time015FT4 = SOptions.F015.time.T4;}
						break;
						case "T5":
						++p.count015FT5;
						if (p.count015FT5 == 0) {p.time015FT5 = 0} else {p.time015FT5 = SOptions.F015.time.T5;}
						break;
						case "T6":
						++p.count015FT6;
						if (p.count015FT6 == 0) {p.time015FT6 = 0} else {p.time015FT6 = SOptions.F015.time.T6;}
						break;
						case "T7":
						++p.count015FT7;
						if (p.count015FT7 == 0) {p.time015FT7 = 0} else {p.time015FT7 = SOptions.F015.time.T7;}
						break;
						case "T8":
						++p.count015FT8;
						if (p.count015FT8 == 0) {p.time015FT8 = 0} else {p.time015FT8 = SOptions.F015.time.T8;}
						break;
						case "T9":
						++p.count015FT9;
						if (p.count015FT9 == 0) {p.time015FT9 = 0} else {p.time015FT9 = SOptions.F015.time.T9;}
						break;
						case "T10":
						++p.count015FT10;
						if (p.count015FT10 == 0) {p.time015FT10 = 0} else {p.time015FT10 = SOptions.F015.time.T10;}
						break;
						case "T11":
						++p.count015FT11;
						if (p.count015FT11 == 0) {p.time015FT11 = 0} else {p.time015FT11 = SOptions.F015.time.T11;}
						break;
					}
	    			p.count015F = p.count015FT1+p.count015FT2+p.count015FT3+p.count015FT4+p.count015FT5+p.count015FT6+p.count015FT7+p.count015FT8+p.count015FT9+p.count015FT10+p.count015FT11; //console.log(p.count+ ": count \n");
		    		//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
		    		p.time015F = p.time015FT1+p.time015FT2+p.time015FT3+p.time015FT4+p.time015FT5+p.time015FT6+p.time015FT7+p.time015FT8+p.time015FT9+p.time015FT10+p.time015FT11; 
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
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
			    	p.time090F = p.time090FT1+p.time090FT2+p.time090FT3+p.time090FT4+p.time090FT5+p.time090FT6+p.time090FT7+p.time090FT8+p.time090FT9+p.time090FT10+p.time090FT11;
			    	break;
			    	case "020mc25_I":
			    	//console.log("061:" +p.time020I+"\n");
			    	//console.log("61:"+p.count020I+"\n");
			    	//console.log(p.time020IT1+":t1 "+p.time020IT2+":t2 "+p.time020IT3+":t3 "+p.time020IT4+":4 "+p.time020IT5+":t5 "+p.time020IT6+":t6 "+p.time020IT7+":t7 "+p.time020IT8+":t8 "+p.time020IT9+":t9 "+p.time020IT10+":t10 "+p.time020IT11+":t11 ");
	    			switch (v.TopicID){
						case "T1":
						++p.count020IT1;
						if (p.count020IT1 == 0) {p.time020IT1 = 0} else {p.time020IT1 = SOptions.I020.time.T1;}; 
						break;
						case "T2":
						++p.count020IT2;
						if (p.count020IT2 == 0) {p.time020IT2 = 0} else {p.time020IT2 = SOptions.I020.time.T2;}; 
						break;
						case "T3":
						++p.count020IT3;
						if (p.count020IT3 == 0) {p.time020IT3 = 0} else {p.time020IT3 = SOptions.I020.time.T3;}; 
						break;
						case "T4":
						++p.count020IT4;
						if (p.count020IT4 == 0) {p.time020IT4 = 0} else {p.time020IT4 = SOptions.I020.time.T4;}; 
						break;
						case "T5":
						++p.count020IT5;
						if (p.count020IT5 == 0) {p.time020IT5 = 0} else {p.time020IT5 = SOptions.I020.time.T5;}; 
						break;
						case "T6":
						++p.count020IT6;
						if (p.count020IT6 == 0) {p.time020IT6 = 0} else {p.time020IT6 = SOptions.I020.time.T6;}; 
						break;
						case "T7":
						++p.count020IT7;
						if (p.count020IT7 == 0) {p.time020IT7 = 0} else {p.time020IT7 = SOptions.I020.time.T7;}; 
						break;
						case "T8":
						++p.count020IT8;
						if (p.count020IT8 == 0) {p.time020IT8 = 0} else {p.time020IT8 = SOptions.I020.time.T8;}; 
						break;
						case "T9":
						++p.count020IT9;
						if (p.count020IT9 == 0) {p.time020IT9 = 0} else {p.time020IT9 = SOptions.I020.time.T9;}; 
						break;
						case "T10":
						++p.count020IT10;
						if (p.count020IT10 == 0) {p.time020IT10 = 0} else {p.time020IT10 = SOptions.I020.time.T10;}; 
						break;
						case "T11":
						++p.count020IT11;
						if (p.count020IT11 == 0) {p.time020IT11 = 0} else {p.time020IT11 = SOptions.I020.time.T11;}; 
						break;
					}
					//console.log(p.time020I+"\n");
					//console.log(p.time020IT1+"\n");
		    		p.count020I = p.count020IT1+p.count020IT2+p.count020IT3+p.count020IT4+p.count020IT5+p.count020IT6+p.count020IT7+p.count020IT8+p.count020IT9+p.count020IT10+p.count020IT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time020IT1+":t1 "+p.time020IT2+":t2 "+p.time020IT3+":t3 "+p.time020IT4+":4 "+p.time020IT5+":t5 "+p.time020IT6+":t6 "+p.time020IT7+":t7 "+p.time020IT8+":t8 "+p.time020IT9+":t9 "+p.time020IT10+":t10 "+p.time020IT11+":t11 ");
			    	p.time020I = p.time020IT1+p.time020IT2+p.time020IT3+p.time020IT4+p.time020IT5+p.time020IT6+p.time020IT7+p.time020IT8+p.time020IT9+p.time020IT10+p.time020IT11;
			    	//console.log("020: "+p.count020I + " : " +p.time020I+ "\n");
			    	break; 
	    			case "020mc25_F":	
	    			//console.log(p.count020F+"\n");    
	    			switch (v.TopicID){
						case "T1":
						++p.count020FT1; //console.log(p.countT1 +" :61 \n");
						if (p.count020FT1 == 0) {p.time020FT1 = 0} else {p.time020FT1 = SOptions.F020.time.T1;}
						break;
						case "T2":
						++p.count020FT2;
						if (p.count020FT2 == 0) {p.time020FT2 = 0} else {p.time020FT2 = SOptions.F020.time.T2;}
						break;
						case "T3":
						++p.count020FT3;
						if (p.count020FT3 == 0) {p.time020FT3 = 0} else {p.time020FT3 = SOptions.F020.time.T3;}
						break;
						case "T4":
						++p.count020FT4;
						if (p.count020FT4 == 0) {p.time020FT4 = 0} else {p.time020FT4 = SOptions.F020.time.T4;}
						break;
						case "T5":
						++p.count020FT5;
						if (p.count020FT5 == 0) {p.time020FT5 = 0} else {p.time020FT5 = SOptions.F020.time.T5;}
						break;
						case "T6":
						++p.count020FT6;
						if (p.count020FT6 == 0) {p.time020FT6 = 0} else {p.time020FT6 = SOptions.F020.time.T6;}
						break;
						case "T7":
						++p.count020FT7;
						if (p.count020FT7 == 0) {p.time020FT7 = 0} else {p.time020FT7 = SOptions.F020.time.T7;}
						break;
						case "T8":
						++p.count020FT8;
						if (p.count020FT8 == 0) {p.time020FT8 = 0} else {p.time020FT8 = SOptions.F020.time.T8;}
						break;
						case "T9":
						++p.count020FT9;
						if (p.count020FT9 == 0) {p.time020FT9 = 0} else {p.time020FT9 = SOptions.F020.time.T9;}
						break;
						case "T10":
						++p.count020FT10;
						if (p.count020FT10 == 0) {p.time020FT10 = 0} else {p.time020FT10 = SOptions.F020.time.T10;}
						break;
						case "T11":
						++p.count020FT11;
						if (p.count020FT11 == 0) {p.time020FT11 = 0} else {p.time020FT11 = SOptions.F020.time.T11;}
						break;
					}
		    		p.count020F = p.count020FT1+p.count020FT2+p.count020FT3+p.count020FT4+p.count020FT5+p.count020FT6+p.count020FT7+p.count020FT8+p.count020FT9+p.count020FT10+p.count020FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.count020FT1+" : "+p.count020FT2+" : "+p.count020FT3+" : "+p.count020FT4+" : "+p.count020FT6+" : "+p.count020FT7+" : "+p.count020FT8+" : "+p.count020FT9+" : "+p.count020FT10+" : "+p.count020FT11);	  
			    	p.time020F = p.time020FT1+p.time020FT2+p.time020FT3+p.time020FT4+p.time020FT5+p.time020FT6+p.time020FT7+p.time020FT8+p.time020FT9+p.time020FT10+p.time020FT11;
			    	break;
				}//switch Subj.ID
				p.count = p.count015I+p.count015F+p.count065I+p.count065F+p.count079I+p.count079F+p.count090I+p.count090F+p.count020I+p.count020F;
				time = p.time015F+p.time015I+p.time065I+p.time065F+p.time079I+p.time079F+p.time090I+p.time090F+p.time020I+p.time020F;
				//console.log(p.time015I+" :15 "+p.time015F+" : "+p.time065I+" :65 "+p.time065F+" : "+p.time079I+" :79 "+p.time079F+" : "+p.time090I+" :90 "+p.time090F+" : "+p.time020I+" :20 "+p.time020F);
				if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};  
			break;
			case "f":
				switch (v.SubjectID){
					case "043fc21_I":
	    			switch (v.TopicID){
						case "T1":
						++p.count043IT1;
						if (p.count043IT1 == 0) {p.time043IT1 = 0} else {p.time043IT1 = SOptions.I043.time.T1;}
						break;
						case "T2":
						++p.count043IT2;
						if (p.count043IT2 == 0) {p.time043IT2 = 0} else {p.time043IT2 = SOptions.I043.time.T2;}
						break;
						case "T3":
						++p.count043IT3;
						if (p.count043IT3 == 0) {p.time043IT3 = 0} else {p.time043IT3 = SOptions.I043.time.T3;}
						break;
						case "T4":
						++p.count043IT4;
						if (p.count043IT4 == 0) {p.time043IT4 = 0} else {p.time043IT4 = SOptions.I043.time.T4;}
						break;
						case "T5":
						++p.count043IT5;
						if (p.count043IT5 == 0) {p.time043IT5 = 0} else {p.time043IT5 = SOptions.I043.time.T5;}
						break;
						case "T6":
						++p.count043IT6;
						if (p.count043IT6 == 0) {p.time043IT6 = 0} else {p.time043IT6 = SOptions.I043.time.T6;}
						break;
						case "T7":
						++p.count043IT7;
						if (p.count043IT7 == 0) {p.time043IT7 = 0} else {p.time043IT7 = SOptions.I043.time.T7;}
						break;
						case "T8":
						++p.count043IT8;
						if (p.count043IT8 == 0) {p.time043IT8 = 0} else {p.time043IT8 = SOptions.I043.time.T8;}
						break;
						case "T9":
						++p.count043IT9;
						if (p.count043IT9 == 0) {p.time043IT9 = 0} else {p.time043IT9 = SOptions.I043.time.T9;}
						break;
						case "T10":
						++p.count043IT10;
						if (p.count043IT10 == 0) {p.time043IT10 = 0} else {p.time043IT10 = SOptions.I043.time.T10;}
						break;
						case "T11":
						++p.count043IT11;
						if (p.count043IT11 == 0) {p.time043IT11 = 0} else {p.time043IT11 = SOptions.I043.time.T11;}
						break;
					}
		    		p.count043I = p.count043IT1+p.count043IT2+p.count043IT3+p.count043IT4+p.count043IT5+p.count043IT6+p.count043IT7+p.count043IT8+p.count043IT9+p.count043IT10+p.count043IT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time043I); "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
			    	p.time043I = p.time043IT1+p.time043IT2+p.time043IT3+p.time043IT4+p.time043IT5+p.time043IT6+p.time043IT7+p.time043IT8+p.time043IT9+p.time043IT10+p.time043IT11;
			    	//console.log(p.time043I);
			    	break;
		    		case "043fc21_F":	    
		    		switch (v.TopicID){
						case "T1":
						++p.count043FT1;
						if (p.count043FT1 == 0) {p.time043FT1 = 0} else {p.time043FT1 = SOptions.F043.time.T1;}
						break;
						case "T2":
						++p.count043FT2;
						if (p.coun043FtT2 == 0) {p.time043FT2 = 0} else {p.time043FT2 = SOptions.F043.time.T2;}
						break;
						case "T3":
						++p.count043FT3;
						if (p.count043FT3 == 0) {p.time043FT3 = 0} else {p.time043FT3 = SOptions.F043.time.T3;}
						break;
						case "T4":
						++p.count043FT4;
						if (p.count043FT4 == 0) {p.time043FT4 = 0} else {p.time043FT4 = SOptions.F043.time.T4;}
						break;
						case "T5":
						++p.count043FT5;
						if (p.count043FT5 == 0) {p.time043FT5 = 0} else {p.time043FT5 = SOptions.F043.time.T5;}
						break;
						case "T6":
						++p.count043FT6;
						if (p.count043FT6 == 0) {p.time043FT6 = 0} else {p.time043FT6 = SOptions.F043.time.T6;}
						break;
						case "T7":
						++p.count043FT7;
						if (p.count043FT7 == 0) {p.time043FT7 = 0} else {p.time043FT7 = SOptions.F043.time.T7;}
						break;
						case "T8":
						++p.count043FT8;
						if (p.count043FT8 == 0) {p.time043FT8 = 0} else {p.time043FT8 = SOptions.F043.time.T8;}
						break;
						case "T9":
						++p.count043FT9;
						if (p.count043FT9 == 0) {p.time043FT9 = 0} else {p.time043FT9 = SOptions.F043.time.T9;}
						break;
						case "T10":
						++p.count043FT10;
						if (p.count043FT10 == 0) {p.time043FT10 = 0} else {p.time043FT10 = SOptions.F043.time.T10;}
						break;
						case "T11":
						++p.count043FT11;
						if (p.count043FT11 == 0) {p.time043FT11 = 0} else {p.time043FT11 = SOptions.F043.time.T11;}
						break;
					}
		    		p.count043F = p.count043FT1+p.count043FT2+p.count043FT3+p.count043FT4+p.count043FT5+p.count043FT6+p.count043FT7+p.count043FT8+p.count043FT9+p.count043FT10+p.count043FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
			    	p.time043F = p.time043FT1+p.time043FT2+p.time043FT3+p.time043FT4+p.time043FT5+p.time043FT6+p.time043FT7+p.time043FT8+p.time043FT9+p.time043FT10+p.time043FT11;
			    	break;
					case "019fc20_I": 
					switch (v.TopicID){
						case "T1":
						++p.count019IT1;
						if (p.count019IT1 == 0) {p.time019IT1 = 0} else {p.time019IT1 = SOptions.I019.time.T1;}
						break;
						case "T2":
						++p.count019IT2;
						if (p.count019IT2 == 0) {p.time019IT2 = 0} else {p.time019IT2 = SOptions.I019.time.T2;}
						break;
						case "T3":
						++p.count019IT3;
						if (p.count019IT3 == 0) {p.time019IT3 = 0} else {p.time019IT3 = SOptions.I019.time.T3;}
						break;
						case "T4":
						++p.count019IT4;
						if (p.count019IT4 == 0) {p.time019IT4 = 0} else {p.time019IT4 = SOptions.I019.time.T4;}
						break;
						case "T5":
						++p.count019IT5;
						if (p.count019IT5 == 0) {p.time019IT5 = 0} else {p.time019IT5 = SOptions.I019.time.T5;}
						break;
						case "T6":
						++p.count019IT6;
						if (p.count019IT6 == 0) {p.time019IT6 = 0} else {p.time019IT6 = SOptions.I019.time.T6;}
						break;
						case "T7":
						++p.count019IT7;
						if (p.count019IT7 == 0) {p.time019IT7 = 0} else {p.time019IT7 = SOptions.I019.time.T7;}
						break;
						case "T8":
						++p.count019IT8;
						if (p.count019IT8 == 0) {p.time019IT8 = 0} else {p.time019IT8 = SOptions.I019.time.T8;}
						break;
						case "T9":
						++p.count019IT9;
						if (p.count019IT9 == 0) {p.time019IT9 = 0} else {p.time019IT9 = SOptions.I019.time.T9;}
						break;
						case "T10":
						++p.count019IT10;
						if (p.count019IT10 == 0) {p.time019IT10 = 0} else {p.time019IT10 = SOptions.I019.time.T10;}
						break;
						case "T11":
						++p.count019IT11;
						if (p.count019IT11 == 0) {p.time019IT11 = 0} else {p.time019IT11 = SOptions.I019.time.T11;}
						break;
					}
		    		p.count019I = p.count019IT1+p.count019IT2+p.count019IT3+p.count019IT4+p.count019IT5+p.count019IT6+p.count019IT7+p.count019IT8+p.count019IT9+p.count019IT10+p.count019IT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
			    	p.time019I = p.time019IT1+p.time019IT2+p.time019IT3+p.time019IT4+p.time019IT5+p.time019IT6+p.time019IT7+p.time019IT8+p.time019IT9+p.time019IT10+p.time019IT11;
			    	//console.log("040: "+p.count019I+ " : " + p.time019I+ "\n");
			    	//console.log("040: "+p.count019I + " : " +p.time019I+ "\n");
			    	break;
			    	case "019fc20_F":	    
	    			switch (v.TopicID){
						case "T1":
						++p.count019FT1; //console.log(p.countT1 +" :40 \n");
						if (p.count019FT1 == 0) {p.time019FT1 = 0} else {p.time019FT1 = SOptions.F019.time.T1;}
						break;
						case "T2":
						++p.count019FT2;
						if (p.count019FT2 == 0) {p.time019FT2 = 0} else {p.time019FT2 = SOptions.F019.time.T2;}
						break;
						case "T3":
						++p.count019FT3;
						if (p.count019FT3 == 0) {p.time019FT3 = 0} else {p.time019FT3 = SOptions.F019.time.T3;}
						break;
						case "T4":
						++p.count019FT4;
						if (p.count019FT4 == 0) {p.time019FT4 = 0} else {p.time019FT4 = SOptions.F019.time.T4;}
						break;
						case "T5":
						++p.count019FT5;
						if (p.count019FT5 == 0) {p.time019FT5 = 0} else {p.time019FT5 = SOptions.F019.time.T5;}
						break;
						case "T6":
						++p.count019FT6;
						if (p.count019FT6 == 0) {p.time019FT6 = 0} else {p.time019FT6 = SOptions.F019.time.T6;}
						break;
						case "T7":
						++p.count019FT7;
						if (p.count019FT7 == 0) {p.time019FT7 = 0} else {p.time019FT7 = SOptions.F019.time.T7;};
						//console.log(p.time019FT7+"\n");
						break;
						case "T8":
						++p.count019FT8;
						if (p.count019FT8 == 0) {p.time019FT8 = 0} else {p.time019FT8 = SOptions.F019.time.T8;}
						break;
						case "T9":
						++p.count019FT9;
						if (p.count019FT9 == 0) {p.time019FT9 = 0} else {p.time019FT9 = SOptions.F019.time.T9;}
						break;
						case "T10":
						++p.count019FT10;
						if (p.count019FT10 == 0) {p.time019FT10 = 0} else {p.time019FT10 = SOptions.F019.time.T10;}
						break;
						case "T11":
						++p.count019FT11;
						if (p.count019FT11 == 0) {p.time019FT11 = 0} else {p.time019FT11 = SOptions.F019.time.T11;}
						break;
					}
					p.count019F = p.count019FT1+p.count019FT2+p.count019FT3+p.count019FT4+p.count019FT5+p.count019FT6+p.count019FT7+p.count019FT8+p.count019FT9+p.count019FT10+p.count019FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
			    	p.time019F = p.time019FT1+p.time019FT2+p.time019FT3+p.time019FT4+p.time019FT5+p.time019FT6+p.time019FT7+p.time019FT8+p.time019FT9+p.time019FT10+p.time019FT11;
			    	//console.log("1:"+p.time019FT1);
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
						++p.count074IT6;
						if (p.count074IT6 == 0) {p.time074IT6 = 0} else {p.time074IT6 = SOptions.I074.time.T6;}
						break;
						case "T7":
						++p.count074IT7;
						if (p.count074IT7 == 0) {p.time074IT7 = 0} else {p.time074IT7 = SOptions.I074.time.T7;}
						break;
						case "T8":
						++p.count074IT8;
						if (p.count065IT8 == 0) {p.time074IT8 = 0} else {p.time074IT8 = SOptions.I074.time.T8;}
						break;
						case "T9":
						++p.count074IT9;
						if (p.count074IT9 == 0) {p.time074IT9 = 0} else {p.time074IT9 = SOptions.I074.time.T9;}
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
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
			    	p.time077I = p.time077IT1+p.time077IT2+p.time077IT3+p.time077IT4+p.time077IT5+p.time077IT6+p.time077IT7+p.time077IT8+p.time077IT9+p.time077IT10+p.time077IT11;
			    	break;
		    		case "077fc20_F":	    
		    		switch (v.TopicID){
						case "T1":
						++p.count077FT1;
						if (p.count077FT1 == 0) {p.time077FT1 = 0} else {p.time077FT1 = SOptions.F077.time.T1;}
						break;
						case "T2":
						++p.count077FT2;
						if (p.count077FT2 == 0) {p.time077FT2 = 0} else {p.time077FT2 = SOptions.F077.time.T2;}
						break;
						case "T3":
						++p.count077FT3;
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
						++p.count077FT8;
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
						if (p.count077FT11 == 0) {p.time077FT11 = 0} else {p.time077FT11 = SOptions.F077.time.T11;}
						break;
					}
		    		p.count077F = p.count077FT1+p.count077FT2+p.count077FT3+p.count077FT4+p.count077FT5+p.count077FT6+p.count077FT7+p.count077FT8+p.count077FT9+p.count077FT10+p.count077FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
			    	p.time077F = p.time077FT1+p.time077FT2+p.time077FT3+p.time077FT4+p.time077FT5+p.time077FT6+p.time077FT7+p.time077FT8+p.time077FT9+p.time077FT10+p.time077FT11;
			    	//console.log(p.time077FT1+"::"+p.time077FT2+"::"+p.time077FT3+"::"+p.time077FT4+"::"+p.time077FT5+"::"+p.time077FT6+"::"+p.time077FT7+"::"+p.time077FT8+"::"+p.time077FT9+"::"+p.time077FT10+"::"+p.time077FT11);
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
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
			    	p.time108F = p.time108FT1+p.time108FT2+p.time108FT3+p.time108FT4+p.time108FT5+p.time108FT6+p.time108FT7+p.time108FT8+p.time108FT9+p.time108FT10+p.time108FT11;
			    	break;
				}
				p.count = p.count019I+p.count019F+p.count043I+p.count043F+p.count074I+p.count074F+p.count077I+p.count077F+p.count108I+p.count108F; 
				time = p.time019I+p.time019F+p.time043I+p.time043F+p.time074I+p.time074F+p.time077I+p.time077F+p.time108I+p.time108F; 
				//console.log(p.time019I+" :19 " +p.time019F+" : "+p.time043I+" :43 "+p.time043F+" : " +p.time074I+" :74 " +p.time074F+" : " +p.time077I+" :77 " +p.time077F+" : " +p.time108I+" :108 " +p.time108F+"\n");
				
				if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
				//console.log(time+" :: "+p.count);
			break;
		}//switch gen
		return p;
	}

	function reduceGen2Remove(p, v) {		
	    switch (v.gender){
			case "m":				
				switch (v.SubjectID){
					case "015mv26_I":					
					switch (v.TopicID){
						case "T1":
						--p.count015IT1;
						if (p.count015IT1 == 0) {p.time015IT1 = 0} else {p.time015IT1 = SOptions.I015.time.T1;}
						break;
						case "T2":
						--p.count015IT2;
						if (p.count015IT2 == 0) {p.time015IT2 = 0} else {p.time015IT2 = SOptions.I015.time.T2;}
						break;
						case "T3":
						--p.count015IT3;
						if (p.count015IT3 == 0) {p.time015IT3 = 0} else {p.time015IT3 = SOptions.I015.time.T3;}
						break;
						case "T4":
						--p.count015IT4;
						if (p.count015IT4 == 0) {p.time015IT4 = 0} else {p.time015IT4 = SOptions.I015.time.T4;}
						break;
						case "T5":
						--p.count015IT5;
						if (p.count015IT5 == 0) {p.time015IT5 = 0} else {p.time015IT5 = SOptions.I015.time.T5;}
						break;
						case "T6":
						--p.count015IT6;
						if (p.count015IT6 == 0) {p.time015IT6 = 0} else {p.time015IT6 = SOptions.I015.time.T6;}
						break;
						case "T7":
						--p.count015IT7;
						if (p.count015IT7 == 0) {p.time015IT7 = 0} else {p.time015IT7 = SOptions.I015.time.T7;}
						break;
						case "T8":
						++p.count015IT8;
						if (p.count015IT8 == 0) {p.time015IT8 = 0} else {p.time015IT8 = SOptions.I015.time.T8;}
						break;
						case "T9":
						--p.count015IT9;
						if (p.count015IT9 == 0) {p.time015IT9 = 0} else {p.time015IT9 = SOptions.I015.time.T9;}
						break;
						case "T10":
						--p.count015IT10;
						if (p.count015IT10 == 0) {p.time015IT10 = 0} else {p.time015IT10 = SOptions.I015.time.T10;}
						break;
						case "T11":
						--p.count015IT11;
						if (p.count015IT11 == 0) {p.time015IT11 = 0} else {p.time015IT11 = SOptions.I015.time.T11;}
						break;
					}
	    			p.count015I = p.count015IT1+p.count015IT2+p.count015IT3+p.count015IT4+p.count015IT5+p.count015IT6+p.count015IT7+p.count015IT8+p.count015IT9+p.count015IT10+p.count015IT11; //console.log(p.count+ ": count \n");
		    		//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
		    		p.time015I = p.time015IT1+p.time015IT2+p.time015IT3+p.time015IT4+p.time015IT5+p.time015IT6+p.time015IT7+p.time015IT8+p.time015IT9+p.time015IT10+p.time015IT11;
		    		break;
		    		case "015mv26_F":
					switch (v.TopicID){
						case "T1":
						--p.count015FT1;
						if (p.count015FT1 == 0) {p.time015FT1 = 0} else {p.time015FT1 = SOptions.F015.time.T1;}
						break;
						case "T2":
						--p.count015FT2;
						if (p.count015FT2 == 0) {p.time015FT2 = 0} else {p.time015FT2 = SOptions.F015.time.T2;}
						break;
						case "T3":
						--p.count015FT3;
						if (p.count015FT3 == 0) {p.time015FT3 = 0} else {p.time015FT3 = SOptions.F015.time.T3;}
						break;
						case "T4":
						--p.count015FT4;
						if (p.count015FT4 == 0) {p.time015FT4 = 0} else {p.time015FT4 = SOptions.F015.time.T4;}
						break;
						case "T5":
						--p.count015FT5;
						if (p.count015FT5 == 0) {p.time015FT5 = 0} else {p.time015FT5 = SOptions.F015.time.T5;}
						break;
						case "T6":
						--p.count015FT6;
						if (p.count015FT6 == 0) {p.time015FT6 = 0} else {p.time015FT6 = SOptions.F015.time.T6;}
						break;
						case "T7":
						--p.count015FT7;
						if (p.count015FT7 == 0) {p.time015FT7 = 0} else {p.time015FT7 = SOptions.F015.time.T7;}
						break;
						case "T8":
						--p.count015FT8;
						if (p.count015FT8 == 0) {p.time015FT8 = 0} else {p.time015FT8 = SOptions.F015.time.T8;}
						break;
						case "T9":
						--p.count015FT9;
						if (p.count015FT9 == 0) {p.time015FT9 = 0} else {p.time015FT9 = SOptions.F015.time.T9;}
						break;
						case "T10":
						--p.count015FT10;
						if (p.count015FT10 == 0) {p.time015FT10 = 0} else {p.time015FT10 = SOptions.F015.time.T10;}
						break;
						case "T11":
						--p.count015FT11;
						if (p.count015FT11 == 0) {p.time015FT11 = 0} else {p.time015FT11 = SOptions.F015.time.T11;}
						break;
					}
	    			p.count015F = p.count015FT1+p.count015FT2+p.count015FT3+p.count015FT4+p.count015FT5+p.count015FT6+p.count015FT7+p.count015FT8+p.count015FT9+p.count015FT10+p.count015FT11; //console.log(p.count+ ": count \n");
		    		//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
		    		p.time015F = p.time015FT1+p.time015FT2+p.time015FT3+p.time015FT4+p.time015FT5+p.time015FT6+p.time015FT7+p.time015FT8+p.time015FT9+p.time015FT10+p.time015FT11; 
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
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
						if (p.count090FT6 == 0) {p.time090FT6 = 0} else {p.time090FT6 = SOptions.F090.time.T6;}
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
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
			    	p.time090F = p.time090FT1+p.time090FT2+p.time090FT3+p.time090FT4+p.time090FT5+p.time090FT6+p.time090FT7+p.time090FT8+p.time090FT9+p.time090FT10+p.time090FT11;
			    	//console.log(p.time090FT1+"::"+p.time090FT2+"::"+p.time090FT3+"::"+p.time090FT4+"::"+p.time090FT5+"::"+p.time090FT6+"::"+p.time090FT7+"::"+p.time090FT8+"::"+p.time090FT9+"::"+p.time090FT10+"::"+p.time090FT11);
			    	break;
			    	case "020mc25_F":	
	    			//console.log(p.count020F+"\n");    
	    			switch (v.TopicID){
						case "T1":
						--p.count020FT1; //console.log(p.countT1 +" :61 \n");
						if (p.count020FT1 == 0) {p.time020FT1 = 0} else {p.time020FT1 = SOptions.F020.time.T1;}
						break;
						case "T2":
						--p.count020FT2;
						if (p.count020FT2 == 0) {p.time020FT2 = 0} else {p.time020FT2 = SOptions.F020.time.T2;}
						break;
						case "T3":
						--p.count020FT3;
						if (p.count020FT3 == 0) {p.time020FT3 = 0} else {p.time020FT3 = SOptions.F020.time.T3;}
						break;
						case "T4":
						--p.count020FT4;
						if (p.count020FT4 == 0) {p.time020FT4 = 0} else {p.time020FT4 = SOptions.F020.time.T4;}
						break;
						case "T5":
						--p.count020FT5;
						if (p.count020FT5 == 0) {p.time020FT5 = 0} else {p.time020FT5 = SOptions.F020.time.T5;}
						break;
						case "T6":
						--p.count020FT6;
						if (p.count020FT6 == 0) {p.time020FT6 = 0} else {p.time020FT6 = SOptions.F020.time.T6;}
						break;
						case "T7":
						--p.count020FT7;
						if (p.count020FT7 == 0) {p.time020FT7 = 0} else {p.time020FT7 = SOptions.F020.time.T7;}
						break;
						case "T8":
						--p.count020FT8;
						if (p.count020FT8 == 0) {p.time020FT8 = 0} else {p.time020FT8 = SOptions.F020.time.T8;}
						break;
						case "T9":
						--p.count020FT9;
						if (p.count020FT9 == 0) {p.time020FT9 = 0} else {p.time020FT9 = SOptions.F020.time.T9;}
						break;
						case "T10":
						--p.count020FT10;
						if (p.count020FT10 == 0) {p.time020FT10 = 0} else {p.time020FT10 = SOptions.F020.time.T10;}
						break;
						case "T11":
						--p.count020FT11;
						if (p.count020FT11 == 0) {p.time020FT11 = 0} else {p.time020FT11 = SOptions.F020.time.T11;}
						break;
					}
		    		p.count020F = p.count020FT1+p.count020FT2+p.count020FT3+p.count020FT4+p.count020FT5+p.count020FT6+p.count020FT7+p.count020FT8+p.count020FT9+p.count020FT10+p.count020FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.count020FT1+" : "+p.count020FT2+" : "+p.count020FT3+" : "+p.count020FT4+" : "+p.count020FT6+" : "+p.count020FT7+" : "+p.count020FT8+" : "+p.count020FT9+" : "+p.count020FT10+" : "+p.count020FT11);	  
			    	p.time020F = p.time020FT1+p.time020FT2+p.time020FT3+p.time020FT4+p.time020FT5+p.time020FT6+p.time020FT7+p.time020FT8+p.time020FT9+p.time020FT10+p.time020FT11;
			    	break;
			    	case "020mc25_I":
			    	//console.log("061:" +p.time020I+"\n");
			    	//console.log("61:"+p.count020I+"\n");
			    	//console.log(p.time020IT1+":t1 "+p.time020IT2+":t2 "+p.time020IT3+":t3 "+p.time020IT4+":4 "+p.time020IT5+":t5 "+p.time020IT6+":t6 "+p.time020IT7+":t7 "+p.time020IT8+":t8 "+p.time020IT9+":t9 "+p.time020IT10+":t10 "+p.time020IT11+":t11 ");
	    			switch (v.TopicID){
						case "T1":
						--p.count020IT1;
						if (p.count020IT1 == 0) {p.time020IT1 = 0} else {p.time020IT1 = SOptions.I020.time.T1;}; 
						break;
						case "T2":
						--p.count020IT2;
						if (p.count020IT2 == 0) {p.time020IT2 = 0} else {p.time020IT2 = SOptions.I020.time.T2;}; 
						break;
						case "T3":
						--p.count020IT3;
						if (p.count020IT3 == 0) {p.time020IT3 = 0} else {p.time020IT3 = SOptions.I020.time.T3;}; 
						break;
						case "T4":
						--p.count020IT4;
						if (p.count020IT4 == 0) {p.time020IT4 = 0} else {p.time020IT4 = SOptions.I020.time.T4;}; 
						break;
						case "T5":
						--p.count020IT5;
						if (p.count020IT5 == 0) {p.time020IT5 = 0} else {p.time020IT5 = SOptions.I020.time.T5;}; 
						break;
						case "T6":
						--p.count020IT6;
						if (p.count020IT6 == 0) {p.time020IT6 = 0} else {p.time020IT6 = SOptions.I020.time.T6;}; 
						break;
						case "T7":
						--p.count020IT7;
						if (p.count020IT7 == 0) {p.time020IT7 = 0} else {p.time020IT7 = SOptions.I020.time.T7;}; 
						break;
						case "T8":
						--p.count020IT8;
						if (p.count020IT8 == 0) {p.time020IT8 = 0} else {p.time020IT8 = SOptions.I020.time.T8;}; 
						break;
						case "T9":
						--p.count020IT9;
						if (p.count020IT9 == 0) {p.time020IT9 = 0} else {p.time020IT9 = SOptions.I020.time.T9;}; 
						break;
						case "T10":
						--p.count020IT10;
						if (p.count020IT10 == 0) {p.time020IT10 = 0} else {p.time020IT10 = SOptions.I020.time.T10;}; 
						break;
						case "T11":
						--p.count020IT11;
						if (p.count020IT11 == 0) {p.time020IT11 = 0} else {p.time020IT11 = SOptions.I020.time.T11;}; 
						break;
					}
					//console.log(p.time020I+"\n");
					//console.log(p.time020IT1+"\n");
		    		p.count020I = p.count020IT1+p.count020IT2+p.count020IT3+p.count020IT4+p.count020IT5+p.count020IT6+p.count020IT7+p.count020IT8+p.count020IT9+p.count020IT10+p.count020IT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time020IT1+":t1 "+p.time020IT2+":t2 "+p.time020IT3+":t3 "+p.time020IT4+":4 "+p.time020IT5+":t5 "+p.time020IT6+":t6 "+p.time020IT7+":t7 "+p.time020IT8+":t8 "+p.time020IT9+":t9 "+p.time020IT10+":t10 "+p.time020IT11+":t11 ");
			    	p.time020I = p.time020IT1+p.time020IT2+p.time020IT3+p.time020IT4+p.time020IT5+p.time020IT6+p.time020IT7+p.time020IT8+p.time020IT9+p.time020IT10+p.time020IT11;
			    	//console.log("061: "+p.count020I + " : " +p.time020I+ "\n");
			    	break; 
				}//switch Subj.ID
				//console.log(p.time015F+"::"+p.time015I+"::"+p.time065I+"::"+p.time065F+"::"+p.time079I+"::"+p.time079F+"::"+p.time090I+"::"+p.time090F+"::"+p.time020I+"::"+p.time020F);
				p.count = p.count015I+p.count015F+p.count065I+p.count065F+p.count079I+p.count079F+p.count090I+p.count090F+p.count020I+p.count020F;
				time = p.time015F+p.time015I+p.time065I+p.time065F+p.time079I+p.time079F+p.time090I+p.time090F+p.time020I+p.time020F;
				if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};  
			break;
			case "f":
				switch (v.SubjectID){
					case "019fc20_I": 
					switch (v.TopicID){
						case "T1":
						--p.count019IT1;
						if (p.count019IT1 == 0) {p.time019IT1 = 0} else {p.time019IT1 = SOptions.I019.time.T1;}
						break;
						case "T2":
						--p.count019IT2;
						if (p.count019IT2 == 0) {p.time019IT2 = 0} else {p.time019IT2 = SOptions.I019.time.T2;}
						break;
						case "T3":
						--p.count019IT3;
						if (p.count019IT3 == 0) {p.time019IT3 = 0} else {p.time019IT3 = SOptions.I019.time.T3;}
						break;
						case "T4":
						--p.count019IT4;
						if (p.count019IT4 == 0) {p.time019IT4 = 0} else {p.time019IT4 = SOptions.I019.time.T4;}
						break;
						case "T5":
						--p.count019IT5;
						if (p.count019IT5 == 0) {p.time019IT5 = 0} else {p.time019IT5 = SOptions.I019.time.T5;}
						break;
						case "T6":
						--p.count019IT6;
						if (p.count019IT6 == 0) {p.time019IT6 = 0} else {p.time019IT6 = SOptions.I019.time.T6;}
						break;
						case "T7":
						--p.count019IT7;
						if (p.count019IT7 == 0) {p.time019IT7 = 0} else {p.time019IT7 = SOptions.I019.time.T7;}
						break;
						case "T8":
						--p.count019IT8;
						if (p.count019IT8 == 0) {p.time019IT8 = 0} else {p.time019IT8 = SOptions.I019.time.T8;}
						break;
						case "T9":
						--p.count019IT9;
						if (p.count019IT9 == 0) {p.time019IT9 = 0} else {p.time019IT9 = SOptions.I019.time.T9;}
						break;
						case "T10":
						--p.count019T10;
						if (p.count019IT10 == 0) {p.time019IT10 = 0} else {p.time019IT10 = SOptions.I019.time.T10;}
						break;
						case "T11":
						--p.count019IT11;
						if (p.count019IT11 == 0) {p.time019IT11 = 0} else {p.time019IT11 = SOptions.I019.time.T11;}
						break;
					}
		    		p.count019I = p.count019IT1+p.count019IT2+p.count019IT3+p.count019IT4+p.count019IT5+p.count019IT6+p.count019IT7+p.count019IT8+p.count019IT9+p.count019IT10+p.count019IT11; 
		    		//console.log(p.time019IT1+"::"+p.time019IT2+"::"+p.time019IT3+"::"+p.time019IT4+"::"+p.time019IT5+"::"+p.time019IT6+"::"+p.time019IT7+"::"+p.time019IT8+"::"+p.time019IT9+"::"+p.time019IT10+"::"+p.time019IT11);//console.log(p.count+ ": count \n");
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
			    	p.time019I = p.time019IT1+p.time019IT2+p.time019IT3+p.time019IT4+p.time019IT5+p.time019IT6+p.time019IT7+p.time019IT8+p.time019IT9+p.time019IT10+p.time019IT11;
			    	//console.log("040: "+p.count019I+ " : " + p.time019I+ "\n");
			    	//console.log("040: "+p.count019I + " : " +p.time019I+ "\n");
			    	break;
			    	case "019fc20_F":	    
	    			switch (v.TopicID){
						case "T1":
						--p.count019FT1; //console.log(p.countT1 +" :40 \n");
						if (p.count019FT1 == 0) {p.time019FT1 = 0} else {p.time019FT1 = SOptions.F019.time.T1;}
						break;
						case "T2":
						--p.count019FT2;
						if (p.count019FT2 == 0) {p.time019FT2 = 0} else {p.time019FT2 = SOptions.F019.time.T2;}
						break;
						case "T3":
						--p.count019FT3;
						if (p.count019FT3 == 0) {p.time019FT3 = 0} else {p.time019FT3 = SOptions.F019.time.T3;}
						break;
						case "T4":
						--p.count019FT4;
						if (p.count019FT4 == 0) {p.time019FT4 = 0} else {p.time019FT4 = SOptions.F019.time.T4;}
						break;
						case "T5":
						--p.count019FT5;
						if (p.count019FT5 == 0) {p.time019FT5 = 0} else {p.time019FT5 = SOptions.F019.time.T5;}
						break;
						case "T6":
						--p.count019FT6;
						if (p.count019FT6 == 0) {p.time019FT6 = 0} else {p.time019FT6 = SOptions.F019.time.T6;}
						break;
						case "T7":
						--p.count019FT7;
						if (p.count019FT7 == 0) {p.time019FT7 = 0} else {p.time019FT7 = SOptions.F019.time.T7;}
						break;
						case "T8":
						--p.count019FT8;
						if (p.count019FT8 == 0) {p.time019FT8 = 0} else {p.time019FT8 = SOptions.F019.time.T8;}
						break;
						case "T9":
						--p.count019FT9;
						if (p.count019FT9 == 0) {p.time019FT9 = 0} else {p.time019FT9 = SOptions.F019.time.T9;}
						break;
						case "T10":
						--p.count019FT10;
						if (p.count019FT10 == 0) {p.time019FT10 = 0} else {p.time019FT10 = SOptions.F019.time.T10;}
						break;
						case "T11":
						--p.count019FT11;
						if (p.count019FT11 == 0) {p.time019FT11 = 0} else {p.time019FT11 = SOptions.F019.time.T11;}
						break;
					}
					p.count019F = p.count019FT1+p.count019FT2+p.count019FT3+p.count019FT4+p.count019FT5+p.count019FT6+p.count019FT7+p.count019FT8+p.count019FT9+p.count019FT10+p.count019FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
			    	p.time019F = p.time019FT1+p.time019FT2+p.time019FT3+p.time019FT4+p.time019FT5+p.time019FT6+p.time019FT7+p.time019FT8+p.time019FT9+p.time019FT10+p.time019FT11;
			    	//console.log(p.count019F+" ::");
			    	break;
					case "043fc21_I":
	    			switch (v.TopicID){
						case "T1":
						--p.count043IT1;
						if (p.count043IT1 == 0) {p.time043IT1 = 0} else {p.time043IT1 = SOptions.I043.time.T1;}
						break;
						case "T2":
						--p.count043IT2;
						if (p.count043IT2 == 0) {p.time043IT2 = 0} else {p.time043IT2 = SOptions.I043.time.T2;}
						break;
						case "T3":
						--p.count043IT3;
						if (p.count043IT3 == 0) {p.time043IT3 = 0} else {p.time043IT3 = SOptions.I043.time.T3;}
						break;
						case "T4":
						--p.count043IT4;
						if (p.count043IT4 == 0) {p.time043IT4 = 0} else {p.time043IT4 = SOptions.I043.time.T4;}
						break;
						case "T5":
						--p.count043IT5;
						if (p.count043IT5 == 0) {p.time043IT5 = 0} else {p.time043IT5 = SOptions.I043.time.T5;}
						break;
						case "T6":
						--p.count043IT6;
						if (p.count043IT6 == 0) {p.time043IT6 = 0} else {p.time043IT6 = SOptions.I043.time.T6;}
						break;
						case "T7":
						--p.count043IT7;
						if (p.count043IT7 == 0) {p.time043IT7 = 0} else {p.time043IT7 = SOptions.I043.time.T7;}
						break;
						case "T8":
						--p.count043IT8;
						if (p.count043IT8 == 0) {p.time043IT8 = 0} else {p.time043IT8 = SOptions.I043.time.T8;}
						break;
						case "T9":
						--p.count043IT9;
						if (p.count043IT9 == 0) {p.time043IT9 = 0} else {p.time043IT9 = SOptions.I043.time.T9;}
						break;
						case "T10":
						--p.count043IT10;
						if (p.count043IT10 == 0) {p.time043IT10 = 0} else {p.time043IT10 = SOptions.I043.time.T10;}
						break;
						case "T11":
						--p.count043IT11;
						if (p.count043IT11 == 0) {p.time043IT11 = 0} else {p.time043IT11 = SOptions.I043.time.T11;}
						break;
					}
		    		p.count043I = p.count043IT1+p.count043IT2+p.count043IT3+p.count043IT4+p.count043IT5+p.count043IT6+p.count043IT7+p.count043IT8+p.count043IT9+p.count043IT10+p.count043IT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
			    	p.time043I = p.time043IT1+p.time043IT2+p.time043IT3+p.time043IT4+p.time043IT5+p.time043IT6+p.time043IT7+p.time043IT8+p.time043IT9+p.time043IT10+p.time043IT11;
			    	break;
		    		case "043fc21_F":	    
		    		switch (v.TopicID){
						case "T1":
						--p.count043FT1;
						if (p.count043FT1 == 0) {p.time043FT1 = 0} else {p.time043FT1 = SOptions.F043.time.T1;}
						break;
						case "T2":
						--p.count043FT2;
						if (p.count043FT2 == 0) {p.time043FT2 = 0} else {p.time043FT2 = SOptions.F043.time.T2;}
						break;
						case "T3":
						--p.count043FT3;
						if (p.count043FT3 == 0) {p.time043FT3 = 0} else {p.time043FT3 = SOptions.F043.time.T3;}
						break;
						case "T4":
						--p.count043FT4;
						if (p.count043FT4 == 0) {p.time043FT4 = 0} else {p.time043FT4 = SOptions.F043.time.T4;}
						break;
						case "T5":
						--p.count043FT5;
						if (p.count043FT5 == 0) {p.time043FT5 = 0} else {p.time043FT5 = SOptions.F043.time.T5;}
						break;
						case "T6":
						--p.count043FT6;
						if (p.count043FT6 == 0) {p.time043FT6 = 0} else {p.time043FT6 = SOptions.F043.time.T6;}
						break;
						case "T7":
						--p.count043FT7;
						if (p.count043FT7 == 0) {p.time043FT7 = 0} else {p.time043FT7 = SOptions.F043.time.T7;}
						break;
						case "T8":
						--p.count043FT8;
						if (p.count043FT8 == 0) {p.time043FT8 = 0} else {p.time043FT8 = SOptions.F043.time.T8;}
						break;
						case "T9":
						--p.count043FT9;
						if (p.count043FT9 == 0) {p.time043FT9 = 0} else {p.time043FT9 = SOptions.F043.time.T9;}
						break;
						case "T10":
						--p.count043FT10;
						if (p.count043FT10 == 0) {p.time043FT10 = 0} else {p.time043FT10 = SOptions.F043.time.T10;}
						break;
						case "T11":
						--p.count043FT11;
						if (p.count043FT11 == 0) {p.time043FT11 = 0} else {p.time043FT11 = SOptions.F043.time.T11;}
						break;
					}
		    		p.count043F = p.count043FT1+p.count043FT2+p.count043FT3+p.count043FT4+p.count043FT5+p.count043FT6+p.count043FT7+p.count043FT8+p.count043FT9+p.count043FT10+p.count043FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
			    	p.time043F = p.time043FT1+p.time043FT2+p.time043FT3+p.time043FT4+p.time043FT5+p.time043FT6+p.time043FT7+p.time043FT8+p.time043FT9+p.time043FT10+p.time043FT11;
			    	
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
						--p.count074IT6;
						if (p.count074IT6 == 0) {p.time074IT6 = 0} else {p.time074IT6 = SOptions.I074.time.T6;}
						break;
						case "T7":
						--p.count074IT7;
						if (p.count074IT7 == 0) {p.time074IT7 = 0} else {p.time074IT7 = SOptions.I074.time.T7;}
						break;
						case "T8":
						--p.count074IT8;
						if (p.count074IT8 == 0) {p.time074IT8 = 0} else {p.time074IT8 = SOptions.I074.time.T8;}
						break;
						case "T9":
						--p.count074IT9;
						if (p.count065IT9 == 0) {p.time074IT9 = 0} else {p.time074IT9 = SOptions.I074.time.T9;}
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
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
			    	p.time077I = p.time077IT1+p.time077IT2+p.time077IT3+p.time077IT4+p.time077IT5+p.time077IT6+p.time077IT7+p.time077IT8+p.time077IT9+p.time077IT10+p.time077IT11;
			    	break;
		    		case "077fc20_F":	    
		    		switch (v.TopicID){
						case "T1":
						--p.count077FT1;
						if (p.count077FT1 == 0) {p.time077FT1 = 0} else {p.time077FT1 = SOptions.F077.time.T1;}
						break;
						case "T2":
						--p.count077FT2;
						if (p.count077FT2 == 0) {p.time077FT2 = 0} else {p.time077FT2 = SOptions.F077.time.T2;}
						break;
						case "T3":
						--p.count077FT3;
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
						--p.count077FT8;
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
						if (p.count077FT11 == 0) {p.time077FT11 = 0} else {p.time077FT11 = SOptions.F077.time.T11;}
						break;
					}
		    		p.count077F = p.count077FT1+p.count077FT2+p.count077FT3+p.count077FT4+p.count077FT5+p.count077FT6+p.count077FT7+p.count077FT8+p.count077FT9+p.count077FT10+p.count077FT11; //console.log(p.count+ ": count \n");
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
			    	p.time077F = p.time077FT1+p.time077FT2+p.time077FT3+p.time077FT4+p.time077FT5+p.time077FT6+p.time077FT7+p.time077FT8+p.time077FT9+p.time077FT10+p.time077FT11;
			    	//console.log(p.count077F+"::"+p.time077F);
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
			    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
				p.count = p.count019I+p.count019F+p.count043I+p.count043F+p.count074I+p.count074F+p.count077I+p.count077F+p.count108I+p.count108F; 
				time = p.time019I+p.time019F+p.time043I+p.time043F+p.time074I+p.time074F+p.time077I+p.time077F+p.time108I+p.time108F; //console.log(p.count020F +" : "+ p.time020F +"\n");
				//console.log(p.time019I+" : "+p.time019F+" : "+p.time043F+" : "+p.time043I+" : "+p.time074I+" : "+p.time074F+" : "+p.time077I+" : "+p.time077F+" : "+p.time108I+" : "+p.time108F+"\n");
				if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
				//console.log(p.count+ " :: "+time);
			break;
		}//switch gen
		return p;	
	}  


	function reduceSubjAdd(p, v) {
		 
	    switch (v.SubjectID){	   
			case "015mv26_I":
				switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I015.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I015.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I015.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I015.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I015.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I015.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I015.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I015.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I015.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I015.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I015.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.countT1+"\n");
	    	break;
			case "015mv26_F":
				switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F015.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F015.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F015.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F015.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F015.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F015.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F015.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F015.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F015.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F015.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F015.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
    		case "019fc20_I": 
	    		switch (v.TopicID){
					case "T1":
					++p.countT1; 
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I019.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I019.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I019.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I019.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I019.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I019.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I019.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I019.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I019.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I019.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I019.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
    		case "019fc20_F":	
    			//console.log(v.TopicID);    
    			switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F019.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F019.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F019.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F019.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F019.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F019.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F019.time.T7;};
					//console.log(p.timeT7+" s\n");
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F019.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F019.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F019.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F019.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	//console.log(p.countT7+" : "+p.count); 
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
    		case "020mc25_I":
    			switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I020.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I020.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I020.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I020.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I020.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I020.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I020.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I020.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I020.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I020.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I020.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break; 
    		case "020mc25_F":	    
    			switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F020.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F020.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F020.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F020.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F020.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F020.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F020.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F020.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F020.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F020.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F020.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
	    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
	    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
	    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
	    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
	    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F015.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
	    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
	    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
	    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
	    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
	    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
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
	    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
    		case "043fc21_I":
    			switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I043.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I043.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I043.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I043.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I043.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I043.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I043.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I043.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I043.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I043.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I043.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
    		case "043fc21_F":	    
	    		switch (v.TopicID){
					case "T1":
					++p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F043.time.T1;}
					break;
					case "T2":
					++p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F043.time.T2;}
					break;
					case "T3":
					++p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F043.time.T3;}
					break;
					case "T4":
					++p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F043.time.T4;}
					break;
					case "T5":
					++p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F043.time.T5;}
					break;
					case "T6":
					++p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F043.time.T6;}
					break;
					case "T7":
					++p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F043.time.T7;}
					break;
					case "T8":
					++p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F043.time.T8;}
					break;
					case "T9":
					++p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F043.time.T9;}
					break;
					case "T10":
					++p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F043.time.T10;}
					break;
					case "T11":
					++p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F043.time.T11;}
					break;
				}
    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
	    	//console.log(p.time015F+":013 "+p.time015I+" "+p.time019F+":040 "+p.time074I+" "+p.time020F+":061 "+p.time020I+" "+p.time065F+":065 "+p.time065I+" "+p.time074F+":074 "+p.time074I+" "+p.time077F+":077 "+p.time077I+" "+p.time079F+":079"+p.time079I+" "+p.time090F+":090 "+p.time090I+" "+p.time108F+":108 "+p.time108I+" "+p.time043F+":121 "+p.time043I+"\n");
	    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
	    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);}; //console.log(time+" : "+p.count+"\n");
	    	break;
	    }
	 	return p;	
	}
	
	function reduceSubjRemove(p, v) {		
		    switch (v.SubjectID){	   
				case "015mv26_I":
				switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I015.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I015.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I015.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I015.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I015.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I015.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I015.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I015.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I015.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I015.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I015.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
				case "015mv26_F":
				switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F015.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F015.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F015.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F015.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F015.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F015.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F015.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F015.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F015.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F015.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F015.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
	    		case "019fc20_I":
	    			switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I019.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I019.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I019.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I019.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I019.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I019.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I019.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I019.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I019.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I019.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I019.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break; 
	    		case "019fc20_F":	    
		    		switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F019.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F019.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F019.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F019.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F019.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F019.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F019.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F019.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F019.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F019.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F019.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
	    		case "020mc25_I": 
	    			switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I020.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I020.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I020.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I020.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I020.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I020.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I020.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I020.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I020.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I020.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I020.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
	    		case "020mc25_F":	    
		    		switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F020.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F020.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F020.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F020.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F020.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F020.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F020.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F020.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F020.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F020.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F020.time.T11;}
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
	    		case "043fc21_I":
	    			switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.I043.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.I043.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.I043.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.I043.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.I043.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.I043.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.I043.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.I043.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.I043.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.I043.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.I043.time.T11;}
					break;
				}
	    		p.count = p.countT1+p.countT2+p.countT3+p.countT4+p.countT5+p.countT6+p.countT7+p.countT8+p.countT9+p.countT10+p.countT11; //console.log(p.count+ ": count \n");
		    	//console.log(p.timeT1+":t1 "+p.timeT2+" "+p.timeT3+":t3 "+p.timeT4+" "+p.timeT5+":t5 "+p.timeT5+" "+p.timeT7+":t7 "+p.timeT8+" "+p.timeT9+":t9 "+p.timeT10+" "+p.timeT11+"\n");
		    	time = p.timeT1+p.timeT2+p.timeT3+p.timeT4+p.timeT5+p.timeT6+p.timeT7+p.timeT8+p.timeT9+p.timeT10+p.timeT11;
		    	if (time == 0) { p.freq = 0; } else { p.freq = d3.round((p.count/time), 8);};
	    		break;
	    		case "043fc21_F":	    
		    		switch (v.TopicID){
					case "T1":
					--p.countT1;
					if (p.countT1 == 0) {p.timeT1 = 0} else {p.timeT1 = SOptions.F043.time.T1;}
					break;
					case "T2":
					--p.countT2;
					if (p.countT2 == 0) {p.timeT2 = 0} else {p.timeT2 = SOptions.F043.time.T2;}
					break;
					case "T3":
					--p.countT3;
					if (p.countT3 == 0) {p.timeT3 = 0} else {p.timeT3 = SOptions.F043.time.T3;}
					break;
					case "T4":
					--p.countT4;
					if (p.countT4 == 0) {p.timeT4 = 0} else {p.timeT4 = SOptions.F043.time.T4;}
					break;
					case "T5":
					--p.countT5;
					if (p.countT5 == 0) {p.timeT5 = 0} else {p.timeT5 = SOptions.F043.time.T5;}
					break;
					case "T6":
					--p.countT6;
					if (p.countT6 == 0) {p.timeT6 = 0} else {p.timeT6 = SOptions.F043.time.T6;}
					break;
					case "T7":
					--p.countT7;
					if (p.countT7 == 0) {p.timeT7 = 0} else {p.timeT7 = SOptions.F043.time.T7;}
					break;
					case "T8":
					--p.countT8;
					if (p.countT8 == 0) {p.timeT8 = 0} else {p.timeT8 = SOptions.F043.time.T8;}
					break;
					case "T9":
					--p.countT9;
					if (p.countT9 == 0) {p.timeT9 = 0} else {p.timeT9 = SOptions.F043.time.T9;}
					break;
					case "T10":
					--p.countT10;
					if (p.countT10 == 0) {p.timeT10 = 0} else {p.timeT10 = SOptions.F043.time.T10;}
					break;
					case "T11":
					--p.countT11;
					if (p.countT11 == 0) {p.timeT11 = 0} else {p.timeT11 = SOptions.F043.time.T11;}
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
/*	function remove_empty_bins(source_group) {
    return {
        all:function () {
            return source_group.all().filter(function(d) {
                return Math.abs(d.value) > 0.00001; // if using floating-point numbers
                //return d.value !== 0; // if integers only
            });
        }
    };
	}
*/		
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

  var gen2Dim = ndx.dimension(function(d){return d.gender});
  var gen2Group = gen2Dim.group().reduce(reduceGen2Add, reduceGen2Remove, reduceGen2Initial);

  genChart2
    .width(100)
    .height(100)
    .innerRadius(20)
    .minAngleForLabel(0.1)
    .dimension(gen2Dim)
    .group(gen2Group)
    .valueAccessor(function (p) {
	    return p.value.freq;})
    .legend(dc.legend());


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
	var allTopics = topicDim.group().reduce(reduceAdd2, reduceRemove2, reduceInitial2);	

	
	var tierDim = ndx.dimension(function(d){ return d.TierID});
	var allTiers = tierDim.group().reduce(reduceTierAdd, reduceTierRemove, reduceTierInitial);
	
	//annotation dimention
	var annotationDim = ndx.dimension(function(d){return d.AnnV}); 
	var allAnnotations = annotationDim.group();
	
	
	//set up topic chart	
  topicChart
  	.height(300)
  	.dimension(topicDim)
  	.elasticX(true)
  	.group(allTopics)
  	.valueAccessor(function (p) {
	   return p.value.freq;})
    .xAxis().ticks(5);

  	
	//set up tier chart	
  tierChart
  	.height(tierCH)
  	.dimension(tierDim)
  	.elasticX(true)
  	.group(allTiers)
  	.valueAccessor(function (p) {
	   return p.value.freq;})
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
