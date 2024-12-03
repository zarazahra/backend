// // middleware/verifyAdmin.js
// const verifyAdmin = (req, res, next) => {
//     const { role } = req.user; // Periksa apakah user sudah di-authenticate dan memiliki properti 'role'
    
//     if (role === 'admin') {
//       next(); // Jika role adalah 'admin', lanjutkan ke route berikutnya
//     } else {
//       return res.status(403).json({ message: 'Access denied' });
//     }
//   };
  
//   module.exports = verifyAdmin;
  