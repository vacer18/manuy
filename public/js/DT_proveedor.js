var tblFacturas = document.getElementById("tblFacturas");
var tblDepositos = document.getElementById("tblDepositos");


$(document).ready(function(){
    listaFacturas();
    listaDepositos();
});

// Parte de las Facturas

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


// Parte de deposito

function recargarDepositos() {
    $(tblDepositos)
      .DataTable()
      .ajax.reload(null, false);
  }

function listaDepositos() {

    if ($.fn.DataTable.isDataTable(tblDepositos)) {
        $(tblDepositos)
          .DataTable()
          .destroy();
      }
      var path = $(location).attr("href");
    $(tblDepositos).DataTable({
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



// Editar Proveedor

$("#btnEditar").click(function(e){
    e.preventDefault();
    $("#modalProveedorTitle").text("Editar Proveedor");

    var idProveedor = $("#idProveedor").val();

    var modalProveedor = $("#modalProveedor");
    modalProveedor.find("form").attr("action","/proveedor/editar/"+idProveedor);

    $("#btnGuardar").val("Guardar");
});

// Boton guardar
$("#btnGuardar").click(function(e){
    var frm = $("#modalProveedor form");

    var enviarDato = {
        nombreProveedor: $("#nombrePro").val(),
    };

    $.ajax({
        type: "post",
        url: frm.attr("action"),
        data: enviarDato,
        dataType: 'json',
        success: function(data){
            $("#formProveedor").trigger("reset");
            if (data.estado) {
                location.reload();
                $("#errores").empty();
              } else {
                $("#errores").empty();
                $("#errores").prepend('<span class="text-danger">'+data.mensaje+'</span>');
        
              }
        }
    });
    e.preventDefault();
});


// Nuevo Deposito

$("#newDeposito").click(function(e){
    e.preventDefault();
    $("#modalProveedorTitle").text("Datos del Deposito");
    $("#btnGuardar").val("Crear");
});