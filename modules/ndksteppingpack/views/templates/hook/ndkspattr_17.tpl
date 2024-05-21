{*
 *  Tous droits réservés NDKDESIGN
 *
 *  @author Hendrik Masson <postmaster@ndk-design.fr>
 *  @copyright Copyright 2013 - 2016 Hendrik Masson
 *  @license   Tous droits réservés
*}
{if Context::getContext()->controller->php_self == 'module-ndksteppingpack-ajax-getProducts' || Context::getContext()->controller->php_self == 'pagenotfound' ||  Context::getContext()->controller->php_self == 'module-ndksteppingpack-default'}
	{if Product::getQuantity($id_product, 0)|intval > 0 || $allow_oosp|intval > 0}
		<div class="ndk_att_list clear clearfix" data-key-product="">
		{if $ndksp_combinations}
		{if $ndksp_combinations.values|@count > 0}
			<label class="ndk_attribute_label">{$ndksp_combinations.attribute_groups|escape:'html':'UTF-8'}&nbsp;</label>
			<select name="attribute_combination_{$id_product}" id="attribute_combination_{$id_product}" class=" ndk_attribute_select" ref="{$id_product}">
				{foreach from=$ndksp_combinations.values key=id_product_attribute item=combination}
					<option data-price="{$combination.price}" data-display-price="{$combination.display_price|escape:'html':'UTF-8'}" value="{$id_product_attribute|intval}" {if $combination.default_on == 1 }selected="selected"{/if} title="{$combination.attributes_names|escape:'html':'UTF-8'}">{$combination.attributes_names|escape:'html':'UTF-8'} {if $combination.price}: {$combination.display_price|escape:'html':'UTF-8'}{/if}</option>
				{/foreach}
			</select>
			{/if}
		{/if}
			
		</div>
		
		<div class="product-add-to-cart">
			{if Configuration::get('catalog_mode') != 1}
				<form action="{$urls.pages.cart}" method="post" class="add-to-cart-or-refresh">
					<div class="product-quantity-ndk">
						<input type="hidden" name="id_product" value="{$id_product}" class="product_page_product_id">
						<input type="hidden" name="id_customization" value="0" class="product_customization_id">
						<input type="hidden" name="id_product_attribute" id="id_product_attribute_{$id_product}">
						<input type="hidden" name="token" value="{$static_token}" class="ot-token">
						<p class="clear clearfix ndk_quantity_wanted_p">
						<label class="ndk_attribute_label">{l s='Quantity : '  mod='ndksteppingpack'}&nbsp;</label>
						<input type="number" name="qty" class="ndk_qtty_input " id="quantity_wanted_{$id_product}" min="{$minimal_quantity}" size="3" value="{$minimal_quantity}" ref="{$id_product}"/>
						<span class="quantity-ndk-minus btn-default btn"><i class="icon-minus"></i></span>
						<span class="quantity-ndk-plus btn-default btn"><i class="icon-plus"></i></span>
						</p>
					</div>
						<button type="submit" data-id-product="{$id_product}" class="ndksp-add-to-cart btn btn-primary add-to-cart button ajax_add_to_cart_button add-to-cart btn-default btn-primary" data-button-action="add-to-cart" title="{l s='Add to cart'}">
							<span>{l s='Add to cart' d='Shop.Theme.Actions'}</span>
						</button>
				</form>
			{/if}
		</div>
	{/if}	
{/if}
