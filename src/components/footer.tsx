import ExtLink from './ext-link'

export default function Footer() {
  return (
    <>
      <footer>
        <span>Download!</span>
        <ExtLink href="https://osdn.net/projects/bohnenlinux/downloads/74761/bohnenlinux-i386-2021-r1.iso/">
          <img
            src="https://github.com/CentRa-Linux/bohnenblog/raw/master/are.svg"
            height={46}
            width={132}
            alt="deploy to Vercel button"
          />
        </ExtLink>
      </footer>
    </>
  )
}
