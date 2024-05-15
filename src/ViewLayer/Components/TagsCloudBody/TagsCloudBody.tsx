import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ButtonYrl } from '../../ComponentsLibrary/ButtonYrl/ButtonYrl'
import { PaginationNameEnumType } from '../../../Interfaces/'
import { TagType } from '../../../@types'
import { withPropsYrl, withStoreStateSelectedYrl } from '../../ComponentsLibrary/'
import { handleEvents as handleEventsIn } from '../../../DataLayer/index.handleEvents'
import { getClasses } from '../../../Shared/getClasses'
import { PaginationNavigation } from '../../Components/PaginationNavigation/PaginationNavigation'
import {
  getIconNameExpertise,
  GetIconNameExpertiseParamsType,
} from '../../../Shared/getIconNameExpertise'
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
    storeStateSlice: { tagsCloud },
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

      const propsOut: GetTagsCloudListType = {
        buttonIconExpertiseProps: {
          classAdded: 'Button_iconExpertise',
          icon: getIconNameExpertise({ completed }).iconName,
          iconColor: colorsRandomDarkTheme[index],
          action: {
            typeEvent: '',
            data: {},
          },
          isDisplaying: true,
        },
      }

      return (
        <div
          key={tagID}
          className='_tagCloud'
          style={{
            fontSize: `${range[index]}px`,
            color: colorsRandomDarkTheme[index],
          }}
          onClick={() => handleEvents({}, { type: 'CLICK_ON_TAG', data: { tagCloud, navigate } })}
        >
          <span className='_spanTagName'>{value}</span>
          <span className='_spanCount'>{count}</span>
          <span className='_spanCompleted'>{completed}</span>
          <ButtonYrl {...propsOut.buttonIconExpertiseProps} />
        </div>
      )
    })
  }

  // {`${value}: ${count} ${completed} ${completedPercent}%`}

  const propsOut: TagsCloudBodyPropsOutType = {
    paginationNavigationProps: { paginationName: PaginationNameEnumType['pageTags'] },
  }

  // const customTagRenderer = (tag: any, size: number, color: string) => {
  //   return (
  //     <span key={tag.value} style={{ color }} className={`tag-${size}`}>
  //       {tag.value}
  //     </span>
  //   )
  // }

  // <TagCloud
  //   minSize={16}
  //   maxSize={32}
  //   shuffle={false}
  //   tags={tagsCloudNext}
  //   renderer={customTagRenderer}
  //   onClick={(tag: any) =>
  //     handleEvents({}, { type: 'CLICK_ON_TAG', data: { tag, navigate } })
  //   }
  // />

  return (
    <div className={getClasses('TagsCloudBody', classAdded)}>
      <div className='_tagCloudWrapper'>{getTagsCloudList(tagsCloud)}</div>
      <div className='_paginationNavigationWrapper'>
        <PaginationNavigation {...propsOut.paginationNavigationProps} />
      </div>
    </div>
  )
}

const storeStateSliceProps: string[] = ['tagsCloud']
export const TagsCloudBody: TagsCloudBodyType = withPropsYrl({ handleEvents: handleEventsIn })(
  withStoreStateSelectedYrl(storeStateSliceProps, React.memo(TagsCloudBodyComponent))
)

export type {
  TagsCloudBodyPropsType,
  TagsCloudBodyPropsOutType,
  TagsCloudBodyComponentType,
  TagsCloudBodyType,
}
