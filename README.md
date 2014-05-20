# Lumber.js

_This is currently under development._

A wrapper for d3.js. It allows you to specify graph data and styling with data attributes in page elements.

__An example of it in action:__

```html
<!-- Set the graph information in the data attributes of an svg tag. -->
<svg id="lumber"
     data-lumber-type="bar"
     data-values="3,2,3,4,5,6,7,6,5,4,2,6,5,6">
</svg>
<script>
  // When the DOM is loaded, call lumber's graphing function.
  document.addEventListener("DOMContentLoaded", function() {
    lumber.graph("#lumber");
  });
</script>
```
