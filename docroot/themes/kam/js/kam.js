$(function() {

    var $quote = $(".view-slideshow h2.field-content");

    var $numWords = $quote.text().split(" ").length;

    if (($numWords >= 1) && ($numWords < 2)) {
        $quote.css("font-size", "36px");
    }
    else if (($numWords >= 10) && ($numWords < 20)) {
        $quote.css("font-size", "32px");
    }
    else if (($numWords >= 20) && ($numWords < 30)) {
        $quote.css("font-size", "98px");
    }
    else if (($numWords >= 30) && ($numWords < 40)) {
        $quote.css("font-size", "24px");
    }
    else {
        $quote.css("font-size", "20px");
    }

});
