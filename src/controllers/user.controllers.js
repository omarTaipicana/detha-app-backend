const catchError = require("../utils/catchError");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");
const EmailCode = require("../models/EmailCode");

const getAll = catchError(async (req, res) => {
  const results = await User.findAll();
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const {
    cI,
    password,
    email,
    firstName,
    lastName,
    nomenclature,
    rol,
    isVerified,
    frontBaseUrl,
  } = req.body;
  const bcryptPassword = await bcrypt.hash(password, 10);
  const result = await User.create({
    cI,
    password: bcryptPassword,
    email,
    firstName,
    lastName,
    nomenclature,
    rol,
    isVerified,
  });
  const code = require("crypto").randomBytes(32).toString("hex");
  const link = `${frontBaseUrl}/${code}`;

  await EmailCode.create({
    code: code,
    userId: result.id,
  });

  await sendEmail({
    to: email,
    subject:
      "Verificación de correo electrónico de su usuario de Talento Humano DIGIN",
    html: `
    <h1> Saludos Cordiales ${firstName}  ${lastName}</h1>
        <h2>Gracias por verificar su correo electrónico</h2>
        <p>Para verificar su correo electrónico y cambiar su contraseña de click en el siguiente enlace</p>
        <a href="${link}" >${link}</a>`,
  });

  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await User.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } });
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  const {
    cI,
    password,
    email,
    firstName,
    lastName,
    nomenclature,
    rol,
    isVerified,
  } = req.body;
  const result = await User.update(
    {
      cI,
      email,
      firstName,
      lastName,
      nomenclature,
      rol,
      isVerified,
    },
    {
      where: { id },
      returning: true,
    }
  );
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

const login = catchError(async (req, res) => {
  const { cI, password } = req.body;
  const user = await User.findOne({ where: { cI: cI } });
  if (!user) return res.status(401).json({ mesagge: "Usuario Inválido" });
  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return res.status(401).json({ mesagge: "Contraseña Inválida" });
  if (!user.isVerified)
    return res
      .status(401)
      .json({ mesagge: "El usuario no a verificado su correo electrónico" });

  const token = jwt.sign({ user }, process.env.TOKEN_SECRET, {
    expiresIn: "1d",
  });

  return res.json({ user, token });
});

const verifyCode = catchError(async (req, res) => {
  const { code } = req.params;
  const { password } = req.body;
  const emailCode = await EmailCode.findOne({ where: { code: code } });
  if (!emailCode) return res.status(401).json({ mesagge: "Código Invalido" });
  if (!password)
    return res.status(401).json({ mesagge: "Contraseña Inválida" });
  const bcryptPassword = await bcrypt.hash(password, 10);

  const user = await User.findByPk(emailCode.userId);
  user.isVerified = true;
  user.password = bcryptPassword;
  await user.save();

  await emailCode.destroy();

  return res.json(user);
});

const getLoggedUser = catchError(async (req, res) => {
  const loggedUser = req.user;
  return res.json(loggedUser);
});

const sendEmailResetPassword = catchError(async (req, res) => {
  const { email, frontBaseUrl } = req.body;
  const user = await User.findOne({ where: { email: email } });
  if (!user) return res.status(401).json({ mesagge: "Usuario Inválido" });
  const code = require("crypto").randomBytes(32).toString("hex");
  const link = `${frontBaseUrl}/${code}`;
  await EmailCode.create({
    code: code,
    userId: user.id,
  });
  await sendEmail({
    to: email,
    subject: "Recuperación de contraseña de su Usuario de Talento Humano DIGIN",
    html: `
          <h1>Saludos cordiales usuario con correo electrónico ${email}</h1>
              <h2>Para camabiar su contraseña, de click en el siguiente enlace</h2>
              <a href="${link}" >${link}</a>`,
  });

  return res.json(user);
});

const resetPassword = catchError(async (req, res) => {
  const { password } = req.body;
  const { code } = req.params;
  const emailCode = await EmailCode.findOne({ where: { code: code } });
  if (!emailCode) return res.status(401).json({ mesagge: "Código Inválido" });
  const bcryptPassword = await bcrypt.hash(password, 10);
  const id = emailCode.userId;

  const result = await User.update(
    {
      password: bcryptPassword,
    },
    { where: { id }, returning: true }
  );

  await emailCode.destroy();
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update,
  login,
  verifyCode,
  getLoggedUser,
  sendEmailResetPassword,
  resetPassword,
};
