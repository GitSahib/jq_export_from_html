(function($){
	//############################################
	//csv export function
	//params options {fileName,Type}
	//dowloads table as csv
	//############################################
	$.fn.extend({
		ExportToFile : function(options){		
		var defaults = {
			fileName : this.attr('id') || this.attr('class') || 'Export',
			type     : 'csv'
		}
		options = $.extend(defaults,options);
		switch(options.type)
		{
			case 'csv':
				csv = $(this).TableData({joinRows:1}).join('\n');
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
	//############################################
	//Capture TableData
	//############################################
	$.fn.extend({
		TableData:function(options)
		{
			var defaults  = {
				joinRows:0
			};
			options   = $.extend(defaults,options);
			var data  = [];
			this.find("tr").each(function(index,tr){
				var row   = [];
				$(tr).find("th,td").each(function(index,td){
					row.push($(td).text());
				});
				data.push(options.joinRows ? row.join(','):row);
			});
			return data;
		}
	});
	//############################################
	//end of TableData function
	//############################################
})(jQuery);
