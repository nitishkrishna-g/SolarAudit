import { products } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { motion } from "framer-motion";

export function AffiliateGrid() {
    // Get top 3 best sellers or just first 3
    const bestSellers = products.filter(p => p.isBestSeller).slice(0, 3);
    // Fallback if no best sellers
    const displayProducts = bestSellers.length > 0 ? bestSellers : products.slice(0, 3);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
        >
            {displayProducts.map((p) => (
                <motion.div
                    key={p.id}
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <ProductCard product={p} />
                </motion.div>
            ))}
        </motion.div>
    );
}
