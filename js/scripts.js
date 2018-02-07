$("button").click(function(){
        $("#div1").fadeToggle();
        $("#div2").fadeToggle("slow");
        $("#div3").fadeToggle("slow");
    });

/*//Not working mouseover function
$('.menu').mouseover(function(event){
    $(event.delegateTarget).css("background-color", "gray");
});
 $("header").mouseout(function(){
     $("header").css("background-color", "black");
});*/
