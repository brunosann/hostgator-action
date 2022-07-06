let mix = require("laravel-mix");

mix.setPublicPath("dist");

mix.js("assets/js/main.js", "js");

if (mix.inProduction) {
  mix.version();
}
