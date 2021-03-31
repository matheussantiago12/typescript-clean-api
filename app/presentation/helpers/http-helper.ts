import { HttpResponse } from '@app/presentation/protocols/http'

export const created = (data: any): HttpResponse => ({
    body: data,
    statusCode: 201
})
