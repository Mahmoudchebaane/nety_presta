<?php
/**
 * WPBakery Visual Composer Main manager.
 *
 * @package WPBakeryVisualComposer
 * @since   4.2
 */
/**
 * Vc mapper new class.
 *
 * This class maps shortcodes settings to VC editors. You can manage add new shortcodes or manage default shortcodes
 * mapped in config/map.php. For developers it is possible to use API functions to add update settings attributes.
 *
 * @see   config/map.php
 * @see   include/helpers/helpers_api.php
 * @since 3.1
 */
class WPBMap {






	protected static $sc              = array();
	protected static $categories      = array();
	protected static $user_sc         = false;
	protected static $user_sorted_sc  = false;
	protected static $user_categories = false;
	protected static $settings, $user_role;
	protected static $tags_regexp;
	protected static $is_init = false;

	/**
	 * Set init status fro WPMap.
	 *
	 * if $is_init is FALSE, then all activity like add, update and delete for shortcodes attributes will be hold in
	 * the list of activity and will be executed after initialization.
	 *
	 * @see    Vc_Mapper::iniy.
	 * @static
	 * @param  bool $value
	 */
	public static function setInit( $value = true ) {
		self::$is_init = $value;
	}

	/**
	 * Gets user role and access rules for current user.
	 *
	 * @static
	 * @return mixed
	 */
	protected static function getSettings() {
		return false; // prestashop

		global $current_user;

		if ( self::$settings === null ) {
			if ( function_exists( 'get_currentuserinfo' ) ) {
				get_currentuserinfo();
				/**
				* @var $settings - get use group access rules
*/
				if ( ! empty( $current_user->roles ) ) {
					self::$user_role = $current_user->roles[0];
				} else {
					self::$user_role = 'author';
				}
			} else {
				self::$user_role = 'author';
			}
			self::$settings = vc_settings()->get( 'groups_access_rules' );
		}

		return self::$settings;
	}

	/**
	 * Check is shortcode with a tag mapped to VC.
	 *
	 * @static
	 * @param  $tag - shortcode tag.
	 * @return bool
	 */
	public static function exists( $tag ) {
		return (bool) isset( self::$sc[ $tag ] );
	}

	/**
	 * Map shortcode to VC.
	 *
	 * This method maps shortcode to VC.
	 * You need to shortcode's tag and  settings to map correctly.
	 * Default shortcodes are mapped in config/map.php file.
	 * The best way is to call this method with "init" action callback function of WP.
	 *
	 * @static
	 * @param  $tag
	 * @param  $attributes
	 * @return bool
	 */
	public static function map( $tag, $attributes ) {

		$vc_main = vc_manager();

		if ( ! self::$is_init ) {
			vc_mapper()->addActivity(
				'mapper',
				'map',
				array(
					'tag'        => $tag,
					'attributes' => $attributes,
				)
			);
			return false;
		}
		if ( empty( $attributes['name'] ) ) {
			trigger_error( sprintf( $vc_main->l( 'Wrong name for shortcode:%s. Name required' ), $tag ) );
		} elseif ( empty( $attributes['base'] ) ) {
			trigger_error( sprintf( $vc_main->l( 'Wrong base for shortcode:%s. Base required' ), $tag ) );
		} else {

			if ( isset( self::$sc[ $tag ] ) ) {
				return;
			}

			self::$sc[ $tag ]           = $attributes;
			self::$sc[ $tag ]['params'] = array();
			if ( ! empty( $attributes['params'] ) ) {

				foreach ( $attributes['params'] as $attribute ) {

					if ( isset( JsComposer::$sds_action_hooks[ 'vc_mapper_attribute_' . $attribute['type'] ] ) ) {
						$attribute = call_user_func( JsComposer::$sds_action_hooks[ 'vc_mapper_attribute_' . $attribute['type'] ], $attribute );
					}
					self::$sc[ $tag ]['params'][] = $attribute;
				}
			}

			visual_composer()->addShortCode( self::$sc[ $tag ] );

		}
	}

