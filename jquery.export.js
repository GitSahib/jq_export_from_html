(function($){
	//############################################
	//csv export function
	//params options {fileName,Type}
	//dowloads table as csv
	//############################################
	$.fn.extend({
		ExportToFile : function(options){
		var data  = [];
		var row   = [];
		var defaults = {
			fileName : this.attr('id') || this.attr('class') || 'Export',
			type     : 'csv'
		}
		options = $.extend(defaults,options);
		this.find("tr").each(function(index,tr){
			row = [];
			$(tr).find("th,td").each(function(index,td){
				row.push($(td).text());
			});
			data.push(row.join(','));
		});
		switch(options.type)
		{
			case 'csv':
				csv = data.join('\n');
				var fileName = options.fileName + '.' + options.type;
				if (window.navigator.msSaveBlob) { // IE 10+
				    //alert('IE' + csv);
				    window.navigator.msSaveOrOpenBlob(new Blob([csv], {type: "text/plain;charset=utf-8;"}), fileName)
				}
				else{
				    var csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);
				    var link = document.createElement("a");
				    link.download = fileName;
				    link.href = csvData;
				    link.click();
				}
				
				break;
				//To do implement other types
		}
		
	}});
	//############################################
	//end of export function
	//############################################
})(jQuery);
