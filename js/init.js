(function($) {
    $(function() {


        $('.button-collapse').sideNav({
            menuWidth: 300, // Default is 240
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        });

        $(document).ready(function(){
          $('.carousel').carousel();
        });
            
    }); // end of document ready
})(jQuery); // end of jQuery name space
