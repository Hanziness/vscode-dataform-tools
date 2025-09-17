import { IconBug, IconCloudCode, IconEyeCheck, IconSitemap } from "@tabler/icons-react";
import { Button } from "./base/Button";
import { FileInfo } from "./FileInfo";
import { CompilerOptionsInput } from "./CompilerOptions";
import { CostBar } from "./CostBar";

export const App: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 bg-gray-200 p-2">
        <a className="flex flex-row gap-2 text-sm text-primary underline">
          <IconBug size={20} />
          <div>Report an issue</div>
        </a>
        <FileInfo dataPath="test-data.path" filePath="definitions/test.sqlx" />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <CompilerOptionsInput values={{ compilerArgs: "", fullRefresh: false, includeDependants: false, includeDependencies: false }} />
        <div className="flex flex-row gap-1 justify-stretch">
          <Button variant="outline" className="flex flex-row justify-center w-full">
            {/* Dependency graph */}
            <IconSitemap />
          </Button>
          <Button variant="outline" className="flex flex-row justify-center w-full">
            {/* Preview */}
            <IconEyeCheck />
          </Button>
          <Button variant="filled" className="flex flex-row justify-center w-full">
            {/* Run */}
            <IconCloudCode />
          </Button>
        </div>
      </div>
      <CostBar costs={{ mainQuery: 1, assertion: 0.1 }} />
    </div>
  );
};

export default App;