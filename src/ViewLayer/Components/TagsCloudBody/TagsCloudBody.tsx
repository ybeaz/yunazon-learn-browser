import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from 'antd'

import { ScreensEnumType } from 'yourails_common'
import { SCREENS_DICT } from 'yourails_common'
import { PaginationNameEnumType } from 'yourails_common'
import { TagType } from 'yourails_common'
import { ButtonYrl, InputGroupYrl, withPropsYrl, withStoreStateSelectedYrl } from 'yourails_common'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { getClasses } from 'yourails_common'
import { PaginationNavigation } from '../../Components/PaginationNavigation/PaginationNavigation'
import { getExpertiseInfo, GetExpertiseInfoResType } from 'yourails_common'
import { getRangeOfNumbers } from 'yourails_common'
import { getColorsRandomDarkTheme } from 'yourails_common'
import {
  TagsCloudBodyComponentPropsType,
  TagsCloudBodyPropsType,
  GetTagsCloudListType,
  TagsCloudBodyPropsOutType,
  TagsCloudBodyComponentType,
  TagsCloudBodyType,
} from './TagsCloudBodyTypes'

/**
 * @description Component to render TagsCloudBody
 * @link https://www.npmjs.com/package/react-tagcloud
 * @import import { TagsCloudBody, TagsCloudBodyPropsType, TagsCloudBodyPropsOutType, TagsCloudBodyType } 
             from '../Components/TagsCloudBody/TagsCloudBody'
 */
