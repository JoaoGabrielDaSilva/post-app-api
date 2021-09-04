import { Router } from "express";
import { SettingsController } from "../controllers/SettingsController";


const routes = Router()

const settingsController = new SettingsController()

routes.get('/settings/:username', settingsController.findByUsername)
routes.post('/settings', settingsController.create)
routes.put('/settings/:username', settingsController.update)


export default routes