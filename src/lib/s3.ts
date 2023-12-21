import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"

const bucketName = process.env.AWS_BUCKET!
const region = process.env.AWS_REGION!
const accessKeyId = process.env.AWS_ACCESS_KEY_ID!
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY!

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
})

export async function GetObject(key: string) {
  const params = {
    Bucket: bucketName,
    Key: key,
  }

  const command = new GetObjectCommand(params)
  const response = await s3Client.send(command)

  return response
}

/**
 *
 * @param key - The key of the s3 object ex: "photos/1.jpg"
 * @returns Promise\<string\> - A signed url that expires in 1 hour
 */
export async function getObjectSignedUrl(key: string) {
  const params = {
    Bucket: bucketName,
    Key: key,
  }

  // https://aws.amazon.com/blogs/developer/generate-presigned-url-modular-aws-sdk-javascript/
  const command = new GetObjectCommand(params)
  const seconds = 3600
  return await getSignedUrl(s3Client, command, { expiresIn: seconds })
}
