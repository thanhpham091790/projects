import Header from "./components/Header";
import Entry from "./components/Entry";
import entries from "./data";


export default function App() {
    const entryJsx = entries.map((entry, index) =>
        <Entry
            key={index}
            {...entry}
        />);

    return (
        <div className="travel-journey">
            <Header />
            <div className="entries">
                {entryJsx}
            </div>
        </div>
    );
}