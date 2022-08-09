import { faker } from '@faker-js/faker'

import { AuthenticationParams } from '@/domain/usercases/authentication'

export const mockAuthentication = (): AuthenticationParams => {
  return {
    email: faker.internet.email(),
    password: faker.internet.email()
  }
}
