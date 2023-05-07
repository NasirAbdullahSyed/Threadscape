import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: "#3bceac",
    isLogoTexture: false,
    isFullTexture: true,
    logoDecal: '../../src/assets/def_logo.png',
    fullDecal: '../../src/assets/bg_2.jpg',
});

export default state;