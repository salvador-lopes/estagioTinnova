// Compiled using marko@4.19.3 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/estagio-tinnova$1.0.0/src/app/views/clientes/cadastro/caixa-eletronico.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><body>");

  component_globals_tag({}, out);

  out.w("<h1>CAIXA ELETR�NICO</h1><form" +
    marko_attr("action", "/saque/" + (data.id == null ? "" : data.id)) +
    " method=\"post\"><div><label for=\"VALOR DO SAQUE\">Quanto voc� quer sacar?</label><input type=\"text\" id=\"valorDoSaque\" name=\"valorDoSaque\"" +
    marko_attr("value", data.saque) +
    " placeholder=\"XXXX\"></div><input type=\"submit\" value=\"Sacar\"></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "8");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/estagio-tinnova$1.0.0/src/app/views/clientes/cadastro/caixa-eletronico.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
