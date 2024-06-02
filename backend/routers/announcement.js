const router = require('express').Router();
const Announcement = require('../models/announcement');
const mongoose = require('mongoose');

const mongoId = (id) => {
    return mongoose.Types.ObjectId.isValid(id);
};

router.post('/', async (req, res) => {
    try {
       const {title, description} = req.body;
         const newAnnouncement = new Announcement({title, description});
         await newAnnouncement.save();
         res.status(201).json({newAnnouncement});
    } catch (error) {
        console.log(error);
    }
})


router.get('/', async (req, res) => {
    try {
        const announcement = await Announcement.find();
        res.status(200).json({announcement});
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
        const announcement = await Announcement.findById(id);
        if (!announcement) {
            return res.status(404).json({ message: 'Eğitim bulunamadı' });
        }
        res.status(200).json({ announcement });
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
        const announcement = await Announcement.findByIdAndUpdate(id, req.body, { new: true });
        if (!announcement) {
            return res.status(404).json({ message: 'Eğitim bulunamadı' });
        }
        res.status(200).json({ announcement });
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
        const announcement = await Announcement.findByIdAndDelete(id);
        if (!announcement) {
            return res.status(404).json({ message: 'Eğitim bulunamadı' });
        }
        res.status(200).json({ message: 'Eğitim başarıyla silindi' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Bir hata oluştu' });
    }
})


module.exports = router;