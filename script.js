

var beer =[];

var addBeer=function(name , category){
    beer.push(name+"   "+ category)
    var myBeer="";
   // $('.beers-list').empty();

    $('.beers-list').append('<ul id="myUl"></ul>')

    for(var i=0;i<beer.length;i++)
    {
        $('#myUl').append('<li>"'+beer[i]+'"</li>')
 
    }


    
    // for(var i=0;i<beer.length;i++)
    // {
    //     $('#myUl').append('<li>"'+beer[i]+'"</li>')
 
    // }

   // $('.beers-list').append(myBeer)
}


$('#post-beer').click(function(){
    var name =$(".beer-input").val()
    var category =$(".category-input").val()
    addBeer(name,category)
})

$('#post-beer').click(function(){
    var name =$(".beer-input").val()
    var category =$(".category-input").val()
    addBeer(name,category)
})



