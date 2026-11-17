interface Region {
  start: number; // inclusivo
  end: number; // exclusivo
}

interface Variant {
  chromosome: string;
  position: number;
}

const GENOMIC_REGIONS: string[] = ['chr1:6-8', 'chr19:1-2', 'chr19:20-25'];

// "chr1:6-8" -> { chromosome: "chr1", start: 6, end: 8 }
function parseRegion(raw: string): { chromosome: string } & Region {
  const match = /^([^:]+):(\d+)-(\d+)$/.exec(raw);
  if (!match) {
    throw new Error(`Región genómica inválida: "${raw}"`);
  }
  const [, chromosome, start, end] = match;
  return { chromosome, start: Number(start), end: Number(end) };
}

// "chr1:6:A>T" -> { chromosome: "chr1", position: 6 }
function parseVariant(raw: string): Variant | null {
  const match = /^([^:]+):(\d+):/.exec(raw);
  if (!match) return null;
  return { chromosome: match[1], position: Number(match[2]) };
}

// Se construye una sola vez: cromosoma -> regiones
function buildRegionIndex(regions: string[]): Map<string, Region[]> {
  const index = new Map<string, Region[]>();
  for (const raw of regions) {
    const { chromosome, start, end } = parseRegion(raw);
    const list = index.get(chromosome) ?? [];
    list.push({ start, end });
    index.set(chromosome, list);
  }
  return index;
}

const REGION_INDEX = buildRegionIndex(GENOMIC_REGIONS);

function isInRegion({ chromosome, position }: Variant): boolean {
  const regions = REGION_INDEX.get(chromosome);
  return (
    regions?.some(({ start, end }) => position >= start && position < end) ??
    false
  );
}

function filterVariants(list: string[]): string[] {
  return list.filter((raw) => {
    const variant = parseVariant(raw);
    return variant !== null && isInRegion(variant);
  });
}

const list: string[] = [
  'chr1:5:G>C',
  'chr1:6:A>T',
  'chr1:8:A>C',
  'chr1:15:G>T',
  'chr8:10:C>G',
  'chr8:12:A>G',
  'chr19:3:G>A',
  'chr19:20:C>T',
  'chr19:22:T>A',
];

console.log('result:', filterVariants(list));
// ["chr1:6:A>T", "chr19:20:C>T", "chr19:22:T>A"]
