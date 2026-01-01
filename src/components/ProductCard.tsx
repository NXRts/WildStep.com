'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();

    // Simple formatter for IDR
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <div className={styles.card}>
            <Link href={`/products/${product.id}`} className={styles.imageContainer}>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.image}
                />
            </Link>
            <div className={styles.content}>
                <span className={styles.category}>{product.category}</span>
                <h3 className={styles.title}>
                    <Link href={`/products/${product.id}`}>
                        {product.name}
                    </Link>
                </h3>
                <div className={styles.footer}>
                    <div className={styles.price}>{formatPrice(product.price)}</div>
                    <button
                        className={styles.button}
                        onClick={() => addToCart(product)}
                        title="Add to Cart"
                    >
                        <ShoppingCart size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
