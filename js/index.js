angular.module('myApp',[])
			.controller('myController',['$scope','Dinner',function($scope,Dinner){
				Dinner.myList();
				$scope.totalNum=0;
				$scope.total=0;
				getRotal();
				
				$scope.$on('listData',function(event,data){
				    $scope.contentData=data;
				    $scope.listData=data[0].items;
				    $scope.title=data[0].name;	
				   	init();	
				})	
					
		        function init(){
				   if(localStorage.dinner){
					    var arr=[];
			            arr = JSON.parse(localStorage.dinner);  			    			    			    
				        for(var j=0;j<arr.length;j++){	
					        console.log($scope.listData.length)
					        for(var n=0;n<$scope.listData.length;n++){
						         if($scope.listData[n].name == arr[j].name){
							     $scope.listData[n].tongzhuo = arr[j].tongzhuo;
							     								 														
					           }
					        }										
				        };				    
			        } 	
		        }
											
				    
			 	$scope.myAddFun=function(idx){
				    ++$scope.listData[idx].tongzhuo;
				    $scope.totalNum+=1;
				    $scope.total+=$scope.listData[idx].price;
				     var arr=[];
				     var flag=false;
				     if(localStorage.dinner){
				     	arr=JSON.parse(localStorage.dinner)
				     };
				     
				    angular.forEach(arr,function(val,key){
				    	if(val.name==$scope.listData[idx].name){
				    		++val.tongzhuo;
				    		flag=true;
				    	}
				    });
				    if(!flag){
				    	arr.push($scope.listData[idx]);
				    }
				    localStorage.dinner=JSON.stringify(arr);
				    				    				    				    				    
			  }
				
				$scope.myReduce=function(idx){
					if($scope.listData[idx].tongzhuo<=0){
						$scope.listData[idx].tongzhuo=0;
					}else{
						--$scope.listData[idx].tongzhuo;
						 $scope.totalNum-=1;
				    $scope.total-=$scope.listData[idx].price;
						var arr=[];
						arr=JSON.parse(localStorage.dinner);
						angular.forEach(arr,function(val,key){
							if(val.tongzhuo==$scope.listData[idx].tongzhuo){
								--val.tongzhuo;
							}
						})
						localStorage.dinner=JSON.stringify(arr);
					}			
				
			  }	    
				    				    				    				    					   								
			var i=0;
			$scope.myClick=function(idx){
				$scope.contentData[i].ifChose = false;
				$scope.contentData[idx].ifChose = true;			
				$scope.listData=$scope.contentData[idx].items;
				$scope.title=$scope.contentData[idx].name;				 
				i=idx;
				init();	
			}	
			
			function getRotal(){
				var arr=[];
				if(localStorage.dinner){
					arr=JSON.parse(localStorage.dinner);
				}
				angular.forEach(arr,function(val,key){
					$scope.total+=val.tongzhuo*val.price;
					$scope.totalNum+=val.tongzhuo;
				})
			}
			
						
			}])
			.service('Dinner',['$http','$rootScope',function($http,$rootScope){
				return{
					'myList':function(){
						$http.get('js/groups.json',{})
						.then(function(res){
							
							$rootScope.$broadcast('listData',res.data);
						},function(error){
							console.log(error);
						})
					}
				}
				
				
			}])
			