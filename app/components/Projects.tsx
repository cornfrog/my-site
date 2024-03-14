export default function Projects() {
    return (
        <>
            <h2 id="projects">Projects:</h2>
            <div>
                <div>
                    <p>Token Tracker</p>
                    <div>
                        <a href="https://token-tracker-538e9f113be3.herokuapp.com/">Demo Site</a>
                        <a href="https://github.com/cornfrog/Token-Tracker">Repo Link</a>
                    </div>
                    <p>
                        A website that allows users to track their favorite cryptocurrencies
                        and retrieve news articles about those currencies. Utilizes websockets
                        to relay real time crypto currency prices from Coinbase API and the got
                        library to retrieve relevant news articles from the NewsAPI while using
                        a PostgreSQL database to store users’ data. Combines both React and
                        custom CSS for the front end user experience.
                    </p>
                </div>
                <div>
                    <p>Better Builds</p>
                    <a href="https://github.com/cornfrog/Token-Tracker">Repo Link</a>
                    <p>
                        A team project that utilized Git workflow, Peer Programming and Pull Requests.
                        As well as, Trello to keep track of implemented as well as already added features.
                        Users can post information about their PC builds and other users can leave comments
                        about it.
                    </p>
                    <div>
                        <p>Contributors:</p>
                        <a href="https://github.com/dericholas">dericholas</a>
                        <a href="https://github.com/MarlonS419">MarlonS419</a>
                        <a href="https://github.com/fuzzyphantasm">fuzzyphantasm</a>
                    </div>
                </div>
            </div>
        </>
    );
}