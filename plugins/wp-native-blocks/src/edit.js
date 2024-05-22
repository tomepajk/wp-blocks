/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {useBlockProps, RichText, MediaUpload, MediaUploadCheck} from '@wordpress/block-editor';
import {PanelBody, TextControl, Button} from '@wordpress/components';
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
export default function Edit({attributes, setAttributes}) {
	const {
		eyebrow,
		title,
		description,
		buttonText,
		buttonUrl,
		imageId,
		imageUrl
	} = attributes;

	const selectImage = ({id, url}) => {
		setAttributes({
			imageId: id,
			imageUrl: url
		});
	}

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody title="CTA Settings">
					<TextControl
						value={buttonUrl}
						label={__('Button Link')}
						onChange={(newButtonUrl) => setAttributes({buttonUrl: newButtonUrl})}
					></TextControl>
				</PanelBody>
			</InspectorControls>
			<div className="two-halves-block">
				<div className="image_id-side">
					<MediaUploadCheck>
						<MediaUpload
							onSelect={selectImage}
							value={ imageId }
							render={ ( { open } ) => (
								<Button onClick={ open }>Open Media Library</Button>
							) }
						/>
						{imageUrl && (
							<img src={imageUrl} />
						)}
					</MediaUploadCheck>
				</div>
				<div className="content-side">
					<RichText
						tagName="div"
						value={eyebrow}
						className="eyebrow"
						placeholder="Add Eyebrow"
						onChange={(newEyebrow) => setAttributes({eyebrow: newEyebrow})}
					/>

					<RichText
						tagName="div"
						value={title}
						className="title"
						placeholder="Add Eyebrow"
						Tutke
						onChange={(newTitle) => setAttributes({title: newTitle})}
					/>
					<RichText
						tagName="div"
						value={description}
						className="description"
						placeholder="Add Description"
						onChange={(newDescription) => setAttributes({description: newDescription})}
					/>

					<RichText
						tagName="div"
						className="button"
						value={buttonText}
						placeholder="Add Button Text"
						onChange={(newButtonText) => setAttributes({buttonText: newButtonText})}
					/>
				</div>
			</div>

		</div>
	);
}
