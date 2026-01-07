'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Minus, Plus } from 'lucide-react';
import styles from './AddToCartModal.module.css';
import { Product } from '@/data/products';

interface AddToCartModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: (quantity: number) => void;
    product: Product;
}

export default function AddToCartModal({ isOpen, onClose, onConfirm, product }: AddToCartModalProps) {
    const [quantity, setQuantity] = useState(1);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
            setQuantity(1); // Reset quantity when closed
        };
    }, [isOpen]);

    if (!isOpen || !mounted) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <div className={styles.overlay} onClick={handleBackdropClick}>
            <div className={styles.modal}>
                <h3 className={styles.title}>
                    Add <span className={styles.productName}>{product.name}</span> to Cart?
                </h3>
                
                <div className={styles.controls}>
                    <button 
                        className={styles.qtyBtn} 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        disabled={quantity <= 1}
                    >
                        <Minus size={20} />
                    </button>
                    <span className={styles.value}>{quantity}</span>
                    <button 
                        className={styles.qtyBtn}
                        onClick={() => setQuantity(quantity + 1)}
                    >
                        <Plus size={20} />
                    </button>
                </div>

                <div className={styles.actions}>
                    <button className={`${styles.button} ${styles.cancel}`} onClick={onClose}>
                        Cancel
                    </button>
                    <button 
                        className={`${styles.button} ${styles.confirm}`}
                        onClick={() => onConfirm(quantity)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
}
