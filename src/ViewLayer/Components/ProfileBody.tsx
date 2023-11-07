import React, { useState, useEffect, useRef, ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { Select as SelectAntd } from "antd";
// import 'antd/dist/antd.css'

import { Avatar } from "./Avatar";
import { SelectLanguage } from "./SelectLanguage";
import { getCountriesOptions } from "../../shared/getCountriesOptions";
import { COUNTRIES } from "../../Constants/countries.const";
import { LANGUAGES } from "../../Constants/languages.const";
import { MEDIA } from "../../Constants/media.const";
import { GENDER } from "../../Constants/gender.const";
import { CATEGORIES_TO_EXCHANGE } from "../../Constants/categoriesToExchange.const";
import { getStdDictionaryOptions } from "../../shared/getStdDictionaryOptions";
import { DICTIONARY } from "../../Constants/dictionary.const";
import { handleEvents } from "../../DataLayer/index.handleEvents";
import { IRootStore } from "../../Interfaces/IRootStore";
import { Button } from "../ComponentsLibrary/Button";
import { Input } from "../ComponentsLibrary/Input";

interface ProfileBodyArgs {}

export const ProfileBody: React.FunctionComponent<ProfileBodyArgs> = (
  props: ProfileBodyArgs
): ReactElement => {
  const {
    language,
    forms: { user, userPrev },
  } = useSelector((store: IRootStore) => store);

  const {
    userName,
    userNameNick,
    userLanguages,
    userLocaleCountry,
    userSkillsExpertise,
    userGender,
    userMedia,
  } = user;

  useEffect(() => {
    handleEvents(
      {},
      {
        typeEvent: "ONCHANGE_USER_NAME_NICK",
        data: userNameNick ? userNameNick : userName,
      }
    );
  }, [userName]);

  const filterOption = (input, option) =>
    option?.label?.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
    option?.value?.toLowerCase().indexOf(input.toLowerCase()) >= 0;

  const isChangedForm = JSON.stringify(userPrev) !== JSON.stringify(user);
  const buttonSearchSepClass = isChangedForm
    ? "Button_searchSepActive"
    : "Button_searchSepPassive";
  const defaultOption = DICTIONARY.notSelected;
  const stubOnAction = () => {};

  const propsOut = {
    inputUserNameNickProps: {
      classAdded: "Input_userNameFirst",
      type: "text",
      placeholder: DICTIONARY["name"][language],
      typeEvent: "ONCHANGE_USER_NAME_NICK",
      storeFormGroup: "user",
      storeFormProp: "userNameNick",
    },
    inputUserInfoAboutProps: {
      tagName: "textarea",
      classAdded: "Input_userInfoAbout",
      placeholder: DICTIONARY["tell_about_yourself"][language],
      typeEvent: "ONCHANGE_USER_INFO_ABOUT",
      storeFormGroup: "user",
      storeFormProp: "userInfoAbout",
    },
    selectSkillsExpertizeProps: {
      allowClear: true,
      componentId: nanoid(),
      value: userSkillsExpertise,
      filterOption,
      mode: "multiple" as "multiple" | "tags",
      onBlur: stubOnAction,
      onChange: (values: string[]) =>
        handleEvents(
          {},
          { typeEvent: "SELECT_SKILLS_EXPERTISE", data: values }
        ),
      onFocus: stubOnAction,
      onSearch: stubOnAction,
      options: getStdDictionaryOptions(
        CATEGORIES_TO_EXCHANGE,
        language,
        defaultOption
      ),
      placeholder: DICTIONARY["select"][language],
      showSearch: true,
      style: { width: "100%" },
    },
    selectUserLanguagesProps: {
      LANGUAGES,
      language,
      mode: "multiple" as "multiple" | "tags",
      typeEvent: "SELECT_USER_LANGUAGES",
      classAdded: "SelectUserLanguages__ProfileBody",
      languagesSelected: userLanguages?.length
        ? userLanguages.map((item) => ({ value: item }))
        : undefined,
    },
    inputUserBirthYearProps: {
      classAdded: "Input_ageFromToRequired",
      type: "text",
      placeholder: DICTIONARY["optional"][language],
      typeEvent: "ONCHANGE_USER_BIRTH_YEAR",
      storeFormGroup: "user",
      storeFormProp: "userBirthYear",
    },
    selectUserGenderProps: {
      allowClear: true,
      componentId: nanoid(),
      value: [userGender],
      defaultValue: [],
      filterOption,
      mode: null,
      onBlur: stubOnAction,
      onChange: (values: string | string[]) =>
        handleEvents(
          {},
          {
            typeEvent: "SELECT_USER_GENDER",
            data: Array.isArray(values) ? values.join("") : values,
          }
        ),
      onFocus: stubOnAction,
      onSearch: stubOnAction,
      optionFilterProp: "children",
      options: getStdDictionaryOptions(GENDER, language, defaultOption),
      placeholder: DICTIONARY["select"][language],
      showSearch: true,
      style: { width: "100%" },
    },
    selectUserMediaProps: {
      allowClear: true,
      componentId: nanoid(),
      value: userMedia,
      defaultValue: [],
      filterOption,
      mode: "multiple" as "multiple" | "tags",
      onBlur: stubOnAction,
      onChange: (values: string[]) =>
        handleEvents({}, { typeEvent: "SELECT_USER_MEDIA", data: values }),
      onFocus: stubOnAction,
      onSearch: stubOnAction,
      optionFilterProp: "children",
      options: getStdDictionaryOptions(MEDIA, language, defaultOption),
      placeholder: DICTIONARY["select"][language],
      showSearch: true,
      style: { width: "100%" },
    },
    selectUserLocaleCountryProps: {
      allowClear: true,
      componentId: nanoid(),
      value: userLocaleCountry,
      filterOption,
      mode: null,
      onBlur: stubOnAction,
      onChange: (values: string | string[]) =>
        handleEvents(
          {},
          {
            typeEvent: "SELECT_USER_COUNTRY",
            data: Array.isArray(values) ? values.join("") : values,
          }
        ),
      onFocus: stubOnAction,
      onSearch: stubOnAction,
      optionFilterProp: "children",
      options: getCountriesOptions(COUNTRIES, language, defaultOption),
      placeholder: DICTIONARY["select"][language],
      showSearch: true,
      style: { width: "100%" },
    },
    buttonSaveProfileProps: {
      classAdded: `${buttonSearchSepClass}`,
      icon: null,
      icon2: null,
      captureLeft: DICTIONARY["Save"][language],
      captureRight: "",
      action: isChangedForm
        ? { typeEvent: "CLICK_SAVE_PROFILE" }
        : { typeEvent: "" },
      isDisplaying: true,
      tooltipText: "",
      tooltipPosition: "",
      isTooltipVisibleForced: false,
      isUnderlined: false,
    },
  };

  const classCol01 = "_col_1";
  const classCol02 = "_col_1";

  return (
    <div className="ProfileBody">
      <div className={`_row`}>
        <h2 className="_title">{DICTIONARY["Profile"][language]}</h2>
      </div>
      <div className={`_row`}>
        <div className={classCol01}></div>
        <div className={classCol02}>
          <Avatar />
        </div>
      </div>
      <div className={`_row`}>
        <div className={classCol01}>
          {DICTIONARY["Name"][language]}
          {" *"}
        </div>
        <div className={classCol02}>
          <Input {...propsOut.inputUserNameNickProps} />
        </div>
      </div>
      <div className={`_row`}>
        <div className={classCol01}>{DICTIONARY["About_me"][language]}</div>
        <div className={classCol02}>
          <Input {...propsOut.inputUserInfoAboutProps} />
        </div>
      </div>
      <div className="_row">
        <div className={classCol01}>
          {DICTIONARY["Expertise"][language]}
          {" *"}
        </div>
        <div className={classCol02}>
          <SelectAntd {...propsOut.selectSkillsExpertizeProps} />
        </div>
      </div>
      <div className="_row">
        <div className={classCol01}>
          {DICTIONARY["Speaking_languages"][language]}
          {" *"}
        </div>
        <div className={classCol02}>
          <SelectLanguage {...propsOut.selectUserLanguagesProps} />
        </div>
      </div>
      <div className={`_row`}>
        <div className={classCol01}>
          {DICTIONARY["Country"][language]}
          {" *"}
        </div>
        <div className={classCol02}>
          <SelectAntd {...propsOut.selectUserLocaleCountryProps} />
        </div>
      </div>
      <div className={`_row`}>
        <div className={classCol01}>
          {DICTIONARY["Year_of_birth"][language]}
        </div>
        <div className={classCol02}>
          <Input {...propsOut.inputUserBirthYearProps} />
        </div>
      </div>
      <div className={`_row`}>
        <div className={classCol01}>{DICTIONARY["Gender"][language]}</div>
        <div className={classCol02}>
          <SelectAntd {...propsOut.selectUserGenderProps} />
        </div>
      </div>
      <div className={`_row`}>
        <div className={classCol01}>
          {DICTIONARY["Communication_media"][language]}
        </div>
        <div className={classCol02}>
          <SelectAntd {...propsOut.selectUserMediaProps} />
        </div>
      </div>
      <div className="_row">
        <div className={classCol01}></div>
        <div className={`${classCol02} _submitGroup`}>
          <Button {...propsOut.buttonSaveProfileProps} />
        </div>
      </div>
    </div>
  );
};
