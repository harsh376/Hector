import React from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {
  defineMessages,
  FormattedMessage,
  intlShape,
  injectIntl,
} from 'react-intl'

import translations from '../../translations/translations.json'

// Needed for extracting text tagged for translations
const componentMessages = defineMessages({
  projects: {
    id: 'app.projects',
    defaultMessage: 'Projects',
  },
  work: {
    id: 'app.work',
    defaultMessage: 'Work Experience',
  },
  language: {
    id: 'app.language',
    defaultMessage: 'Language',
  },
  languageEnglish: {
    id: 'app.english',
    defaultMessage: 'English',
  },
  languageFrench: {
    id: 'app.french',
    defaultMessage: 'French',
  },
})

const items = [
  { path: '/projects', label: 'projects' },
  { path: '/work', label: 'work' },
]

const navOptions = items.map(item => (
  <LinkContainer to={item.path} key={item.label}>
    <NavItem eventKey={item.label}>
      <FormattedMessage {...componentMessages[item.label]} />
    </NavItem>
  </LinkContainer>
))

// TODO: Add tests for `MyNavBar` component

class MyNavBar extends React.Component {
  constructor(props) {
    super(props)
    this.changeLocale = this.changeLocale.bind(this)
  }

  changeLocale(eventKey) {
    const locale = eventKey
    const messages = translations[locale]
    const data = {
      locale,
      messages,
    }

    this.props.updateLocale(data)
  }

  render() {
    return (
      <Navbar fixedTop inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Harsh Verma</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
    )
  }
}

MyNavBar.propTypes = {
  intl: intlShape.isRequired,
  updateLocale: React.PropTypes.func.isRequired,
}

export default injectIntl(MyNavBar)
