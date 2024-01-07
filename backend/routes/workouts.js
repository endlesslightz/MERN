const express = require('express')
const workoutCtrl = require('../controllers/workoutControllers')
const router = express.Router()

//dapatkan semua data
// router.get('/', (req, res) => {
//     res.json({ msg: 'Mendapatkan semua workouts' })
// })
router.get('/', workoutCtrl.ambilWorkout)

//dapatkan detail data
// router.get('/:id', (req, res) => {
//     res.json({ msg: 'Mendapatkan satu data workouts' })
// })
router.get('/:id', workoutCtrl.cariWorkout)
//post
router.post('/', workoutCtrl.buatWorkout)
//hapus
router.delete('/:id', workoutCtrl.hapusWorkout)
//edit
router.patch('/:id', workoutCtrl.editWorkout)
module.exports = router