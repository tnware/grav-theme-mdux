(function($) {
    $(function() {
        $('.button-collapse').sideNav('hide');
        var window_width = $(window).width();

        // Detect touch screen and enable scrollbar if necessary
        function is_touch_device() {
            try {
                document.createEvent("TouchEvent");
                return true;
            } catch (e) {
                return false;
            }
        }
        if (is_touch_device()) {
            $('#nav-mobile').css({
                overflow: 'auto'
            });
        }

        // Toggle Flow Text
        var toggleFlowTextButton = $('#flow-toggle');
        toggleFlowTextButton.click(function() {
            $('#flow-text-demo').children('p').each(function() {
                $(this).toggleClass('flow-text');
            });
        });

        //    Toggle Containers on page
        var toggleContainersButton = $('#container-toggle-button');
        toggleContainersButton.click(function() {
            $('body .browser-window .container, .had-container').each(function() {
                $(this).toggleClass('had-container');
                $(this).toggleClass('container');
                if ($(this).hasClass('container')) {
                    toggleContainersButton.text("Turn off Containers");
                } else {
                    toggleContainersButton.text("Turn on Containers");
                }
            });
        });

        // Plugin initialization
        $('.carousel.carousel-slider').carousel({
            full_width: true
        });
        $('.carousel').carousel();
        $('.slider').slider({
            full_width: true
        });
        $('.parallax').parallax();
        $('.modal-trigger').leanModal();
        $('.scrollspy').scrollSpy();
        $('.button-collapse').sideNav({
            'edge': 'left'
        });
        $('.datepicker').pickadate({
            selectYears: 20
        });
        $('select').not('.disabled').material_select();
        $('input.autocomplete').autocomplete({
            data: {
                "Apple": null,
                "Microsoft": null,
                "Google": 'http://placehold.it/250x250'
            }
        });

        $('.chips-initial').material_chip({
            readOnly: true,
            data: [{
                tag: 'Apple',
            }, {
                tag: 'Microsoft',
            }, {
                tag: 'Google',
            }]
        });

        $('.chips-placeholder').material_chip({
            placeholder: 'Enter a tag',
            secondaryPlaceholder: '+Tag',
        });

        $('.chips').material_chip();

    }); // end of document ready
})(jQuery); // end of jQuery name space
