# Upgrade Guide

- [Upgrade to HASA 1.2](#version_1_2)
- [Upgrade to HASA 1.1](#version_1_1)

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