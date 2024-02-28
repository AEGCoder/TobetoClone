const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require('bcrypt');
const tokenOlustur = require("../utils/generateToken");

// Login işlemi
const authUser = asyncHandler(async (req, res) => {
      
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  
   if (!user) {
      res.status(400);
      throw new Error("Kullanıcı bulunamadı");
   }

   if (user && (await bcrypt.compare(password, user.password))) {
    // Kullanıcının şifresi doğruysa JWT token oluştur ve kullanıcı bilgilerini döndür
    const generatedToken = tokenOlustur(user._id, res);
        res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generatedToken,
        
    });
} else {
    // Kullanıcı yok veya şifre yanlışsa hata döndür
    res.status(401);
    throw new Error("Geçersiz e-posta adresi veya şifre");
}
  
});

// Kullanıcı kayıt işlemi
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userKontrol = await User.findOne({ email });

  if (userKontrol) {
      res.status(400);
      throw new Error("Kullanıcı zaten var");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Kullanıcıyı kaydet
  const newUser = new User({
      name,
      email,
      password: hashedPassword,
  });

  // Kaydetme işlemini gerçekleştir ve başarı durumunu kontrol et
  const savedUser = await newUser.save();

  if (savedUser) {
    const generatedToken = tokenOlustur(savedUser._id, res);
    res.status(201).json({
        _id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        token: generatedToken,
    });
  } else {
      res.status(400);
      throw new Error("Kullanıcı verisi eklenmedi");
  }
});

// Kullanıcı çıkış işlemi
const logoutUser = asyncHandler(async (req, res) => {
  // cookiyi temizlemek çıkış işlemidir çünkü işlemleri yapmadan önce  cookie kontrolü yapılır
  // Cookie'yi temizle
     res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
     });
     res.status(200).json({ message: "Çıkış başarılı" });   
});

// Kullanıcı profilini getirme işlemi
const getUserProfile = asyncHandler(async (req, res) => {
  // getuserprofileden önce kullanıcı kontrol yapıyor ve tüm bilgileri req.user içine atıyor
    if (req.user) {
        res.status(200).json({
            _id: req.user._id,
            name: req.user.name,
            email: req.user.email,
        });
    } else {
        res.status(404);
        throw new Error("Kullanıcı bulunamadı");
    }
});

// Kullanıcı profilini güncelleme işlemi
const updateUserProfile = asyncHandler(async (req, res) => {
    // updateUserProfile önce kullanıcı kontrol yapıyor ve tüm bilgileri req.user içine atıyor
    // burada farklı bir işlem var password almadığım için tüm bilgileri almamız gerekiyor
     
     const user = await User.findById(req.user._id);
     if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(req.body.password, salt);
        }
        const updatedUser = await user.save();
        const generatedToken = tokenOlustur(updatedUser._id, res);
        res.status(201).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            token: generatedToken,
        });
     } else {
        res.status(404);
        throw new Error("Kullanıcı bulunamadı");
     }
});

module.exports = {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
