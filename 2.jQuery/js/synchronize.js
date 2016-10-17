(function() {
    'use strict'

    $(document).ready(function() {
        $('#name')
            .change(function(event) {
                $('#nameOutput').text($(this).val() || "Empty");
            })
            .change();

        $('#grade')
            .on('input', function(event) {
                $('#gradeOutput').text($(this).val() || 'Empty');
            })
            .trigger('input');

        $('#period')
            .change(function(event) {
                $('#periodOutput').text(
                    $(this).find('option:selected').val() 
                    + " (" 
                    + $(this).find('option:selected').text() 
                    + ") ");
            })
            .change();

        $('button[type="reset"]').click(function(event) {
            event.preventDefault();
            $('#nameOutput').text("Empty");
            $('#gradeOutput').text("Empty");

            $('#name').val("DAD");
            $('#grade').val('20');
            $('#period').val("P").trigger('change');
        });
    });
})();