# Upgrade Guide

- [Upgrade to HASA 1.15](#version_1_15)
- [Upgrade to HASA 1.14](#version_1_14)
- [Upgrade to HASA 1.13](#version_1_13)
- [Upgrade to HASA 1.12](#version_1_12)
- [Upgrade to HASA 1.11](#version_1_11)
- [Upgrade to HASA 1.10](#version_1_10)
- [Upgrade to HASA 1.9](#version_1_9)
- [Upgrade to HASA 1.8](#version_1_8)
- [Upgrade to HASA 1.7](#version_1_7)
- [Upgrade to HASA 1.6](#version_1_6)
- [Upgrade to HASA 1.5](#version_1_5)
- [Upgrade to HASA 1.4](#version_1_4)
- [Upgrade to HASA 1.3.2](#version_1_3_2)
- [Upgrade to HASA 1.3.1](#version_1_3_1)
- [Upgrade to HASA 1.3](#version_1_3)
- [Upgrade to HASA 1.2](#version_1_2)
- [Upgrade to HASA 1.1](#version_1_1)

<a name="version_1_15"></a>
## Upgrade to version 1.15

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- For developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce` then activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  
<a name="version_1_14"></a>
## Upgrade to version 1.14

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- For developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce` then activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  
<a name="version_1_13"></a>
## Upgrade to version 1.13

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- For developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce` and `Payment` then activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  
<a name="version_1_12"></a>
## Upgrade to version 1.12

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- For developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce` and `Payment` then activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  
<a name="version_1_11"></a>
## Upgrade to version 1.11

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce` and `Payment` then activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  
- Go to Admin -> Plugins then activate plugin Gallery if you want to use gallery images.

- Add some gallery images in Admin -> Galleries then go to Admin -> Pages -> Homepage, add shortcode `[theme-galleries title="@ OUR GALLERIES" description="Our latest fashion galleries images" limit="8"][/theme-galleries]` to display galleries.
  
<a name="version_1_10"></a>
## Upgrade to version 1.10

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce` and activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
  
<a name="version_1_9"></a>
## Upgrade to version 1.9

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin `Ecommerce` and activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.

<a name="version_1_8"></a>
## Upgrade to version 1.8

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin Ecommerce and activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.

<a name="version_1_7"></a>
## Upgrade to version 1.7

>  {warning} This version requires PHP >= 7.3, make sure your hosting support PHP 7.3 or higher.

- Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `public/index.php` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan migrate` to update the database.
  - Run `php artisan optimize:clear` to clear cache.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins: deactivate plugin Ecommerce and activate it again.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.

<a name="version_1_6"></a>
## Upgrade to version 1.6
- Override folder `platform`, `public/themes`, `public/vendor` from the latest version.

- For developers:
  - Update file `composer.json` and `composer.lock` from new source code.
  - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
  - Run `php artisan migrate` to update database.
  - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
  - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
  - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
  - Run `php artisan optimize:clear` to clear cache.
  - Run `php artisan migrate` to update database.

- For non-developers:
  - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
  - Delete all files in `storage/framework/views` and `storage/framework/cache`.
  - Go to Admin -> Plugins then deactivate plugin Ecommerce then re-activate it.
  - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.

- Go to Admin -> Plugins and activate plugin Mollie if you want to use Mollie payment gateway.

<a name="version_1_5"></a>
## Upgrade to version 1.5
- Override folder `platform`, `public/themes`, `public/vendor` from the latest version.

- For developers:
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Run `php artisan migrate` to update database.
    - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
    - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
    - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
    - Run `php artisan optimize:clear` to clear cache.
    
- For non-developers:
    - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
    - Delete all files in `storage/framework/views` and `storage/framework/cache`.
    - Go to Admin -> Plugins then deactivate plugin Ecommerce then re-activate it.
    - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
    
<a name="version_1_4"></a>
## Upgrade to version 1.4
- Override folder `platform`, `public/themes`, `public/vendor` from the latest version.

- For developers:
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Run `php artisan migrate` to update database.
    - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
    - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
    - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
    - Run `php artisan optimize:clear` to clear cache.
    
- For non-developers:
    - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
    - Delete all files in `storage/framework/views` and `storage/framework/cache`.
    - Go to Admin -> Plugins then deactivate plugin Ecommerce then re-activate it.
    - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
    
<a name="version_1_3_2"></a>
## Upgrade to version 1.3.2
- Override folder `platform`, `public/themes`, `public/vendor` from the latest version.

- For developers:
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Run `php artisan migrate` to update database.
    - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
    - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
    - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
    - Run `php artisan optimize:clear` to clear cache.
    
- For non-developers:
    - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
    - Delete all files in `storage/framework/views` and `storage/framework/cache`.
    - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
    
<a name="version_1_3_1"></a>
## Upgrade to version 1.3.1
- Override folder `platform`, `public/themes`, `public/vendor` from the latest version.

- For developers:
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Run `php artisan migrate` to update database.
    - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
    - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
    - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
    - Run `php artisan optimize:clear` to clear cache.
    
- For non-developers:
    - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
    - Delete all files in `storage/framework/views` and `storage/framework/cache`.
    - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
    
<a name="version_1_3"></a>
## Upgrade to version 1.3

- Override folder `app`, `config`, and `platform` from the latest version.

- For developers:
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Delete folder `public/vendor` and run command `php artisan vendor:publish --tag=cms-public --force`
    - Delete folder `public/themes` and run command `php artisan cms:theme:assets:publish`
    - Run command `php artisan vendor:publish --tag=cms-lang --force` to update translations.
    - Run `php artisan optimize:clear` to clear cache.
    
- For non-developers:
    - Override folder `public/themes`, `public/vendor`, `bootstrap`, `vendor` from the latest version.
    - Delete all files in `storage/framework/views` and `storage/framework/cache`.
    - Go to Admin -> Translations -> Admin translations then click on `Import group` to update translations.
    - Go to Admin -> Plugins then deactivate plugin Ecommerce then re-activate it.
    
- Go to Admin -> Pages -> Edit homepage's content to:
```
[simple-slider key="home-slider"][/simple-slider]
[featured-product-categories title="Top Categories" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim Nullam nunc varius."][/featured-product-categories]
[product-collections title="A change of Season" description="Update your wardrobe with new seasonal trend"][/product-collections]
[featured-products title="Our Picks For You" description="Always find the best ways for you" limit="8"][/featured-products]
[trending-products title="Trending Products" description="Products on trending" limit="4"][/trending-products]
[featured-brands title="Our Brands"][/featured-brands]
[news title="Visit Our Blog" description="Our Blog updated the newest trend of the world regularly"][/news]
[our-features items='{"title": "FREE SHIPPING", "description": "Free shipping on all US order or order above $200", "icon": "feather icon icon-truck"}; {"title": "SUPPORT 24/7", "description": "Contact us 24 hours a day, 7 days a week", "icon": "feather icon icon-life-buoy"};{"title": "30 DAYS RETURN", "description": "Simply return it within 30 days for an exchange", "icon": "feather icon icon-refresh-ccw"};{"title": "100% PAYMENT SECURE", "description": "We ensure secure payment with PEV", "icon": "feather icon icon-shield"}'][/our-features]
```
    
<a name="version_1_2"></a>
## Upgrade to version 1.2
- Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `resources` from the latest version.

- For developer:
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Run `php artisan migrate` to update database.
    
- For non-developer:
    - Override folder `/vendor` from the latest version.
    - Go to Admin -> Plugins then deactivate plugin Ecommerce then re-activate it.
    
<a name="version_1_1"></a>
## Upgrade to version 1.1
- Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `resources` from the latest version.

- For developer:
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Run `php artisan migrate` to update database.