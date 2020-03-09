// Compiled using marko@4.19.3 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/estagio-tinnova$1.0.0/src/app/views/clientes/clientes.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"></head><body>");

  component_globals_tag({}, out);

  out.w("<h1> Estagio Tinnova </h1><h1> �ndice de Clientes </h1><table id=\"clientes\"><tr><td>ID</td><td>Nome</td><td>Conta</td><td>Saldo</td><td>Editar</td><td>Remover</td></tr>");

  var $for$0 = 0;

  marko_forOf(data.clientes, function(cliente) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<tr" +
      marko_attr("id", "cliente_" + (cliente.id == null ? "" : cliente.id)) +
      "><td>" +
      marko_escapeXml(cliente.id) +
      "</td><td>" +
      marko_escapeXml(cliente.nome_completo) +
      "</td><td>" +
      marko_escapeXml(cliente.conta) +
      "</td><td>" +
      marko_escapeXml(cliente.saldo) +
      "</td><td><a" +
      marko_attr("href", "/clientes/cadastro/" + (cliente.id == null ? "" : cliente.id)) +
      ">EDITAR</a></td><td><a href=\"#\"" +
      marko_attr("data-ref", cliente.id) +
      " data-type=\"remocao\">REMOVER</a></td></tr>");
  });

  out.w("<tr><td><a href=\"/login-form\">PARA NOVAS OPERA��ES CONFIRME SEU LOGIN</a></td> </tr></table><script src=\"/estatico/js/remove-cliente.js\">\r\n        </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "26");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/estagio-tinnova$1.0.0/src/app/views/clientes/clientes.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
