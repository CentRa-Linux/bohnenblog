import Lightning from './svgs/lightning'
import Jamstack from './svgs/jamstack'
import Wifi from './svgs/wifi'
import Lighthouse from './svgs/lighthouse'
import Plus from './svgs/plus'
import Notion from './svgs/notion'
import Edit from './svgs/edit'
import Scroll from './svgs/scroll'

const features = [
  {
    text: '超高速',
    icon: Lightning,
  },
  {
    text: '安定性',
    icon: Jamstack,
  },
  {
    text: 'ドライバ互換性',
    icon: Wifi,
  },
  {
    text: '32Bit向けにチューン',
    icon: Edit,
  },
]

const Features = () => (
  <div className="features">
    {features.map(({ text, icon: Icon }) => (
      <div className="feature" key={text}>
        {Icon && <Icon height={24} width={24} />}
        <h4>{text}</h4>
      </div>
    ))}
  </div>
)

export default Features
