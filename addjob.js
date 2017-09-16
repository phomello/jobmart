 $(document).ready(function() {

    $("#required").click(function() {                

      $.ajax({    //create an ajax request to load_page.php
        type: "GET",
        url: "http://jobmarket.000webhostapp.com/addjob.php",             
        dataType: "html",   //expect html to be returned                
        success: function(response){                    
            $("#cof3").html(response); 
            //alert(response);
        }

    });
});
});