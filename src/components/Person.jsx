const Person = ({ name, age, image }) => {
    return (
        <article className="mb-8 flex items-center gap-8">
            <img
                src={image}
                alt={name}
                className="w-24 h-24 object-cover rounded-full shadow-md"
            />
            <div>
                <h2 className="text-xl font-bold">{name}</h2>
                <p>age: {age}</p>
            </div>
        </article>
    )
}
export default Person
