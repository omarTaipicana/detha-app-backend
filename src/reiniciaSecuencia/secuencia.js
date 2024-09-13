const sequelize = require('../utils/connection.js');

sequelize.query(`
  SELECT setval(pg_get_serial_sequence('Servidorpolicials', 'id'), COALESCE(MAX(id), 1), false) FROM Servidorpolicials;
`).then(() => {
  console.log("Secuencia actualizada correctamente");
  sequelize.close(); 
}).catch((error) => {
  console.error("Error actualizando la secuencia: ", error);
});