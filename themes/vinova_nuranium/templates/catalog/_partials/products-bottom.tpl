{*
* Classic theme doesn't use this subtemplate, feel free to do whatever you need here.
* This template is generated at each ajax calls.
* See ProductListingFrontController::getAjaxProductSearchVariables()
*}
<div id="js-product-list-bottom">
	{block name='pagination'}
	{include file='_partials/pagination.tpl' pagination=$listing.pagination}
	{/block}
</div>