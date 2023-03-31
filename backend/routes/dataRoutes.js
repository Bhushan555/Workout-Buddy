const express=require('express')
const {getWorkout, getWorkouts, createWorkout,deleteWorkout,updateWorkout} =require('../controllers/workoutController')
const routes=express.Router()

//to get all workouts
routes.get('/',getWorkouts)

//to get single workout
routes.get('/:id',getWorkout)

//to add new workout
routes.post('/', createWorkout)

//to delete workout
routes.delete('/:id',deleteWorkout)

//to update workout
routes.patch('/:id',updateWorkout)

module.exports=routes;