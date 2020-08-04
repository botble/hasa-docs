# Release Notes

- [Hasa 1.1](#version_1_1)
- [Hasa 1.0.1](#version_1_0_1)
- [Hasa 1.0](#version_1_0)

## Hasa 1.1
### 05-08-2020
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
        
## Hasa 1.0.2
### 09-07-2020

- Add support DigitalOcean Spaces
- Improve UI.

<a name="version_1_0_1"></a>
## Hasa 1.0.1
### 2020-07-07
    - Support Recaptcha v3 for contact form, newsletter form.
    - Fix bug when adding a product to cart.
    - Auto select default variation: color, size...
    - Improve UI.
    - Add popup confirmation when removing a product from cart.
    
<a name="version_1_0"></a>
## Hasa 1.0
### 2020-06-28
    - Initial release version 1.0
