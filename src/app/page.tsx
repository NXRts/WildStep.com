import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';

export default function Home() {
  // Select first 4 products for featured section
  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Conquer The Wild</h1>
          <p className={styles.heroSubtitle}>
            Premium gear for the modern explorer. Designed for durability, engineered for adventure.
          </p>
          <Link href="/products" className={styles.ctaButton}>
            Start Your Journey <ArrowRight size={24} />
          </Link>
        </div>
      </section>

      <div className="container">
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Gear</h2>
            <Link href="/products" className={styles.viewAll}>
              View All <ArrowRight size={20} />
            </Link>
          </div>

          <div className={styles.grid}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Categories</h2>
          </div>
          {/* A simple category grid could go here, but for now we focus on products */}
        </section>
      </div>
    </>
  );
}
