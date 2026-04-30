class Unidade {
	#nome
	constructor(nome) {
		this.nome = nome
	}

	set nome(nome) {
		this._nome = `Unidade: ${nome}`
	}
}

const icomp = new Unidade('IComp')
icomp.fundacao = 2009
icomp.doscentes = 35
// icomp.nome = 'Instituto de Computação'
console.log(icomp)
