import { gql } from 'apollo-boost';

export const GET_DRAWS_DATE = gql`
  query dates($limit: Int, $type: String!) {
    drawDates (limit: $limit, type: $type)
    {
      draws
      {
        date
        time
      }
    }
  }
`;

export const GET_DRAWS_RESULTS = gql`
  query results($date: String, $limit: Int, $type: String) {
    draw (date: $date, limit: $limit, type: $type)
    {
      draws
      {
        numbers
        additionalNumbers
        date
        seo {
          title
        }
        time
      }
    }
  }
`;

export default GET_DRAWS_DATE;
