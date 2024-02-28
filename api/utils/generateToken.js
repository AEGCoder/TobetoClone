const jwt = require('jsonwebtoken');

const tokenOlustur = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
        expiresIn: '30d'
    });

    // token saklayalım
    res.cookie('jwt', token, {
        // httpOnly: true, sadece server tarafından erişilebilir
        httpOnly: true,
        // sadece yayın aşamasında secure olmalı
        secure: process.env.NODE_ENV !== 'gelistirme',
        // token süresi ile aynı olmalı
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 gün
        // csrf attack koruması için sadece http üzerinden erişilebilir
        sameSite: 'strict',
    });

    return token;  // Token'ı döndür
};

module.exports = tokenOlustur;
