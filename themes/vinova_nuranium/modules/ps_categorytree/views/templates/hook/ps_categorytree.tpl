{*
* 2007-2017 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
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
*  @author PrestaShop SA <contact@prestashop.com>
*  @copyright  2007-2017 PrestaShop SA
*  @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*}

{function name="categories" nodes=[] depth=0}
  {strip}
    {if $nodes|count}
      <ul class="category-sub-menu">
        {foreach from=$nodes item=node}
          <li data-depth="{$depth}">
            {if $depth===0}
              <a href="{$node.link}">{$node.name}</a>
              {if $node.children}
                <div class="navbar-toggler collapse-icons" data-toggle="collapse" data-target="#exCollapsingNavbar{$node.id}">
                  {if $page.page_name == 'index'}
                    <i class="zmdi zmdi-chevron-right add"></i>
                    <i class="zmdi zmdi-chevron-down remove"></i>
                  {else}
                    <i class="material-icons add">add</i>
                    <i class="material-icons remove">remove</i>
                  {/if}
                </div>
                <div class="collapse in" id="exCollapsingNavbar{$node.id}">
                  {categories nodes=$node.children depth=$depth+1}
                </div>
              {/if}
            {else}
              <a class="category-sub-link" href="{$node.link}">{$node.name}</a>
              {if $node.children}
                <span class="arrows" data-toggle="collapse" data-target="#exCollapsingNavbar{$node.id}">
                  <i class="material-icons add">add</i>
                  <i class="material-icons remove">remove</i>
                </span>
                <div class="collapse" id="exCollapsingNavbar{$node.id}">
                  {categories nodes=$node.children depth=$depth+1}
                </div>
              {/if}
            {/if}
          </li>
        {/foreach}
      </ul>
    {/if}
  {/strip}
{/function}
<div class="block-categories block">
  <ul class="category-top-menu">
    {* {if $categories.name == 'Home'}
      <li class="title_block"><a href="{$categories.link nofilter}">{l s='Categories'}</a></li>
    {else}
      <li class="title_block"><a href="{$categories.link nofilter}">{$categories.name}</a></li>
    {/if} *}
    <li>{categories nodes=$categories.children}</li>
  </ul>
</div>