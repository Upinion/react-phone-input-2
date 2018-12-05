import React from 'react';
import { render } from 'react-dom';
import PhoneInput from './index';

export default render(
  <div style={{ fontFamily: "'Roboto', sans-serif", fontSize: '15px' }}>
    <style dangerouslySetInnerHTML={{__html: `
      input[type="tel"].custom-phone-input {
        font-size: 14px;
        border-color: #a0a0a0;
      }

      .custom-phone-button {
        background: rgb(200, 215, 225) !important;
        border-color: #a0a0a0 !important;
      }

      .custom-dropdown {
        margin-top: 0 !important;
      }
    `}} />
    <div style={{ display: 'inline-block', verticalAlign: 'top' }}>
      <p>v1.2.1</p>
      <p>Exclude countries (usa, canada)</p>
      <PhoneInput
        defaultCountry='no'
        excludeCountries={['us', 'ca']}
      />
      <p>Only countries</p>
      <PhoneInput
        defaultCountry='gb'
        onlyCountries={['gb', 'es']}
      />
      <p>Preferred countries</p>
      <PhoneInput
        defaultCountry='it'
        preferredCountries={['it', 'se']}
      />
    </div>

    <div style={{ display: 'inline-block', marginLeft: '40px' }}>
      <p>v2</p>
      <p>Auto country detect by value</p>
      <PhoneInput
        value='+3802343252'
      />
      <p>Disabled area codes with disableAreaCodes</p>
      <PhoneInput
        defaultCountry='us'
        disableAreaCodes={true}
      />
      <p>Disabled flag by default</p>
      <p>Customizable placeholder</p>
      <p>Customizable styles</p>
      <PhoneInput
        disableAreaCodes={true}
        placeholder='Type your phone here'
        inputStyle={{
          width: '300px',
          height: '35px',
          fontSize: '13px',
          paddingLeft: '48px',
          borderRadius: '5px'
        }}
        buttonStyle={{ borderRadius: '5px 0 0 5px' }}
        dropdownStyle={{ width: '300px' }}
      />
      <p>Customizable classes</p>
      <PhoneInput
        containerClass={'react-tel-input'}
        inputClass={'custom-phone-input'}
        buttonClass={'custom-phone-button'}
        dropdownClass={'custom-dropdown'}
      />
    </div>

    <div style={{ display: 'inline-block', marginLeft: '40px', verticalAlign: 'top', marginTop: '35px' }}>
      <p>Custom region selected: {`{'europe'}`}</p>
      <PhoneInput
        defaultCountry='it'
        regions={'europe'}
      />
      <p>Custom regions selected: {`{['north-america', 'carribean']}`}</p>
      <PhoneInput
        defaultCountry='ca'
        regions={['north-america', 'carribean']}
      />
      <p>Disabled dropdown and country code</p>
      <PhoneInput
        onlyCountries={['us']}
        defaultCountry='us'
        disableAreaCodes={true}
        disableCountryCode={true}
        disableDropdown={true}
        placeholder='(702) 123-4567'
      />
      <p>Localization</p>
      <p>Non-editable country code</p>
      <p>Autofocus</p>
      <PhoneInput
        defaultCountry='de'
        onlyCountries={['de', 'es']}
        localization={{'Germany': 'Deutschland', 'Spain': 'España'}}
        countryCodeEditable={false}
        inputExtraProps={{
          name: 'tel',
          required: true,
          autoFocus: true
        }}
      />
    </div>
    <div style={{ display: 'inline-block', marginLeft: '40px', verticalAlign: 'top', marginTop: '35px' }}>
      <p>With search field</p>
      <PhoneInput
        defaultCountry="nl"
        enableSearchField
      />
    </div>
  </div>, document.getElementById('root')
);
