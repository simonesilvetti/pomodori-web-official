import React, { useState } from 'react'
import { useFlexSearch } from 'react-use-flexsearch'
import { Formik, Form, Field } from 'formik'
import { graphql, StaticQuery } from 'gatsby'


const Search = ({ index, store }) => {
    const [query, setQuery] = useState(null)
    const results = useFlexSearch(query, index, store)

    return (
        <div>
            <Formik
                initialValues={{ query: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    setQuery(values.query)
                    setSubmitting(false)
                }}
            >
                <Form>
                    <Field name="query" />
                </Form>
            </Formik>
            <h1>Results</h1>
            <ul>
                {results.map(result => (
                    <li key={result.id}>{result.title}</li>
                ))}
            </ul>
        </div>
    )
}


export default () => (
    <StaticQuery
        query={graphql`
        {
            localSearchPages {
              index
              store
            }
          }
      `}
        render={(data) => <Search index={data.localSearchPages.index} store={data.localSearchPages.store} ></Search>}
    />
)
