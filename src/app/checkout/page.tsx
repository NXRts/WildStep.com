'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function CheckoutPage() {
    const { items, totalPrice, clearCart } = useCart();
    const [mounted, setMounted] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        payment: 'credit-card'
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    if (isSubmitted) {
        return (
            <div className={`container ${styles.container}`}>
                <div className={styles.successMessage}>
                    <CheckCircle size={80} color="var(--primary-color)" style={{ marginBottom: '1.5rem' }} />
                    <h1 className={styles.successTitle}>Order Confirmed!</h1>
                    <p>Thank you for your purchase. We've sent a confirmation email to {formData.email}.</p>
                    <p>Your gear will be arriving soon, stay wild!</p>
                    <Link href="/products" className={styles.backLink}>
                        Continue Shopping
                    </Link>
                </div>
            </div>
        );
    }

    if (items.length === 0) {
        return (
            <div className={`container ${styles.container}`}>
                <h1 className={styles.title}>Checkout</h1>
                <div style={{ textAlign: 'center', padding: 'var(--spacing-xl)' }}>
                    <p>Your cart is empty.</p>
                    <Link href="/products" className={styles.backLink}>
                        Go to Shop
                    </Link>
                </div>
            </div>
        );
    }

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(price);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would normally send content to API
        setIsSubmitted(true);
        clearCart();
    };

    return (
        <div className={`container ${styles.container}`}>
            <h1 className={styles.title}>Checkout</h1>

            <div className={styles.checkoutGrid}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Shipping Information</h2>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Full Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleInputChange}
                                className={styles.input}
                                placeholder="John Doe"
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className={styles.input}
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Address</label>
                            <input
                                type="text"
                                name="address"
                                required
                                value={formData.address}
                                onChange={handleInputChange}
                                className={styles.input}
                                placeholder="Street Address"
                            />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>City</label>
                                <input
                                    type="text"
                                    name="city"
                                    required
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    placeholder="City"
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>ZIP Code</label>
                                <input
                                    type="text"
                                    name="zip"
                                    required
                                    value={formData.zip}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                    placeholder="12345"
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Payment Method</h2>
                        <div className={styles.formGroup}>
                            <select
                                name="payment"
                                value={formData.payment}
                                onChange={handleInputChange}
                                className={styles.input}
                            >
                                <option value="credit-card">Credit Card</option>
                                <option value="bank-transfer">Bank Transfer</option>
                                <option value="e-wallet">E-Wallet (GoPay/OVO)</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>Order Summary</h2>
                        <div className={styles.summaryRow}>
                            <span>Subtotal ({items.length} items)</span>
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
                    </div>

                    <button type="submit" className={styles.submitButton}>
                        Place Order
                    </button>
                </form>
            </div>
        </div>
    );
}
