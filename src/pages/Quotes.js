import QuoteList from "../components/quotes/QuoteList";

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

function Quotes() {
    return (
        <QuoteList quotes={dummyData}/>
    );
}

export default Quotes;
