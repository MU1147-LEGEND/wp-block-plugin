import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
    const { text, alignment, backgroundColor, textColor } = attributes;

    const blockProps = useBlockProps.save({
        className: `text-box-align-${alignment}`,
        // style: {
        //     backgroundColor,
        //     color: textColor,
        // },
    });

    return <RichText.Content {...blockProps} value={text} tagName="h4" />;
}
