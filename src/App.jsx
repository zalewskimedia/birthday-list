import { useState } from "react"
import data from "../data"
import List from "./components/List"

function App() {
    const [people, setPeople] = useState(data)

    return (
        <main>
            <div className="constainer mx-auto px-8 py-16 bg-gray-200 min-h-screen">
                <h1 className="text-3xl font-bold text-center mb-8">
                    {people.length} birthdays today
                </h1>
                <List people={people} />
                <div className="text-center mt-8">
                    {people.length > 1 ? (
                        <button
                            type="button"
                            className="bg-teal-600 px-8 py-2 rounded-md text-white hover:bg-teal-700 duration-200 font-medium"
                            onClick={() => setPeople([])}>
                            Clear List
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="bg-teal-600 px-8 py-2 rounded-md text-white hover:bg-teal-700 duration-200 font-medium"
                            onClick={() => setPeople(data)}>
                            Load List
                        </button>
                    )}
                </div>
            </div>
        </main>
    )
}

export default App
