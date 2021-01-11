$(document).ready(function(){
    $("#design_img").click(function(){
        $("#design_img").toggle();
        $("#design_desc").toggle();

    });
    $("#design_desc").click(function(){
        $("#design_img").toggle();
        $("#design_desc").toggle();

    });

    $("#development_img").click(function(){
        $("#development_img").toggle();
        $("#development_desc").toggle();

    });
    $("#development_desc").click(function(){
        $("#development_img").toggle();
        $("#development_desc").toggle();

    });

    $("#product_img").click(function(){
        $("#product_img").toggle();
        $("#product_desc").toggle();

    });
    $("#product_desc").click(function(){
        $("#product_img").toggle();
        $("#product_desc").toggle();

    });

/////////////////
     $("#work1").hover(function(){
         $("#work1-heading").addClass("work-title-show")
         $("#div#work1").addClass("work-section")
     },
     function(){
        $("#work1-heading").removeClass("work-title-show")
        $("#div#work1").removeClass("work-section")
     });

     $("#work2").hover(function(){
        $("#work2-heading").addClass("work-title-show")
        $("#div#work2").addClass("work-section")
    },
    function(){
       $("#work2-heading").removeClass("work-title-show")
       $("#div#work2").removeClass("work-section")
    });

    $("#work3").hover(function(){
        $("#work3-heading").addClass("work-title-show")
        $("#div#work3").addClass("work-section")
    },
    function(){
       $("#work3-heading").removeClass("work-title-show")
       $("#div#work3").removeClass("work-section")
    });

    $("#work4").hover(function(){
        $("#work4-heading").addClass("work-title-show")
        $("#div#work4").addClass("work-section")
    },
    function(){
       $("#work4-heading").removeClass("work-title-show")
       $("#div#work4").removeClass("work-section")
    });

    $("#work5").hover(function(){
        $("#work5-heading").addClass("work-title-show")
        $("#div#work5").addClass("work-section")
    },
    function(){
       $("#work5-heading").removeClass("work-title-show")
       $("#div#work5").removeClass("work-section")
    });
   

    $("#work6").hover(function(){
        $("#work6-heading").addClass("work-title-show")
        $("#div#work6").addClass("work-section")
    },
    function(){
       $("#work6-heading").removeClass("work-title-show")
       $("#div#work6").removeClass("work-section")
    });

    $("#work7").hover(function(){
        $("#work7-heading").addClass("work-title-show")
        $("#div#work7").addClass("work-section")
    },
    function(){
       $("#work7-heading").removeClass("work-title-show")
       $("#div#work7").removeClass("work-section")
    });

    $("#work8").hover(function(){
        $("#work8-heading").addClass("work-title-show")
        $("#div#work8").addClass("work-section")
    },
    function(){
       $("#work8-heading").removeClass("work-title-show")
       $("#div#work8").removeClass("work-section")
    });
    $("form#form").on('submit',function(event){
        event.preventDefault();
        let name = $("input#name").val();
        let email = $("input#email").val();
        let message = $("textarea#message").val();
        if ($("input#name").val() && $("input#email").val() && $("textarea#message").val()){
            alert ("Hello Dear " + name + "," +"Thanks for your comment");
        }
    });
   
});
