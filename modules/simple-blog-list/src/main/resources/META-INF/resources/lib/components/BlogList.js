import React from 'react';
import Blog from './Blog';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import ClayLoadingIndicator from '@clayui/loading-indicator';
import ClayAlert from '@clayui/alert';
import { Liferay } from '../App';

const SITE_ID =
    process.env.NODE_ENV === 'development'
        ? 20124
        : Liferay().ThemeDisplay.getSiteGroupId();

const ALL_BLOGS = gql`
  query {
    blogPostings(siteId: ${SITE_ID}) {
      items {
        id
        headline
        articleBody
        datePublished
        creator {
          name
        }
      }
      page
      totalCount
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(ALL_BLOGS);

  if (loading) return <ClayLoadingIndicator />;
  if (error) {
    return (
        <ClayAlert displayType="danger" title="Error:">
          An error occured while loading data.
          <div className="mt-2">
            <code>{error.message}</code>
          </div>
        </ClayAlert>
    );
  }

  if (data.blogPostings.items.length === 0) {
    return (
        <ClayAlert displayType="info" className="text-center">
          No blog posts.
        </ClayAlert>
    );
  }

  const blogs = data.blogPostings.items.map(
      ({ id, headline, articleBody, creator, datePublished }) => (
          <Blog
              key={id}
              title={headline}
              author={creator.name}
              body={articleBody}
              datePublished={datePublished}
          />
      )
  );

  return <div className="row">{blogs}</div>;
}