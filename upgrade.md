# Upgrade Guide

- [Upgrade to HASA 1.1](#version_1_1)

<a name="version_1_1"></a>
## Upgrade to version 1.1
- Override folder `app`, `config`, `platform`, `public/themes`, `public/vendor` and `resources` from the latest version.

- For developer:
    - Update file `composer.json` and `composer.lock` from new source code.
    - Delete folder `/vendor` then run `composer install` to upgrade vendor packages.
    - Run `php artisan migrate` to update database.