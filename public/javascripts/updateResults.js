$(function(){
    $("#mavenForm").hide();   /* Här läggs alla divar in, som hanterar de alternativ som är knutna till den typen av test som ska göras. Dessa divvar döljs för att sedan visas när de senare väljs. */
    $("#dropDownJava").click(function(){
        $("#chooseTest").hide();
        $("#mavenForm").show();
    });
});