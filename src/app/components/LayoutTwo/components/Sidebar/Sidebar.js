import React from 'react';
import { Link } from 'react-router';
import { defineMessages, FormattedMessage } from 'react-intl';

import translations from '../../../../translations/translations';

// Needed for extracting text tagged for translations
const componentMessages = defineMessages({
  home: {
    id: 'app.home',
    defaultMessage: 'Home',
  },
  projects: {
    id: 'app.projects',
    defaultMessage: 'Projects',
  },
});

const items = [
  { path: '/', label: 'home' },
  { path: '/projects', label: 'projects' },
];
const nodes = items.map(item =>
  <li key={item.label}>
    <Link
      to={item.path}
      onlyActiveOnIndex
      activeClassName="breadcrumb-active"
    >
      <FormattedMessage {...componentMessages[item.label]} />
    </Link>
  </li>
);

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.changeLocale = this.changeLocale.bind(this);
  }

  changeLocale(e) {
    // fetch the translations for the given locale and
    // dispatch `updateLocale`
    const locale = e.target.value;
    const messages = translations[locale];
    const data = {
      locale,
      messages,
    };

    this.props.updateLocale(data);
  }

  render() {
    const locales = ['en', 'fr'];
    const localeNodes = locales.map(locale =>
      <li key={locale}>
        <input type="button" value={locale} onClick={this.changeLocale} />
      </li>
    );

    return (
      <div className="sidebarTwo">
        <div className="sidebarHeader"></div>

        <ul className="sidebarContent">
          {nodes}
        </ul>

        <div className="sidebarFooter">
          {/* TODO: Update styling */}
          <ul className="locales">
            {localeNodes}
          </ul>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  updateLocale: React.PropTypes.func.isRequired,
};
