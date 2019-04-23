// Copyright (c) 2019, ericklopez and contributors
// For license information, please see license.txt

frappe.ui.form.on('Usuarias_a_llamar', {
	after_save: function(frm) {
		// var vestado_llamada = frm.doc.estado_llamada.substring(0,2)
		frappe.call({
                        method: "seguimiento.seguimiento.doctype.usuarias_a_llamar.usuarias_a_llamar.setActiveStatus",
                        args: {
                                doc_name: frm.doc.name
                        }
                });
		//$('div[data-fieldname="comentario"').hide(1500).show(1500).hide(1500).show(1500);
		//$('textarea[data-fieldname="comentario"]').css({backgroundColor:'blue'});
		//$('div[data-fieldname="institucion"]').css({backgroundColor:'blue'});
		//$('div[class="grid-row"]').css({backgroundColor:'blue'});
		//$('div[data-idx="1"]').css({backgroundColor:'blue'});
		// This code work
		//$('div[data-fieldname="comentario"').css({backgroundColor:'red'});
		//$('div[data-fieldtype="Small Text"').css({backgroundColor:'r$e'div[data-fieldname="institucion"]'d'});
		//$('div[class="control-input"').css({backgroundColor:'red'});/$('div[data-fieldtype="Small Text"').css({backgroundColor:'r$e'div[data-fieldname="institucion"]'d'});
		//$('div[class="control-input"').css({backgroundColor:'red'});/$('div[data-fieldtype="Small Text"').css({baclass'rgrid-row-fieldname="institucion"]'d'});

		//$('div[class="clearfix"]').css({backgroundColor:'red'});

	}
});
