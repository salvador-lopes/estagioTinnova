// Compiled using marko@4.19.3 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/estagio-tinnova$1.0.0/src/app/views/clientes/cadastro/login.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head></head><body>");

  component_globals_tag({}, out);

  out.w("<h1> Est�gio Tinnova </h1><form action=\"/login\" method=\"post\"><div><label for=\"login\">Login:</label><input type=\"text\" id=\"login\" name=\"login\"" +
    marko_attr("value", data.login) +
    " placeholder=\"coloque o usuario\"></div><div><label for=\"password\">Senha:</label><input type=\"password\" id=\"password\" name=\"password\"" +
    marko_attr("value", data.password) +
    " placeholder=\"coloque a sua senha\"></div><input type=\"submit\" value=\"Login\"></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "12");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/estagio-tinnova$1.0.0/src/app/views/clientes/cadastro/login.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
