$(document).ready(function () {
    $(".view-details-btn").click(function () {
        const member = $(this).data("member");
        const $popup = $(`#${member}-popup`);
        
        $popup.dialog({
            modal: true,
            width: 400,
        });

        $popup.find(".close-button").click(function () {
            $popup.dialog("close");
        });
    });
});


$(document).ready(function(){
  $("#start-date").datepicker({
    dateFormat: "mm/dd/yy",
    minDate: 0,
    showAnim: "fadeIn"
  });
});

