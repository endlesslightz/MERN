const express = require('express')
const WorkoutMdl = require('../models/workoutModel')
const router = express.Router()

//dapatkan semua data
router.get('/', (req, res) => {
    res.json({ msg: 'Mendapatkan semua workouts' })
})

//dapatkan detail data
router.get('/:id', (req, res) => {
    res.json({ msg: 'Mendapatkan satu data workouts' })
})

//post
router.post('/', async (req, res) => {
    const { title, load, reps } = req.body
    try {
        const workout = await WorkoutMdl.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

    // res.json({ msg: 'Membuat data baru' })
})


router.delete('/:id', (req, res) => {
    res.json({ msg: 'Menghapus data workouts' })
})


router.patch('/:id', (req, res) => {
    res.json({ msg: 'Mengubah data workouts' })
})
module.exports = router