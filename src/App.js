import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const Allinfb = React.lazy(() => import('./views/info-facebook/Allinfb'))
const Formsfb = React.lazy(() => import('./views/info-facebook/Formsfb'))
const Pagefb = React.lazy(() => import('./views/info-facebook/pagefb'))
const Formspost = React.lazy(() => import('./views/info-post/Formspost'))
const Allinfp = React.lazy(() => import('./views/info-post/Allinfp'))
const Getpost = React.lazy(() => import('./views/info-post/Getpost'))
const Pageinst = React.lazy(() => import('./views/Instagram/Pageinst'))
const Chart = React.lazy(() => import('./views/dashboard/Chart'))
const Instaimportant = React.lazy(() => import('./views/dashboard/Instaimportant'))
const Instaclicks = React.lazy(() => import('./views/dashboard/Instaclicks'))
const Instaudience = React.lazy(() => import('./views/dashboard/Instaudience'))
const PostIntsgram = React.lazy(() => import('./views/Instagram/PostIntsgram'))
const Instapostmore = React.lazy(() => import('./views/Instagram/Instapostmore'))

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


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/" name="Login Page" render={(props) => <Login {...props} />} />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
            <Route path="/dashboard" name="Home" render={(props) => <DefaultLayout {...props} />} />
            
            <Route path="/fb" name="fb" render={(props) => <Allinfb {...props} />} />
            <Route path="/Formsfb" name="fb" render={(props) => <Formsfb {...props} />} />
            <Route path="/page-info" name="page-info" render={(props) => <Pagefb {...props} />} />
            <Route path="/Formspost" name="fb" render={(props) => <Formspost {...props} />} />
            <Route path="/Allinfp" name="fb" render={(props) => <Allinfp {...props} />} />
            <Route path="/getpost" name="fb" render={(props) => <Getpost {...props} />} />
            <Route path="/PostIntsgram" name="PostIntsgram" render={(props) => <PostIntsgram {...props} />} />
            <Route path="/Engagementfb" name="Engagementfb" render={(props) => <Engagementfb {...props} />} />
            <Route path="/Reactionfb" name="Reactionfb" render={(props) => <Reactionfb {...props} />} />
            <Route path="/Pageviewsfb" name="Pageviewsfb" render={(props) => <Pageviewsfb {...props} />} />
            <Route path="/Pageimpfb" name="Pageimpfb" render={(props) => <Pageimpfb {...props} />} />

            <Route path="/Feedbackfb" name="Feedbackfb" render={(props) => <Feedbackfb {...props} />} />

            <Route path="/Consultfb" name="Consultfb" render={(props) => <Consultfb {...props} />} />
            <Route path="/Videoviewsfb" name="Videoviewsfb" render={(props) => <Videoviewsfb {...props} />} />
            <Route path="/Thirtyvideo" name="Thirtyvideo" render={(props) => <Thirtyvideo {...props} />} />
            <Route path="/Pagefanfb" name="Pagefanfb" render={(props) => <Pagefanfb {...props} />} />
            <Route path="/Fansfb" name="Fansfb" render={(props) => <Fansfb {...props} />} />
            <Route path="/BenchMark" name="BenchMark" render={(props) => <BenchMark {...props} />} />

            
            
            <Route path="/pageinst" name="pageinst" render={(props) => <Pageinst {...props} />} />
            <Route path="/Chart" name="pageinst" render={(props) => <Chart {...props} />} />
            <Route path="/Instaimportant" name="Instaimportant" render={(props) => <Instaimportant {...props} />} />
            <Route path="/Instaclicks" name="Instaclicks" render={(props) => <Instaclicks {...props} />} />
            <Route path="/Instaudience" name="Instaudience" render={(props) => <Instaudience {...props} />} />
            <Route path="/Instapostmore" name="Instapostmore" render={(props) => <Instapostmore {...props} />} />
            <Route path="/Totalvaluesfb" name="Totalvaluesfb" render={(props) => <Totalvaluesfb {...props} />} />
            <Route path="/Tenvideos" name="Tenvideos" render={(props) => <Tenvideos {...props} />} />

            
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    )
  }
}

export default App
