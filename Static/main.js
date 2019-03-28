//WAel AChi
//main Fuction




    var objectOfElementObject={
    intersteller :{ 
        url:"https://www.imdb.com/title/tt0816692/" ,
        type:"Movies" ,
        status:"security" ,
     userId:"waelachi"},

    darkknight: { 
        url:"https://www.imdb.com/poll/OKP-8TAYEF0/results?answer=1&ref_=po_nr" ,
     type:"Movies" ,
    status:"security" , 
     userId:"waelachi"}, 
   
   
  
  
}
   
  var addMovies =function (nameofElement , url ,  userId){

    keyofElement=nameofElement.toLowerCase();
    
     var objectOfMovies ={};
     objectOfMovies["nameOfElement"]=nameofElement;
     objectOfMovies["url"] = url;
     objectOfMovies["type"] = "Movie";
     objectOfMovies["userId"]= userId;
    //  console.log(objectOfMovies)
    //  console.log(this , "========================")
     objectOfElementObject[keyofElement]=objectOfMovies
     console.log(objectOfElementObject)

     
   }
   
   var addMusics =function (nameofElement , url ,  userId){

    keyofElement=nameofElement.toLowerCase();
     var objectOfMusic ={};
     objectOfMusic["nameOfElement"]=nameofElement;
     objectOfMusic["url"] = url;
     objectOfMusic["type"] = "Music";
     objectOfMusic["userId"]= userId;
     
    objectOfElementObject[keyofElement]=objectOfMusic;
    console.log(objectOfElementObject)


     
   }
   var addYoutube =function (nameofElement , url ,  userId){

    keyofElement=nameofElement.toLowerCase();
     var objectOfYoutube ={};
     objectOfYoutube["nameOfElement"]=nameofElement;
     objectOfYoutube["url"] = url;
     objectOfYoutube["type"] = "youtube";
     objectOfYoutube["userId"]= userId;
   
     objectOfElementObject[keyofElement]=objectOfYoutube;
     console.log(objectOfElementObject)
     
   }
   var addBloggers =function (nameofElement , url ,  userId){

    keyofElement=nameofElement.toLowerCase();
     var objectOfBloggers ={};
     objectOfBloggers["nameOfElement"]=nameofElement;
     objectOfBloggers["url"] = url;
     objectOfBloggers["type"] = "plogger";
     objectOfBloggers["userId"]= userId;
     
     objectOfElementObject[keyofElement]=objectOfBloggers;
     console.log(objectOfElementObject)
   }

  