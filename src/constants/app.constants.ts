import { CategoriesIcons, CategoriesTitles } from '@/src/types/types'
import { NavigationTab } from '@/src/types/types'
import DiaryIcon from '@/public/assets/svgs/icons/Posts/Diary.svg'
import Tech1Icon from '@/public/assets/svgs/icons/Posts/Tech1.svg'
import TechnologyIcon from '@/public/assets/svgs/icons/Posts/Technology.svg'
import TravelIcon from '@/public/assets/svgs/icons/Posts/Travel.svg'
import UkraineIcon from '@/public/assets/svgs/icons/Posts/Ukraine.svg'

const applicationConstants: {
  BLOG_ARTICLE_CATEGORIES: {
    ICONS: CategoriesIcons,
    TITLES: CategoriesTitles
  },
  NAVIGATION_TABS: NavigationTab[]
} = {
  BLOG_ARTICLE_CATEGORIES: {
    ICONS: {
      DIARY: DiaryIcon,
      TECH1: Tech1Icon,
      TECHNOLOGY: TechnologyIcon,
      TRAVEL: TravelIcon,
      UKRAINE: UkraineIcon
    },
    TITLES: {
      DIARY: 'Diary',
      TECHNOLOGY: 'Technology',
      TRAVEL: 'Travel',
      UKRAINE: 'Ukraine'
    }
  },
  NAVIGATION_TABS: [
    {
      name: 'home',
      pathName: '/',
      hide: false
    },
    {
      name: 'posts',
      pathName: '/posts',
      hide: true
    },
    {
      name: 'about',
      pathName: '/about',
      hide: false
    },
    {
      name: 'newsletter',
      pathName: '/newsletter',
      hide: true
    }
  ]
}

export default applicationConstants
