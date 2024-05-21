<?php
/**
 * WPBakery Visual Composer filter functions
 *
 * @package WPBakeryVisualComposer
 *
 * http://kb.wpbakery.com/index.php?title=Visual_Composer_Filters
 */


/**
 * This filter should be applied to all content elements titles
 *
 * $params['extraclass'] Extra class name will be added
 *

To override content element title default html markup, paste this code in your theme's functions.php file

add_filter('wpb_widget_title', 'override_widget_title', 10, 2);
function override_widget_title($output = '', $params = array('')) {
$extraclass = (isset($params['extraclass'])) ? " ".$params['extraclass'] : "";
return '<h1 class="entry-title'.$extraclass.'">'.$params['title'].'</h1>';
}

 */
function wpb_widget_title( $params = array( 'title' => '' ) ) {
	if ( $params['title'] == '' ) return;

	$extraclass = ( isset( $params['extraclass'] ) ) ? " " . $params['extraclass'] : "";
	$output = '<h3 class="wpb_heading title' . $extraclass . '"><span>' . $params['title'] . '</span></h3>';

//	return apply_filters( 'wpb_widget_title', $output, $params );
        return $output;
}


/*

Available filters in default.php
wpb_toggle_heading


Available filters in buttons.php
wpb_cta_text


Available filters in teaser_grid.php
vc_teaser_grid_title
vc_teaser_grid_thumbnail
vc_teaser_grid_content
vc_teaser_grid_carousel_arrows


*/


?>