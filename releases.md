# Release Notes

- [Hasa 1.7](#version_1_7)
- [Hasa 1.6](#version_1_6)
- [Hasa 1.5](#version_1_5)
- [Hasa 1.4](#version_1_4)
- [Hasa 1.3.2](#version_1_3.2)
- [Hasa 1.3.1](#version_1_3.1)
- [Hasa 1.3](#version_1_3)
- [Hasa 1.2](#version_1_2)
- [Hasa 1.1](#version_1_1)
- [Hasa 1.0.1](#version_1_0_1)
- [Hasa 1.0](#version_1_0)

<a name="version_1_7"></a>
## Hasa 1.7
### Feb 04, 2021
- Upgrade to Laravel 8.
- Improve permalinks.
- Allow deleting products after it's purchased by customers.
- Prevent error when deleting a product that is added into the cart.
- Prevent access to Ajax URLs directly.
- Optimize checkout speed.
- Fix bug when updating flash sales.
- Fix E-commerce settings and add settings for thousands and decimal separators.
- Fix the order's amount when creating from the admin panel.
- Fix permission issue.

<a name="version_1_6"></a>
## Hasa 1.6
### Jan 12, 2021
- Add Mollie payment gateway.
- Fix bug product quantity for incomplete orders.
- Update translations.
- Optimize queries to improve performance.
- Update UI.

## Hasa 1.5
### Dec 14, 2020
- Add Cross-selling products.
- Add option to disable taxes.
- Fix shipping fee in the checkout page.
- Fix create a customer from admin panel.
- Improve Cookie Consent plugin.
- Improve responsive.
- Update translations, added missing keys.
- Improve DO Spaces integration.
- Fix roles & permissions.
- Update front theme UI.
- Update seeders, easy to generate sample data using command db:seed.
- Update setting page & system info.
- Optimize page speed and performance.

## Hasa 1.4
### Nov 16, 2020
- Add RTL support.
- Add the "Quick Buy" button.
- Add a shortcode to display all brands and all products.
- Display product attributes on the cart, email.
- Display error/success message on the cart page.
- Fix checkout page when the customer has logged already.
- Fix shipping rules, order detail, store locators.
- Fix missing order address when creating orders from admin.
- Fix theme translations: new keys in English doesn't show in other languages.
- Fix IP in activity logs, allow IP v6.
- Optimize queries on menu & widgets, cache the menu URL for better performance.
- Update Cookie consent: Add the option to change the background color, text color.
- Update error pages, make it more beautiful.
- Update UI contact form.
- Improve permalink & custom CSS page.
- Improve Analytics plugin, make it compatible with PHP 7.4.
- Fix small bugs.
- Refactor code.

## Hasa 1.3.2
### Oct 23, 2020
- Add multi-currency support.
- Fix bug wrong quantity in incomplete order recovery.
- Fix update customer's email from admin panel.
- Fix bug when activating plugin Ecommerce.

## Hasa 1.3.1
### Oct 20, 2020
- Improve queries.
- Update UI.
- Fix minor bugs.

## Hasa 1.3
### Oct 15, 2020

- Make single checkout page.
- Add taxes.
- Add export products, orders to CSV, Excel.
- Add seeders: generate products with variations, product categories, product collections...
- Fix UI payment form.
- Fix filter price: display price with current currency.
- Fix bugs when adding product to cart.
- Fix 404 not found issue when clicking on the customer's name on the reviews listing page.
- Update Laravel to version 7.28.4
- Update Recaptcha: add an option to hide badge.
- Improve theme UI & remove unused CSS to make it loads faster.
- Update to Botble CMS 5.9.

## Hasa 1.2
### Sep 15, 2020

- Update to Laravel version 7.28
- Add settings to disable shopping cart.
- Add Order tracking.
- Fix theme options for Facebook chat, Facebook comment.
- Fix bug when applying coupon code.
- Remove Instagram feed.
- Update homepage & blog page settings. Now, it's moved into Appearance -> Theme options.
- Move settings for Cookie Consent into Appearance -> Theme options.
- Add theme options to enable/disable Facebook chat, Facebook comment.
- Add settings for watermark. Now, you can add watermark by changing setting in Admin -> Settings -> Media.
- Allow to change permalink in Admin -> Settings -> Permalinks.
- Add language settings. Allow to set default language in Admin -> Settings -> General.
- Allow admin to login using email or username.
- Optimize queries to make site loads faster.
- Update UI.
- Refactor code.
- Fix webpack.mix.js config, issue with path on Windows.
- Fix assets path.
- Fix copy folder in Admin -> Media.

## Hasa 1.1
### Aug 05, 2020
- Upgrade to the latest Laravel framework version 7.22.
- Deprecated some media functions: `is_image`, `get_image_url`, `get_object_image`, `rv_media_handle_upload`. 
  Replacements: `RvMedia::isImage()`, `RvMedia::getImageUrl()`, `RvMedia::handleUpload()`.
- Add support **Digital Ocean Spaces**.
- Fix timezone, it doesn't work before.
- Fix filter posts.
- Update email settings. Add support **SES**, **Postmark**, **Array**, **Log**.
- Improve performance & refactor source code.
- Improve license system, make it works better.
- Add **Razorpay** & **Paystack** payment gateways. 
    Notes: 
        - You need to go to Admin -> Plugins and activate plugin **Razorpay** & **Paystack** if you want to use it. 
        - Go to Admin -> Payment -> Payment Methods to setup API keys. 
        - If you don't want to use it, you can deactivate or remove that plugins in Admin -> Plugins.
        - Razorpay just displays on checkout page if your amount < ₹5,00,000 (Check maximum payment amount here: https://razorpay.com/docs/payment-pages/faqs)
        - Paystack payment method just displays on checkout page if your currency is NGN https://prnt.sc/ttlcqz
     
 <a name="version_1_0_2"></a>   
## Hasa 1.0.2
### Jul 09, 2020

- Add support DigitalOcean Spaces
- Improve UI.

<a name="version_1_0_1"></a>
## Hasa 1.0.1
### Jul 07, 2020
- Support Recaptcha v3 for contact form, newsletter form.
- Fix bug when adding a product to cart.
- Auto select default variation: color, size...
- Improve UI.
- Add popup confirmation when removing a product from cart.
    
<a name="version_1_0"></a>
## Hasa 1.0
### 2020-06-28
- Initial release version 1.0
