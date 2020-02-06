export default {
  host: 'smtp.mailtrap.io',
  port: 2525,
  secure: false, // true for 465, false for other ports
  auth: {
    user: '8c6258fbedd407', // generated ethereal user
    pass: '71bc41205ecc01', // generated ethereal password
  },
  default: {
    from: 'Equipe GoBarber <noreply@gobarber.com>',
  },
};
