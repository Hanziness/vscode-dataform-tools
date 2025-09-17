interface CodePreviewProps {
    source: string
}

export const CodePreview: React.FC<CodePreviewProps> = (props: CodePreviewProps) => {
    return <pre className="p-2 rounded-lg font-mono">
        {props.source}
    </pre>;
};