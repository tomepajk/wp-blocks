/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<div className="two-halves-block">
				<div className="image_id-side">
					<img fetchpriority="high" decoding="async" width="640" height="427"
						 src="http://wp-blocks.local/wp-content/uploads/2024/05/dog-7719758_640.jpg"
						 className="attachment-full size-full" alt=""
						 srcSet="http://wp-blocks.local/wp-content/uploads/2024/05/dog-7719758_640.jpg 640w, http://wp-blocks.local/wp-content/uploads/2024/05/dog-7719758_640-300x200.jpg 300w"
						 sizes="(max-width: 640px) 100vw, 640px"/></div>
				<div className="content-side">
					<div className="eyebrow">
						Eyebrow
					</div>
					<h2 className="title">
						Title
					</h2>
					<p className="description">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<a className="button" href="https://www.google.com">
						Click Here
					</a>
				</div>
			</div>

		</div>
	);
}
