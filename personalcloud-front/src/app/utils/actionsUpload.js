"use server";
import { revalidatePath } from "next/cache";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import sharp from "sharp";

const s3Client = new S3Client({
  region: process.env.NEXT_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.NEXT_AWS_S3_SECRET_ACCESS_KEY,
  },
});


async function uploadFileToS3(file, fileName) {
  const fileBuffer = await sharp(file)
    .jpeg({ quality: 50 })
    .resize(800, 400)
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

export async function uploadFile(prevState, formData) {
  try {
    const file = formData.get("file");

    if (file.size === 0) {
      return { status: "error", message: "Por favor seleccione un archivo." };
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileData = await uploadFileToS3(buffer, file.name);
    console.log(fileData.url);
    console.log(fileData.type);
    console.log(fileData.name);

    revalidatePath("/");
    return { status: "success", message: "El archivo ha sido cargado." };
  } catch (error) {
    return { status: "error", message: "No se pudo cargar el archivo." };
  }
}
