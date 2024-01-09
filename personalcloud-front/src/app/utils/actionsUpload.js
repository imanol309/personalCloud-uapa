"use server";
import { revalidatePath } from "next/cache";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";
import fs from 'fs';
import { join } from 'path';

async function uploadFileToS3(file, fileName) {
  const typeFile = fileName.substring(fileName.length - 3)
  const fileBuffer = await sharp(file)
    .jpeg({ quality: 50 })
    .toBuffer();

  const params = {
    Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME,
    Key: `${fileName}`,
    Body: fileBuffer,
    ContentType: `image/${typeFile}`,
  };

  const command = new PutObjectCommand(params);
  try {
    const response = await s3Client.send(command);
    const { Key } = params;
    const url = `https://${process.env.NEXT_AWS_S3_BUCKET_NAME}.s3.${process.env.NEXT_AWS_S3_REGION}.amazonaws.com/${Key}`;
    const type = `${typeFile}`;
    console.log("File uploaded successfully:", response);
    return {
      url,
      type,
      name: fileName
    };
  } catch (error) {
    throw error;
  }
}

const s3Client = new S3Client({
  region: process.env.NEXT_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY,
  },
});


async function uploadFileToS3Pdf(filePath, fileName) {
  const typeFile = fileName.substring(fileName.length - 3)
  const ifFile = typeFile === 'pdf' ? 'application/pdf' : typeFile === 'doc' ? 'application/msword' : typeFile === 'txt' ? 'text/plain' : 'application/pdf';
  console.log(ifFile)
  const fileStream = fs.createReadStream(filePath);
  const params = {
    Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME,
    Key: `${fileName}`,
    Body: fileStream,
    ContentType: `${ifFile}`,
  };
  const command = new PutObjectCommand(params);
  try {
    const response = await s3Client.send(command);
    const { Key } = params;
    const url = `https://${process.env.NEXT_AWS_S3_BUCKET_NAME}.s3.${process.env.NEXT_AWS_S3_REGION}.amazonaws.com/${Key}`;
    const type = 'pdf';
    console.log("File uploaded successfully:", response);
    return {
      url,
      type,
      name: fileName
    };

  } catch (err) {
    console.log("Error uploading PDF: ", err);
    return null;
  }
}
// Accepts pdf, txt, doc, etc.
export async function uploadFile(prevState, formData) {
  try {
    const file = formData.get("file");
    if (file.size === 0) {
      return { status: "error", message: "Por favor seleccione un archivo." };
    }
    const buffer = Buffer.from(await file.arrayBuffer());
    if (file.type.includes('image')) {
      const fileData = await uploadFileToS3(buffer, file.name);
      console.log(fileData.url);
      revalidatePath("/");
      return { status: "success", message: "El archivo ha sido subido", data: fileData };
    } else {
      const tmpPath = join('/temp', file.name);
      try {
        fs.writeFileSync(tmpPath, buffer);
      } catch (err) {
        console.log(err)
      }
      const uploadResult = await uploadFileToS3Pdf(tmpPath, file.name);
      console.log("Resultado:", uploadResult.url);
      revalidatePath("/");
      return { status: "success", message: "El archivo ha sido subido", data: uploadResult };
    }
  } catch (error) {
    return { status: "error", message: "No se pudo subido el archivo" };
  }
}