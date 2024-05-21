{**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/osl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 *}
 {* {assign var=context value=Context::getContext()}
 {assign var=gift value=$context->cart->gift}
 {$gift|dump} *}

{* 
  <div class="custom-checkbox d-block hidden">
    <input class="js-gift-checkbox" name="gift" type="checkbox" value="1" checked="checked">
    <span><i class="material-icons checkbox-checked">check</i></span>
    <label>{$gift.label}</label>
  </div>

  <div id="gift" class="d-none collapse{if $gift.isGift} in{/if}">
    <label
      for="gift_message">{l s='If you\'d like, you can add a note to the gift:' d='Shop.Theme.Checkout'}</label>
    <textarea rows="2" cols="120" id="gift_message" name="gift_message">{$gift.message}</textarea>
  </div> *}

{block name='cart_detailed_totals'}
  <div class="cart-detailed-totals">
    <div class="nov-cart-summary-products pr-30 pl-30 mb-20">
    <h2 class="summaryTitle">{l s='Cart summary' d='Shop.Theme.Actions'}</h2>
      <div class="summary-label">
        {if $cart.products_count > 1}{l s='There are %cart_item% items in your cart' sprintf=['%cart_item%' => $cart.products_count] d='Shop.Theme.Checkout'}{else}{l s='There is %cart_item% item in your cart' sprintf=['%cart_item%' => $cart.products_count] d='Shop.Theme.Checkout'}{/if}
      </div>
    </div>
    <div class="group-price">
      {foreach from=$cart.subtotals item="subtotal"}
        {if $subtotal != null}
         
          {if $subtotal.value && $subtotal.type !== 'tax'}
            <div class="cart-summary-line" id="cart-subtotal-{$subtotal.type}">
              <span class="label{if 'products' === $subtotal.type} js-subtotal{/if}">
                {if 'products' == $subtotal.type}
                  {l s="Total products" d='Shop.Theme.Checkout'}:
                {elseif 'gift_wrapping'== $subtotal.type}
                  {l s="Tax stamp" d='Shop.Theme.Checkout'}:
                  {else}
                  {l s='Total %label_subtotal%' sprintf=['%label_subtotal%' => $subtotal.label] d='Shop.Theme.Checkout'}:
                {/if}
              </span>
              <span class="value">{$subtotal.value}</span>
              {if $subtotal.type === 'shipping'}
                <div><small class="value">{hook h='displayCheckoutSubtotalDetails' subtotal=$subtotal}</small></div>
              {/if}
            </div>
          {/if}
        {/if}
      {/foreach}
      {if $cart.subtotals.tax != null}
        {if $cart.subtotals.tax.label != ""}
          <div class="cart-summary-line">
            <span class="label">{$cart.subtotals.tax.label}:</span>
            <span class="value">{$cart.subtotals.tax.value}</span>
          </div>
        {/if}

      {/if}
    </div>

    {block name='cart_voucher'}
      {include file='checkout/_partials/cart-voucher.tpl'}
    {/block}

    <div
      class="cart-summary-line cart-total{if empty($cart.vouchers.allowed) || $cart.discounts|count < 1} has_border{/if}">
      <div class="d-flex justify-content-between">
        <span>
          <span class="label">{$cart.totals.total.label}</span>
          <span class="font-small">{$cart.labels.tax_short}</span>
        </span>
        <span class="value label">{$cart.totals.total.value}</span>
      </div>
    </div>
  </div>
{/block}