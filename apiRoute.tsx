import fs from "node:fs/promises";
import path from "node:path";

export async function GET(req, context) {
  try {
    // Ambil params (Next 16 async)
    const params = await context.params;
    const filename = params.filename; //nama filename sesuai nama folder didalam kurung siku

    if (!filename) {
      return new Response("Bad Request", { status: 400 });
    }

    // Sanitasi filename (cegah directory traversal)
    const safeFilename = path.basename(filename);

    // daftar Validasi ekstensi (whitelist)
    const allowedTypes = {
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".webp": "image/webp",
      ".avif": "image/avif",
    };
    // ambil extensi
    const ext = path.extname(safeFilename).toLowerCase();
    // cek apakah diizinkan dgn validasi allowedtypes
    const contentType = allowedTypes[ext];
    if (!contentType) {
      return new Response("Type File tidak Disupport", { status: 415 });
    }

    // Tentukan path letak filenya
    const filePath = path.join(
      process.cwd(), //cwd artinya root atau "/", ganti storage dan image dgn nama lain menyesuaikan nama foldernya.
      "storage",
      "images",
      safeFilename,
    );

    // Pastikan file benar-benar ada
    await fs.access(filePath);

    const file = await fs.readFile(filePath);

    return new Response(file, {
      headers: {
        "Content-Type": contentType,

        // Security headers agar NextJS tidak menebak nebak file
        "X-Content-Type-Options": "nosniff",

        // Optional caching (1 hari)
        "Cache-Control": "public, max-age=86400",
      },
    });
  } catch (error) {
    return new Response("Not Found", { status: 404 });
  }
}
