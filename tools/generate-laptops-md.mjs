import fs from "node:fs";
import path from "node:path";
import { parse } from "csv-parse/sync";

const csvPath = process.argv[2] || path.resolve("Laptops.csv");
const outDir = process.argv[3] || path.resolve("content/laptops");

function slugify(s) {
  return (s || "")
    .toString()
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "") || "item";
}

function yamlEscape(s) {
  if (s === undefined || s === null) return "";
  return String(s).replaceAll('"', '\\"');
}

if (!fs.existsSync(csvPath)) {
  console.error("CSV not found at:", csvPath);
  process.exit(1);
}
fs.mkdirSync(outDir, { recursive: true });

const csv = fs.readFileSync(csvPath, "utf8");
const records = parse(csv, { columns: true, skip_empty_lines: true });


const cols = Object.fromEntries(Object.keys(records[0] || {}).map(c => [c.toLowerCase().trim(), c]));
const findKey = (cands) => {
  for (const cand of cands) {
    for (const [k,orig] of Object.entries(cols)) {
      if (k.includes(cand)) return orig;
    }
  }
  return null;
};

const brandCol = findKey(["brand","marca","manufacturer","maker"]) || "Brand";
const modelCol = findKey(["model","modelo","product","name","title"]) || "Model_Name";
const cpuCol = findKey(["cpu","processor","procesador"]) || "Processor";
const osCol = findKey(["os","sistema operativo","operating system"]) || null;
const screenCol = findKey(["screen","display","pantalla"]) || "Screen_Size";
const ramCol = findKey(["ram","memory","memoria"]) || "RAM_GB";
const storageCol = findKey(["storage","disk","ssd","hdd","almacenamiento"]) || "Storage_MB";
const gpuCol = findKey(["gpu","graphics","video"]) || null;
const weightCol = findKey(["weight","peso"]) || null;
const priceCol = findKey(["price","precio"]) || "Price";

let count = 0;
for (const row of records) {
  const brand = (row[brandCol] ?? "Desconocido").toString().trim() || "Desconocido";
  const model = (row[modelCol] ?? "Modelo").toString().trim() || "Modelo";
  const cpu = (row[cpuCol] ?? "").toString().trim();
  const osVal = (osCol ? (row[osCol] ?? "") : "").toString().trim() || "Desconocido";

  const num = (v) => {
    const s = String(v ?? "").replace(/["in]/g, "").replace(" pulgadas","").trim();
    const n = Number(s);
    return Number.isFinite(n) ? n : null;
  };
  const screenInches = num(row[screenCol]);
  const ramGB = num(row[ramCol]);
  const storageMB = num(row[storageCol]);
  const weightKg = num(row[weightCol]);
  const price = num(row[priceCol]);
  const gpu = (gpuCol ? (row[gpuCol] ?? "") : "").toString().trim();

  const title = `${brand} ${model}`.trim();
  const slug = slugify(`${brand}-${model}`);

  const fm = [
    "---",
    `title: "${yamlEscape(title)}"`,
    `brand: "${yamlEscape(brand)}"`,
    `model: "${yamlEscape(model)}"`,
    `cpu: "${yamlEscape(cpu)}"`,
    `os: "${yamlEscape(osVal)}"`,
    `screenInches: ${screenInches ?? "null"}`,
    `ramGB: ${ramGB ?? "null"}`,
    `storageMB: ${storageMB ?? "null"}`,
    `gpu: "${yamlEscape(gpu)}"`,
    `weightKg: ${weightKg ?? "null"}`,
    `price: ${price ?? "null"}`,
    `tags: ["${yamlEscape(brand)}", "${yamlEscape(cpu)}", "${yamlEscape(osVal)}"]`,
    "---",
  ].join("\n");

  const body = `## Especificaciones

- **Marca:** ${brand}
- **Modelo:** ${model}
- **Procesador:** ${cpu || "N/D"}
- **Sistema Operativo:** ${osVal || "N/D"}
- **Pantalla (pulgadas):** ${screenInches ?? "N/D"}
- **RAM (GB):** ${ramGB ?? "N/D"}
- **Almacenamiento (MB):** ${storageMB ?? "N/D"}
- **GPU:** ${gpu || "N/D"}
- **Peso (kg):** ${weightKg ?? "N/D"}
- **Precio:** ${price ?? "N/D"}

[:rocket: Ver más laptops por marca](/brand/${slugify(brand)})
`;

  const outPath = path.join(outDir, `${slug}.md`);
  fs.writeFileSync(outPath, fm + "\n" + body, "utf8");
  count++;
}

console.log(`Generated ${count} markdown files in ${outDir}`);
