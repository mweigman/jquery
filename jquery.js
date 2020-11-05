$(document).ready(function () {

    $("#textBoxOne").change(textboxHeardChangeOne);
    $("#textBoxTwo").change(textboxHeardChangeTwo);
    $("input[name=item]").change(add);


    var totalPriceOne = 0;
    var totalPriceTwo = 0;

    function textboxHeardChangeOne() {
        //get the input
        var qtyBoxOne = parseFloat($("#textBoxOne").val());

        //input * data-price
        totalPriceOne = qtyBoxOne * $(this).data("price");

        //display items total price
        $("#outputOne").text(totalPriceOne.toFixed(2));
    }

    function textboxHeardChangeTwo() {
        //get the input
        var qtyBoxTwo = parseFloat($("#textBoxTwo").val());

        //input + data-price
        totalPriceTwo = qtyBoxTwo * $(this).data("price");

        //display items total price
        $("#outputTwo").text(totalPriceTwo.toFixed(2));
    }

    function add() {

        var grandTotal = totalPriceOne + totalPriceTwo;

        $("#outputGrandTotal").text(grandTotal.toFixed(2));

    }
});