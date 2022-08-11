import { faker } from '@faker-js/faker'
import axios from 'axios'

import { AxiosHttpClient } from './axios-http-client'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL', async () => {
    const sut = makeSut()

    const url = faker.internet.url()
    await sut.post({ url })

    expect(mockedAxios).toHaveBeenCalledWith(url)
  })
})
