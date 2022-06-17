import { Router } from 'express'
import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET users listing. */

// get to /skills/
router.get('/', skillsCtrl.index)

export {
  router
}
