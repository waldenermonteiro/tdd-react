import { faker } from '@faker-js/faker'

import { AuthenticationParams } from '@/domain/usecases/authentication'
import { AccountModel } from '../models/account-model'

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
