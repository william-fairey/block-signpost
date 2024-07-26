import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { href, target } = attributes;
	const blockProps = useBlockProps.save();

	return (
		<div>
			<a href={href} target={target} rel="noopener" {...blockProps}>
				<InnerBlocks.Content />
			</a>
		</div>
	);
}
