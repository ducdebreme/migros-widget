# migros-widget

## Usage
```html
<select name="group-selector" id="" class="migros-selector-behavior">
  <optgroup label="Group 1">
    <option value="1.1">Option 1.1</option>
  </optgroup> 
  <optgroup label="Group 2">
    <option>Option 2.1</option>
    <option>Option 2.2</option>
  </optgroup>
  <option value="AAA">AAA</option>
  <option value="BBBB">BBBB</option>
  </select>
```

```javascript
// adds the migros widget to a <select> element
$('.migros-selector-behavior').migrosWidget();
```

## relevant files
* Plugin source code: app/scripts/jquery.migros-widget.js
* Styles: app/styles/migros-widget.scss

## development

Run in watch mode
    grunt serve
    
Build project
    grunt build
    
Afterwards code is available in the `dist` folder.