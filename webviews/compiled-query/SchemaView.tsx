interface SchemaItem {
    /// Column name
    name: string,
    /// Column type
    type: string,
    /// Column description
    description?: string
}

interface SchemaViewProps {
    /// Name-type pairs
    schema: SchemaItem[]
}

export const SchemaView: React.FC<SchemaViewProps> = (props: SchemaViewProps) => {
    return <table className="w-full">
        <thead>
            <th className="text-left">Type</th>
            <th className="text-left">Name</th>
            <th className="text-left">Description</th>
        </thead>
        <tbody>
        {props.schema.map((item, idx) => (
            <tr>
                <td key={`type-${idx}`} className="font-mono font-bold uppercase">{item.type}</td>
                <td key={`name-${idx}`} className="font-bold">{item.name}</td>
                <td key={`desc-${idx}`} className="">{item.description}</td>
            </tr>
        ))}
        </tbody>
    </table>;
};