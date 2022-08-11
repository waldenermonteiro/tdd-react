import { faker } from '@faker-js/faker'

import { AuthenticationParams } from '@/domain/usecases'
import { AccountModel } from '../models/'

export const mockAuthentication = (): AuthenticationParams => {
  return {
    email: faker.internet.email(),
    password: faker.internet.email()
  }
}

export const mockAccountModel = (): AccountModel => {
  return {
    accessToken: faker.random.alphaNumeric()
  }
}
