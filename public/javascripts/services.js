
quizApp.factory('userRegister',function($http,$location){
    var register = {};

    register.UserRegister= function(){
                 var u_name,email,pass,re_pass;
        var register_data = {u_name:null,email:null,pass:null,re_pass:null};

  
            getData = function(){
                console.log("nameDisplay")
                 u_name =  register_data.u_name;
                 email =  register_data.email;
                 pass =  register_data.pass;
                 re_pass =  register_data.re_pass;
               // console.log(u_name+email+pass+re_pass);
               return u_name,email,pass,re_pass ;
                }

        register_data.checkSendData = function(){
                if(!u_name){
                    register_data.error = "Username is less than 5 character";
                }else if(!email){
                    register_data.error = "Email is incorrect ";
                }else if(!pass){
                    register_data.error = "Password is less than 5 character ";
                }else if((!re_pass) || (pass != re_pass)){
                    register_data.error = "Both Password are not same or less than 5 character ";
                }else{register_data.error = "";
                    $http({
                    url:"/regUser",
                    data:{u_name:u_name,pass:pass,email:email},
                    method:"POST"

                }).success(function(res){
                        console.log("res:"+res);
                         register_data.message = "Congratulation!! You are Successfully Registered  "
                       $location.path('/signin');
                     }).error(function(){ alert("Error")   ; });}
            }

        return register_data;
    }
          return register;

});



quizApp.factory('userLogin',function($http,$location){
    var Login = {};

    Login.UserLogin= function(){
        var u_name,email,pass,re_pass;
        var login_data = {email:null,pass:null};

           getData = function(){
            console.log("nameDisplay")

            email =  login_data.email;
            pass =  login_data.pass;
    
            return email,pass;
        }
        login_data.checkSendData = function(){
             if(!email){
                login_data.error = "Email is incorrect ";
            }else if(!pass){
                 login_data.error = "Password is less than 5 character ";
            }else {login_data.error = "";
                $http({
                    url:"/loginStudent",
                    data:{email:email,pass:pass},
                    method:"POST"

                }).success(function(res,textStatus){
                        console.log("res:"+res.u_name+res.email);
                        if(res != 'error'){
                            var u_id =  res._id;

                            sessionStorage.setItem('id',u_id);
                    
                    location.reload('#/');
                     
                            console.log(sessionStorage.id);

                        }else{
                            login_data.error= "Your Email or Password is wrong"
                            console.log("record not found")
                        }
                    }).error(function(){ alert("Error")   ; });}
        }
        return login_data;
    }
    return Login;

});
