'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ShoppingCart, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';

interface ProductPageProps {
    params: Promise<{
        id: string;
    }>;
}

// Generate static params causing issues with 'use client'
// We will remove generateStaticParams from this client component or move it.
// For simplicity in this 'use client' file, we'll remove it as it's not strictly needed for dev mode.

export default function ProductDetailPage({ params }: ProductPageProps) {
    const { id } = use(params);
    const { addToCart } = useCart();
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    return (
        <div className={`container ${styles.container}`}>
            <Link href="/products" className={styles.backLink}>
                <ArrowLeft size={20} /> Back to Products
            </Link>

            <div className={styles.wrapper}>
                <div className={styles.imageContainer}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className={styles.image}
                        priority
                    />
                </div>

                <div className={styles.info}>
                    <div className={styles.category}>{product.category}</div>
                    <h1 className={styles.title}>{product.name}</h1>
                    <div className={styles.price}>{formatPrice(product.price)}</div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '1rem', color: '#fbbf24' }}>
                        <Star fill="#fbbf24" size={20} />
                        <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{product.rating}</span>
                    </div>

                    <p className={styles.description}>{product.description}</p>

                    <div className={styles.actions}>
                        <button
                            className={styles.addToCart}
                            onClick={() => addToCart(product)}
                        >
                            <ShoppingCart size={24} />
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
