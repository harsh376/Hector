import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import Sidebar from './Sidebar';

describe('LayoutTwo: <Sidebar />', () => {
  it('renders menu items', () => {
    const wrapper = shallow(
      <Sidebar updateLocale={data => data} />,
    );

    expect(wrapper.find('.sidebarContent').children()).to.have.length(2);
    const keys = wrapper.find('.sidebarContent').children().map(node => node.key());
    expect(keys).to.deep.equal(['home', 'projects']);
  });

  it('renders locales', () => {
    const wrapper = shallow(
      <Sidebar updateLocale={data => data} />,
    );

    expect(wrapper.find('.locales').children()).to.have.length(2);
    const localeKeys = wrapper.find('.locales').children().map(node => node.key());
    expect(localeKeys).to.deep.equal(['en', 'fr']);
  });

  it('calls updateLocale', () => {
    let data;
    const updateLocale = (newData) => {
      data = newData;
    };
    const wrapper = mount(
      <IntlProvider locale="en">
        <Sidebar updateLocale={updateLocale} />
      </IntlProvider>,
    );

    const enLi = wrapper.find('.locales').childAt(0);
    const enInput = enLi.childAt(0);
    enInput.simulate('click');
    expect(data).to.deep.equal({
      locale: 'en',
      messages: {
        'app.backToHome': 'Go back to Home',
        'app.aboutme': 'About me',
        'app.projects': 'Projects',
        'app.language': 'Language',
        'app.english': 'English',
        'app.french': 'French',
      },
    });
  });
});
