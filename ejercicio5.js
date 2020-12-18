google.charts.load("current", { packages : [ 'corechart' ]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
     
    //Aquí se representa el nombre de columna, el dato y el color
    var data = google.visualization.arrayToDataTable([ 
                [ "Element", "Poblacion", { role : "style"} ], 
                [ "2017", 14252, "green" ], 
                [ "2018", 23360, "green" ],
                [ "2019", 40421, "green" ],
                [ "2020", 42500, "green" ],]);
 
    var view = new google.visualization.DataView(data);
    view.setColumns(
        [ 0, 1, {
            calc : "stringify",
            sourceColumn : 1,
            type : "string",
            role : "annotation",
        }, 2 ]);
 
    //Aquí se añade el título y tamaño del gráfico
    var options = {
        title : "Evolucion de la poblacion de Navalcarneros",
        width : 1000,
        height : 700,
        bar : { groupWidth : "95%" },
        legend : { position : "none" },
        backgroundColor: 'blue',
        legendTextStyle: { color: 'blue' },
        titleTextStyle: { color: 'blue' },
        hAxis: {
          color: 'blue',
        }
    };


     
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    chart.draw(view, options);
}
 
function getValueAt(column, dataTable, row) {
    return dataTable.getFormattedValue(row, column);
}