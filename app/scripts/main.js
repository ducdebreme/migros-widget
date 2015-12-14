
var $selector = $('.migros-selector-behavior');
var name = $selector.attr('name');

var $filter_field = $('<input type="text">').attr('class', name + '-filter');
var $hidden_field = $('<input type="hidden">').attr('name', name);
var $new_list = $('<ul class="list-items unstyled"></ul>');

var process_elements = function() {
	var label, value, $this = $(this);
		label = $this.text();
		value = $this.val() || label;

	if($this.is("option")) {
		$('<li data-value="' + value + '" class="selectable">' + label + '</li>').appendTo($new_list);
	} else if($this.is("optgroup")) {
		$('<li>' + $(this).attr('label') + '</li>').appendTo($new_list);
		$this.children().each(process_elements);
	}
}
$selector.children().each(process_elements);

var $wrapper = $('<div class="migros-selector"></div>').append($filter_field, $hidden_field, $new_list);

// insert the new content
$selector.replaceWith($wrapper);

// logic for hiding / selecting
var $item_container = $(".list-items", $wrapper);
var $selectbox = $(".group-selector-filter", $wrapper);

$item_container.searcher({
    inputSelector: ".group-selector-filter",
    itemSelector: "li",
    textSelector: "a"
});

$(".selectable", $item_container).click(function(){
	var val = $(this).data('value');
	console.log(val);
	$selectbox.val(val);
})


