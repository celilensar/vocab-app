import {createClient} from '@sanity/client'
import words from './server/schemas/words'

export const client = createClient({
	projectId: 'j5ud2ysm',
	dataset: 'vocabapp',
	useCdn: true,
	apiVersion: '2023-10-18',
  })

