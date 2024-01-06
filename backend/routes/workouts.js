const express = require('express')

const router = express.Router()

//dapatkan semua data
router.get('/', (req, res) => {
    res.json({ msg: 'Mendapatkan semua workouts' })
})

//dapatkan detail data
router.get('/:id', (req, res) => {
    res.json({ msg: 'Mendapatkan satu data workouts' })
})


router.post('/', (req, res) => {
    res.json({ msg: 'Membuat data baru' })
})


router.delete('/:id', (req, res) => {
    res.json({ msg: 'Menghapus data workouts' })
})


router.patch('/:id', (req, res) => {
    res.json({ msg: 'Mengubah data workouts' })
})
module.exports = router