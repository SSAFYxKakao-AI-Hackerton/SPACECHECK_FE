import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_layout/solution')({
  component: SolutionPageComponent,
});

function SolutionPageComponent() {
  return (
    <div>
      <h1>Solution Page</h1>
    </div>
  );
}
