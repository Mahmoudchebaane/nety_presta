<?php

/*
 * Add-on Name: Google Font Manager
 * Add-on URI: https://www.brainstormforce.com
 * Usage:
  # VC Params Type: (Note - "ultimate_google_fonts_style" param must be next to "ultimate_google_fonts" param only)
  1) ultimate_google_fonts - for dropdown of google fonts in collection
  For Ex -
  array(
  "type" => "ultimate_google_fonts",
  "heading" => $vc->l("Font Family"),
  "param_name" => "heading_font"
  ),
  2) ultimate_google_fonts_style - for respective google font style or default style
  For Ex -
  array(
  "type" => "ultimate_google_fonts_style",
  "heading" 		=>	$vc->l("Font Style"),
  "param_name"	=>	"heading_style"
  ),
  # In respective comoponent shortcode process function
  1) Get font family -
  For Ex -
  $font_family = get_ultimate_font_family($heading_font);
  2) Get font style -
  For Ex -
  $font_style = get_ultimate_font_style($heading_style);
  3) Enqueue the respective fonts - Note send number of font param as a parameter in array
  For Ex -
  $args = array(
  $heading_font
  );
  enquque_ultimate_google_fonts($args);
 */
if ( ! class_exists( 'Ultimate_Google_Font_Manager' ) ) {

	class Ultimate_Google_Font_Manager {

		public $vcaddonsinstance, $context, $protocol_link;

		function __construct() {
			$this->protocol_link = ( Tools::usingSecureMode() && Configuration::get( 'PS_SSL_ENABLED' ) ) ? 'https://' : 'http://';
			$this->context       = Context::getContext();
			// Configuration::updateValue('ultimate_google_fonts',@serialize(array()));
			// delete_option('ultimate_google_fonts');
			// Configuration::updateValue('ultimate_selected_google_fonts',@serialize(array()));
			// add_action('admin_menu',array($this, 'google_font_manager_menu'));

			$this->vcaddonsinstance                                        = jscomposer::getInstance();
			jscomposer::$sds_action_hooks['ultimate_google_fonts_refresh'] = array( $this, 'refresh_google_fonts_list' );
			jscomposer::$sds_action_hooks['get_google_fonts']              = array( $this, 'get_google_fonts_list' );
			jscomposer::$sds_action_hooks['add_google_font']               = array( $this, 'add_selected_google_font' );
			jscomposer::$sds_action_hooks['delete_google_font']            = array( $this, 'delete_selected_google_font' );
			jscomposer::$sds_action_hooks['update_google_font']            = array( $this, 'update_selected_google_font' );
			jscomposer::$sds_action_hooks['get_font_variants']             = array( $this, 'get_font_variants_callback' );
			if ( $this->vcaddonsinstance->is_admin() ) {
				// add_action('admin_enqueue_scripts', array($this, 'enqueue_ultimate_google_fonts'));
				$this->enqueue_ultimate_google_fonts();
			}
			// if(function_exists('add_shortcode_param'))
			// {
			jscomposer::add_shortcode_param( 'ultimate_google_fonts', array( $this, 'ultimate_google_fonts_settings' ), "{$this->vcaddonsinstance->_url_ultimate}admin/vc_extend/js/vc-google-fonts-param.js" );
			jscomposer::add_shortcode_param( 'ultimate_google_fonts_style', array( $this, 'ultimate_google_fonts_style_settings' ) );
			// }
		}

		// function google_font_manager_menu() {
		// $vc = vc_manager();
		// $current_theme = wp_get_theme();
		// if ($current_theme == "Smile")
		// $page = add_submenu_page(
		// "smile_dashboard", $vc->l("Google Font Manager"), $vc->l("Google Fonts"), "administrator", "Ultimate_Font_Manager", array($this, 'ultimate_font_manager_dashboard')
		// );
		// else
		// $page = add_submenu_page(
		// "bsf-dashboard", $vc->l("Google Font Manager"), $vc->l("Google Fonts"), "administrator", "ultimate-font-manager", array($this, 'ultimate_font_manager_dashboard')
		// );
		// add_action('admin_print_scripts-' . $page, array($this, 'admin_google_font_scripts'));
		// }

		function admin_google_font_scripts() {

			// jscomposer::$backoffice_scripts[] = "{$this->vcaddonsinstance->_url_ultimate}admin/js/google-fonts-admin.js";
			$this->context->controller->addJS( "{$this->vcaddonsinstance->_url_ultimate}admin/js/google-fonts-admin.js" );
			// wp_enqueue_script('ultimate-google-fonts-script');
			$this->context->controller->addCSS( "{$this->vcaddonsinstance->_url_ultimate}admin/css/google-fonts-admin.css" );
			// wp_enqueue_style('ultimate-google-fonts-style');
		}

		function enqueue_ultimate_google_fonts() {

			$selected_fonts = Configuration::get( 'ultimate_selected_google_fonts' );
			// delete_option('ultimate_selected_google_fonts'); exit;
			if ( ! empty( $selected_fonts ) ) {
				$selected_fonts = @unserialize( $selected_fonts );
				$count          = count( $selected_fonts );
				$font_call      = '';
				foreach ( $selected_fonts as $key => $sfont ) {
					if ( $key != 0 ) {
						$font_call .= '|';
					}
					$font_call .= $sfont['font_family'];
					if ( isset( $sfont['variants'] ) ) :
						$variants = $sfont['variants'];
						if ( ! empty( $variants ) ) {
							$variants_count = count( $variants );
							$font_call     .= ':';
							foreach ( $variants as $vkey => $variant ) {
								$variant_selected = $variant['variant_selected'];
								if ( $variant_selected == 'true' || $this->vcaddonsinstance->is_admin() ) {
									$font_call .= $variant['variant_value'];
									if ( ( $variants_count - 1 ) != $vkey && $variants_count > 0 ) {
										$font_call .= ',';
									}
								}
							}
						}
					endif;
				}
				if ( $font_call ) {
					$link = $this->protocol_link . 'fonts.googleapis.com/css?family=' . $font_call;
					// jscomposer::$backoffice_styles[] = $link;
					$this->context->controller->addCSS( $link );
				}
				// wp_enqueue_style('ultimate-selected-google-fonts-style');
			}
		}

		function ultimate_font_manager_dashboard() {
			$vc = vc_manager();
			?>
			<div class="row wrap uavc-gfont">
				<div class="col-lg-12">
					<div class="panel">
						<h3><i class="icon-tag"></i> <?php echo $this->vcaddonsinstance->l( 'Google Fonts Manager' ); ?>
							&nbsp;&nbsp;&nbsp;&nbsp;<input style="cursor:pointer" type="button" class="add-new-h2 btn btn-default" id="refresh-google-fonts" value="<?php echo $this->vcaddonsinstance->l( 'Refresh Font List' ); ?>"/>
							&nbsp;<span class="spinner"><i class="icon-refresh icon-spin icon-fw"></i></span>
						</h3>


						<div id="vc-gf-msg"></div>
						<div class="nav">
							<input type="text" id="search_gfont" name="search_gfont" placeholder="Search font.."/>
						</div>




						<div class="row">
							<div class="fonts-list col-md-6">
								<div id="fonts-list-wrapper" style="overflow:auto" data-gstart="0" data-gfetch="20"></div>
								<div id="load-more" class="spinner" style="float:left"></div>
							</div>
							<div class="fonts-selected-list  col-md-6 panel">
								<h3><?php echo $this->vcaddonsinstance->l( 'Your Font Collection' ); ?></h3>
								<div id="fonts-selected-wrapper">
			<?php
			$selected_fonts = Configuration::get( 'ultimate_selected_google_fonts' );
			if ( ! empty( $selected_fonts ) ) {
				$selected_fonts = @unserialize( $selected_fonts );
				foreach ( $selected_fonts as $key => $sfont ) {
					?>
											<div class="selected-font">
												<div class="selected-font-top <?php echo ( ! empty( $sfont['variants'] ) || ! empty( $sfont['subsets'] ) ) ? 'have-variants' : ''; ?>">
													<div class="font-header" style="font-family:'<?php echo $sfont['font_name']; ?>'"><?php echo $sfont['font_name']; ?></div>
					<?php if ( ! empty( $sfont['variants'] ) || ! empty( $sfont['subsets'] ) ) : ?>
														<i class="dashicons dashicons-arrow-down"></i>
											<?php endif; ?>
													<div class="clear"></div>
												</div>
												<span class="font-delete" data-font_name="<?php echo $sfont['font_name']; ?>"><i class="icon-trash"></i></span>
											<?php
											$is_varients = false;
											if ( ! empty( $sfont['variants'] ) || ! empty( $sfont['subsets'] ) ) :
												?>
													<div class="selected-font-content">
												<?php
												$lid          = str_replace( ' ', '-', $sfont['font_name'] );
												$variant_font = 'font-family:\'' . $sfont['font_name'] . '\';';
												if ( ! empty( $sfont['variants'] ) ) :
													$is_varients = true;
													?>
															<div class="selected-font-varient-wrapper">
													<?php
													foreach ( $sfont['variants'] as $svkey => $svariants ) {
														$variant_style = $variant_font;
														if ( preg_match( '/italic/i', $svariants['variant_value'] ) ) {
															$variant_style .= 'font-style:italic;';
														}
														$weight = 'normal';
														if ( $weight = preg_replace( '/\D/', '', $svariants['variant_value'] ) ) {
															$variant_style .= 'font-weight:' . $weight . ';';
														}
														$tlid = $lid . '-' . $svkey;
														?>
																	<span class="font-variant">
																		<input type="checkbox" id="<?php echo $tlid; ?>" value="<?php echo $svariants['variant_value']; ?>" class="selected-variant-checkbox" <?php echo ( $svariants['variant_selected'] == 'true' ) ? 'checked' : ''; ?> />
																		<label style="<?php echo $variant_style; ?>" for="<?php echo $tlid; ?>"><?php echo $svariants['variant_value']; ?></label>
																	</span>
																	<?php
													}
													?>
															</div>
																<?php
															endif;
												if ( ! empty( $sfont['subsets'] ) ) :
													?>
															<div class="<?php echo ( $is_varients ) ? 'selected-font-subset-wrapper' : ''; ?>">
																<?php
																foreach ( $sfont['subsets'] as $sbkey => $ssubset ) {
																	$slid = $lid . '-subset-' . $sbkey;
																	?>
																	<span class="font-subset">
																		<input type="checkbox" id="<?php echo $slid; ?>" value="<?php echo $ssubset['subset_value']; ?>" class="selected-subset-checkbox" <?php echo ( $ssubset['subset_selected'] == 'true' ) ? 'checked' : ''; ?> />
																		<label style="" for="<?php echo $slid; ?>"><?php echo $ssubset['subset_value']; ?></label>
																	</span>
																	<?php
																}
																?>
															</div>
															<?php
														endif;
												?>
														<input type="button" class="button alignleft update-google-font-button btn btn-default" value="Update font" data-font_name="<?php echo $sfont['font_name']; ?>" />
														<span class="spinner fspinner"><i class="icon-refresh icon-spin icon-fw"></i></span>
														<div class="clear"></div>
													</div>
															<?php
														endif;
											?>
											</div>
														<?php
				}
			}
			?>
								</div>
							</div>

						</div>
					</div>
				</div><!-- row wrap uavc-gfont-->
			</div><!-- col-lg-12-->
			</div><!-- end of panel-->

										<?php
		}

		function refresh_google_fonts_list() {
			$fonts      = array();
			$temp_count = 0;
			$temp       = $this->retrieve_google_fonts_from_file();
			if ( ! empty( $temp ) ) {
				$temp_count = count( $temp );
			}
			$error = false;

			// die('000<die>{}');

			try {
				$url = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyD_6TR2RyX2VRf8bABDRXCcVqdMXB5FQvs';

				$stream_context = @stream_context_create(
					array(
						'http' =>
						array(
							'method'        => 'GET',
							'max_redirects' => '20',
							'ignore_errors' => true,
						),
						'ssl'  => array(
							'verify_peer'      => false,
							'verify_peer_name' => false,
						),
					)
				);

				// @ini_set('allow_url_fopen','Off');

				if ( function_exists( 'curl_init' ) ) {
					$curl = curl_init();
					curl_setopt( $curl, CURLOPT_RETURNTRANSFER, 1 );
					curl_setopt( $curl, CURLOPT_URL, $url );
					curl_setopt( $curl, CURLOPT_CONNECTTIMEOUT, 5 );
					curl_setopt( $curl, CURLOPT_TIMEOUT, 0 );
					curl_setopt( $curl, CURLOPT_SSL_VERIFYPEER, 0 );
					if ( $stream_context != null ) {
						$opts = stream_context_get_options( $stream_context );
						if ( isset( $opts['http']['method'] ) && Tools::strtolower( $opts['http']['method'] ) == 'post' ) {
							curl_setopt( $curl, CURLOPT_POST, true );
							if ( isset( $opts['http']['content'] ) ) {
								parse_str( $opts['http']['content'], $datas );
								curl_setopt( $curl, CURLOPT_POSTFIELDS, $datas );
							}
						}
					}
					$fonts = curl_exec( $curl );
					curl_close( $curl );
				} else {

					$fonts = Tools::file_get_contents( $url, false, $stream_context );
				}

				$fonts = json_decode( $fonts );
			} catch ( Exception $e ) {
				$error = true;
			}

			if ( $error != true || count( $fonts ) == 0 ) {

				$google_fonts      = $fonts->items;
				$google_font_count = count( $google_fonts );
				// Configuration::updateValue('ultimate_google_fonts',@serialize($google_fonts),true);
				if ( $this->save_google_fonts_to_file( @serialize( $google_fonts ) ) === false ) {
					$response['count']   = 0;
					$response['message'] = 'Fonts could not be saved in file which is mandatory.';
				} else {
					$response['count']   = ( $google_font_count - $temp_count );
					$response['message'] = ( $google_font_count - $temp_count ) . ' new fonts added. ';
				}
			} else {
				$response['count']   = 0;
				$response['message'] = 'Fonts could not be downloaded as there might be some issue with your server configuration.';
			}
			echo json_encode( $response );
			die();
		}

		function save_google_fonts_to_file( $fonts_string ) {
			$filename = jscomposer::get_module_dir( 'googlefonts/googlefonts.txt' );
			if ( file_exists( $filename ) && is_writable( $filename ) ) {
				return @file_put_contents( $filename, $fonts_string );
			}
			return false;
		}

		function retrieve_google_fonts_from_file() {
			$filename = jscomposer::get_module_dir( 'include/smartultimatevcaddons/googlefonts/googlefonts.txt' );
			return Tools::file_get_contents( $filename );
		}

		function get_google_fonts_list() {

			$google_fonts = $this->retrieve_google_fonts_from_file();

			$response = $fonts = array();
			if ( ! empty( $google_fonts ) ) :

				$google_fonts          = @unserialize( $google_fonts );
				$selected_google_fonts = Configuration::get( 'ultimate_selected_google_fonts' );
				$temp_selected         = array();
				if ( ! empty( $selected_google_fonts ) ) {
					$selected_google_fonts = @unserialize( $selected_google_fonts );
					foreach ( $selected_google_fonts as $selected_font ) {
						array_push( $temp_selected, $selected_font['font_name'] );
					}
				}
				$start_count      = Tools::getValue( 'start' );
				$fetch_count      = Tools::getValue( 'fetch' );
				$search           = trim( Tools::getValue( 'search' ) );
				$font_slice_array = array();
				if ( $search != '' ) {
					$temp = array();
					foreach ( $google_fonts as $tkey => $tfont ) {
						if ( stripos( $tfont->family, $search ) !== false ) {
							array_push( $temp, $google_fonts[ $tkey ] );
						}
					}
					$font_slice_array = $temp;
				} else {

					$font_slice_array = array_slice( $google_fonts, $start_count, $fetch_count );
				}
				$count = count( $font_slice_array );
				foreach ( $font_slice_array as $key => $tempfont ) {
					$fontinfo = array();
					if ( in_array( $tempfont->family, $temp_selected ) ) {
						$already_selected = 'true';
					} else {
						$already_selected = 'false';
					}
					$font_call = str_replace( ' ', '+', $tempfont->family );
					$variants  = $tempfont->variants;
					$subsets   = $tempfont->subsets;
					$fontinfo  = array(
						'font_name' => $tempfont->family,
						'font_call' => $font_call,
						'variants'  => $variants,
						'subsets'   => $subsets,
						'selected'  => $already_selected,
					);
					array_push( $fonts, $fontinfo );
				}

				$response['fonts']       = $fonts;
				$response['fonts_count'] = count( $google_fonts );
				if ( $search != '' ) {
					$response['is_search'] = 'true';
				} else {
					$response['is_search'] = 'false';
				}
				echo json_encode( $response );
			endif;
			die();
		}

		function add_selected_google_font() {
			$font_family = Tools::getValue( 'font_family' );
			$font_name   = Tools::getValue( 'font_name' );
			$variants    = Tools::getValue( 'variants' );
			$subsets     = Tools::getValue( 'subsets' );
			$fonts       = @unserialize( Configuration::get( 'ultimate_selected_google_fonts' ) );

			if ( empty( $fonts ) ) {
				$fonts = array();
			}
			$new_font = array(
				'font_family' => $font_family,
				'font_name'   => $font_name,
				'variants'    => $variants,
				'subsets'     => $subsets,
			);
			array_push( $fonts, $new_font );
			Configuration::updateValue( 'ultimate_selected_google_fonts', @serialize( $fonts ) );
			echo 'Added';
			die();
		}

		function delete_selected_google_font() {
			$font_name = Tools::getValue( 'font_name' );
			$fonts     = Configuration::get( 'ultimate_selected_google_fonts' );
			$fonts     = @unserialize( $fonts );
			foreach ( $fonts as $key => $font ) {
				if ( $font['font_name'] == $font_name ) {
					unset( $fonts[ $key ] );
				}
			}
			$fonts = array_values( $fonts );
			Configuration::updateValue( 'ultimate_selected_google_fonts', @serialize( $fonts ) );
			echo 'Deleted';
			die();
		}

		function update_selected_google_font() {
			$font_name = Tools::getValue( 'font_name' );
			$variants  = Tools::getValue( 'variants' );
			$subsets   = Tools::getValue( 'subsets' );
			$fonts     = @unserialize( Configuration::get( 'ultimate_selected_google_fonts' ) );
			foreach ( $fonts as $key => $font ) {
				if ( $font['font_name'] == $font_name ) {
					$fonts[ $key ]['variants'] = $variants;
					$fonts[ $key ]['subsets']  = $subsets;
					$x                         = $key;
				}
			}

			Configuration::updateValue( 'ultimate_selected_google_fonts', @serialize( $fonts ) );
			echo 'Updated';
			die();
		}

		function get_font_variants_callback() {
			$font_name              = Tools::getValue( 'font_name' );
			$fonts                  = @unserialize( Configuration::get( 'ultimate_selected_google_fonts' ) );
			$font_variants          = $json_variants = array();
			$default_variant_styles = array(
				0 => array(
					'label' => 'Underline',
					'style' => 'text-decoration:underline;',
					'type'  => 'checkbox',
					'group' => 'ultimate_defaults_styles',
					'class' => 'ultimate_defaults_styles',
				),
				1 => array(
					'label' => 'Italic',
					'style' => 'font-style:italic;',
					'type'  => 'checkbox',
					'group' => 'ultimate_defaults_styles',
					'class' => 'ultimate_defaults_styles',
				),
				2 => array(
					'label' => 'Bold',
					'style' => 'font-weight:bold;',
					'type'  => 'checkbox',
					'group' => 'ultimate_defaults_styles',
					'class' => 'ultimate_defaults_styles',
				),
			);
			foreach ( $fonts as $key => $font ) {
				if ( $font['font_name'] == $font_name ) {
					$font_variants = $fonts[ $key ]['variants'];
				}
			}
			if ( ! empty( $font_variants ) ) {
				$is_italic            = $is_weight = false;
				$uniq_grp             = uniqid( '_' );
				$pre_default_variants = array();
				foreach ( $font_variants as $key => $variant ) {
					if ( $variant['variant_selected'] == 'true' ) :
						$temp_array = array();
						$is_weight  = $is_italic = false;
						if ( preg_match( '/italic/i', $variant['variant_value'] ) && $weight = preg_replace( '/\D/', '', $variant['variant_value'] ) ) {
							$temp_array['label'] = $variant['variant_value'];
							$temp_array['style'] = 'font-style:italic;font-weight:' . $weight . ';';
							$is_italic           = true;
							$is_weight           = true;
						} elseif ( preg_match( '/italic/i', $variant['variant_value'] ) ) {
							$temp_array['label'] = $variant['variant_value'];
							$temp_array['style'] = 'font-style:italic;';
							$is_italic           = true;
						} elseif ( $weight = preg_replace( '/\D/', '', $variant['variant_value'] ) ) {
							$temp_array['label'] = $variant['variant_value'];
							$temp_array['style'] = 'font-weight:' . $weight . ';';
							$is_weight           = true;
						}
						$temp_array['type']  = 'radio';
						$temp_array['group'] = 'style_by_google' . $uniq_grp;
						$temp_array['class'] = 'style_by_google';
						array_push( $json_variants, $temp_array );
					endif;
				}
				array_push( $pre_default_variants, $default_variant_styles[0] ); // 2 for bold
				if ( $is_italic == false ) {
					array_push( $pre_default_variants, $default_variant_styles[1] ); // 2 for bold
				}
				if ( $is_weight == false ) {
					array_push( $pre_default_variants, $default_variant_styles[2] ); // 2 for bold
				}
				$json_variants = array_merge( $pre_default_variants, $json_variants );
			} else {
				$json_variants = $default_variant_styles;
			}
			echo json_encode( $json_variants );
			die();
		}

		function ultimate_google_fonts_settings( $settings, $value ) {
			$dependency = vc_generate_dependencies_attributes( $settings );
			$fonts      = Configuration::get( 'ultimate_selected_google_fonts' );
			$html       = '<div class="ultimate_google_font_param_block">';
			$html      .= '<input type="hidden" name="' . $settings['param_name'] . '" class="wpb_vc_param_value vc-ultimate-google-font ' . $settings['param_name'] . ' ' . $settings['type'] . '_field" value="' . $value . '" ' . $dependency . '/>';
			// $html .= '<form class="google-fonts-form">';
			$html .= '<select name="font_family" class="google-font-list">';
			$html .= '<option value="">Default</option>';
			if ( ! empty( $fonts ) ) :

				$fonts = @unserialize( $fonts );
				foreach ( $fonts as $key => $font ) {
					$selected = '';
					if ( $font['font_name'] == $value ) {
						$selected = 'selected';
					}
					$html .= '<option value="' . $font['font_name'] . '" ' . $selected . '>' . $font['font_name'] . '</option>';
				}
			endif;
			$html .= '</select>';
			// $html .= '</form>';
			$html .= '</div>';
			return $html;
		}

		function ultimate_google_fonts_style_settings( $settings, $value ) {
			$dependency = vc_generate_dependencies_attributes( $settings );
			$html       = '<input type="hidden" name="' . $settings['param_name'] . '" class="wpb_vc_param_value ugfont-style-value ' . $settings['param_name'] . ' ' . $settings['type'] . '_field" value="' . $value . '" ' . $dependency . '/>';
			$html      .= '<div class="ultimate_fstyle"></div>';
			return $html;
		}

	}

								// Instantiate the Google Font Manager
	// new Ultimate_Google_Font_Manager;
}
if ( ! function_exists( 'enquque_ultimate_google_fonts' ) ) {
	function enquque_ultimate_google_fonts( $enqueue_fonts ) {

		$selected_fonts = Configuration::get( 'ultimate_selected_google_fonts' );

		$selected_fonts = @unserialize( $selected_fonts );

		$skip_font_enqueue = '';// apply_filters( 'enquque_ultimate_google_fonts_skip', false );

		if ( true == $skip_font_enqueue ) {
			return '';
		}

		$fonts       = array();
		$subset_call = '';
		if ( ! empty( $enqueue_fonts ) ) {

			foreach ( $enqueue_fonts as $key => $efont ) {
				$font_name = $font_call = $font_variant = '';
				$font_arr  = $font_call_arr = $font_weight_arr = array();
				$font_arr  = explode( '|', $efont );

				if ( isset( $font_arr[1] ) ) {
					$font_call_arr = explode( ':', $font_arr[1] );
					if ( isset( $font_arr[2] ) ) {
						$font_weight_arr = explode( ':', $font_arr[2] );
					}
					if ( isset( $font_call_arr[1] ) && $font_call_arr[1] != '' ) {
						// echo '<pre>';
						// print_r($selected_fonts);
						// echo '</pre>';
						$font_call = $font_call_arr[1];
						$font_name = $font_call_arr[1];
						if ( isset( $selected_fonts['value'] ) ) {
							$selected_fonts = @unserialize( $selected_fonts['value'] );
						} else {
							$selected_fonts = $selected_fonts;
						}

						// foreach($selected_fonts as $sfont)
						// {
						// if($sfont['font_family'] == $font_name)
						// {
						// if(!empty($sfont['subsets']))
						// {
						// $subset_array = array();
						// foreach($sfont['subsets'] as $tsubset)
						// {
						// if($tsubset['subset_selected'] == 'true')
						// array_push($subset_array, $tsubset['subset_value']);
						// }
						// if(!empty($subset_array)) :
						// $subset_call = '&subset=';
						// $j = count($subset_array);
						// foreach($subset_array as $subkey => $subset)
						// {
						// $subset_call .= $subset;
						// if(($j-1) != $subkey)
						// $subset_call .= ',';
						// }
						// endif;
						// }
						// }
						// }

						if ( isset( $font_weight_arr[1] ) && $font_weight_arr[1] != '' ) {
							$font_variant = $font_weight_arr[1];
						}
						$eq_name = str_replace( ' ', '-', $font_name );
						if ( $font_variant != '' || $font_variant != 'regular' ) {
							$font_call .= ':' . $font_variant;
							$eq_name   .= '-' . $font_variant;
						}
						if( $font_call != ''){
							$link = 'https://fonts.googleapis.com/css?family=' . $font_call . $subset_call;

						}
						echo '<link rel="stylesheet" href="' . $link . '" type="text/css" media="all">';
						// if (!wp_script_is( 'ultimate-'.$eq_name, 'registered' ))
						// {
						// wp_register_style('ultimate-'.$eq_name,$link);
						// wp_enqueue_style('ultimate-'.$eq_name);
						// }
						// else if(wp_script_is( 'ultimate-'.$eq_name, 'registered' ))
						// {
						// wp_enqueue_style('ultimate-'.$eq_name);
						// }
					}
				} else // font is without varients
				{
					$eq_name = $font_arr[0];
					if($eq_name != ''){
						$link    = 'https://fonts.googleapis.com/css?family=' . $eq_name;
						echo '<link rel="stylesheet" href="' . $link . '" type="text/css" media="all">';
					}
					
					// if($eq_name != '')
					// {
					// if (!wp_script_is( 'ultimate-'.$eq_name, 'registered' ))
					// {
					// wp_register_style('ultimate-'.$eq_name,$link);
					// wp_enqueue_style('ultimate-'.$eq_name);
					// }
					// else if(wp_script_is( 'ultimate-'.$eq_name, 'registered' ))
					// {
					// wp_enqueue_style('ultimate-'.$eq_name);
					// }
					// }
				}
			}
		}
	}
}
if ( ! function_exists( 'get_ultimate_font_family' ) ) {
	function get_ultimate_font_family( $font_attributes ) {
		if ( ! empty( $font_attributes ) ) {
			$font_family_arr = explode( '|', $font_attributes );
			$font_family_str = $font_family_arr[0];
			$font_family     = explode( ':', $font_family_str );
			if ( isset( $font_family[1] ) && $font_family[1] != '' ) {
				return $font_family[1];
			} else {
				return '';
			}
		} else {
			return '';
		}
	}
}
if ( ! function_exists( 'get_ultimate_font_style' ) ) {
	function get_ultimate_font_style( $font_style ) {
		$weight_match = 0;
		$temp         = '';
		if ( $font_style != '' ) {
			$font_styles = explode( ',', $font_style ); // split by comma<strong></strong>
			foreach ( $font_styles as $fstyle ) {
				$temp .= $fstyle; // convert to css
				if ( preg_match( '/font-weight:/i', $fstyle ) ) {
					$weight_match++;
				}
			}
		}
		// hack to font weight to normal if font weight not available
		if ( $weight_match == 0 ) {
			$temp .= 'font-weight:normal;';
		}
		return $temp;
	}
}
if ( ! function_exists( 'enquque_ultimate_google_fonts_optimzed' ) ) {
	function enquque_ultimate_google_fonts_optimzed( $enqueue_fonts ) {

		$selected_fonts = apply_filters( 'enquque_selected_ultimate_google_fonts', get_option( 'ultimate_selected_google_fonts' ) );

		$skip_font_enqueue = apply_filters( 'enquque_ultimate_google_fonts_skip', false );

		if ( true == $skip_font_enqueue ) {
			return '';
		}

		$main        = $subset_main_array = $fonts = array();
		$subset_call = '';

		if ( ! empty( $enqueue_fonts ) ) {
			$font_count = 0;
			foreach ( $enqueue_fonts as $key => $efont ) {
				$font_name = $font_call = $font_variant = '';
				$font_arr  = $font_call_arr = $font_weight_arr = array();
				$font_arr  = explode( '|', $efont );

				$font_name = trim( $font_arr[0] );

				if ( ! isset( $main[ $font_name ] ) ) {
					$main[ $font_name ] = array();
				}

				if ( ! empty( $font_name ) ) :

					$font_count++;
					if ( isset( $font_arr[1] ) ) {
						$font_call_arr = explode( ':', $font_arr[1] );

						if ( isset( $font_arr[2] ) ) {
							$font_weight_arr = explode( ':', $font_arr[2] );
						}

						if ( isset( $font_call_arr[1] ) && $font_call_arr[1] != '' ) {
							$font_variant  = $font_call_arr[1];
							$pre_font_call = $font_name;

							if ( $font_variant != '' && $font_variant !== 'regular' ) {
								$main[ $font_name ]['varients'][] = $font_variant;
								array_push( $main[ $font_name ]['varients'], $font_variant );
								if ( ! empty( $main[ $font_name ]['varients'] ) ) {
									$main[ $font_name ]['varients'] = array_values( array_unique( $main[ $font_name ]['varients'] ) );
								}
							}
						}
					}

					foreach ( $selected_fonts as $sfont ) {
						if ( $sfont['font_family'] == $font_name ) {
							if ( ! empty( $sfont['subsets'] ) ) {
								$subset_array = array();
								foreach ( $sfont['subsets'] as $tsubset ) {
									if ( $tsubset['subset_selected'] == 'true' ) {
										array_push( $subset_array, $tsubset['subset_value'] );
									}
								}
								if ( ! empty( $subset_array ) ) :
									$subset_call = '';
									$j           = count( $subset_array );
									foreach ( $subset_array as $subkey => $subset ) {
										$subset_call .= $subset;
										if ( ( $j - 1 ) != $subkey ) {
											$subset_call .= ',';
										}
									}
									array_push( $subset_main_array, $subset_call );
								endif;
							}
						}
					}
				endif;
			}

			$link       = 'https://fonts.googleapis.com/css?family=';
			$main_count = count( $main );
			$mcount     = 0;

			foreach ( $main as $font => $font_data ) {
				if ( $font !== '' ) {
					$link .= $font;
					if ( $font == 'Open+Sans+Condensed' && empty( $font_data['varients'] ) ) {
						$link .= ':300';
					}
					if ( ! empty( $font_data['varients'] ) ) {
						$link         .= ':regular,';
						$varient_count = count( $font_data['varients'] );
						foreach ( $font_data['varients'] as $vkey => $varient ) {
							$link .= $varient;
							if ( ( $varient_count - 1 ) != $vkey ) {
								$link .= ',';
							}
						}
					}

					if ( ! empty( $font_data['subset'] ) ) {
						$subset_string .= '&subset=' . $font_data['subset'];
					}

					if ( $mcount != ( $main_count - 1 ) ) {
						$link .= '|';
					}
					$mcount++;
				}
			}

			$subset_string = '';

			if ( ! empty( $subset_array ) ) {
				$subset_main_array = array_unique( $subset_main_array );

				$subset_string     = '&subset=';
				$subset_count      = count( $subset_main_array );
				$subset_main_array = array_values( $subset_main_array );

				foreach ( $subset_main_array as $skey => $subset ) {
					if ( $subset !== '' ) {
						$subset_string .= $subset;
						if ( ( $subset_count - 1 ) != $skey ) {
							$subset_string .= ',';
						}
					}
				}
			}

			$font_api_call = $link . $subset_string;

			if ( $font_count > 0 ) {
				wp_enqueue_style( 'ultimate-google-fonts', $font_api_call, array(), null );
			}
		}
	}
}
