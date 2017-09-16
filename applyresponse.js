 $(document).ready(function() {

    $("#apply").click(function() {                

      $.ajax({    //create an ajax request to load_page.php
        type: "GET",
        url: "http://jobmarket.000webhostapp.com/apply.php",             
        dataType: "html",   //expect html to be returned                
        success: function(response){                    
            $("#applyed").html(response); 
            //alert(response);
        }

    });
});
});