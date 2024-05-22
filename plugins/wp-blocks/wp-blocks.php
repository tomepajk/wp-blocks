<?php
/*
Plugin Name: WP Blocks Plugin
Description: A plugin to add custom Gutenberg blocks to WordPress.
Version: 1.0.0
Author: Your Name
Author URI: https://yourwebsite.com
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: wp-blocks
Domain Path: /languages
*/

/*
 * WP Blocks Plugin
 *
 * This plugin adds custom blocks to the Gutenberg editor in WordPress.
 *
 * @package WP_Blocks_Plugin
 * @version 1.0.0
 * @author Your Name
 * @license GPLv2 or later
 * @link https://yourwebsite.com
 */

// If this file is called directly, abort.
if (!defined('ABSPATH')) {
	exit;
}

// Save the ACF JSON folder in the plugin
function wp_blocks_acf_json_save_point( $path ) {
	$path = plugin_dir_path(__FILE__) . 'acf-json';
	return $path;
}
add_filter('acf/settings/save_json', 'wp_blocks_acf_json_save_point');


/**
 * Define the load point for ACF JSON.
 *
 * @param array $paths The paths where ACF JSON files will be loaded.
 * @return array The modified paths.
 */
function wp_blocks_acf_json_load_point( $paths ) {
	unset($paths[0]); // Remove original path (optional).
	$paths[] = plugin_dir_path(__FILE__) . 'acf-json';
	return $paths;
}
add_filter('acf/settings/load_json', 'wp_blocks_acf_json_load_point');



// Register an ACF block with the partials/blocks/example
function wp_blocks_register_acf_block() {
	// check function exists.
	if( function_exists('acf_register_block') ) {
		// register a form block.
		acf_register_block(array(
			'name'				=> 'acf-example',
			'title'				=> 'ACF Example',
			'description'		=> 'A custom form intro block.',
			'render_template'   => plugin_dir_path(__FILE__) . 'partials/blocks/example/example.php',
			'category'			=> 'formatting',
			'icon'				=> 'admin-comments',
		));
	}
}
add_action('acf/init', 'wp_blocks_register_acf_block');


// Enqueue the block's assets in assets/style.css
function wp_blocks_enqueue_assets() {
	wp_enqueue_style(
		'wp-blocks-style',
		plugin_dir_url(__FILE__) . 'assets/style.css',
		array(),
		filemtime(plugin_dir_path(__FILE__) . 'assets/style.css')
	);
}

add_action('enqueue_block_assets', 'wp_blocks_enqueue_assets');

