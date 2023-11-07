import React, { useState, useEffect, useRef, ReactElement } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { Select as SelectAntd } from "antd";
// import 'antd/dist/antd.css'

import { getOptionsUserLocaleCountry } from "../../Shared/getOptionsUserLocaleCountry";
import { getOptionsUserLanguages } from "../../Shared/getOptionsUserLanguages";
import { getOptionsAntdStandard } from "../../Shared/getOptionsAntdStandard";
import { COUNTRIES } from "../../Constants/countries.const";
import { MEDIA } from "../../Constants/media.const";
import { GENDER } from "../../Constants/gender.const";
import { LANGUAGES } from "../../Constants/languages.const";
import { CATEGORIES_TO_EXCHANGE } from "../../Constants/categoriesToExchange.const";
import { DICTIONARY } from "../../Constants/dictionary.const";
import { IAddedProps } from "../../Interfaces/IAddedProps";
import { Button } from "../ComponentsLibrary/Button";
import { IUser } from "../../Interfaces/IUser";

interface IOptionStandard {
  label: string;
  value: string;
}
interface IProfilePlateArgs {
  profile: IUser;
  language: string;
}

export const ProfilePlate: React.FunctionComponent<IProfilePlateArgs> = (
  props: IProfilePlateArgs
): ReactElement => {
  const { language, profile } = props;

  const {
    userAvatar,
    userGender,
    userInfoAbout,
    userLanguages,
    userLocaleCountry,
    userMedia,
    userNameNick,
    userSkillsExpertise,
  } = profile;

  const stubOnAction = () => {};

  const filterOption = (input: any, option: IOptionStandard) =>
    option?.label?.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
    option?.value?.toLowerCase().indexOf(input.toLowerCase()) >= 0;

  const getSelectAntdAddedProps = (input: string[]): any => {
    let res: any = { defaultValue: [] };
    if (input && input.length) {
      res = {
        value: input,
      };
    }
    return res;
  };

  const propsOut = {
    buttonAvatarProps: {
      icon: userAvatar ? null : "FaUserCircle",
      icon2: null,
      imageSrc: userAvatar,
      captureLeft: "",
      captureRight: "",
      classAdded: "Button_Avatar",
      action: {},
      isDisplaying: true,
      tooltipText: "",
      tooltipPosition: "",
      isTooltipVisibleForced: false,
      isUnderlined: false,
    },
    selectCommonPart: {
      allowClear: false,
      componentId: nanoid(),
      filterOption,
      mode: "multiple" as "multiple" | "tags",
      onBlur: stubOnAction,
      onChange: stubOnAction,
      onFocus: stubOnAction,
      onSearch: stubOnAction,
      optionFilterProp: "children",
      placeholder: DICTIONARY["select"][language],
      style: { width: "100%" },
      showSearch: false,
      open: false,
      removeIcon: null,
      bordered: false,
    },
    userSkillsExpertiseProps() {
      return {
        ...this.selectCommonPart,
        ...getSelectAntdAddedProps(userSkillsExpertise),
        options: getOptionsAntdStandard(
          userSkillsExpertise,
          CATEGORIES_TO_EXCHANGE,
          language
        ),
      };
    },
    userLanguagesProps() {
      return {
        ...this.selectCommonPart,
        ...getSelectAntdAddedProps(userLanguages),
        options: getOptionsUserLanguages(userLanguages, LANGUAGES, language),
      };
    },
    userMediaProps() {
      return {
        ...this.selectCommonPart,
        ...getSelectAntdAddedProps(userMedia),
        options: getOptionsAntdStandard(userMedia, MEDIA, language),
      };
    },
    userGenderProps() {
      return {
        ...this.selectCommonPart,
        ...getSelectAntdAddedProps([userGender]),
        options: userGender
          ? getOptionsAntdStandard([userGender], GENDER, language)
          : [],
      };
    },
    userLocaleCountryProps() {
      return {
        ...this.selectCommonPart,
        ...getSelectAntdAddedProps([userLocaleCountry]),
        options: getOptionsUserLocaleCountry(
          userLocaleCountry,
          COUNTRIES,
          language
        ),
      };
    },
  };

  return (
    <div className="ProfilePlate">
      <div className="_col">
        <div className="_button">
          <Button {...propsOut.buttonAvatarProps} />
        </div>
        <div className="_userNameNick">{userNameNick}</div>
      </div>

      <div className="_col">
        <label className="_label">{DICTIONARY["Competencies"][language]}</label>
        <div className="_userSkillsExpertise">
          <SelectAntd {...propsOut.userSkillsExpertiseProps()} />
        </div>
      </div>

      <div className="_col">
        <div className="_colLanguages">
          <label className="_label">{DICTIONARY["Languages"][language]}</label>
          <div className="_userLanguages">
            <SelectAntd {...propsOut.userLanguagesProps()} />
          </div>
        </div>

        <div className="_colMedia">
          <label className="_label">{DICTIONARY["Media"][language]}</label>
          <div className="_userMedia">
            <SelectAntd {...propsOut.userMediaProps()} />
          </div>
        </div>

        <div className="_colGender">
          <label className="_label">{DICTIONARY["Gender"][language]}</label>
          <div className="_userMedia">
            <SelectAntd {...propsOut.userGenderProps()} />
          </div>
        </div>

        <div className="_colCountry">
          <label className="_label">{DICTIONARY["Country"][language]}</label>
          <div className="_userLocaleCountry">
            <SelectAntd {...propsOut.userLocaleCountryProps()} />
          </div>
        </div>
      </div>

      <div className="_col">
        <label className="_label">{DICTIONARY["AboutUser"][language]}</label>
        <div className="_userInfoAbout">{userInfoAbout}</div>
      </div>
    </div>
  );
};
