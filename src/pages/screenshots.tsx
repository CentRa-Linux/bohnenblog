
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1>スクリーンショット</h1>
        <h2>
          「軽くて早くて即使える」32BitDebianカスタムイメージ
        </h2>
        <iframe src="https://albumizr.com/a/l9dh" scrolling="no" frameBorder="0" allowfullscreen width="700" height="400"></iframe>
      </div>
    </>
  )
}
