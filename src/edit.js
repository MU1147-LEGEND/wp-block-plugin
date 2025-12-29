import {
    AlignmentToolbar,
    BlockAlignmentToolbar,
    BlockControls,
    ContrastChecker,
    InspectorControls,
    PanelColorSettings,
    RichText,
    useBlockProps,
} from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import "./editor.scss";

const domain = "sp-block-plugin";
export function __i8n(text) {
    return __(text, domain);
}

export default function edit({ attributes, setAttributes }) {
    const { text, alignment, backgroundColor, textColor } = attributes;

    const onChangeText = (newText) => {
        setAttributes({ text: newText });
    };

    const onChangeAlign = (newAlign) => {
        setAttributes({ alignment: newAlign });
    };

    const onBackgroundChange = (newBgColor) => {
        setAttributes({ backgroundColor: newBgColor });
    };
    const onTextColorChange = (newTextColor) => {
        setAttributes({ textColor: newTextColor });
    };

    return (
        <div {...useBlockProps()}>
            <InspectorControls>
                <PanelColorSettings
                    title={__i8n("Color setting")}
                    colorSettings={[
                        {
                            value: backgroundColor,
                            onChange: onBackgroundChange,
                            label: __i8n("Background Color"),
                        },
                        {
                            value: textColor,
                            onChange: onTextColorChange,
                            label: __i8n("Text Color"),
                        },
                    ]}
                >
                    <ContrastChecker
                        textColor={textColor}
                        backgroundColor={backgroundColor}
                    />
                </PanelColorSettings>
            </InspectorControls>
            <BlockControls>
                {text && (
                    <>
                        <AlignmentToolbar
                            value={alignment}
                            onChange={onChangeAlign}
                        />
                        <BlockAlignmentToolbar />
                    </>
                )}
            </BlockControls>
            <RichText
                {...useBlockProps({
                    className: `text-box-align-${alignment}`,
                    style: {
                        backgroundColor,
                        color: textColor,
                    },
                })}
                placeholder={__("Hello from edit", "sp-block-plugin")}
                tagName="h3"
                value={text}
                onChange={onChangeText}
            />
        </div>
    );
}