const TagsCloudBodyComponent: TagsCloudBodyComponentType = (
  props: TagsCloudBodyComponentPropsType
) => {
  const {
    classAdded,
    headline,
    storeStateSlice: { tagsCloud, pageTags, screenActive },
    handleEvents,
  } = props

  let navigate: any = useNavigate()
  if (screenActive === ScreensEnumType['AcademyMatrix']) navigate = null

  const getTagsCloudList = (tagsCloudIn: TagType[]) => {
    if (!tagsCloudIn.length) return null

    const range = getRangeOfNumbers({
      min: 16,
      max: 36,
      steps: tagsCloudIn.length,
      decimals: 2,
      isReverse: true,
    })
    const colorsRandomDarkTheme = getColorsRandomDarkTheme({
      numberOfColors: tagsCloudIn.length,
    })
    return tagsCloudIn.map((tagCloud: TagType, index: number) => {
      const { tagID, completed, count, value } = tagCloud

      const {
        level,
        name,
        min,
        max,
        iconName,
        left,
        levelNext: {
          level: nextLevel,
          name: nextName,
          min: nextMin,
          max: nextMax,
          iconName: nextIconName,
        },
      }: GetExpertiseInfoResType = getExpertiseInfo({ completed })

      const propsOut: GetTagsCloudListType = {
        buttonTagMdCheckProps: {
          classAdded: 'Button_tagMdCheck',
          icon: 'MdCheck',
          iconColor: colorsRandomDarkTheme[index],
          handleEvents,
          action: {
            typeEvent: '',
            data: {},
          },
          isDisplaying: true,
        },
        buttonTagExpertiseProps: {
          classAdded: 'Button_tagExpertise',
          icon: iconName,
          iconColor: colorsRandomDarkTheme[index],
          handleEvents,
          action: {
            typeEvent: '',
            data: {},
          },
          isDisplaying: true,
        },
      }

      const tagsCloudBodyTooltipContentTagButton = (
        <div className='_tagsCloudBodyTooltipContentTagButton'>
          {name && (
            <div className='_tooltipRow'>
              <b>{name}</b> level of proficiency.
            </div>
          )}
          <div className='_tooltipRow'>
            <b>{completed}</b> of <b>{count}</b> modules are completed.
          </div>
          {completed < count && (
            <>
              <div className='_tooltipRow'>
                <b>{left}</b> modules to the next level.
              </div>
              <div className='_tooltipRow'>
                <b>{nextName}</b> is the next level.
              </div>
            </>
          )}
          {completed >= count && <div className='_tooltipRow'>You finished. Congratulations.</div>}
        </div>
      )

      return (
        <div
          key={tagID}
          className='_tagCloud'
          onClick={() => handleEvents({}, { type: 'CLICK_ON_TAG', data: { tagCloud, navigate } })}
        >
          <Tooltip className='_tooltip' title={tagsCloudBodyTooltipContentTagButton}>
            <div
              className='_tagCloudWrapper'
              style={{
                fontSize: `${range[index]}px`,
                color: colorsRandomDarkTheme[index],
              }}
            >
              {completed >= count && <ButtonYrl {...propsOut.buttonTagMdCheckProps} />}
              <span className='_spanTagName'>{value}</span>
              <span className='_spanCount'>{count}</span>
              <span className='_spanCompleted'>{completed}</span>
              <ButtonYrl {...propsOut.buttonTagExpertiseProps} />
            </div>
          </Tooltip>
        </div>
      )
    })
  }

  const propsOut: TagsCloudBodyPropsOutType = {
    paginationNavigationProps: {
      paginationName: PaginationNameEnumType['pageTags'],
    },
    inputGroupProps: {
      inputProps: {
        classAdded: 'Input_search',
        type: 'text',
        placeholder: SCREENS_DICT[ScreensEnumType['TagsCloud']].placeholder,
        typeEvent: 'ONCHANGE_INPUT_SEARCH',
        typeEventOnEnter: 'CLICK_ON_SEARCH_BUTTON',
        handleEvents,
        dataEventOnEnter: {
          storeFormProp: SCREENS_DICT[ScreensEnumType['TagsCloud']].storeFormProp,
        },
        storeFormProp: SCREENS_DICT[ScreensEnumType['TagsCloud']].storeFormProp,
      },
      buttonSubmitProps: {
        icon: 'MdSearch',
        classAdded: 'Button_MdSearch',
        handleEvents,
        action: {
          typeEvent: 'CLICK_ON_SEARCH_BUTTON',
          data: { storeFormProp: SCREENS_DICT[ScreensEnumType['TagsCloud']].storeFormProp },
        },
      },
    },
  }

  let gridTemplateColumns: string = 'repeat(3, 1fr)'

  if (screenActive === ScreensEnumType['AcademyMatrix']) {
    gridTemplateColumns = 'repeat(1, 1fr)'
  }

  return (
    <div className={getClasses('TagsCloudBody', classAdded)}>
      {false && screenActive === ScreensEnumType['AcademyMatrix'] ? (
        <>
          <div className='_inputGroupYrlWrapper'>
            <InputGroupYrl {...propsOut.inputGroupProps} />
          </div>
          <div className='_headlineWrapper'>
            <h2 className='_h2' onClick={() => handleEvents({}, { type: 'CLICK_ON_ALL_TAGS' })}>
              {headline}
            </h2>
          </div>
        </>
      ) : (
        <h2 className='_h2'>{headline}</h2>
      )}
      <div
        className='_tagsCloudWrapper'
        style={{
          gridTemplateColumns,
        }}
      >
        {getTagsCloudList(tagsCloud)}
      </div>
      {!(pageTags.first === 0 && pageTags.offset > tagsCloud.length) && (
        <div className='_paginationNavigationWrapper'>
          <PaginationNavigation {...propsOut.paginationNavigationProps} />
        </div>
      )}
    </div>
  )
}

const storeStateSliceProps: string[] = ['tagsCloud', 'pageTags', 'screenActive']
export const TagsCloudBody: TagsCloudBodyType = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(storeStateSliceProps, React.memo(TagsCloudBodyComponent))
)

export type {
  TagsCloudBodyPropsType,
  TagsCloudBodyPropsOutType,
  TagsCloudBodyComponentType,
  TagsCloudBodyType,
}
