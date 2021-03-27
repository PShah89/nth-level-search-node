var resultArr = [];
module.exports.findObjectFromTree = function(optionsObj){
	resultArr = [];
	findObject(optionsObj);
  	return resultArr;
}

function findObject(optionsObj){
	let treedata =  optionsObj.treeObj;
	let findChild = optionsObj.findArray;
	let uniqueId = optionsObj.uniqueKey;
	
	treedata.data.filter(function(child){ 
  		if(findChild.indexOf(child.id) !== -1){ resultArr.push(child); }
  	});
  	treedata.data.map(function(child){
      	if(child.data){ 
			let obj = {
				"treeObj": child,
				"findArray": findChild,
				"uniqueKey" : uniqueId
			};
			return findObject(obj)
      	} 
  	});
}

