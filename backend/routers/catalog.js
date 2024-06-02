const router = require('express').Router();
const Catalog = require('../models/catalog');
const mongoose = require('mongoose');

const mongoId = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
};

router.post('/', async (req, res) => {
    try {
       const {title, description,time,video} = req.body;
         const newCatalog = new Catalog({title, description,time,video});
         await newCatalog.save();
         res.status(201).json({newCatalog});
    } catch (error) {
        console.log(error);
    }
})


router.get('/', async (req, res) => {
    try {
        const catalog = await Catalog.find();
        res.status(200).json({catalog});
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
        const catalog = await Catalog.findById(id);
        if (!catalog) {
            return res.status(404).json({ message: 'Ktalog bulunamadı' });
        }
        res.status(200).json({ catalog });
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
        const catalog = await Catalog.findByIdAndUpdate(id, req.body, { new: true });
        if (!catalog) {
            return res.status(404).json({ message: 'Katalog bulunamadı' });
        }
        res.status(200).json({ catalog });
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
        const catalog = await Catalog.findByIdAndDelete(id);
        if (!catalog) {
            return res.status(404).json({ message: 'Katalog bulunamadı' });
        }
        res.status(200).json({ message: 'Katalog başarıyla silindi' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Bir hata oluştu' });
    }
})


module.exports = router;