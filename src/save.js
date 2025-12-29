import { RichText, useBlockProps } from "@wordpress/block-editor";
import classNames from "classnames";

export default function save({ attributes }) {
    const {
        text,
        alignment,
        blockAlignment,
        backgroundColor,
        textColor,
        shadow,
        shadowOpacity,
    } = attributes;

    const classes = classNames(`text-box-align-${alignment}`, {
        "has-shadow": shadow,
        [`has-shadow-${shadowOpacity}`]: shadow && shadowOpacity,
        [`block-align-${blockAlignment}`]: blockAlignment,
    });
    const blockProps = useBlockProps.save({
        className: classes,
    });

    return <RichText.Content {...blockProps} value={text} tagName="h4" />;
}
