import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'words',
  title: 'Words ',
  type: 'document',
  fields: [
    defineField({
      name: 'word',
      title: 'Word',
      type: 'string',
    }), 
	defineField({
		name: 'description',
		title: 'Description',
		type: 'string',
	  }),
   
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'wordType',
      title: 'Word Type',
      type: 'string',
      options : {
		list: [
		{title: 'B1 words', value: 'B1 Words'},
		{title: 'B2 words', value: 'B2 Words'},
		
	  ],
	  layout : 'radio'}
	  
    }),
    
  ],

})
