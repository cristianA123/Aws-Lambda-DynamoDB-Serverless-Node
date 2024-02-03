module.exports.handler = async (event) => {

  // escribir codigo 

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hola cristian!!",
        input: event,
      },
      null,
      2
    ),
  };
};
