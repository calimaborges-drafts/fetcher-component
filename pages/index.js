import GithubProjects from "../components/GithubProjects";
import DebugComponent from "../components/DebugComponent";
import ErrorBoundary from "../components/ErrorBoundary";

const user = "calimaborges";
// const user = "dasdasdasdasdasd123asdasd";

function Index() {
  return (
    <div>
      <ErrorBoundary>
        <GithubProjects user={user} />
        <DebugComponent user={user} />
      </ErrorBoundary>
    </div>
  );
}

export default Index;
