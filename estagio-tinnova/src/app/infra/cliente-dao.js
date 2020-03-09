class ClienteDAO {
	constructor(db) {
		this._db = db;
	}

	indice(clientes) {
		return new Promise((resolve, reject) => {
			this._db.all(
				'SELECT * FROM clientes',
				(erro, resultados) => {
					if (erro) return reject('não foi possível listar os clientes');
					resolve (resultados);
				})
		});
	}

	cadastra(cliente) {
		return new Promise((resolve, reject)=>{
			this._db.run(`
				INSERT INTO clientes(
				nome_completo,
				conta,
				saldo,
				login,
				password
				)values(?,?,?,?,?)
				`,
				[
					cliente.nome_completo,
					cliente.conta,
					cliente.saldo,
					cliente.login,
					cliente.password
				],
				(erro) => {
					if (erro) {
						console.log(erro);
						return reject('não foi possível cadastrar o cliente');
					}
					return resolve();
				})
		});
	}
	edita(cliente) {
		return new Promise((resolve, reject) => {
			this._db.run(
				`UPDATE clientes SET
				nome_completo = ?,
				conta = ?,
				saldo = ?
				WHERE id = ? `,
				[
					cliente.nome_completo,
					cliente.conta,
					cliente.saldo,
					cliente.id
				],
				erro => {
					if (erro) {
						console.log(erro);
						return reject('não foi possível editar o cliente');
					}
					return resolve();
				});
		});
	}
	remove(id) {
		return new Promise((resolve, reject) => {
			this._db.run(`DELETE FROM clientes WHERE ID=?`,
				[id],
				erro => {
					if (erro) {
						return reject('não foi possível deletar esse cliente ');
					}
					return resolve();
				}
			);
		});
	}
	buscaPorId(id) {
		return new Promise((resolve, reject) => {
			this._db.get(
				`SELECT * FROM clientes
				WHERE id =?
					`, [id],
				(erro, cliente) => {
					if (erro) {
						console.log(erro);
						return reject('não foi possível buscar o cliente');
					}
					resolve(cliente);
				}
			)
		});
	}
	buscaPorLogin(login) {
		return new Promise((resolve, reject) => {
			this._db.get(
				`SELECT * FROM clientes
				WHERE login =?
					`, [login],
				(erro, cliente) => {
					if (erro) {
						
						console.log(erro);
						return reject('não foi possível logar o cliente');
					}
					
					resolve(cliente);
				}
			)
		});

	}
	buscaSaldoPorId(id) {
		return new Promise((resolve, reject) => {
			this._db.get(
				`SELECT saldo FROM clientes
				WHERE id =?
					`, [id],
				(erro, cliente) => {
					if (erro) {

						console.log(erro);
						return reject('não foi possível localizar o cliente');
					}

					resolve(cliente.saldo);
				}
			)
		});

	}
	updateSaldo(saldo, id) {
		
		return new Promise((resolve, reject) => {
			this._db.run(
				`UPDATE clientes SET
				saldo = ?
				WHERE id = ? `,
				[
					saldo,
					id
				],
				erro => {
					if (erro) {
						console.log(erro);
						return reject('não foi possível editar o cliente');
					}
					return resolve();
				});
		});




	}

}
module.exports = ClienteDAO;