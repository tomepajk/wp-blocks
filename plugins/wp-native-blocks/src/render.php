<?php

$eyebrow = isset($attributes['eyebrow']) ? $attributes['eyebrow'] : '';
$title = isset($attributes['title']) ? $attributes['title'] : '';
$description = isset($attributes['description']) ? $attributes['description'] : '';
$button_text = isset($attributes['buttonText']) ? $attributes['buttonText'] : '';
$button_url = isset($attributes['buttonUrl']) ? $attributes['buttonUrl'] : '';
$image_id = isset($attributes['imageID']) ? $attributes['imageID'] : false;

?>
<div class="two-halves-block">
	<div class="image_id-side">
		<?php echo wp_get_attachment_image($image_id, 'full'); ?>
	<div class="content-side">
		<div class="eyebrow">
			<?php echo esc_html($eyebrow); ?>
		</div>
		<h2 class="title">
			<?php echo esc_html($title); ?>
		</h2>
		<p class="description">
			<?php echo wp_kses_post($description); ?>
		</p>
		<?php if($button_text && $button_url) { ?>
		<a class="button" href="<?php echo esc_url($button_url); ?>">
			<?php echo esc_html($button_text); ?>
		</a>
		<?php } ?>
	</div>
</div>
