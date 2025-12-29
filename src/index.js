import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";
import Edit from "./edit.js";
import Save from "./save.js";
import metadata from "../block.json";

registerBlockType(metadata.name, {
    title: "Block Plugin",
    edit: Edit,
    save: Save,
});
