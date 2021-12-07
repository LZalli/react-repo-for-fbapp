import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'BenchMark',
    to: '/BenchMark',
    icon: <CIcon name="cil-speedometer" customClasses="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },

  
  {
    _component: 'CNavGroup',
    anchor: 'Facebook',
    icon: <CIcon name="cil-star" customClasses="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Totalvaluesfb',
        to: '/Totalvaluesfb',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Engagementfb',
        to: '/Engagementfb',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Reactionfb',
        to: '/Reactionfb',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Pageviewsfb',
        to: '/Pageviewsfb',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Pageimpfb',
        to: '/Pageimpfb',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Feedbackfb',
        to: '/Feedbackfb',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Consultfb',
        to: '/Consultfb',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Videoviewsfb',
        to: '/Videoviewsfb',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Thirtyvideo',
        to: '/Thirtyvideo',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Tenvideos',
        to: '/Tenvideos',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Pagefanfb',
        to: '/Pagefanfb',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Fansfb',
        to: '/Fansfb',
      },

  
      
    ],
  },  
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'formsfb',
    to: '/formsfb',
    icon: <CIcon name="cil-speedometer" customClasses="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Formspost',
    to: '/Formspost',
    icon: <CIcon name="cil-speedometer" customClasses="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },

  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'pageinst',
    to: '/pageinst',
    icon: <CIcon name="cil-speedometer" customClasses="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  
  // {
  //   _component: 'CNavItem',
  //   as: NavLink,
  //   anchor: 'Chart',
  //   to: '/Chart',
  //   icon: <CIcon name="cil-speedometer" customClasses="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Instaimportant',
    to: '/Instaimportant',
    icon: <CIcon name="cil-speedometer" customClasses="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Instaclicks',
    to: '/Instaclicks',
    icon: <CIcon name="cil-speedometer" customClasses="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Instaudience',
    to: '/Instaudience',
    icon: <CIcon name="cil-speedometer" customClasses="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },

  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'PostIntsgram',
    to: '/PostIntsgram',
    icon: <CIcon name="cil-speedometer" customClasses="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
]

export default _nav
