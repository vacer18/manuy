var tblKardex = document.getElementById("tblKardex");

$(document).ready(function(){
    listaProveedores();
});

function recargarProveedores() {
    $(tblKardex)
      .DataTable()
      .ajax.reload(null, false);
  }

function listaProveedores() {

    if ($.fn.DataTable.isDataTable(tblKardex)) {
        $(tblKardex)
          .DataTable()
          .destroy();
      }

    $(tblKardex).DataTable({
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
          }
    })
    
}