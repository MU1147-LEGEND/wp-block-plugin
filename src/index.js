import { createBlock, registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import Edit from "./edit.js";
import Save from "./save.js";
import metadata from "../block.json";

registerBlockType(metadata.name, {
    title: "Block Plugin",
    edit: Edit,
    save: Save,
    variations: [
        {
            name: "shadow-text-box",
            title: "Shadow Text Box",
            attributes: {
                shadow: true,
            },
        },
    ],
    transforms: {
        from: [
            {
                type: "block",
                blocks: ["core/paragraph"],
                transform: ({ content: { text }, align }) => {
                    return createBlock("sp-blocks/blockplugin", {
                        text,
                        alignment: align || "left",
                    });
                },
            },
            {
                type: "enter",
                regExp: /text|textbox|text box/i,
                transform: () => {
                    return createBlock("sp-blocks/blockplugin", {
                        shadow: true,
                    });
                },
            },
            {
                type: "prefix",
                prefix: "textbox",
                transform: () => {
                    return createBlock("sp-blocks/blockplugin", {});
                },
            },
        ],
        to: [
            {
                type: "block",
                blocks: ["core/paragraph"],
                isMatch: ({ text }) => {
                    return text ? true : false;
                },
                transform: (attributes) => {
                    return createBlock("core/paragraph", {
                        content: attributes.text,
                        align: attributes.alignment,
                        backgroundColor: attributes.backgroundColor,
                    });
                },
            },
        ],
    },
});
