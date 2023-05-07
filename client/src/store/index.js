import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: "#3bceac",
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './def_logo.png',
    fullDecal: './threejs.png',
});

export default state;