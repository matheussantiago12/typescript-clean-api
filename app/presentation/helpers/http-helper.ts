import { HttpResponse } from '@app/presentation/protocols/http'

export const ok = (data: any): HttpResponse => ({
    body: data,
    statusCode: 200
})

export const created = (data: any): HttpResponse => ({
    body: data,
    statusCode: 201
})

export const badRequest = (error: Error): HttpResponse => ({
    body: error,
    statusCode: 400
})

export const forbidden = (data: any): HttpResponse => ({
    body: data,
    statusCode: 403
})
