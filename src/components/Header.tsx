'use client';

import Link from 'next/link';
import { ShoppingCart, Mountain } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './Header.module.css';

export default function Header() {
    const { totalItems } = useCart();

    return (
        <header className={styles.header}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <Mountain size={32} />
                    <span>TokoOutdoor</span>
                </Link>
                <nav className={styles.navLinks}>
                    <Link href="/" className={styles.link}>Home</Link>
                    <Link href="/products" className={styles.link}>Shop</Link>
                    <Link href="/about" className={styles.link}>About</Link>
                    <Link href="/cart" className={styles.cartButton} aria-label="Cart">
                        <ShoppingCart size={24} />
                        {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
                    </Link>
                </nav>
            </div>
        </header>
    );
}
