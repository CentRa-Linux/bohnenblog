import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1>BohnenLinux -ボーネンリナックス-</h1>
        <h2>
          「軽くて早くて即使える」32BitDebianカスタムイメージ
        </h2>

        <Features />

        <div className="explanation">
          <h2 id="-">これは何？</h2>
<p>LinuxBeanの作者さんが熊本地震で被災されてしまってメンテナンスが止まっているので<del>パクリ</del>代替を作りました。</p>
<h2 id="-">特徴</h2>
<ul>
<li>軽い<ul>
<li>LinuxBeanと同じくLXDEを採用。</li>
</ul>
</li>
<li>32Bit<ul>
<li>古いパソコンの再利用に。</li>
</ul>
</li>
<li>日本語が即使える<ul>
<li>日本語環境が最初から用意されています。</li>
</ul>
</li>
<li>かっこいい<ul>
<li>近年のデザインを取り入れました。</li>
</ul>
</li>
<li>わかりやすいUI<ul>
<li>LinuxBeanが使えた人なら誰でも使えます。</li>
</ul>
</li>
</ul>
        </div>
      </div>
    </>
  )
}
