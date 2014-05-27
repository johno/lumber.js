# Lumber.js

_This is currently under development._

A wrapper for d3.js. It allows you to specify graph data and styling with data attributes in page elements.

__An example of it in action:__

```html
<!-- Set the graph information in the data attributes of an svg tag. -->
<svg id="lumber"
     data-lumber-type="bar"
     data-lumber-y-axis-label="Frequency"
     data-lumber-x-axis-label="Letter"
     data-lumber-values="3:A,2:B,3:C,4:D,5:E,7:F,6:G,5:H,4:I,2:J,6:K,5:L,6:M">
</svg>
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
git clone https://github.com/johnotander/lumberjs.git && cd lumberjs
npm install .
npm install -g gulp
gulp
```

For further documentation on gulp, a good place to start would be [Travis Maynard's blog post](http://travismaynard.com/writing/getting-started-with-gulp).

## Contributing

1. Fork it ( http://github.com/johnotander/lumberjs/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://www.johnotander.com) ([@4lpine](https://twitter.com/4lpine)).
