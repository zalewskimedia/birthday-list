import Person from "./Person"

const List = ({ people }) => {
    return (
        <div className="bg-white max-w-md mx-auto shadow-lg px-8 py-4 rounded-md">
            {people.map(person => {
                return <Person key={person.id} {...person} />
            })}
        </div>
    )
}
export default List
