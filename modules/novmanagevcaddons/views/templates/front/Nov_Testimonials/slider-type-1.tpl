{*
/******************
 * Vinova Themes Framework for Prestashop 1.7.x 
 * @package    novmanagevcaddons
 * @version    1.0.0
 * @author     http://vinovathemes.com/
 * @copyright  Copyright (C) May 2019 vinovathemes.com <@emai:vinovathemes@gmail.com>
 * <vinovathemes@gmail.com>.All rights reserved.
 * @license    GNU General Public License version 1
 * *****************/
*}

{if isset($testimonials) && !empty($testimonials)}
<div class="nov-testimonial type_1{if isset($el_class) && $el_class}{$el_class}{/if}">
	<div class="testimonial clearfix">
		{if isset($title) && !empty($title)}
		<h2 class="title_block text-{$title_align} style-{$title_style}">
			{if isset($sub_title) && !empty($sub_title)}
				<span class="sub_title">{$sub_title}</span>
			{/if}
			<span class="title_content">{$title}</span>
		</h2>
		{/if}
		<div class="block_content">
			<div class="nov-testimonialslick slick-slider" data-rows="{$number_row}" data-xl="{$xl}" data-md="{$md}" data-xs="{$xs}" data-arrows="{$show_arrows}" data-dots="{$show_dots}" data-autoplay="{$autoplay}">        
	            {foreach from=$testimonials item=testimonial}
	               	<div class="item item-testimonial slider-type-one text-center">
						{if $testimonial.name }
						<h5 class="box-info">{$testimonial.name}</h5>
						{/if}
						{if $testimonial.address }
							<span class="box-dress">{$testimonial.address}</span>
						{/if}
						<div class="media-body">
							<div class="text mt-18 mb-30">{$testimonial.content nofilter}</div>
						</div>
					</div>
	            {/foreach}
			</div>
		</div>
	</div>
</div>
{/if}