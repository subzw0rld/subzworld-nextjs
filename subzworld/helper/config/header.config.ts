/**
 * @file subzworld/helper/config/header.config.ts
 * @description This file contains the configuration for the header items used in the application.
 * It imports URL configurations and defines the header items with their respective titles and links.
 */

 /**
    * @typedef {Object} HeaderItem
    * @property {string} title - The title of the header item.
    * @property {string} link - The URL link associated with the header item.
    */

 /**
    * @constant
    * @type {HeaderItem[]}
    * @description An array of header items with their titles and links.
    */
import URL_CONFIG from "./url.config";



export type HeaderItem = {
    title: string;
    link: string;
}

const headerItems: HeaderItem[] = [
    { title: 'About', link: URL_CONFIG.ABOUT },
    { title: 'Portfolio', link: URL_CONFIG.PORTFOLIO },
    { title: 'Connect', link: URL_CONFIG.CONTACT },
];

export default headerItems;
