angular.module('myApp',[])
		  	  .controller('myController',['$scope',function($scope){
		  	  	   $scope.flag=false;
		  	  	   $scope.on=false;
		  	  	   console.log($scope.flag)
		  	  	   
		  	  	   $scope.list=JSON.parse(localStorage.dinner);
		  	  	   console.log( $scope.list)
		  	  	   $scope.total= $scope.list.tongzhuo;
		  	  	   $scope.totalNum=0;
		  	  	   for(i=0;i< $scope.list.length;i++){
		  	  		  $scope.totalNum+= $scope.list[i].tongzhuo
		  	  	   }
		  	  	  		  	  	  		  	  	  		  	  	  
		  	  	  $scope.black=function(){
		  	  		
		  	  		    $scope.flag=true;
		  	  		    $scope.on=true;
		  	  		    console.log($scope.flag)
		  	  	  }
		  	  	
		  	  	  $scope.jian=function(idx){
		  	  		    --$scope.list[idx].tongzhuo;
		  	  		    if($scope.list[idx].tongzhuo==0){
		  	  		    	 $scope.list.splice(idx,1)
		  	  		    }
		  	  		    localStorage.dinner=JSON.stringify($scope.list)
		  	  	  }
		  	  	$scope.jia=function(idx){
		  	  		   ++$scope.list[idx].tongzhuo;
		  	  		    localStorage.dinner=JSON.stringify($scope.list)
		  	  	}
		  	  	
		  	  	$scope.cancel=function(){
		  	  		    $scope.flag=false;
		  	  		    $scope.on=false;
		  	  	}
  }])
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	  
		  	