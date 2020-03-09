const ClienteDAO = require('./cliente-dao');
const db = require('../../config/database');
class CaixaEletronicoDAO {
	constructor() {}

	saca(saque, id,callback) {
		const valorSaque = saque;
		
		const clienteDAO = new ClienteDAO(db);
		clienteDAO.buscaSaldoPorId(id)
			.then(saldo => {
				
				if (saldo >= saque) {
					const notas = [100, 50, 20, 10, 5, 2];
					const nota = [];
					notas.forEach(valor => {
						const resto = saque % valor;
						const qtde = (saque - resto) / valor;
						if (qtde >= 1) {
							saque = saque - (qtde * valor);
							nota.push({ nota: valor, qtde: qtde })
						}
					})
					callback('saque efetuado com sucesso',nota,saldo-valorSaque)
				} else {
					callback('não foi possível efetuar o saque');
				}
				
			})
		
	}
	
}

module.exports = CaixaEletronicoDAO;