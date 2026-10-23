import Image from "next/image";
import type { Product } from "@/content/projects";
import { VanirasForecastVisual } from "./vaniras-forecast-visual";

interface ProductVisualProps {
  product: Product;
  sizes: string;
  decorative?: boolean;
  eager?: boolean;
}

/** Screen content for a product's browser frame. */
export function ProductVisual({ product, sizes, decorative = false, eager = false }: ProductVisualProps) {
  const { visual } = product;

  if (visual.kind === "vaniras-forecast") {
    return <VanirasForecastVisual decorative={decorative} />;
  }

  return (
    <Image
      src={visual.src}
      alt={visual.alt}
      fill
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
    />
  );
}