	/**
	 * Generates list of shortcodes taking into account the access rules for shortcodes from VC Settings page.
	 *
	 * This method parses the list of mapped shortcodes and creates categories list for users.
	 *
	 * @static
	 * @param  bool $force - force data generation even data already generated.
	 */
	protected static function generateUserData( $force = false ) {

		if ( ! $force && self::$user_sc !== false && self::$user_categories !== false ) {
			return;
		}

		$settings      = self::getSettings();
		self::$user_sc = self::$user_categories = self::$user_sorted_sc = array();

		foreach ( self::$sc as $name => $values ) {

			if ( in_array( $name, array( 'vc_column', 'vc_row', 'vc_row_inner', 'vc_column_inner' ) ) || ! isset( $settings[ self::$user_role ]['shortcodes'] )
				|| ( isset( $settings[ self::$user_role ]['shortcodes'][ $name ] ) && (int) $settings[ self::$user_role ]['shortcodes'][ $name ] == 1 )
			) {
				if ( ! isset( $values['content_element'] ) || $values['content_element'] === true ) {
					$categories              = isset( $values['category'] ) ? $values['category'] : '_other_category_';
					$values['_category_ids'] = array();
					if ( is_array( $categories ) ) {
						foreach ( $categories as $c ) {
							if ( array_search( $c, self::$user_categories ) === false ) {
								self::$user_categories[] = $c;
							}
							$values['_category_ids'][] = md5( $c ); // array_search($category, self::$categories);
						}
					} else {
						if ( array_search( $categories, self::$user_categories ) === false ) {
							self::$user_categories[] = $categories;
						}
						$values['_category_ids'][] = md5( $categories ); // array_search($category, self::$categories);
					}
				}
				self::$user_sc[ $name ] = $values;
				self::$user_sorted_sc[] = $values;

			}
		}
		@usort( self::$user_sorted_sc, array( 'WPBMap', 'sort' ) );
	}
	/*
	* Force to generate external data
	* for prestashop
	*/

	public static function wpb_generate_custom_shortcodes() {

		self::generateUserData( true );
	}
	/**
	 * Get mapped shortcode settings.
	 *
	 * @static
	 * @return array
	 */
	public static function getShortCodes() {

		return self::$sc;
	}

	/**
	 * Get sorted list of mapped shortcode settings for current user.
	 *
	 * Sorting depends on the weight attribute and mapping order.
	 *
	 * @static
	 * @return array
	 */
	public static function getSortedUserShortCodes() {
		self::generateUserData();
		return self::$user_sorted_sc;
	}

	/**
	 * Get list of mapped shortcode settings for current user.
	 *
	 * @static
	 * @return array - associated array of shortcodes settings with tag as the key.
	 */
	public static function getUserShortCodes() {
		self::generateUserData();
		return self::$user_sc;
	}

	/**
	 * Get mapped shortcode settings by tag.
	 *
	 * @static
	 * @param  $tag - shortcode tag.
	 * @return array
	 */
	public static function getShortCode( $tag ) {
		return self::$sc[ $tag ];
	}

	/**
	 * Get all categories for mapped shortcodes.
	 *
	 * @static
	 * @return array
	 */
	public static function getCategories() {
		return self::$categories;
	}

	/**
	 * Get all categories for current user.
	 *
	 * Category is added to the list when at least one shortcode of this category is allowed for current user
	 * by Vc access rules.
	 *
	 * @static
	 * @return bool
	 */
	public static function getUserCategories() {
		self::generateUserData();
		return self::$user_categories;
	}

	/**
	 * Drop shortcode param.
	 *
	 * @static
	 * @param  $name
	 * @param  $attribute_name
	 */
	public static function dropParam( $name, $attribute_name ) {
		if ( ! self::$is_init ) {
			vc_mapper()->addActivity(
				'mapper',
				'drop_param',
				array(
					'name'           => $name,
					'attribute_name' => $attribute_name,
				)
			);
			return;
		}
		foreach ( self::$sc[ $name ]['params'] as $index => $param ) {
			if ( $param['param_name'] == $attribute_name ) {
				array_splice( self::$sc[ $name ]['params'], $index, 1 );
				return;
			}
		}
	}

	/**
	 * Returns param settings for mapped shortcodes.
	 *
	 * @static
	 * @param  $tag
	 * @param  $param_name
	 *
	 * @return bool| array
	 */
	public static function getParam( $tag, $param_name ) {
		$vc_manager = vc_manager();

		if ( ! isset( self::$sc[ $tag ] ) ) {
			return trigger_error( sprintf( $vc_manager->l( 'Wrong name for shortcode:%s. Name required' ), $tag ) );
		}
		$param_name_list = array();

		foreach ( self::$sc[ $tag ]['params'] as $index => $param ) {
			$param_name_list[] = $param['param_name'];
		}

		foreach ( self::$sc[ $tag ]['params'] as $index => $param ) {
			$pos = array_search( $param_name, $param_name_list );
			if ( $pos === false ) {
				return false;
			} else {
				return self::$sc[ $tag ]['params'][ $pos ];
			}
		}
	}

	/**
	 * Add new param to shortcode params list.
	 *
	 * @static
	 * @param  $name
	 * @param  array $attribute
	 * @return bool
	 */
	public static function addParam( $name, $attribute = array() ) {
		$vc_main = vc_manager();
		if ( ! self::$is_init ) {
			vc_mapper()->addActivity(
				'mapper',
				'add_param',
				array(
					'name'      => $name,
					'attribute' => $attribute,
				)
			);
			return;
		}
		if ( ! isset( self::$sc[ $name ] ) ) {
			return trigger_error( sprintf( $vc_main->l( 'Wrong name for shortcode:%s. Name required' ), $name ) );
		} elseif ( ! isset( $attribute['param_name'] ) ) {
			trigger_error( sprintf( $vc_main->l( "Wrong attribute for '%s' shortcode. Attribute 'param_name' required" ), $name ) );
		} else {

			$replaced = false;

			foreach ( self::$sc[ $name ]['params'] as $index => $param ) {
				if ( $param['param_name'] == $attribute['param_name'] ) {
					$replaced                              = true;
					self::$sc[ $name ]['params'][ $index ] = $attribute;
				}
			}
			if ( $replaced === false ) {
				self::$sc[ $name ]['params'][] = $attribute;
			}
			visual_composer()->addShortCode( self::$sc[ $name ] );
		}
	}

