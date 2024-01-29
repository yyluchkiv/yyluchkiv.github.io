import { CategoriesIcons, CategoriesTitles } from '@/src/types/CategoriesTypes'
import { NavigationTab } from '@/src/types/NavigationTypes'
import DiaryIcon from '@/public/assets/svgs/icons/Blog/Diary.svg'
import Tech1Icon from '@/public/assets/svgs/icons/Blog/Tech1.svg'
import TechnologyIcon from '@/public/assets/svgs/icons/Blog/Technology.svg'
import TravelIcon from '@/public/assets/svgs/icons/Blog/Travel.svg'
import UkraineIcon from '@/public/assets/svgs/icons/Blog/Ukraine.svg'

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
      pathName: '/'
    },
    {
      name: 'tech1',
      pathName: 'https://tech1.io/'
    },
    {
      name: 'blog',
      pathName: '/blog'
    },
    {
      name: 'about',
      pathName: '/about',
      hide: true
    },
    {
      name: 'advanced',
      pathName: '/advanced',
      hide: true
    }
  ]
}

export default applicationConstants
