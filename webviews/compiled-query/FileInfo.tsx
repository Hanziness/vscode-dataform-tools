import { IconCopy, IconListCheck } from "@tabler/icons-react";
import { Button } from "./base/Button";

interface FileInfoProps {
    dataPath: string
    filePath: string
    lastModified?: Date
    onClick?: (filePath: string, dataPath: string) => void
}

export const FileInfo: React.FC<FileInfoProps> = (props: FileInfoProps) => {
    return <div className="flex flex-row gap-2">
        <div>
            <div className="text-sm opacity-80">Last modified: {props.lastModified?.toLocaleDateString("en") ?? "N/A"}</div>
            <div className="font-mono" onClick={() => { props.onClick?.(props.filePath, props.dataPath); }}>{props.dataPath}</div>
        </div>
        <div className="grow" />
        <Button>
            <IconCopy />
        </Button>
        <Button>
            <IconListCheck />
        </Button>
    </div>;
};