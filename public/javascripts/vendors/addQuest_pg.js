quizApp.controller('addQuest_pg',function($scope,$location,$http){
       $scope.question = {q:null,a1:null,a2:null,a3:null,a4:null,r_a:null,q_name:null}
   
    $scope.checkSendData = function(){
       if($scope.question.r_a != null){
           var question = $scope.question;
           $scope.error = "";
           //console.log(question);
           $http({
               url:"/addQuestion",
               data:{question:question},
               method:"POST"

           }).success(function(res,textStatus){
                   console.log(res);
                   setTimeout(
                       function()
                       {
                           location.reload();
                       }, 0001);
               }).error(function(){ alert("Error");  })//http request to send data to server to save in db
       }else{
           $scope.error = "Please Select the correct answer."
       }
    }
    $scope.title = "Welcome Admin!!! You can add Question Here. ";

})//addQuest_pg()

