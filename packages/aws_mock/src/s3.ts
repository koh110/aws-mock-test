import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

export const upload = async () => {
  const s3 = new S3Client({
    region: 'ap-northeast-1'
  })

  return await s3.send(new PutObjectCommand({
    Bucket: 'test',
    Key: 'testkey',
    Body: Buffer.from('test'),
  }))
}
