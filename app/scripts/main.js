/*
 * migrosWidget jQuery plugin
 *
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://odyniec.net/projects/imgareaselect/https://github.com/ducdebreme/migros-widget
 *
 */
(function ($) {

  $.fn.migrosWidget = function () {

    return this.each(attachMigrosWidget);

    function attachMigrosWidget() {
      var $selector = $(this),
        name = $selector.attr('name'),
        $filter_field = $('<input type="text">').attr('class', name + '-filter'),
        $hidden_field = $('<input type="hidden">').attr('name', name),
        $new_list = $('<ul class="list-items unstyled"></ul>');

      // reformat from html <select> element into the html list format
      var process_elements = function () {
        var label, value, $this = $(this);
        label = $this.text();
        value = $this.val() || label;

        if ($this.is("option")) {
          $('<li data-value="' + value + '" class="selectable">' + label + '</li>').appendTo($new_list);
        }
        else {
          if ($this.is("optgroup")) {
            $('<li class="group-label">' + $(this).attr('label') + '</li>').appendTo($new_list);
            $this.children().each(process_elements);
          }
        }
      };
      $selector.children().each(process_elements);

      var $wrapper = $('<div class="migros-selector"></div>').append($filter_field, $hidden_field, $new_list);

      // insert the new widget
      $selector.replaceWith($wrapper);

      // logic for hiding / selecting
      var $item_container = $(".list-items", $wrapper);

      $item_container.searcher({
        inputSelector: "." + name + "-filter",
        itemSelector: "li",
        textSelector: ""
      });

      // click handler
      $(".selectable", $item_container).click(function () {

        $('.selected', $item_container).removeClass('selected');
        $(this).addClass('selected');

        // set value
        var val = $(this).data('value');
        $hidden_field.val(val);
      });

    } // end of attachMigrosWidget
  };

}(jQuery));




