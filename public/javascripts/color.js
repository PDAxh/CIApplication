/*$(document).ready(function () {
    $('#resultsTable').DataTable({*/
var oTable = $('#countryTable').DataTable({
    'rowCallback': function (row, data, index) {
        if (data[3] || data[4] == 0) {
            $(row).find('td:eq(2)').css('background-color', "rgb(0,255,75)");
            $(row).find('td:eq(3)').css('background-color', "rgb(0,255,75)");
            /* Grön */
        }
        else if (( data[3] || data[4] > 1 && ( data[2] || data[3] < 10 ))) {
            $(row).find('td:eq(2)').css('background-color', "rgb(3,255,171)");
            $(row).find('td:eq(3)').css('background-color', "rgb(3,255,171)");
            /* Ocean blue */
        }
        else if (( data[3] || data[4] > 11 && ( data[2] || data[3] < 20 ))) {
            $(row).find('td:eq(2)').css('background-color', "rgb(6,245,255)");
            $(row).find('td:eq(3)').css('background-color', "rgb(6,245,255)");
            /* Light blue */
        }
        else if (( data[3] || data[4] > 21 && ( data[2] || data[3] < 30 ))) {
            $(row).find('td:eq(2)').css('background-color', "rgb(10,154,255)");
            $(row).find('td:eq(3)').css('background-color', "rgb(10,154,255)");
            /* Medium blue*/
        }
        else if (( data[3] || data[4] > 31 && ( data[2] || data[3] < 40 ))) {
            $(row).find('td:eq(2)').css('background-color', "rgb(13,66,255)");
            $(row).find('td:eq(3)').css('background-color', "rgb(13,66,255)");
            /* Blue */
        }
        else if (( data[3] || data[4] > 41 && ( data[2] || data[3] < 50 ))) {
            $(row).find('td:eq(2)').css('background-color', "rgb(53,16,255)");
            $(row).find('td:eq(3)').css('background-color', "rgb(53,16,255)");
            /* Dark blue */
        }
        else if (( data[3] || data[4]> 51 && ( data[2] || data[3] < 60 ))) {
            $(row).find('td:eq(2)').css('background-color', "rgb(143,20,255)");
            $(row).find('td:eq(3)').css('background-color', "rgb(143,20,255)");
            /* Purple */
        }
        else if (( data[3] || data[4] > 61 && ( data[2] || data[3] < 70 ))) {
            $(row).find('td:eq(2)').css('background-color', "rgb(230,23,255)");
            $(row).find('td:eq(3)').css('background-color', "rgb(230,23,255)");
            /* Pink */
        }
        else if (( data[3] || data[4] > 71 && ( data[2] || data[3] < 80 ))) {
            $(row).find('td:eq(2)').css('background-color', "rgb(255,27,194)");
            $(row).find('td:eq(3)').css('background-color', "rgb(255,27,194)");
            /* Dark pink */
        }
        else if (( data[3] || data[4]> 81 && ( data[2] || data[3] < 90 ))) {
            $(row).find('td:eq(2)').css('background-color', "rgb(255,30,111)");
            $(row).find('td:eq(3)').css('background-color', "rgb(255,30,111)");
            /* Red */
        }
        else if (( data[3] || data[4]> 91 && ( data[2] || data[3] < 100 ))) {
            $(row).find('td:eq(2)').css('background-color', "rgb(255,36,33)");
            $(row).find('td:eq(3)').css('background-color', "rgb(255,36,33)");
            /* Red */
        }
    }
});
