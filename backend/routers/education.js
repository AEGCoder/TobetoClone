const router = require('express').Router();
const Education = require('../models/education');
const mongoose = require('mongoose');

const mongoId = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
};

router.post('/', async (req, res) => {
    try {
       const {title, img} = req.body;
         const newEducation = new Education({title, img});
         await newEducation.save();
         res.status(201).json({newEducation});
    } catch (error) {
        console.log(error);
    }
})


router.get('/', async (req, res) => {
    try {
        const educations = await Education.find();
        res.status(200).json({educations});
    } catch (error) {
        console.log(error);
    }
})


router.get('/:id', async (req, res) => {
    const id = req.params.id;
    if (!mongoId(id)) {
        return res.status(400).json({ message: 'Geçersiz ID' });
    }

    try {
        const education = await Education.findById(id);
        if (!education) {
            return res.status(404).json({ message: 'Eğitim bulunamadı' });
        }
        res.status(200).json({ education });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Bir hata oluştu' });
    }
});

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    if (!mongoId(id)) {
        return res.status(400).json({ message: 'Geçersiz ID' });
    }

    try {
        const education = await Education.findByIdAndUpdate(id, req.body, { new: true });
        if (!education) {
            return res.status(404).json({ message: 'Eğitim bulunamadı' });
        }
        res.status(200).json({ education });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Bir hata oluştu' });
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    if (!mongoId(id)) {
        return res.status(400).json({ message: 'Geçersiz ID' });
    }

    try {
        const education = await Education.findByIdAndDelete(id);
        if (!education) {
            return res.status(404).json({ message: 'Eğitim bulunamadı' });
        }
        res.status(200).json({ message: 'Eğitim başarıyla silindi' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Bir hata oluştu' });
    }
})


module.exports = router;