export const userData = [];

export const createUser = (req, res) => {
  try {
    const { username, email } = req.body;

    if (!username || !email)
      return res.status(400).json({ message: "nome ou email não inseridos" });

    const user = { id: userData.length + 1, username: username, email: email };
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
export const checkUserById = (req, res) => {
  try {
    const userId = req.params.id;
    const user = userData.find((u) => u.id === parseInt(userId));

    if (!user) {
      console.log("Usuário não encontrado");
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    res.status(200).json({ message: "Usuário encontrado", data: user });
    console.log("Usuário encontrado:", user);
  } catch (err) {
    res.status(500).json({ message: "Erro no servidor" });
    console.error(err);
  }
};
