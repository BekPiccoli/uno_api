const titulos = [];

export const createTitulo = (req, res) => {
  try {
    const { valor, vencimento } = req.body;

    if (!valor || !vencimento) {
      res.status(400).json({ message: "valor ou vencimento não inseridos" });
    }

    const titulosUser = { valor: valor, vencimento: vencimento };
    titulos.push(titulosUser);
    console.log("Req post enviada: ", titulos);

    res
      .status(200)
      .json({ message: "dados salvos com sucesso!", data: titulos });
  } catch (err) {
    res.status(500).json({ message: "server error" });
    console.error(err);
  }
};

export const checkTitulo = (req, res) => {
  try {
    res.status(200).json({ message: "Titulos captados", data: titulos });
    console.log("Req get enviada: ", titulos);
  } catch (err) {
    res.status(500).json({ message: "server error" });
    console.error(err);
  }
};
