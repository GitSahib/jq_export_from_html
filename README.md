# jquery.export
Export html tables to different file formats.
Export to csv is currently implemented only.
But this is just an Idea, feel free to contribute

#Usage

##Using id selector

	$("#tableid").ExportToFile({fileName:'test',type:'csv'});
##OR use class selector

	$(".tableclass").ExportToFile({fileName:'test',type:'csv'});
##OR using tag selector

	$("table").ExportToFile({fileName:'test',type:'csv'});
