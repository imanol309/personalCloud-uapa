"use server";
import { revalidatePath } from "next/cache";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";
import fs from 'fs';


async function uploadFileToS3(file, fileName) {
  const fileBuffer = await sharp(file)
    .jpeg({ quality: 50 })
    .toBuffer();

  const params = {
    Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME,
    Key: `${fileName}`,
    Body: fileBuffer,
    ContentType: "image/jpg",
  };

  const command = new PutObjectCommand(params);
  try {
    const response = await s3Client.send(command);
    const { Key } = params;
    const url = `https://${process.env.NEXT_AWS_S3_BUCKET_NAME}.s3.${process.env.NEXT_AWS_S3_REGION}.amazonaws.com/${Key}`;
    const type = 'jpg';
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
  const fileStream = fs.createReadStream(filePath);
  const params = {
    Bucket: process.env.NEXT_AWS_S3_BUCKET_NAME,
    Key: `${fileName}`,
    Body: fileStream,
    ContentType: "application/pdf",
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

export async function uploadFile(prevState, formData) {
  try {
    const file = formData.get("file");
    if (file.size === 0) {
      return { status: "error", message: "Por favor seleccione un archivo." };

    }
    const buffer = Buffer.from(await file.arrayBuffer());
    if (file.type === "application/pdf") {
      console.log("Entrooo")
      const filePath = 'C:/Users/18295/Desktop/CURRICULUM/' + file.name;
      console.log(filePath)
      try {
        fs.writeFileSync(filePath, buffer);
      } catch (err) {
        console.log(err)
      }

      const uploadResult = await uploadFileToS3Pdf(filePath, file.name);
      console.log("Resultado:", uploadResult.url);
    } else {
      const fileData = await uploadFileToS3(buffer, file.name);
      console.log(fileData.url);
    }
    revalidatePath("/");
    return { status: "success", message: "El archivo ha sido subido" };
  } catch (error) {
    return { status: "error", message: "No se pudo subido el archivo" };
  }
}