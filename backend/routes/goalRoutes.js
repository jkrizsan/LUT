const express = require('express')
const router = express.Router()
const {
  getGoal,
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoal)
                    .put(protect, updateGoal)
router.route('/goal/:id').get(protect, getGoal)

module.exports = router
