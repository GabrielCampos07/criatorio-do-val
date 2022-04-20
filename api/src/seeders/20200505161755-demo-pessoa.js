
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Galinhas', [
			{
				nome: 'Tieta',
				cor: 'Branca e Marrom',
				idade: 1,
				nova: false,
				sexo: 'Femêa'
			},
			{
				nome: 'Gordinha 1',
				cor: 'Marrom',
				idade: 1,
				nova: false,
				sexo: 'Femêa'
			},
			{
				nome: 'Gordinha 2',
				cor: 'Marrom',
				idade: 1,
				nova: false,
				sexo: 'Femêa'
			},
		], {})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Galinhas', null, {})
	}
}
