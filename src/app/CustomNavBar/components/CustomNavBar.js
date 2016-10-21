import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {
  defineMessages,
  FormattedMessage,
  intlShape,
  injectIntl,
} from 'react-intl';

import translations from '../../translations/translations';

// Needed for extracting text tagged for translations
const componentMessages = defineMessages({
  resume: {
    id: 'app.resume',
    defaultMessage: 'Resume',
  },
  projects: {
    id: 'app.projects',
    defaultMessage: 'Projects',
  },
  language: {
    id: 'app.language',
    defaultMessage: 'Language',
  },
  languageEnglish: {
    id: 'app.english',
    defaultMessage: 'English',
  },
  languageItalian: {
    id: 'app.italian',
    defaultMessage: 'Italian',
  },
});

const items = [
  { path: '/resume', label: 'resume' },
  // { path: '/projects', label: 'projects' },
];

const navOptions = items.map(item =>
  <LinkContainer to={item.path} key={item.label}>
    <NavItem eventKey={item.label}>
      <FormattedMessage {...componentMessages[item.label]} />
    </NavItem>
  </LinkContainer>
);

// TODO: Add tests for `CustomNavBar` component

class CustomNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.changeLocale = this.changeLocale.bind(this);
  }

  changeLocale(eventKey) {
    const locale = eventKey;
    const messages = translations[locale];
    const data = {
      locale,
      messages,
    };

    this.props.updateLocale(data);
  }

  render() {
    return (
      <Navbar fixedTop inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Harsh Verma</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {navOptions}
          </Nav>
          <Nav pullRight>
            <NavDropdown
              eventKey={1}
              id="basic-nav-dropdown"
              title={this.props.intl.formatMessage(componentMessages.language)}
            >

              <MenuItem
                eventKey="en"
                onSelect={this.changeLocale}
              >
                {this.props.intl.formatMessage(componentMessages.languageEnglish)}
              </MenuItem>

              <MenuItem
                eventKey="it"
                onSelect={this.changeLocale}
              >
                {this.props.intl.formatMessage(componentMessages.languageItalian)}
              </MenuItem>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

CustomNavBar.propTypes = {
  intl: intlShape.isRequired,
  updateLocale: React.PropTypes.func.isRequired,
};

export default injectIntl(CustomNavBar);
