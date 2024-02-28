// Burada kullancı girişi yapmış mı yapmamış mı kontrol edeceğiz. Ona göre işlem yapacağız.
// kullanıcı giriş yapıp yapmadığını cookie içindeki jwt token'ı ile kontrol edeceğiz.
// token'i açmalı ve user bilgisini bulmalıyız
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');


const kullanicikontrol = asyncHandler(async (req, res, next) => {
    let token;
    token = req.cookies.jwt;


    if (token) {
      try {
        // token'i çözümledik ve kullanıcının id'sini aldık
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        // id'si ile kullanıcıyı bulduk password hariç hepsi gelsin dedik
        req.user = await User.findById(decoded.userId).select('-password');
        next();
    } catch (error) {
        console.log(error);
        res.status(401)
        throw new Error('Yetkisiz erişim - Hata oluştu');
      }
    } else {
      res.status(401)
      throw new Error('Yetkisiz erişim, lütfen giriş yapın');
    }
} );

module.exports = kullanicikontrol;