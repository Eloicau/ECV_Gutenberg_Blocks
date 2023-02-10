import { __ } from '@wordpress/i18n'
import { useBlockProps, RichText } from '@wordpress/block-editor'

export default function save(props) {
	const blockProps = useBlockProps.save()

	return (
		props.attributes.pictureID && (
			<div {...blockProps}>
				<img src={props.attributes.pictureURL} alt={props.attributes.pictureAlt} />
				<p><RichText.Content
					tagName="p"
					className="content"
					value={props.attributes.content}
				/></p>
			</div>
		)
	)
}
