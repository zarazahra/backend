const verifyAdmin = (req, res, next) => {
    const { role } = req.user; // Asumsikan `req.user` diisi setelah autentikasi
    if (role === 'admin') {
      next(); // Jika role adalah admin, lanjut ke route berikutnya
    } else {
      return res.status(403).json({ message: 'Access denied' });
    }
  };
  
module.exports = verifyAdmin;
  