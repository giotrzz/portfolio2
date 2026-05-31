// teste.js

const pool = require('./database')

async function testar() {
  try {
    const resultado = await pool.query('SELECT NOW()')
    console.log(resultado.rows)
  } catch (erro) {
    console.error(erro)
  }
}

testar()