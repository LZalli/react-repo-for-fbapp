import React from 'react'

// examples

const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

const Accordion = React.lazy(() => import('./views/components/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/components/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/components/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/components/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/components/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/components/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/components/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/components/base/paginations/Paginations'))
const Popovers = React.lazy(() => import('./views/components/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/components/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/components/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/components/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/components/base/tooltips/Tooltips'))

const Buttons = React.lazy(() => import('./views/components/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() =>
  import('./views/components/buttons/button-groups/ButtonGroups'),
)
const Dropdowns = React.lazy(() => import('./views/components/buttons/dropdowns/Dropdowns'))

const ChecksRadios = React.lazy(() => import('./views/components/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() =>
  import('./views/components/forms/floating-labels/FloatingLabels'),
)
const FormControl = React.lazy(() => import('./views/components/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/components/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/components/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/components/forms/range/Range'))
const Select = React.lazy(() => import('./views/components/forms/select/Select'))
const Validation = React.lazy(() => import('./views/components/forms/validation/Validation'))

const CoreUIIcons = React.lazy(() => import('./views/components/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/components/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/components/icons/brands/Brands'))

const Alerts = React.lazy(() => import('./views/components/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/components/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/components/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/components/notifications/toasts/Toasts'))

// const Login = React.lazy(() => import('./views/examples/pages/login/Login'))
// const Register = React.lazy(() => import('./views/examples/pages/register/Register'))
// const Page404 = React.lazy(() => import('./views/examples/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/examples/pages/page500/Page500'))

const Widgets = React.lazy(() => import('./views/components/widgets/Widgets'))

const Charts = React.lazy(() => import('./views/components/charts/Charts'))
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Allinfb = React.lazy(() => import('./views/info-facebook/Allinfb'))
const Formsfb = React.lazy(() => import('./views/info-facebook/Formsfb'))
const pagefb = React.lazy(() => import('./views/info-facebook/pagefb'))
const Formspost = React.lazy(() => import('./views/info-post/Formspost'))
const Allinfp = React.lazy(() => import('./views/info-post/Allinfp'))
const Getpost = React.lazy(() => import('./views/info-post/Getpost'))
const Pageinst = React.lazy(() => import('./views/Instagram/Pageinst'))
const Chart = React.lazy(() => import('./views/dashboard/Chart'))
const PostIntsgram = React.lazy(() => import('./views/Instagram/PostIntsgram'))
const Instapostmore = React.lazy(() => import('./views/Instagram/Instapostmore'))

const Instaudience = React.lazy(() => import('./views/dashboard/Instaudience'))
const Instaclicks = React.lazy(() => import('./views/dashboard/Instaclicks'))
const Instaimportant = React.lazy(() => import('./views/dashboard/Instaimportant'))
const Totalvaluesfb = React.lazy(() => import('./views/dashboard/Totalvaluesfb'))

const Engagementfb = React.lazy(() => import('./views/dashboard/Engagementfb'))

const Reactionfb = React.lazy(() => import('./views/dashboard/Reactionfb'))
const Pageviewsfb = React.lazy(() => import('./views/dashboard/Pageviewsfb'))
const Pageimpfb = React.lazy(() => import('./views/dashboard/Pageimpfb'))
const Feedbackfb = React.lazy(() => import('./views/dashboard/Feedbackfb'))
const Consultfb = React.lazy(() => import('./views/dashboard/Consultfb'))
const Videoviewsfb = React.lazy(() => import('./views/dashboard/Videoviewsfb'))
const Thirtyvideo = React.lazy(() => import('./views/dashboard/Thirtyvideo'))
const Tenvideos = React.lazy(() => import('./views/dashboard/Tenvideos'))
const Pagefanfb = React.lazy(() => import('./views/dashboard/Pagefanfb'))
const Fansfb = React.lazy(() => import('./views/dashboard/Fansfb'))
const BenchMark = React.lazy(() => import('./views/dashboard/BenchMark'))



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/fb', name: 'Allinfb', component: Allinfb },
  { path: '/page-info', name: 'pagefb', component: pagefb },
  { path: '/Formspost', name: 'Formspost', component: Formspost },
  { path: '/getpost', name: 'getpost', component: Getpost },
  { path: '/PostIntsgram', name: 'PostIntsgram', component: PostIntsgram },
  { path: '/Instapostmore', name: 'Instapostmore', component: Instapostmore },
  
  { path: '/Totalvaluesfb', name: 'Totalvaluesfb', component: Totalvaluesfb },
  { path: '/Engagementfb', name: 'Engagementfb', component: Engagementfb },
  { path: '/Reactionfb', name: 'Reactionfb', component: Reactionfb },
  { path: '/Pageviewsfb', name: 'Pageviewsfb', component: Pageviewsfb },
  { path: '/Pageimpfb', name: 'Pageimpfb', component: Pageimpfb },
  { path: '/Feedbackfb', name: 'Feedbackfb', component: Feedbackfb },
  { path: '/Consultfb', name: 'Consultfb', component: Consultfb },

  { path: '/Videoviewsfb', name: 'Videoviewsfb', component: Videoviewsfb },
  { path: '/Thirtyvideo', name: 'Thirtyvideo', component: Thirtyvideo },
  { path: '/Tenvideos', name: 'Tenvideos', component: Tenvideos },
  { path: '/Pagefanfb', name: 'Pagefanfb', component: Pagefanfb },

  { path: '/Fansfb', name: 'Fansfb', component: Fansfb },
  { path: '/BenchMark', name: 'BenchMark', component: BenchMark },
  { path: '/Allinfp', name: 'Allinfp', component: Allinfp },
  { path: '/pageinst', name: 'pageinst', component: Pageinst },
  { path: '/Chart', name: 'Chart', component: Chart },
  { path: '/Instaimportant', name: 'Instaimportant', component: Instaimportant },
  { path: '/Instaclicks', name: 'Instaclicks', component: Instaclicks },
  { path: '/Instaudience', name: 'Instaudience', component: Instaudience },
  { path: '/formsfb', name: 'Formsfb', component: Formsfb },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', component: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress', name: 'Progress', component: Progress },
  { path: '/base/spinners', name: 'Spinners', component: Spinners },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/forms', name: 'Forms', component: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', component: FormControl },
  { path: '/forms/select', name: 'Select', component: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', component: ChecksRadios },
  { path: '/forms/range', name: 'Range', component: Range },
  { path: '/forms/input-group', name: 'Input Group', component: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', component: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', component: Layout },
  { path: '/forms/validation', name: 'Validation', component: Validation },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toasts', name: 'Toasts', component: Toasts },
  // { path: '/login', name: 'Login', component: Login },
  // { path: '/register', name: 'Register', component: Register },
  // { path: '/404', name: '404', component: Page404 },
  // { path: '/500', name: '500', component: Page500 },
  { path: '/widgets', name: 'Widgets', component: Widgets },
]

export default routes
