import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Screenshots', page: '/screenshots' },
  { label: 'Blog', page: '/blog' },
  { label: 'Contact', page: '/contact' },
  { label: 'OSDN', link: 'https://osdn.net/projects/bohnenlinux/' },
]

const ogImageUrl = 'https://albumizr.com/ia/6f2f26c2775c485b49bd0718ebd65b2d.jpg'

const Header = ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ''} BohnenLinux</title>
        <meta
          name="description"
          content="Blazing fast 32Bit Debian-based OS"
        />
        <meta name="og:title" content="BohnenLinux" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@cent_ra" />
        <meta name="twitter:card" content={ogImageUrl} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
