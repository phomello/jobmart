 $(document).ready(function() {

    $("#applics").click(function() {                

      $.ajax({    //create an ajax request to load_page.php
        type: "GET",
        url: "http://jobmarket.000webhostapp.com/getapplicants.php",             
        dataType: "html",   //expect html to be returned                
        success: function(response){                    
            $("#aplicell").html(response); 
            //alert(response);
        }

    });
});
});