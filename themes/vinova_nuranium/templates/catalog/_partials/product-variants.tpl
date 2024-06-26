{**
* 2007-2016 PrestaShop
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
* @author PrestaShop SA <contact@prestashop.com>
  * @copyright 2007-2017 PrestaShop SA
  * @license http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
  * International Registered Trademark & Property of PrestaShop SA
  *}
{foreach from=$groups key=id_attribute_group item=group name=groups}
  {if $smarty.foreach.groups.first}

    {if isset($novconfig.novthemeconfig_product_attribute) && $novconfig.novthemeconfig_product_attribute}
      <div class="product-variants">
      {else}
        <div class="product-variants hidden-xl-down">
        {/if}
      {/if}

      <div class="product-variants-item d-flex align-items-center">
        <div class="control-label ">{$group.name} : </div>
        {if $group.group_type == 'select'}
          <select id="group_{$id_attribute_group}" data-product-attribute="{$id_attribute_group}"
            name="group[{$id_attribute_group}]">
            {foreach from=$group.attributes key=id_attribute item=group_attribute}
              <option value="{$id_attribute}" title="{$group_attribute.name}" {if $group_attribute.selected}
                selected="selected" {/if}>{$group_attribute.name}</option>
            {/foreach}
          </select>
        {elseif $group.group_type == 'color'}
          {* <select id="group_{$id_attribute_group}" data-product-attribute="{$id_attribute_group}"
                      name="group[{$id_attribute_group}]">
                      {foreach from=$group.attributes key=id_attribute item=group_attribute}
                          <span> {$group.attributes}</span>
                          <option value="{$id_attribute}" title="{$group_attribute.name}" 

              {if $group_attribute.selected}
                                selected="selected" 

              {/if}>{$group_attribute.name}</option>


            {/foreach}
                    </select> *}

                 
            <ul id="group_{$id_attribute_group}">
              {foreach from=$group.attributes key=id_attribute item=group_attribute}
                
                <li class="pull-xs-left input-container">
                  <input class="input-color" type="radio" data-product-attribute="{$id_attribute_group}"
                    name="group[{$id_attribute_group}]" value="{$id_attribute}" {if $group_attribute.selected} checked="checked"
                    {/if}>
                  <span
                    {if
                              $group_attribute.html_color_code}class="color{if $group_attribute.html_color_code == '#ffffff'} white{/if}{if $group_attribute.selected} active{/if}"
                  style="background-color: {$group_attribute.html_color_code}" {/if} {if
                          $group_attribute.texture}class="color texture"
                style="background-image: url({$group_attribute.texture})" {/if}><span
                  class="sr-only">{$group_attribute.name}</span></span>
            </li>
          {/foreach}
        </ul>
      {elseif $group.group_type == 'radio'}
        <ul id="group_{$id_attribute_group}">
          {foreach from=$group.attributes key=id_attribute item=group_attribute}
            <li class="input-container pull-xs-left{if $group_attribute.selected} active{/if}">
              <input class="input-radio" type="radio" data-product-attribute="{$id_attribute_group}"
                name="group[{$id_attribute_group}]" value="{$id_attribute}" {if $group_attribute.selected} checked="checked"
                {/if}>
              <span class="radio-label">{$group_attribute.name}</span>
            </li>
          {/foreach}
        </ul>
      {/if}
    </div>

    {if $smarty.foreach.groups.last}
    </div>
  {/if}
{/foreach}