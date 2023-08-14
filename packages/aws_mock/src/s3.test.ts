jest.mock('@aws-sdk/client-s3')

import { S3Client } from '@aws-sdk/client-s3'
import { upload } from './s3'

test('1', async () => {
  const send = jest.fn().mockResolvedValue('test')
  jest.spyOn(S3Client.prototype, 'send').mockImplementation(send)
  await upload()
  expect(send).toBeCalledTimes(1)
})
