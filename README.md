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

## Installation

Distribution files are available in the [dist directory](https://github.com/johnotander/lumberjs/tree/master/dist).

```
dist/
  css/
    lumber.css  // Compiled, css version of lumber.scss.
  scss/
    lumber.scss // Sass version of lumber.js styling.
  lumber.js     // Development version of lumber.js.
  lumber.min.js // Minified, production version of lumber.js.
```

### Development

This project uses gulp to automate tasks like jshinting, uglification, and sass compilation:

```
npm install .
npm install -g gulp
gulp
```

For further documentation on gulp, a good place to start would be [Travis Maynard's blog post](http://travismaynard.com/writing/getting-started-with-gulp).
