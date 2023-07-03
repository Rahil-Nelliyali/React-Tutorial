

function ListGroup(){
    const items = [
        'New York',
        'Tokyo',
        'London',
        'Paris'
    ];
    

    items.map(item => <li>{item}</li>)
    if (items.length!=0)
        return (
            <>
                <h1>Heyyy</h1>
                <ul className="list-group">
                {items.map(item => <li key={item} className="list-group-item" onClick={()=>console.log(item)}>{item}</li>)}
                </ul>
            </>
            );
    return (<h1>No items</h1>);
}

export default ListGroup;