 $(document).ready(function() {

    $("#showtime").click(function() {                

      $.ajax({    //create an ajax request to load_page.php
        type: "GET",
        url: "http://jobmarket.000webhostapp.com/showjob.php",             
        dataType: "html",   //expect html to be returned                
        success: function(response){                    
            $("#show").html(response); 
            //alert(response);
        }

    });
});
});