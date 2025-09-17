import { useMemo } from "react";

/** Costs of operations in normalized or non-normalized format. If omitted, it is assumed to be 0. */
interface OperationCosts {
    /** All pre-operations (incremental and non-incremental) */
    preOps?: number
    /** Main query */
    mainQuery?: number
    /** All post-operations */
    postOps?: number
    /** Incremental-only pre-operations */
    incrementalPreOps?: number
    /** Assertion */
    assertion?: number

    // TODO Handle incremental vs. non-incremental costs
}

interface CostBarProps {
    /** 
     * The cost of each operation in the query, expressed as a number.
     * At least one non-zero entry must be specified.
     */
    costs: OperationCosts
}

const colors: Record<keyof OperationCosts, string> = {
    assertion: "bg-green-300",
    incrementalPreOps: "bg-blue-800",
    mainQuery: "bg-amber-500",
    postOps: "bg-violet-300",
    preOps: "bg-fuchsia-300"
};

export const CostBar: React.FC<CostBarProps> = (props: CostBarProps) => {
    /* List of operations:
        - Pre-ops
        - Main query
        - Post-ops
        - Incremental pre-ops
        - Assertion
        - Incremental
        - Non-incremental
    */
    
    const normalizedCosts = useMemo(() => {
        const sum = Object.entries(props.costs).reduce<number>((acc, [key, cost]: [string, number]) => cost, 0);
        if (sum === 0) {
            // TODO Report empty cost bar
        }
        return Object.fromEntries(Object.entries(props.costs).map(([key, cost]) => [key, cost / sum]));
    }, [props.costs]);
    
    return <div className="w-full h-10 rounded-xl overflow-hidden flex flex-row">
        {Object.keys(normalizedCosts).length === 0 && <div className="bg-slate-300" style={{ flex: 1 }}>Empty</div>}
        {/* TODO Sort these entires so they are always in the same order */}
        {Object.entries(normalizedCosts).map(([key, cost]: [string, number]) => <div key={key} style={{ flex: cost }} className={colors[key as keyof OperationCosts]} />)}
    </div>;
};