export const userData = [];

export const createUser = (req, res) => {
  try {
    const { username, email } = req.body;

    if (!username || !email) {
      res.status(400).json({ message: "nome ou email não inseridos" });
    }

    const user = { username: username, email: email };
    userData.push(user);
    console.log("Req post enviada: ", userData);

    res.status(200).json({ message: "dados salvos com sucesso!", data: user });
  } catch (err) {
    res.status(500).json({ message: "server error" });
    console.error(err);
  }
};

export const checkUser = (req, res) => {
  try {
    res.status(200).json({ message: "Usuários captados", data: userData });
    console.log("Req get enviada: ", userData);
  } catch (err) {
    res.status(500).json({ message: "server error" });
    console.error(err);
  }
};
