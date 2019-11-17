## Ecommerce grids

### Ecommerce template with pure HTML grid

The first form of grid is a pure HTML one that uses the built-in grid elements. To use this grid, you need to import the [ecommerce_grid CSS file](https://raw.githubusercontent.com/Zadigo/materialize_for_startups/master/templates2/ecommerce/css/ecommerce_grid.css).

#### Ecommerce bar

The ecommerce bar, is generally the small bar just under the navigation that you see on ecommerce websites. You need to import the [ecommerce_bar CSS file](https://raw.githubusercontent.com/Zadigo/materialize_for_startups/master/templates2/ecommerce/css/ecommerce_bar.css) and then implement it as so:

```
<div class="ecommerce-bar">
    <div class="container">
        <ul>
            <li class="best-offers"><a href="...">Promotions</a></li>
            <li><a href="...">Collections</a></li>
            <li><a href="...">Bags</a></li>
            <li><a href="...">Bracelets</a></li>
        </ul>
    </div>
</div>
```

![Ecommerce bar](https://i.imgur.com/AgGysNx.png)

The __.best\_offers__ is a small class function that allows the highlighting of one or many of the links in the bar.

This bar implements also series of elements such as opening side drawers or drop down menus for filtering etc.

To create a drawer, you can simply add the following code:

#### Promotional banner

![Promotional banner](https://i.imgur.com/XgjbEIw.png)

These promotional banners are very common ecommerce platforms. They are generally at the top under the navigation bar.

```
<div class="promotion-banner">
    <a href="...">
        <div class="promotion-wrapper">
            <div class="big-title">
                <img src="..." alt="image1">
            </div>
            <div class="presentation">
                Jusqu'à -15% sur tous les sacs
            </div>
            <div class="legal">
                Pour une durée limitée sur une sélection d’articles seulement. Prix déjà démarqués sur le site.
            </div>
        </div>
    </a>
</div>
```

#### Base structure

There are three main components for the base strucure of the grid:

* The __div.ecommerce__
* The paragraph tag for counting the amount of products displayed on the page
* The __div.grid#products__ tag for displaying the products within the tag

```
<main>
    <div class="ecommerce">
        <p class="product-count center">2 351 produits trouvées</p>

        <div class="grid" id="products">
            ...
        </div>
    </div>
</main>
```

Displaying a specific product within the `#products` is pretty straightfoward:

```
<div class="product">
    <a href="...">
        <div class="image">
            <img src="..." alt="...">
            <div class="banner">Exclusive</div>
        </div>

        <div class="details">
            <div class="title">...</div>

            <div class="price-details">
                <div class="price">...</div>
            </div>
        </div>
    </a>
</div>
```

You have a series of essential components here:

* The main __.product__ element
* The __.banner__ class
* The __.details__ class in which you can get the __product title__ and its __price details__

__NOTE:__ The banner tag can be used to show a great specifity of a given product.

Other elements can be implemented. Let's say a product is discounted, you would then use the __.discount-pct__ class like so in the image tag:

```
<div class="image">
    <img src="..." alt="...">

    <div class="discount-pct grey darken-2">-52%</div>
    <div class="banner">Exclusive</div>
</div>
```

And then use the __.with-discount__ and __.discounted_price__ classes for the price details:

```
<div class="price-details with-discount">
    <div class="price">123€</div>
    <div class="discounted-price">275€</div>
</div>
```

The result would be the following:

![Product with discount](https://i.imgur.com/298N4Qv.png)

## Resume

All in all, if you wish to implement all the components the ecommerce template, you will have to structure your document like this:

```
<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <title>...</title>

        <link rel="stylesheet" href="../css/mat.css">
        <link rel="stylesheet" href="./css/ecommerce_grid.css">
        <link rel="stylesheet" href="./css/ecommerce_bar.css">
        <link rel="stylesheet" href="../css/footer.css">
    </head>

    <body>
        <!-- Nav -->
        <div class="navbar-fixed">
            <nav class="grey darken-4">
                ...
            </nav>
        </div>

        <!-- Ecommerce bar -->
        <div class="ecommerce-bar">
            ...
        </div>

        <div class="ecommerce-bar-drawer" id="drawer2">
            ...
        </div>
        
        <!-- Promotion banner -->
        <div class="promotion-banner">
            ...
        </div>
        
        <!-- Main -->
        <main>
            <div class="ecommerce">
                <!-- Product quantity -->
                <p class="product-count center">...</p>

                <!-- Products -->
                <div class="grid" id="products">
                    <div class="product">
                        <a href="...">
                            ...
                        </a>
                    </div>
                </div>
            </div>
        </main>

        <!-- Mini footer -->
        <div class="enhanced-minimalist-footer">
            ...
        </div>

        <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>

        <script src="../js/ecommerce.js"></script>
    </body>
</html>
```

### Ecommerce template with Materialize Canvas

You can also use a simple ecommerce grid using just the ecommerce canvas provided in the CSS files. To do, so, import the [materialize_ecommerce_canvas.css](https://raw.githubusercontent.com/Zadigo/materialize_for_startups/master/templates2/ecommerce/css/materialize_ecommerce_canvas.css) file.

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