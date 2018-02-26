function displayDashCharts(SIndex){
	console.log(SIndex);
window.topicChart = dc.rowChart("#topicChart");
window.tierChart = dc.rowChart("#tierChart");	
window.annotationChart = dc.rowChart("#annotationChart");
window.timeChart = dc.rowChart("#timeChart");

window.genChart = dc.pieChart("#genChart");
window.subjChart = dc.rowChart("#subjChart");

//fetch data 
var topicTimeF = [747.711, 181.367, 250.292, 470.772, 193.292, 621.427, 258.842, 290.633, 436.731, 196.242, 376.136];
var genTimeF = [4032.445, 4032.445]//[1976.371, 2047.074];
var subjTimeF = [405.116, 452.642, 421.868, 375.114, 379.254, 325.330, 460.166, 356.932, 397.277, 449.746];

var topicTimeI = [1417.081, 1080.877, 583.574, 1460.015, 1673.617, 994.232, 1488.086];
var genTimeI = [8849.536, 8849.536]//[4690.176, 4159.360];
var subjTimeI = [832.177, 989.360, 1005.151, 815.446, 1066.229, 864.039, 831.456, 967.644, 765.397, 712.637];

var tierHightDef = 80;
var tierHight2 = 300;

var subjHightDef = 300;
var subjHight2 = 80;


var tierCH = tierHightDef;
var subjCH = subjHightDef;


var SOptions = {
	FGaze : {
		col : "http://localhost:3000/GazeF",
		annCH : 350 }, 
	IGaze : {
		col : "http://localhost:3000/GazeI",
		annCH : 400 },
	FHead : {
		col : "http://localhost:3000/HeadF",
		annCH : 550 },
	IHead : {
		col : "http://localhost:3000/HeadI",
		annCH : 700 },
	FHand : {
		col : "http://localhost:3000/HandF",
		annCH : 800 },
	IHand : {
		col : "http://localhost:3000/HandI", 
		annCH : 1500 },	
	FTouch : {
		col : "http://localhost:3000/TouchF",
		annCH : 700 },
	ITouch : {
		col : "http://localhost:3000/TouchI",
		annCH : 900 },
	FPosture : {
		col : "http://localhost:3000/PostureF",
		annCH : 300 },
	IPosture : {
		col : "http://localhost:3000/PostureI",
		annCH : 350 },

	F013:	{
		col: "http://localhost:3000/S013F",
		annCH : 1400
	},
	I013:	{
		col: "http://localhost:3000/S013I",
		annCH : 1200
	},
	F040:	{
		col: "http://localhost:3000/S040F",
		annCH : 900
	},
	I040:	{
		col: "http://localhost:3000/S040I",
		annCH : 1200
	},
	F061:	{
		col: "http://localhost:3000/S061F",
		annCH : 1000
	},
	I061:	{
		col: "http://localhost:3000/S061I",
		annCH : 1800
	},
	F065:	{
		col: "http://localhost:3000/S065F",
		annCH : 1600
	},
	I065:	{
		col: "http://localhost:3000/S065I",
		annCH : 1800
	},
	F074:	{
		col: "http://localhost:3000/S074F",
		annCH : 900
	},
	I074:	{
		col: "http://localhost:3000/S074I",
		annCH : 1600
	},
	F077:	{
		col: "http://localhost:3000/S077F",
		annCH : 1200
	},
	I077:	{
		col: "http://localhost:3000/S077I",
		annCH : 1800
	},
	F079:	{
		col: "http://localhost:3000/S079F",
		annCH : 900
	},
	I079:	{
		col: "http://localhost:3000/S079I",
		annCH : 1200
	},
	F090:	{
		col: "http://localhost:3000/S090F",
		annCH : 900
	},
	I090:	{
		col: "http://localhost:3000/S090I",
		annCH : 2600
	},
	F108:	{
		col: "http://localhost:3000/S108F",
		annCH : 1600
	},
	I108:	{
		col: "http://localhost:3000/S108I",
		annCH : 1600
	},
	F121:	{
		col: "http://localhost:3000/S121F",
		annCH : 1200
	},
	I121:	{
		col: "http://localhost:3000/S121I",
		annCH : 1400
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
if (!isNaN(SIndex.substring(1,2))){ console.log(SIndex.substring(1,2));
	tierCH = tierHight2;
	subjCH = subjHight2;
}
console.log(subjectTimePlaceHolder);

//fetch data
d3.json(SOptions[SIndex].col, function(data) {
	
	var ndx = crossfilter(data);
	

	function reduceAdd(p, v) {
		 	
	    switch (v.TopicID){	   
				case "T1": 	    
	    		++p.count;
	    		p.freq =  d3.round((p.count / topicTimePlaceHolder[0]), 8);
	    		break;
	    		case "T2": 	    
	    		++p.count;
	    		p.freq =  d3.round((p.count / topicTimePlaceHolder[1]), 8);
	    		break;
	    		case "T3": 	    
	    		++p.count;
	    		p.freq =  d3.round((p.count / topicTimePlaceHolder[2]), 8);
	    		break;
	    		case "T4": 	    
	    		++p.count;
	    		p.freq =  d3.round((p.count / topicTimePlaceHolder[3]), 8);
	    		break;
	    		case "T5": 	    
	    		++p.count;
	    		p.freq =  d3.round((p.count / topicTimePlaceHolder[4]), 8);
	    		break;
	    		case "T6": 	    
	    		++p.count;
	    		p.freq =  d3.round((p.count / topicTimePlaceHolder[5]), 8);
	    		break;
	    		case "T7":
	    		++p.count;
	    		p.freq =  d3.round((p.count / topicTimePlaceHolder[6]), 8);
	    		break;
	    		case "T8":
	    		++p.count;
	    		p.freq =  d3.round((p.count / topicTimePlaceHolder[7]), 8);
	    		break;
	    		case "T9":
	    		++p.count;
	    		p.freq =  d3.round((p.count / topicTimePlaceHolder[8]), 8);
	    		break;
	    		case "T10": 
	    		++p.count;
	    		p.freq =  d3.round((p.count / topicTimePlaceHolder[9]), 8);
	    		break;
	    		case "T11":
	    		++p.count;
	    		p.freq =  d3.round((p.count / topicTimePlaceHolder[10]), 8);
	    		break;
	    	}	
	    return p;
	}

	function reduceRemove(p, v) {
		 switch (v.TopicID){
				case "T1": 	    
	    		--p.count;
	    		p.freq =  d3.round((p.count / topicTimePlaceHolder[0]), 8);
	    		break;
	    		case "T2": 	    
	    		--p.count;
	    		p.freq =  d3.round((p.count / topicTimePlaceHolder[1]), 8);
	    		break;
	    		case "T3": 	    
	    		--p.count;
	    		p.freq =  d3.round((p.count / topicTimePlaceHolder[2]), 8);
	    		break;
	    		case "T4": 	    
	    		--p.count;
	    		p.freq =  d3.round((p.count / topicTimePlaceHolder[3]), 8);
	    		break;
	    		case "T5": 	    
	    		--p.count;
	    		p.freq =  d3.round((p.count / topicTimePlaceHolder[4]), 8);
	    		break;
	    		case "T6": 	    
	    		--p.count;
	    		p.freq =  d3.round((p.count / topicTimePlaceHolder[5]), 8);
	    		break;
	    		case "T7":
	    		--p.count;
	    		p.freq =  d3.round((p.count / topicTimePlaceHolder[6]), 8);
	    		break;
	    		case "T8":
	    		--p.count;
	    		p.freq =  d3.round((p.count / topicTimePlaceHolder[7]), 8);
	    		break;
	    		case "T9":
	    		--p.count;
	    		p.freq =  d3.round((p.count / topicTimePlaceHolder[8]), 8);
	    		break;
	    		case "T10": 
	    		--p.count;
	    		p.freq =  d3.round((p.count / topicTimePlaceHolder[9]), 8);
	    		break;
	    		case "T11":
	    		--p.count;
	    		p.freq =  d3.round((p.count / topicTimePlaceHolder[10]), 8);
	    		break;
	    	}	
	    return p;
	}

	function reduceInitial() {
	    return {
	        count: 0,
	        freq: 0
	    };
	}

	function reduceGenInitial() {
	    return {
	        count: 0,
	        freq: 0
	    };
	}

	function reduceSubjInitial() {
	    return {
	        count: 0,
	        freq: 0
	    };
	}

	function reduceGenAdd(p, v) {
		 
	    switch (v.gender){	   
				case "f": 	    
	    		++p.count;
	    		p.freq =  d3.round((p.count / genderTimePlaceHolder[0]), 8);
	    		break;
	    		case "m": 	    
	    		++p.count;
	    		p.freq =  d3.round((p.count / genderTimePlaceHolder[1]), 8);
	    		break;
	    	}
	    return p;	
	}
	
	function reduceGenRemove(p, v) {
		
	    switch (v.gender){	   
				case "f": 	    
	    		--p.count;
	    		p.freq =  d3.round((p.count / genderTimePlaceHolder[0]), 8);
	    		break;
	    		case "m": 	    
	    		--p.count;
	    		p.freq =  d3.round((p.count / genderTimePlaceHolder[1]), 8);
	    		break;
	    	}
	    return p;	
	}  

		function reduceSubjAdd(p, v) {
		 
	    switch (v.SubjectID){	   
				case "013mv22_I":
				case "013mv22_F":
	    		++p.count;
	    		p.freq =  d3.round((p.count / subjectTimePlaceHolder[0]), 8); //console.log(p.count+" : "+p.ferq);
	    		break;
	    		case "040fv24_I": 
	    		case "040fv24_F":	    
	    		++p.count;
	    		p.freq =  d3.round((p.count / subjectTimePlaceHolder[1]), 8);
	    		break;
	    		case "061fv19_I": 
	    		case "061fv19_F":	    
	    		++p.count;
	    		p.freq =  d3.round((p.count / subjectTimePlaceHolder[2]), 8);
	    		break;
	    		case "065mc21_I": 
	    		case "065mc21_F":	    
	    		++p.count;
	    		p.freq =  d3.round((p.count / subjectTimePlaceHolder[3]), 8);
	    		break;
	    		case "074fc20_I": 
	    		case "074fc20_F":	    
	    		++p.count;
	    		p.freq =  d3.round((p.count / subjectTimePlaceHolder[4]), 8);
	    		break;
	    		case "077fc20_I":
	    		case "077fc20_F":	    
	    		++p.count;
	    		p.freq =  d3.round((p.count / subjectTimePlaceHolder[5]), 8);
	    		break;
	    		case "079mc20_I":
	    		case "079mc20_F":	    
	    		++p.count;
	    		p.freq =  d3.round((p.count / subjectTimePlaceHolder[6]), 8);
	    		break;
	    		case "090mc20_I":
	    		case "090mc20_F":	    
	    		++p.count;
	    		p.freq =  d3.round((p.count / subjectTimePlaceHolder[7]), 8);
	    		break;
	    		case "108fv19_I":
	    		case "108fv19_F":	    
	    		++p.count;
	    		p.freq =  d3.round((p.count / subjectTimePlaceHolder[8]), 8);
	    		break;
	    		case "121mv23_I":
	    		case "121mv23_F":	    
	    		++p.count;
	    		p.freq =  d3.round((p.count / subjectTimePlaceHolder[9]), 8);
	    		break;
	    	}
	    return p;	
	}
	
	function reduceSubjRemove(p, v) {		
		    switch (v.SubjectID){	   
				case "013mv22_I":
				case "013mv22_F":
	    		--p.count;
	    		p.freq =  d3.round((p.count / subjectTimePlaceHolder[0]), 8);
	    		break;
	    		case "040fv24_I": 
	    		case "040fv24_F":	    
	    		--p.count;
	    		p.freq =  d3.round((p.count / subjectTimePlaceHolder[1]), 8);
	    		break;
	    		case "061fv19_I": 
	    		case "061fv19_F":	    
	    		--p.count;
	    		p.freq =  d3.round((p.count / subjectTimePlaceHolder[2]), 8);
	    		break;
	    		case "065mc21_I": 
	    		case "065mc21_F":	    
	    		--p.count;
	    		p.freq =  d3.round((p.count / subjectTimePlaceHolder[3]), 8);
	    		break;
	    		case "074fc20_I": 
	    		case "074fc20_F":	    
	    		--p.count;
	    		p.freq =  d3.round((p.count / subjectTimePlaceHolder[4]), 8);
	    		break;
	    		case "077fc20_I":
	    		case "077fc20_F":	    
	    		--p.count;
	    		p.freq =  d3.round((p.count / subjectTimePlaceHolder[5]), 8);
	    		break;
	    		case "079mc20_I":
	    		case "079mc20_F":	    
	    		--p.count;
	    		p.freq =  d3.round((p.count / subjectTimePlaceHolder[6]), 8);
	    		break;
	    		case "090mc20_I":
	    		case "090mc20_F":	    
	    		--p.count;
	    		p.freq =  d3.round((p.count / subjectTimePlaceHolder[7]), 8);
	    		break;
	    		case "108fv19_I":
	    		case "108fv19_F":	    
	    		--p.count;
	    		p.freq =  d3.round((p.count / subjectTimePlaceHolder[8]), 8);
	    		break;
	    		case "121mv23_I":
	    		case "121mv23_F":	    
	    		--p.count;
	    		p.freq =  d3.round((p.count / subjectTimePlaceHolder[9]), 8);
	    		break;
	    	}
	    return p;	
	}

	//remove empty bin function
	function remove_empty_bins(source_group) {
    return {
        all:function () {
            return source_group.all().filter(function(d) {
                //return Math.abs(d.value) > 0.00001; // if using floating-point numbers
                return d.value !== 0; // if integers only
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

  var filteredGenGroup = remove_empty_bins(genGroup);

  genChart
    .width(100)
    .height(100)
    .innerRadius(20)
    .minAngleForLabel(0.1)
    .dimension(genDim)
    .group(genGroup)
    .valueAccessor(function (p) {
	    return p.value.freq;})
    .legend(dc.legend())
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
	
																	
