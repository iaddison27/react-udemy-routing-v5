import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
        if (ascending) {
            return quoteA.id > quoteB.id ? 1 : -1;
        } else {
            return quoteA.id < quoteB.id ? 1 : -1;
        }
    });
};


const QuoteList = (props) => {
    const history = useHistory();

    // To get access to query parameters
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);

    const isSortingAsc = queryParams.get('sort') === 'asc';
    const sortedQuotes = sortQuotes(props.quotes, isSortingAsc);

    const changeSortHandler = () => {
        if (isSortingAsc) {
            // Alternative syntax to keep things neat when we have several query parameters
            history.push({
                pathname: location.pathname,
                search: 'sort=desc'
            });
        } else {
            history.push(`${location.pathname}?sort=asc`);
        }
    };

  return (
    <Fragment>
        <div className={classes.sorting}>
            <button onClick={changeSortHandler}>Sort {isSortingAsc ? 'Descending' : 'Ascending'}</button>
        </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
