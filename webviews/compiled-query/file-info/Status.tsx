import { IconCheck, IconExclamationCircle, IconX } from "@tabler/icons-react";
import { useMemo } from "react";

interface CompileStatusProps {
    status: 'ok' | 'assertionError' | 'compileError',
    message?: string
}

const classMap: Record<CompileStatusProps['status'], string> = {
    "ok": "border-green-500 text-green-500 bg-green-50",
    "assertionError": "border-orange-500 bg-orange-500 text-white",
    "compileError": "border-red-500 bg-red-500 text-white"
};

const iconMap: Record<CompileStatusProps["status"], React.FC> = {
    "ok": IconCheck,
    "assertionError": IconExclamationCircle,
    "compileError": IconX
};

export const CompileStatus: React.FC<CompileStatusProps> = (props: CompileStatusProps) => {
    let Icon: React.FC = useMemo(() => iconMap[props.status], [props.status]);

    return <div className={["border-2 p-2 rounded-lg inline-flex items-center gap-2 leading-none", classMap[props.status]].join(" ")}>
        <div className="inline-block">
            <Icon />
        </div>
        {props.message && <div className="inline-block">{props.message}</div>}
    </div>;
};