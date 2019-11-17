# Ecommerce grid with Materialize Canvas

You can also use a simple ecommerce grid using just the ecommerce canvas provided in the CSS files. To do, so, import the _materialize\_ecommerce\_canvas.css_ file.

The base structure is the following:

```
<section class="section products" id="app">
    <div class="container">
        <div class="row">
            <div class="col s12 m2 l2" id="filters_col">
                ...
            </div>

            <div class="col s12 m10 l10" id="products_col">
                ...
            </div>
        </div>
    </div>
</section>
```

As you can see, you need three main parameters to render the canvas: _.products_, _#filters\_col_ and _#products\_col_ which represent the logical structure of a products page.

This example can be seen in the __vue_products.html__ template.