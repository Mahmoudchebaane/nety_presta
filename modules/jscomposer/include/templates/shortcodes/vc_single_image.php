<?php

$output = $el_class = $image = $img_size = $img_link = $img_link_target = $img_link_large = $title = $alignment = $css_animation = $css = $alt_text = '';

extract(
	JsComposer::shortcode_atts(
		array(
			'title'           => '',
			'image'           => $image,
			'img_size'        => '',
			'img_link_large'  => false,
			'img_link'        => '',
			'link'            => '',
			'img_link_target' => '_self',
			'alignment'       => 'left',
			'alt_text'        => '',
			'el_class'        => '',
			'css_animation'   => '',
			'style'           => '',
			'border_color'    => '',
			'css'             => '',
		),
		$atts
	)
);

$style        = ( $style != '' ) ? $style : '';
$border_color = ( $border_color != '' ) ? ' vc_box_border_' . $border_color : '';

$img_id = preg_replace( '/[^\d]/', '', $image );
$img    = wpb_getImageBySize(
	array(
		'attach_id'  => $img_id,
		'thumb_size' => $img_size,
		'alt' => $alt_text,
		'class'      => $style . $border_color,
	)
);




if ( $img == null ) {
	$img['thumbnail'] = '<img  alt="' . $alt_text . '"  class="' . $style . $border_color . '" src="' . vc_asset_url( 'vc/no_image.png' ) . '" />'; // ' <small>'.__('This is image placeholder, edit your page to replace it.', 'js_composer').'</small>';
}

$el_class = $this->getExtraClass( $el_class );


$a_class = '';
if ( $el_class != '' ) {
	$tmp_class = explode( ' ', strtolower( $el_class ) );
	$tmp_class = str_replace( '.', '', $tmp_class );
	if ( in_array( 'prettyphoto', $tmp_class ) ) {
		Context::getContext()->controller->addJS( vc_asset_url( 'lib/prettyphoto/js/jquery.prettyPhoto.js' ) );
		Context::getContext()->controller->addCSS( vc_asset_url( 'lib/prettyphoto/css/prettyPhoto.css' ) );
		// wp_enqueue_script( 'prettyphoto' );
		// wp_enqueue_style( 'prettyphoto' );
		$a_class  = ' class="prettyphoto"';
		$el_class = str_ireplace( ' prettyphoto', '', $el_class );
	}
}

$link_to = '';
if ( $img_link_large == true ) {
	$link_to = JsComposer::$_url . 'uploads/' . JsComposer::get_media_thumbnail_url( $img_id );
	$link_to = JsComposer::ModifyImageUrl( $link_to );

	// $link_to = $link_to[0];
} elseif ( strlen( $link ) > 0 ) {
	$link_to = $link;
} elseif ( ! empty( $img_link ) ) {
	$link_to = $img_link;
	if ( ! preg_match( '/^(https?\:\/\/)|(\/\/)/', $link_to ) ) {
		$link_to = 'http://' . $link_to;
	}
}
// to disable relative links uncomment this..

$img_output   = ( $style == 'vc_box_shadow_3d' ) ? '<span class="vc_box_shadow_3d_wrap">' . $img['thumbnail'] . '</span>' : $img['thumbnail'];
$image_string = ! empty( $link_to ) ? '<a' . $a_class . ' href="' . $link_to . '"' . ' target="' . $img_link_target . '"' . '>' . $img_output . '</a>' : $img_output;
$css_class    = 'wpb_single_image wpb_content_element' . $el_class . vc_shortcode_custom_css_class( $css, $this->settings['base'], $atts );
$css_class   .= $this->getCSSAnimation( $css_animation );

$css_class .= ' vc_align_' . $alignment;

if ( isset( $css ) && ! empty( $css ) ) {
	$css_out = '<style>' . $css . '</style>';
	$output .= $css_out;
}

$output .= "\n\t" . '<div class="' . $css_class . '">';
$output .= "\n\t\t" . '<div class="wpb_wrapper">';
$output .= "\n\t\t\t" . wpb_widget_title(
	array(
		'title'      => $title,
		'extraclass' => 'wpb_singleimage_heading',
	)
);
$output .= "\n\t\t\t" . $image_string;
$output .= "\n\t\t" . '</div> ' . $this->endBlockComment( '.wpb_wrapper' );
$output .= "\n\t" . '</div> ' . $this->endBlockComment( '.wpb_single_image' );

echo $output;