import {
	useBlockProps,
	InnerBlocks,
	BlockControls,
	__experimentalLinkControl as LinkControl,
} from "@wordpress/block-editor";
import { ToolbarButton, Popover } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { link } from "@wordpress/icons";

export default function Edit({ attributes, setAttributes }) {
	const { href, target } = attributes;
	const blockProps = useBlockProps();
	const [isEditingURL, setIsEditingURL] = useState(false);

	return (
		<>
			<BlockControls>
				<ToolbarButton
					icon={link}
					title={__("Link")}
					onClick={() => setIsEditingURL(true)}
					isActive={!!href}
				/>
			</BlockControls>
			<div {...blockProps}>
				{isEditingURL && (
					<Popover
						position="bottom center"
						onClose={() => setIsEditingURL(false)}
					>
						<LinkControl
							className="wp-block-navigation-link__inline-link-input"
							value={{ url: href, opensInNewTab: target === "_blank" }}
							onChange={({ url: newURL, opensInNewTab }) => {
								setAttributes({
									href: newURL,
									target: opensInNewTab ? "_blank" : "_self",
								});
								setIsEditingURL(false);
							}}
						/>
					</Popover>
				)}
				<InnerBlocks />
			</div>
		</>
	);
}