	/**
	 * Change param attributes of mapped shortcode.
	 *
	 * @static
	 * @param  $name
	 * @param  array $attribute
	 * @return bool
	 */
	public static function mutateParam( $name, $attribute = array() ) {
		$vc_main = vc_manager();
		if ( ! self::$is_init ) {
			vc_mapper()->addActivity(
				'mapper',
				'mutate_param',
				array(
					'name'      => $name,
					'attribute' => $attribute,
				)
			);
			return false;
		}
		if ( ! isset( self::$sc[ $name ] ) ) {
			return trigger_error( sprintf( $vc_main->l( 'Wrong name for shortcode:%s. Name required' ), $name ) );
		} elseif ( ! isset( $attribute['param_name'] ) ) {
			trigger_error( sprintf( $vc_main->l( "Wrong attribute for '%s' shortcode. Attribute 'param_name' required" ), $name ) );
		} else {

			$replaced = false;

			foreach ( self::$sc[ $name ]['params'] as $index => $param ) {
				if ( $param['param_name'] == $attribute['param_name'] ) {
					$replaced                              = true;
					self::$sc[ $name ]['params'][ $index ] = array_merge( $param, $attribute );
				}
			}

			if ( $replaced === false ) {
				self::$sc[ $name ]['params'][] = $attribute;
			}

			visual_composer()->addShortCode( self::$sc[ $name ] );
		}
		return true;
	}

	/**
	 * Removes shortcode from mapping list.
	 *
	 * @static
	 * @param  $name
	 * @return bool
	 */
	public static function dropShortcode( $name ) {
		if ( ! self::$is_init ) {
			vc_mapper()->addActivity(
				'mapper',
				'drop_shortcode',
				array(
					'name' => $name,
				)
			);
			return false;
		}
		unset( self::$sc[ $name ] );
		visual_composer()->removeShortCode( $name );

	}

	/**
	 * Modify shortcode's mapped settings.
	 * You can modify only one option of the group options.
	 * Call this method with $settings_name param as associated array to mass modifications.
	 *
	 * @static
	 * @param  $name         - shortcode' name.
	 * @param  $setting_name - option key name or the array of options.
	 * @param  value        - value of settings if                    $setting_name is option key.
	 * @return array|bool
	 */
	public static function modify( $name, $setting_name, $value = '' ) {
		$vc_main = vc_manager();
		if ( ! self::$is_init ) {
			vc_mapper()->addActivity(
				'mapper',
				'modify',
				array(
					'name'         => $name,
					'setting_name' => $setting_name,
					'value'        => $value,
				)
			);
			return false;
		}
		if ( ! isset( self::$sc[ $name ] ) ) {
			return trigger_error( sprintf( $vc_main->l( 'Wrong name for shortcode:%s. Name required' ), $name ) );
		} elseif ( $setting_name === 'base' ) {
			return trigger_error( sprintf( $vc_main->l( "Wrong setting_name for shortcode:%s. Base can't be modified." ), $name ) );
		}
		if ( is_array( $setting_name ) ) {
			foreach ( $setting_name as $key => $value ) {
				self::modify( $name, $key, $value );
			}
		} else {
			self::$sc[ $name ][ $setting_name ] = $value;
			visual_composer()->updateShortcodeSetting( $name, $setting_name, $value );
		}
		return self::$sc;
	}

	/**
	 * Returns "|" separated list of mapped shortcode tags.
	 *
	 * @static
	 * @return string
	 */
	public static function getTagsRegexp() {
		if ( empty( self::$tags_regexp ) ) {
			self::$tags_regexp = implode( '|', array_keys( self::$sc ) );
		}
		return self::$tags_regexp;
	}

	/**
	 * Sorting method for WPBMap::generateUserData method. Called by usort php function.
	 *
	 * @static
	 * @param  $a
	 * @param  $b
	 * @return int
	 */
	public static function sort( $a, $b ) {
		$a_weight = isset( $a['weight'] ) ? (int) $a['weight'] : 0;
		$b_weight = isset( $b['weight'] ) ? (int) $b['weight'] : 0;
		if ( $a_weight == $b_weight ) {
			$cmpa = array_search( $a, self::$user_sorted_sc );
			$cmpb = array_search( $b, self::$user_sorted_sc );
			return ( $cmpa > $cmpb ) ? 1 : - 1;
		}
		return ( $a_weight < $b_weight ) ? 1 : - 1;
	}
}
