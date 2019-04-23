// Lista
frappe.listview_settings['Usuarias_a_llamar'] = {
	refresh: function(doc){
		//alert("hola");
		//doc.page.set_title('TITULO');
		doc.sort_by="tipo_lista";
	},

	add_fields: ["name", "nombres", "dui","ultima_visita", "tipo_lista"],
	get_indicator: function(doc) {
		if(flt(doc.tipo_lista)=="1") {
			return [__("Nuevas"), "red", ""];
		} else if(flt(doc.tipo_lista)=="2") {
			return [__("1 Mes"), "orange", ""];
		} else if(flt(doc.tipo_lista) =="3") {
			return [__("Desde 2015"), "green", ""];
		}
		// tambien está se puede usar cint(doc.campo) == 0 para hacer filtro
		//else if (flt(doc.outstanding_amount) > 0 && doc.due_date >= frappe.datetime.get_today()) {
		//	return [__("Unpaid"), "orange", "outstanding_amount,>,0|due_date,>,Today"]
		//}

	}//,
	// this.on_sort_change("tipo_lista","desc");
	// sort_by: "tipo_lista"
	// alert("hola");
	//right_column: "grand_total"
};