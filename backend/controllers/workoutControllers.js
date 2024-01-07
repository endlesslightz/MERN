const WorkoutMdl = require('../models/workoutModel')
const mongoose = require('mongoose')
//get semua workout
const ambilWorkout = async (req, res) => {
    try {
        const workout = await WorkoutMdl.find({}).sort({ createdAt: -1 })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//get satu workout
const cariWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "data tidak valid " })
    }

    const workout = await WorkoutMdl.findById(id)
    if (!workout) {
        return res.status(404).json({ error: "data tidak ditemukan " })
    }
    res.status(200).json(workout)
}

//buat workout
const buatWorkout = async (req, res) => {
    const { title, load, reps } = req.body
    try {
        const workout = await WorkoutMdl.create({ title, load, reps })
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


//edit workout
const editWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "data tidak valid " })
    }

    const workout = await WorkoutMdl.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!workout) {
        return res.status(404).json({ error: "data tidak ditemukan " })
    }
    res.status(200).json(workout)
}

//hapus workout
//get satu workout
const hapusWorkout = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "data tidak valid " })
    }

    const workout = await WorkoutMdl.findOneAndDelete({ _id: id })
    if (!workout) {
        return res.status(404).json({ error: "data tidak ditemukan " })
    }
    res.status(200).json(workout)
}



module.exports = {
    ambilWorkout, cariWorkout, buatWorkout, editWorkout, hapusWorkout
}