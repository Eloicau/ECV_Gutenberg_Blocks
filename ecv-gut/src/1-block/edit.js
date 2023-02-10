import { __ } from '@wordpress/i18n'
import { useBlockProps, MediaUpload, MediaUploadCheck, RichText } from '@wordpress/block-editor'
import { Placeholder, Button } from '@wordpress/components'

import './editor.scss'

export default function Edit(props) {
	const blockProps = useBlockProps()

	
	const onChangeContent = content => {
		props.setAttributes( { content: content } )
	}
	

	const onSelectImage = picture => {

		console.log(picture)

		props.setAttributes({
			pictureID: picture.id,
			pictureURL: picture.url,
			pictureAlt: picture.alt,
		})
	}

	const onRemoveImage = () => {
		props.setAttributes({
			pictureID: null,
			pictureURL: null,
			pictureAlt: null,
		})
	}

	return (
		<div {...blockProps}>
			{!props.attributes.pictureID ? (
				<MediaUploadCheck>
					<MediaUpload
						onSelect={onSelectImage}
						allowedTypes={['image']}
						value={props.attributes.pictureID}
						render={({ open }) => (
							<Placeholder
								icon="images-alt"
								label={__('Photo', 'ecv-gut')}
								instructions={__('Sélectionnez une photo', 'ecv-gut')}
							>
								<Button
									isSecondary
									isLarge
									onClick={open}
									icon="upload"
								>
									{__('Importer', 'ecv-gut')}
								</Button>
							</Placeholder>
						)}
					/>
				</MediaUploadCheck>

			) : (

				<div className="gut-image-wrapper">
					<img
						src={props.attributes.pictureURL}
						alt={props.attributes.pictureAlt}
					/>

					{props.isSelected && (

						<Button
							className="gut-remove-image"
							onClick={onRemoveImage}
							icon="dismiss"
						>
							{__('Supprimer', 'ecv-gut')}
						</Button>



					)}

					<p className="gut-image-text">
						<RichText
							tagName="p"
							placeholder={__('Vous pouvez écrire ici', 'ecv-gut')}
							value={props.attributes.content}
							className="content"
							onChange={onChangeContent}
						/>
					</p>

				</div>
			)}
		</div>

	)
}
