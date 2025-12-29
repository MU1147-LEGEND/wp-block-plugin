import {
    AlignmentToolbar,
    BlockAlignmentToolbar,
    BlockControls,
    InspectorControls,
    RichText,
    useBlockProps,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import classNames from "classnames";
import "./editor.scss";
import { PanelBody, RangeControl } from "@wordpress/components";

const domain = "sp-block-plugin";
export function __i8n(text) {
    return __(text, domain);
}

export default function edit({ attributes, setAttributes }) {
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
    const onChangeText = (newText) => {
        setAttributes({ text: newText });
    };

    const onChangeAlign = (newAlign) => {
        setAttributes({ alignment: newAlign });
    };

    // const onBackgroundChange = (newBgColor) => {
    //     setAttributes({ backgroundColor: newBgColor });
    // };
    // const onTextColorChange = (newTextColor) => {
    //     setAttributes({ textColor: newTextColor });
    // };

    const onChangeShadowOpacity = (newOpacity) => {
        setAttributes({ shadowOpacity: newOpacity });
    };
    const toggleShadow = () => {
        setAttributes({ shadow: !shadow });
    };
    const onChangeBlockAlign = (newBlockAlign) => {
        setAttributes({ blockAlignment: newBlockAlign });
    };

    return (
        <div
            className={
                blockAlignment === "left" || blockAlignment === "right"
                    ? "block-parent-left-right"
                    : ""
            }
        >
            <InspectorControls>
                {shadow && (
                    <PanelBody title={__i8n("Shadow Setting")}>
                        <RangeControl
                            label={__i8n("Shadow Opacity")}
                            value={shadowOpacity}
                            min={10}
                            max={50}
                            step={10}
                            onChange={onChangeShadowOpacity}
                        />
                    </PanelBody>
                )}
            </InspectorControls>
            <BlockControls
                controls={[
                    {
                        title: __i8n("Shadow"),
                        icon: "admin-page",
                        onClick: toggleShadow,
                        isActive: shadow,
                    },
                ]}
            >
                {text && (
                    <>
                        <AlignmentToolbar
                            value={alignment}
                            onChange={onChangeAlign}
                        />
                    </>
                )}
                <BlockAlignmentToolbar
                controls={['wide', 'full','center']}
                    value={blockAlignment}
                    onChange={onChangeBlockAlign}
                />
            </BlockControls>
            <RichText
                {...useBlockProps({
                    className: classes
                })}
                placeholder={__("Hello from edit", "sp-block-plugin")}
                tagName="h4"
                value={text}
                onChange={onChangeText}
            />
        </div>
    );
}
