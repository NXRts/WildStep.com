'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Minus, Plus } from 'lucide-react';

export default function CartPage() {
    const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    if (items.length === 0) {
        return (
            <div className={`container ${styles.container}`}>
                <h1 className={styles.title}>Your Cart</h1>
                <div className={styles.emptyCart}>
                    <p>Your cart is empty.</p>
                    <Link href="/products" className={styles.backLink}>
                        Start Shopping
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className={`container ${styles.container}`}>
            <h1 className={styles.title}>Your Cart</h1>

            <div className={styles.cartList}>
                {items.map((item) => (
                    <div key={item.id} className={styles.cartItem}>
                        <div className={styles.itemImageContainer}>
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className={styles.itemImage}
                            />
                        </div>
                        <div className={styles.itemInfo}>
                            <Link href={`/products/${item.id}`} className={styles.itemName}>
                                {item.name}
                            </Link>
                            <div className={styles.itemMeta}>
                            <div className={styles.itemMeta}>
                                <div className={styles.itemPrice}>
                                    {formatPrice(item.price)}
                                </div>
                                <div className={styles.quantityControl}>
                                    <button 
                                        className={styles.qtyBtn} 
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        disabled={item.quantity <= 1}
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className={styles.qtyVal}>{item.quantity}</span>
                                    <button 
                                        className={styles.qtyBtn}
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                            </div>
                            </div>
                        </div>
                        <button
                            className={styles.removeButton}
                            onClick={() => removeFromCart(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>

            <div className={styles.summary}>
                <div className={styles.promoCode}>
                    <input type="text" placeholder="Promo Code" className={styles.promoInput} />
                    <button className={styles.promoBtn}>Apply</button>
                </div>
                <div className={styles.summaryRow}>
                    <span>Subtotal</span>
                    <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className={styles.summaryRow}>
                    <span>Shipping</span>
                    <span>Free</span>
                </div>
                <div className={styles.totalRow}>
                    <span>Total</span>
                    <span>{formatPrice(totalPrice)}</span>
                </div>
                <button
                    className={styles.checkoutButton}
                    onClick={() => {
                        router.push('/checkout');
                    }}
                >
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}
