Special Note:
1. You require array of objects for nth level tree
2. Require Key & Value which consists children's for node

**import  {findObjectFromTree}  from  "nth-level-search-node";**
    
    let treeData = {"name":"root","data":[{"id":1,"name":"Level 1","data":[{"id":11,"name":"Level 1.1","data":[{"id":111,"name":"Level 1.1.1","data":[]}]},{"id":12,"name":"Level 1.2","data":[{"id":121,"name":"Level 1.2.1","data":[]}]}]},{"id":2,"name":"Level 2","data":[{"id":21,"name":"Level 2.1","data":[{"id":211,"name":"Level 2.1.1","data":[]}]},{"id":22,"name":"Level 2.2","data":[{"id":221,"name":"Level 2.2.1","data":[]}]}]}]};
    let findArrList = [11, 221];
    let uniqueKey = "id";
    
    function  findObjectFromJson(){
    	let resultData =  findObjectFromTree({
			"treeObj": treeData,
			"findArray": findArrList,
			"uniqueKey" : uniqueKey
    	});
        if(resultData.length == 0){
            console.log("No Objects are found.");
        }
        else{
            console.log("Result Data ", resultData);     
        }	   
    }
    
// Result
Result Data

	[{"id":11,"name":"Level 1.1","data":[{"id":111,"name":"Level 1.1.1","data":[]}]},{"id":221,"name":"Level 2.2.1","data":[]}]
