import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Tooltip } from 'antd'

import { DICTIONARY } from '../../../Constants/dictionary.const'
import { ButtonYrl } from '../../ComponentsLibrary/ButtonYrl/ButtonYrl'
import { PaginationNameEnumType } from '../../../Interfaces/'
import { TagType } from '../../../@types'
import { withPropsYrl, withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { getClasses } from '../../../Shared/getClasses'
import { PaginationNavigation } from '../../Components/PaginationNavigation/PaginationNavigation'
import { getExpertiseInfo, GetExpertiseInfoResType } from '../../../Shared/getExpertiseInfo'
import { getRangeOfNumbers, GetRangeOfNumbersParamsType } from '../../../Shared/getRangeOfNumbers'
import {
  getColorsRandomDarkTheme,
  GetColorsRandomDarkThemeParamsType,
} from '../../../Shared/getColorsRandomDarkTheme'
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
    storeStateSlice: { language, tagsCloud },
    handleEvents,
  } = props

  const navigate = useNavigate()

  const getTagsCloudList = (tagsCloudIn: TagType[]) => {
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
          action: {
            typeEvent: '',
            data: {},
          },
          isDisplaying: true,
        },
      }

      const TooltipContent = () => (
        <div className='_tooltipContent'>
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
          <Tooltip className='_tooltip' title={<TooltipContent />}>
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
    paginationNavigationProps: { paginationName: PaginationNameEnumType['pageTags'] },
  }

  return (
    <div className={getClasses('TagsCloudBody', classAdded)}>
      <h2 className='_h2'>{DICTIONARY.Knowledege_tags[language]}</h2>
      <div className='_tagsCloudWrapper'>{getTagsCloudList(tagsCloud)}</div>
      <div className='_paginationNavigationWrapper'>
        <PaginationNavigation {...propsOut.paginationNavigationProps} />
      </div>
    </div>
  )
}

const storeStateSliceProps: string[] = ['language', 'tagsCloud']
export const TagsCloudBody: TagsCloudBodyType = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(storeStateSliceProps, React.memo(TagsCloudBodyComponent))
)

export type {
  TagsCloudBodyPropsType,
  TagsCloudBodyPropsOutType,
  TagsCloudBodyComponentType,
  TagsCloudBodyType,
}
