# jquery.export
Export html tables to different file formats.
Export to csv is currently implemented only.
But this is just an Idea, feel free to contribute

#Usage

##Include the file to your html page after you inclue jquery.
	
	<script type='text/javascript' src='https://cdn.rawgit.com/GitSahib/jquery.export/d93f7950/jquery.export.js'></script
##Using id selector

	$("#tableid").ExportToFile({fileName:'test',type:'csv'});
##OR use class selector

	$(".tableclass").ExportToFile({fileName:'test',type:'csv'});
##OR using tag selector

	$("table").ExportToFile({fileName:'test',type:'csv'});
