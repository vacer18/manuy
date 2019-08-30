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
      var path = $(location).attr("href");
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
          },
          "ajax":{
            "data":"json",
            "type": "POST",
            "url": "/kardexResumen"
          },
          "columns": [
            { "data": "nombreProveedor" },
            { "data": "deuda" },
            { "data": "amortizacion" },
            { "data": "saldo" },
            { "data": "url",
              bSortable:  false,
              mRender : function (data,type,row) {
                var viewHTML = "";
                var initDiv = "";
                var endDiv = "";

                initDiv += "<div class='text-center'>";
                viewHTML += "<a href='/proveedor/"+data+"' class='btn btn-warning'  title='Ir al Proveedor'><i class='fas fa-eye'></i></a>";
                endDiv += "</div>";

                return initDiv+viewHTML+endDiv;
                
              }
          
                }
        ]
    })
    
}


// Agregar nuevo Proveedor
var btnAgregar = document.querySelector("#btnAgregar");

btnAgregar.addEventListener("click", function (e) {
  e.preventDefault();
  var modalProveedor = $("#modalProveedor");
  modalProveedor.find("form").attr("action", "/proveedor/nuevoProveedor");
  modalProveedor.find("#btnGuardar").val("Agregar");
  
});

// Boton Guardar los datos

$("#btnGuardar").click(function(e){

  var frm = $("#modalProveedor form");
  
  var enviarPerfil = {
    nombreProveedor: $("#nombrePro").val(),
  };
  
  $.ajax({
    type: "post",
    url: frm.attr("action"),
    data: enviarPerfil,
    dataType: 'json',
    success: function(data){
      $("#formProveedor").trigger("reset");
      recargarProveedores();
      if (data.estado) {
        $("#listaproveedores").prepend('<a class="collapse-item" href="/proveedor/'+data.url+'">'+enviarPerfil.nombreProveedor+'</a>');
        $("#errores").empty();
      } else {
        $("#errores").empty();
        $("#errores").prepend('<span class="text-danger">'+data.mensaje+'</span>');

      }
     
    },

  });

e.preventDefault();
});

