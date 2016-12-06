$(function(){
	if ('ontouchstart' in window || !!(navigator.msMaxTouchPoints))
		return;

	var str = $('#project_quick_jump_box option:first').text();
	$('#project_quick_jump_box option:first').text("").val("");
	$('#project_quick_jump_box').attr("data-placeholder", str).select2({ width: function() {
		return ($('#project_quick_jump_box').width() + 32).toString() + 'px';
	}});

	if ($('#time_entry_form').length > 0) {
		str = $('#project_id option:first').text();
		$('#project_id').prepend('<option />'); // Don't overwrite first project name
		$('#project_id option:first').text("").val("");
		$('#project_id').attr("data-placeholder", str).select2({
			width: function () {
				return ($('#project_id').width() + 32).toString() + 'px';
			},
			formatResult: function(item) {
				return '<span title="'+ $('#project_id option[value=' + item.id + ']').attr('title') +'">' + item.text + '</span>';
			},
			formatSelection: function(item) {
				return '<span title="'+ $('#project_id option[value=' + item.id + ']').attr('title') +'">' + item.text + '</span>';
			}
		});
	}
});
