$(document).ready(function () {
    $('#resultsTable').DataTable({
        "fnRowCallback": function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
            if (aData[2] || aData[3] == 0) {
                $('td', nRow).css('background-color', "rgb(0,255,75)");
                /* Grön */
            }
            else if (( aData[2] || aData[3] > 1 && ( aData[2] || aData[3] < 10 ))) {
                $('td', nRow).css('background-color', "rgb(3,255,171)");
                /* Ocean blue */
            }
            else if (( aData[2] || aData[3] > 11 && ( aData[2] || aData[3] < 20 ))) {
                $('td', nRow).css('background-color', "rgb(6,245,255)");
                /* Light blue */
            }
            else if (( aData[2] || aData[3] > 21 && ( aData[2] || aData[3] < 30 ))) {
                $('td', nRow).css('background-color', "rgb(10,154,255)");
                /* Medium blue*/
            }
            else if (( aData[2] || aData[3] > 31 && ( aData[2] || aData[3] < 40 ))) {
                $('td', nRow).css('background-color', "rgb(13,66,255)");
                /* Blue */
            }
            else if (( aData[2] || aData[3] > 41 && ( aData[2] || aData[3] < 50 ))) {
                $('td', nRow).css('background-color', "rgb(53,16,255)");
                /* Dark blue */
            }
            else if (( aData[2] || aData[3] > 51 && ( aData[2] || aData[3] < 60 ))) {
                $('td', nRow).css('background-color', "rgb(143,20,255)");
                /* Purple */
            }
            else if (( aData[2] || aData[3] > 61 && ( aData[2] || aData[3] < 70 ))) {
                $('td', nRow).css('background-color', "rgb(230,23,255)");
                /* Pink */
            }
            else if (( aData[2] || aData[3] > 71 && ( aData[2] || aData[3] < 80 ))) {
                $('td', nRow).css('background-color', "rgb(255,27,194)");
                /* Dark pink */
            }
            else if (( aData[2] || aData[3] > 81 && ( aData[2] || aData[3] < 90 ))) {
                $('td', nRow).css('background-color', "rgb(255,30,111)");
                /* Red */
            }
            else if (( aData[2] || aData[3] > 91 && ( aData[2] || aData[3] < 100 ))) {
                $('td', nRow).css('background-color', "rgb(255,36,33)");
                /* Red */
            }
        }
    });
});