// Input

import { IconArrowBigDownLine, IconArrowBigUpLine, IconRefresh, IconTerminal2 } from "@tabler/icons-react";
import { Button } from "./base/Button";

export interface CompilerOptions {
    includeDependencies: boolean
    includeDependants: boolean
    fullRefresh: boolean
    compilerArgs: string
}

interface CompilerOptionsInputProps {
    values: CompilerOptions,
    onUpdate?: (newOptions: CompilerOptions) => void
}


export const CompilerOptionsInput: React.FC<CompilerOptionsInputProps> = (props: CompilerOptionsInputProps) => {
    return <div className="flex flex-row gap-2">
        <div className="flex flex-row gap-2 border-2 border-gray-900/50 rounded-lg p-2 grow focus-within:border-primary group">
            <IconTerminal2 />
            <input value={props.values.compilerArgs} className="font-mono appearance-none w-full focus:outline-none" placeholder="Compiler arguments"></input>
        </div>
        <div className="flex flex-row gap-2">
            {/* TODO Add pop-up tooltip on hover */}
            <Button variant={props.values.includeDependencies ? "filled" : "outline"}><IconArrowBigUpLine /></Button>
            <Button variant={props.values.includeDependants ? "filled" : "outline"}><IconArrowBigDownLine /></Button>
            <Button variant={props.values.fullRefresh ? "filled" : "outline"}><IconRefresh /></Button>
        </div>
    </div>;
};