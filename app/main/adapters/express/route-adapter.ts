import { Controller } from '@app/presentation/protocols/controller'
import { Request, Response } from 'express'

export const routeAdapter = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        try {
            const request = {
                ...(req.body || {}),
                ...(req.params || {})
            }

            const response = await controller.handle(request)

            return res.status(response.statusCode).json(response.body)
        } catch (error) {
            return res.status(500).json({ error: 'Unexpected error' })
        }
    }
}
