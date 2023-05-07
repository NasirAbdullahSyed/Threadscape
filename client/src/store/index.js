import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: "#3bceac",
    isLogoTexture: false,
    isFullTexture: true,
    logoDecal: './def_logo.png',
    fullDecal: './bg_2.jpg',
});

export default state;