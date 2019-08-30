var tblFacturas = document.getElementById("tblFacturas");

$(document).ready(function(){
    listaFacturas();
});

function recargarFacturas() {
    $(tblFacturas)
      .DataTable()
      .ajax.reload(null, false);
  }

function listaFacturas() {

    if ($.fn.DataTable.isDataTable(tblFacturas)) {
        $(tblFacturas)
          .DataTable()
          .destroy();
      }
      var path = $(location).attr("href");
    $(tblFacturas).DataTable({
        language: {
            sProcessing: "Procesando...",
            sLengthMenu: "Mostrar _MENU_ registros",
            sZeroRecords: "No se encontraron resultados",
            sEmptyTable: "Ningún dato disponible en esta tabla",
            sInfo: " TOTAL: _TOTAL_ REGISTRO",
            sInfoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
            sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
            sInfoPostFix: "",
            sSearch: "Buscar:",
            sUrl: "",
            sInfoThousands: ",",
            sLoadingRecords: "Cargando...",
            oPaginate: {
              sFirst: "Primero",
              sLast: "Último",
              sNext: "Siguiente",
              sPrevious: "Anterior"
            },
            oAria: {
              sSortAscending:
                ": Activar para ordenar la columna de manera ascendente",
              sSortDescending:
                ": Activar para ordenar la columna de manera descendente"
            }
          },
        //   "ajax":{
        //     "data":"json",
        //     "type": "POST",
        //     "url": "/kardexResumen"
        //   },
        //   "columns": [
        //     { "data": "nombreProveedor" },
        //     { "data": "deuda" },
        //     { "data": "amortizacion" },
        //     { "data": "saldo" },
        //     { "data": "url",
        //       bSortable:  false,
        //       mRender : function (data,type,row) {
        //         var viewHTML = "";
        //         var initDiv = "";
        //         var endDiv = "";

        //         initDiv += "<div class='text-center'>";
        //         viewHTML += "<a href='/proveedor/"+data+"' class='btn btn-warning'  title='Ir al Proveedor'><i class='fas fa-eye'></i></a>";
        //         endDiv += "</div>";

        //         return initDiv+viewHTML+endDiv;
                
        //       }
          
        //         }
        // ]
    })
    
}