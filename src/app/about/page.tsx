import styles from './page.module.css';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className={`container ${styles.container}`}>
            <section className={styles.hero}>
                <h1 className={styles.title}>Stay Wild, Step Boldly.</h1>
                <p className={styles.subtitle}>
                    WildStep is more than just an outdoor equipment store. We are a community of explorers, 
                    dedicated to providing the tools you need to conquer any terrain.
                </p>
            </section>

            <div className={styles.grid}>
                <div className={styles.content}>
                    <h2>Our Story</h2>
                    <p>
                        Founded by a group of hiking enthusiasts, WildStep began in a small garage with a 
                        single mission: to make high-quality alpine gear accessible to everyone.
                    </p>
                    <p>
                        We believe that nature is the ultimate playground, and everyone deserves 
                        the chance to experience its beauty without being held back by their equipment.
                    </p>
                    <p>
                        Today, we curate only the best products from around the world, testing them in the 
                        harshest conditions to ensure they meet our rigorous standards.
                    </p>
                </div>
                <div className={styles.imagePlaceholder}>
                    <img 
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" 
                        alt="Mountain Range" 
                    />
                </div>
            </div>

            <section className={styles.mission}>
                <h2>Our Mission</h2>
                <p>
                    "To empower every individual to explore the great outdoors with confidence, 
                    comfort, and style, by providing world-class technical gear and expert knowledge."
                </p>
            </section>

            <div className={styles.grid} style={{ marginTop: 'var(--spacing-2xl)', direction: 'rtl' }}>
                <div className={styles.content} style={{ direction: 'ltr' }}>
                    <h2>Quality Above All</h2>
                    <p>
                        Every tent, backpack, and pair of boots in our collection is handpicked by our 
                        experts. We partner with brands that share our commitment to sustainability 
                        and durability.
                    </p>
                    <p>
                        When you choose WildStep, you're choosing gear that will last for years of 
                        expeditions, reducing waste and ensuring your safety on the trail.
                    </p>
                </div>
                <div className={styles.imagePlaceholder}>
                    <img 
                        src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800" 
                        alt="Hiker in the mountains" 
                    />
                </div>
            </div>
        </div>
    );
}
