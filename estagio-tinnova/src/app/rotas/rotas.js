const ClienteDAO = require('../infra/cliente-dao');
const CaixaEletronicoDAO = require('../infra/caixa-eletronicodao');
const db = require('../../config/database');


module.exports = (app) => {
	app.get('/login-form', (req, res) => {
		res.marko(require('../views/clientes/cadastro/login.marko'));

	});	   	  
	app.post('/login', (req, res) => {
		const clienteDAO = new ClienteDAO(db);
		let buscaPorLoginCallback = cliente => {
				if (cliente.password == req.body.password) {
				
				let respBody = { id : cliente.id };
				
				res.marko(require('../views/clientes/cadastro/home.marko'),respBody);
			}
			else {
				let redirectError = require('./login-error.marko');
				res.marko(redirectError);
			}
		};
		clienteDAO.buscaPorLogin(req.body.login)
			.then(buscaPorLoginCallback);
	});
	app.get('/', (req, res) => {
		res.marko(require('../views/clientes/index.marko'))
	}
	);
	app.get('/clientes', function (req, res) {
		const clienteDAO = new ClienteDAO(db);
		clienteDAO.indice()
			.then(clientes => res.marko(
				require('../views/clientes/clientes.marko'),
				{
					clientes: clientes
				}
			))
			.catch(erro => console.log(erro));
	});
	app.get('/clientes/cadastro', (req, res) => {
		res.marko(require('../views/clientes/cadastro/form.marko'), { cliente: {} });
	});
	app.get('/clientes/cadastro/:id', (req, res) => {
		const id = req.params.id;
		const clienteDao = new ClienteDAO(db);

		clienteDao.buscaPorId(id)
			.then(cliente =>
				res.marko( require('../views/clientes/cadastro/form.marko'),
				{ cliente : cliente }
				)
			)
		.catch(erro => console.log(erro));
	}
	);
	app.post('/clientes', (req, res) => {
		console.log(req.body);
		const clienteDAO = new ClienteDAO(db);
		clienteDAO.cadastra(req.body)
			.then(res.redirect('/clientes'))
			.catch(erro => console.log(erro));
	});
	app.put('/clientes', (req, res) => {
		console.log(req.body);
		const clienteDAO = new ClienteDAO(db);
		clienteDAO.edita(req.body)
			.then(res.redirect('/clientes'))
			.catch(erro => console.log(erro));
	});
	app.delete('/clientes/:id', (req, res) => {
		const id = req.params.id;

		const clienteDao = new ClienteDAO(db);
		clienteDao.remove(id)
			.then(() => res.status(200).end())
			.catch(erro => console.log(erro));
	});
	app.post('/saque/:id', function (req, res) {
		const caixa = new CaixaEletronicoDAO();
		caixa.saca(req.body.valorDoSaque, req.params.id, function (mensagem, nota,saldo) {
			const clienteDAO = new ClienteDAO(db);
			
			clienteDAO.updateSaldo(saldo, req.params.id);
			res.marko(require('../views/clientes/cadastro/saque-efetuado.marko'),
				{
					mensagem: mensagem,
					notas: nota			
				}
			);

		});
				

	})
	app.get('/caixa-eletronico/:id', (req, res) => {
		
		res.marko(require('../views/clientes/cadastro/caixa-eletronico.marko'),
			{id:req.params.id}
		);

	})




}

