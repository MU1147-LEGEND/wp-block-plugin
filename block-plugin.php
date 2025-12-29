<?php

/**
 * Plugin Name: Block Plugin
 * Description: Block plugin test
 * Plugin URI: #
 * Author: Mohammad Ullah
 * Author URI: #
 */

function block_plugin_init(){
    register_block_type_from_metadata( __DIR__ );
}

add_action("init", "block_plugin_init");