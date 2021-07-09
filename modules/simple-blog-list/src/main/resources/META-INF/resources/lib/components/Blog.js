import React from 'react';
import ClayButton from '@clayui/button';
import ClayCard from '@clayui/card';
import TextTruncate from 'react-text-truncate';
import { formatDistance } from 'date-fns'

export default ({ title, author, body, datePublished }) => {
  return (
      <div className="col-md">
        <ClayCard>
          <ClayCard.Body>
            <ClayCard.Description displayType="title" className="big-title">
              {title}
            </ClayCard.Description>
            <ClayCard.Description displayType="subtitle" title={author}>
              {author} - {formatDistance(datePublished, new Date(), { addSuffix: true })}
            </ClayCard.Description>
            <ClayCard.Description truncate={false} displayType="text">
              <TextTruncate
                  line={3}
                  element="span"
                  truncateText="…"
                  text={body}
              />
            </ClayCard.Description>
            <ClayButton>Read</ClayButton>
          </ClayCard.Body>
        </ClayCard>
      </div>
  );
}