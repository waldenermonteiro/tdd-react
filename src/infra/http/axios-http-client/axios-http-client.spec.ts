import axios from 'axios'
import { faker } from '@faker-js/faker'

import { HttpPostParams } from '@/data/protocols/http'

import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResult = {
  data: faker.database.collation(),
  status: faker.random.numeric()
}
mockedAxios.post.mockResolvedValue(mockedAxiosResult)

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

const mockPostRequest = (): HttpPostParams<any> => {
  return { url: faker.internet.url(), body: faker.database.collation() }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const sut = makeSut()

    const request = mockPostRequest()
    await sut.post(request)

    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should return the correct statusCode and body', async () => {
    const sut = makeSut()

    const request = mockPostRequest()
    const httpResponse = await sut.post(request)

    expect(httpResponse).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data
    })
  })
})
