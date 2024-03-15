import { ThumbnailsType } from '../@types/GraphqlTypes'

export type OrganizationType = {
  organizationID: string
  isActive: boolean
  dateCreated: number
  dateUpdated: number
  dateDeleted: number | null
  name: string
  brand: string
  description: string
  language: string
  email: string
  url: string
  tags: string[]
  thumbnails: ThumbnailsType
}

export const organizations: OrganizationType[] = [
  {
    organizationID: '1___oooOOOooo000',
    isActive: true,
    dateCreated: 1640995200000,
    dateUpdated: 1707024205906,
    dateDeleted: null,
    name: 'YouRails Academy',
    brand: 'Teach curious; Learn from inspired',
    description:
      'YouRails Academy offers a service that converts videos, texts and audio into interactive learning content with modules, quizzes and certification helping teaches, businesses and general users to increase engagement through a separation of content and a course itself, fast adding learning features with AI assistance and gamification from the very beginning.',
    language: 'en',
    email: 'contact@yourails.com',
    url: 'https://yourails.com',
    tags: ['online courses', 'education', 'AI assistant'],
    thumbnails: {
      favicon: {
        url: 'https://yourails.com/images/logoYouRails/logos_cap_2024-02-10/favicon.ico',
        width: 16,
        height: 16,
        rel: 'shortcut icon',
        type: 'image/x-icon',
      },
      image16x16: {
        url: 'https://yourails.com/images/logoYouRails/logos_cap_2024-02-10/favicon-16x16.png',
        width: 16,
        height: 16,
        rel: 'icon',
        type: 'image/png',
      },
      image32x32: {
        url: 'https://yourails.com/images/logoYouRails/logos_cap_2024-02-10/favicon-32x32.png',
        width: 36,
        height: 36,
        rel: 'icon',
        type: 'image/png',
      },
      image192x192: {
        url: 'https://yourails.com/images/logoYouRails/logos_cap_2024-02-10/android-chrome-192x192.png',
        width: 192,
        height: 192,
        rel: 'icon',
        type: 'image/png',
      },
      image512x512: {
        url: 'https://yourails.com/images/logoYouRails/logos_cap_2024-02-10/android-chrome-512x512.png',
        width: 512,
        height: 512,
        rel: 'icon',
        type: 'image/png',
      },
    },
  },
]
