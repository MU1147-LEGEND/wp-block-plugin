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
        ],
        to: [],
    },
});
