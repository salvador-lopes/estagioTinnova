// Compiled using marko@4.19.3 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/estagio-tinnova$1.0.0/src/app/views/clientes/cadastro/form.marko",
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

  out.w("<h1>Cadastro de Clientes</h1><form action=\"/clientes\" method=\"post\">");

  if (data.cliente.id) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\"" +
      marko_attr("value", data.cliente.id) +
      "></div>");
  }

  out.w("<div><label for=\"nome\">Nome:</label><input type=\"text\" id=\"nome_completo\" name=\"nome_completo\"" +
    marko_attr("value", data.cliente.nome_completo) +
    " placeholder=\"coloque o nome do cliente\"></div><div><label for=\"numero da conta\">Conta:</label><input type=\"text\" id=\"conta\" name=\"conta\"" +
    marko_attr("value", data.cliente.conta) +
    " placeholder=\"XXXX\"></div><div><label for=\"saldo inicial\">Saldo inicial:</label><input type=\"text\" id=\"saldo\" name=\"saldo\"" +
    marko_attr("value", data.cliente.saldo) +
    " placeholder=\"XXXX.XX\"></div><div><label for=\"login\">Escolha seu Login </label><input type=\"text\" id=\"login\" name=\"login\"" +
    marko_attr("value", data.cliente.login) +
    " placeholder=\"Login\"></div><div><label for=\"senha\">Cadastre sua Senha</label><input type=\"password\" id=\"password\" name=\"password\"" +
    marko_attr("value", data.cliente.password) +
    " placeholder=\"senha\"></div><input type=\"submit\" value=\"Salvar\"></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "23");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/estagio-tinnova$1.0.0/src/app/views/clientes/cadastro/form.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
