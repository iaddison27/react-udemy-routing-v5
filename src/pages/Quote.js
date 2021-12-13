import {Link, Route, useRouteMatch, useParams} from 'react-router-dom';
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const dummyData = [
    {
        id: 1,
        author: 'Ian',
        text: 'Learning React'
    },
    {
        id: 2,
        author: 'Dave',
        text: 'Learning Angular'
    },
    {
        id: 3,
        author: 'Rob',
        text: 'Learning Java'
    },
];

function Quote() {
    // Use routeMatch to prevent having to change parent route on child routes when using nested routes and the parent URL changes
    const routeMatch = useRouteMatch();
    const params = useParams();

    const selected = dummyData.find(quote => params.id == quote.id);

    if (!selected) {
        return <h2>No quote found</h2>
    }

    return (
        <section>
            <HighlightedQuote text={selected.text} author={selected.author} />
            <Route path={routeMatch.path} exact>
                <Link to={`${routeMatch.url}/comments`} className="btn--flat">Load Comments</Link>
            </Route>
            <Route path={`${routeMatch.path}/comments`}>
                <Comments />
            </Route>
        </section>
    );
}

export default Quote;
