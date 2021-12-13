import {useHistory} from 'react-router-dom';
import QuoteForm from "../components/quotes/QuoteForm";

function NewQuote() {
    const history = useHistory();

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);
        // Programatically navigate where you can't use <Link /> e.g. after submitting data to a server
        history.push('/quotes');
    }

    return (
        <QuoteForm onAddQuote={addQuoteHandler}/>
    );
}

export default NewQuote;
