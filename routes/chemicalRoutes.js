import express from 'express';
import {postChemical, getChemicals, deleteChemical, updateChemical} from '../controllers/chemicalController.js'
import { isAuth } from '../utils/utils.js';


const router = express.Router();

router.get("/chemicals", isAuth, getChemicals)

router.post("/chemicals", isAuth,   postChemical)

router.post("/chemicals/:id", isAuth,   updateChemical)

router.delete("/chemicals/:id", isAuth, deleteChemical)


export default router;