import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/card";

const data = [
  { id: 1, path: '/product', title: 'Product', content: 'Routing' },
  { id: 2, path: '/news', title: 'News', content: 'Rendering' },
  { id: 3, path: '/post', title: 'Post', content: 'Data Fetching' },
  { id: 4, path: '/blog', title: 'Blog', content: 'Styling' },
]

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        {data.map(({ id, title, content, path }) => {
          return <Card key={id.toString() + title} title={title} content={content} path={path} />
        })}
      </div>
    </main>
  );
}
