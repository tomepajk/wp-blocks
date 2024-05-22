<?php
$image_id = get_field('image');
$eyebrow = get_field('eyebrow');
$title = get_field('title');
$description = get_field('description');
$button_text = get_field('button_text');
$button_url = get_field('button_url');
?>
<div class="two-halves-block">
	<div class="image_id-side">
		<?php if( $image_id ): ?>
			<?php echo wp_get_attachment_image($image_id, 'full') ?>
		<?php endif; ?>
	</div>
	<div class="content-side">
		<?php if( $eyebrow ): ?>
			<div class="eyebrow"><?php echo esc_html($eyebrow); ?></div>
		<?php endif; ?>
		<?php if( $title ): ?>
			<h2 class="title"><?php echo esc_html($title); ?></h2>
		<?php endif; ?>
		<?php if( $description ): ?>
			<p class="description"><?php echo esc_html($description); ?></p>
		<?php endif; ?>
		<?php if( $button_text && $button_url ): ?>
			<a class="button" href="<?php echo esc_url($button_url); ?>"><?php echo esc_html($button_text); ?></a>
		<?php endif; ?>
	</div>
</div>
