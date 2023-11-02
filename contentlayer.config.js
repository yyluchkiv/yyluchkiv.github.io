import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc.url,
  },
  structuredData: {
    type: 'object',
    resolve: (doc) => ({
      headline: doc.title,
      datePublished: doc.publishedAt,
      dateModified: doc.publishedAt,
      description: doc.summary,
      author: {
        '@type': 'Person',
        name: 'Yurii Luchkiv'
      },
    }),
  },
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true
    },
    publishedAt: {
      type: 'string',
      required: true
    },
    summary: {
      type: 'string',
      required: true
    },
    image: {
      type: 'string'
    },
    category: {
      type: 'string',
      required: true
    },
    url: {
      type: 'string',
      required: true
    },
    hide: {
      type: 'boolean'
    },
    locale: {
      type: 'string',
      required: true
    }
  },
  computedFields
}))

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          grid: false
        }
      ]
    ]
  }
})
